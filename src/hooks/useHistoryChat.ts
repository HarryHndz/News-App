import { useEffect, useState, useRef } from "react"
import type { IChat } from "../data/IChat"
import { getChatHistory, postChatStart } from "../services/chatService"
import { useSession } from "./useSession"


type TUseHistoryChatProps = {
  sessionId?: string
  setSessionId: (params: string) => void
}

export const useHistoryChat = ({sessionId,setSessionId}:TUseHistoryChatProps) => {
  const [history, setHistory] = useState<IChat>({sessionId:'', messages:[]})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingSend,setIsLoadingSend] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const {user} = useSession()
  const lastFetchedRef = useRef<string | null>(null)

  const handleNewMessage = async({value,setValue}:{value:string,setValue:(newValue:string)=>void})=>{
    try {
      if(!user)return setIsLoadingSend(false)
      setIsLoadingSend(true)
      setHistory((prevValue)=>({
        ...prevValue,
        messages: [...prevValue.messages, {
          sender: 'user', 
          message: value,
          createdAt:new Date().toISOString(), 
          sessionId: sessionId ?? ''
        }]
      }))
      setValue("")
      const response = await postChatStart(user.token,value,sessionId)
      if(!sessionId){
        setSessionId(response.sessionId)
        setHistory((prevValue)=>({
          sessionId: response.sessionId,
          messages: [...prevValue.messages, response]
        }))
        lastFetchedRef.current = response.sessionId
      }else{
        setHistory((prevValue)=>({
          ...prevValue,
          messages: [...prevValue.messages, response]
        }))
        lastFetchedRef.current = sessionId
      }
    } catch (error:any) {
      setError(`Error sending message: ${error?.message  ?? 'unknown error'}`)
    }finally{
      setIsLoadingSend(false)
    }
  }

  useEffect(()=>{
    const fetchHistory = async()=>{
      try {
        if (!sessionId) {
          setHistory({sessionId:'', messages:[]})
          setIsLoading(false)
          return
        }
        if(!user){
          setIsLoading(false)
          return
        }
        if (lastFetchedRef.current && lastFetchedRef.current === sessionId) {
          console.log('Skipping fetch, already have history for sessionId:', sessionId);
          setIsLoading(false)
          return
        }
        setIsLoading(true)
        setError(null)
        const response = await getChatHistory(user.token,sessionId)
        setHistory(response)
        lastFetchedRef.current = response.sessionId
      } catch (error:any) {
        console.log(error)
        setError(`Error fetching chat history: ${error?.message  ?? 'unknown error'}`)
      } finally {
        setIsLoading(false)
      }
    }
    console.log('useHistoryChat useEffect triggered with sessionId');
    fetchHistory()
  },[sessionId,user])
  return {history, isLoading, error, handleNewMessage,isLoadingSend}
  
}