import type { IChat, IChatList, IChatMessage } from "../data/IChat"

const URL_SERVER = import.meta.env.VITE_URL_SERVER || 'http://localhost:3000'
const postChatStart = async(token:string,message:string,sessionId?:string):Promise<IChatMessage> =>{
  const response = await fetch(`${URL_SERVER}/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ prompt:message, session_id:sessionId})
  })
  if (!response.ok) {
    throw new Error('Error starting chat session')
  }
  const data = await response.json()
  return {
    message: data.prompt,
    createdAt: data.timestamp,
    sender: 'bot'
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
  const chatLists: IChatList[] = data.sessions.map((session:any) => ({
    sessionId: session.session_id,
    title: session.title,
    createdAt: session.created_at
  }))
  return chatLists
}

const getChatHistory = async(token:string, sessionId?:string):Promise<IChat> =>{
  const response = await fetch(`${URL_SERVER}/sessions/${sessionId}/history`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  if (!response.ok) {
    throw new Error('Error fetching chat history')
  }
  const data = await response.json()
  const messages = data.messages.map((chat:any) => ({
    message: chat.prompt,
    sender: chat.author === 'user' ? 'user' : 'bot',
    createdAt: chat.timestamp
  }))
  return {
    sessionId: data.session_id,
    messages: messages
  }
}
export { postChatStart, getChatList, getChatHistory }