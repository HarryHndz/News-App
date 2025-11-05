import type { IChat, IChatList, IChatMessage } from "../data/IChat"

const URL_SERVER = import.meta.env.VITE_URL_SERVER || 'http://localhost:3000'
const postChatStart = async(token:string,message:string,sessionId?:string):Promise<IChatMessage> =>{
  // const cleanedSessionId = sessionId ? sessionId.replace(/\s+/g, '') : undefined
  console.log('Starting chat session with message:',sessionId?.length)
  // create an AbortController but DO NOT set a timeout - request will not be auto-aborted
  const controller = new AbortController()
  const response = await fetch(`${URL_SERVER}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    signal: controller.signal,
    body: JSON.stringify({ prompt:message, session_id:sessionId})
  })
  if (!response.ok) {
    throw new Error('Error starting chat session')
  }
  const data = await response.json()
  return {
    message: data.response,
    createdAt: data.timestamp,
    sender: 'bot',
    sessionId: data.session_id
  }
}

const getChatList = async(token:string):Promise<IChatList[]> =>{
  const response = await fetch(`${URL_SERVER}/sessions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  if (!response.ok) {
    throw new Error('Error fetching chat list')
  }
  const data = await response.json()
  console.log('Fetched chat sessions:', data.length)
  const chatLists: IChatList[] = data.map((session:any) => ({
    sessionId: session.session_id,
    title: session.title,
    createdAt: session.created_at
  }))
  return chatLists
}

const getChatHistory = async(token:string, sessionId?:string):Promise<IChat> =>{
  // const cleanedSessionId = sessionId ? sessionId.replace(/\s+/g, '') : ''
  // const encodedSessionId = encodeURIComponent(cleanedSessionId)
  console.log('Fetching chat history for sessionId:', sessionId?.length);
  // create an AbortController but DO NOT set a timeout - request will not be auto-aborted
  const controller = new AbortController()
  const response = await fetch(`${URL_SERVER}/sessions/${sessionId}/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    signal: controller.signal
  })
  
  if (!response.ok) {
    throw new Error('Error fetching chat history')
  }
  const data = await response.json()
  const messages = data.messages.map((chat:any) => ({
    message: chat.text,
    sender: chat.author === 'user' ? 'user' : 'bot',
    createdAt: chat.timestamp
  }))
  return {
    sessionId: data.session_id,
    messages: messages
  }
}
export { postChatStart, getChatList, getChatHistory }