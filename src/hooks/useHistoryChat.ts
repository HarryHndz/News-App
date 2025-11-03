import { useEffect, useState } from "react"
import type { IChat } from "../data/IChat"
import { getChatHistory, postChatStart } from "../services/chatService"
import { useSession } from "./useSession"


export const useHistoryChat = ({sessionId}:{sessionId?:string}) => {
  const [history, setHistory] = useState<IChat>({sessionId:'', messages:[]})
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const {user} = useSession()

  const handleNewMessage = async({value,setValue}:{value:string,setValue:(newValue:string)=>void})=>{
    try {
      if(!user)return
      const response = await postChatStart(user.token,value, sessionId)
      setHistory((prevValue)=>({
        ...prevValue,
        messages: [...prevValue.messages, response]
      }))
      setValue("")
    } catch (error:any) {
      setError(`Error sending message: ${error?.message  ?? 'unknown error'}`)
    }
  }

  useEffect(()=>{
    const fetchHistory = async()=>{
      try {
        if(!user)return
        setIsLoading(true)
        const response = await getChatHistory(user.token,sessionId)
        setHistory(response)
      } catch (error:any) {
        console.log(error)
        setError(`Error fetching chat history: ${error?.message  ?? 'unknown error'}`)
      } finally {
        setIsLoading(false)
      }
    }
    fetchHistory()
  },[sessionId,user])
  return {history, isLoading, error, handleNewMessage}
}