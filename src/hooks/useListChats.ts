import { useEffect, useState } from "react"
import { getChatList } from "../services/chatService"
import { useSession } from "./useSession"
import type { IChatList } from "../data/IChat"

export const useListChats = ()=>{
  const [listChats,setListChats] = useState<IChatList[]>([])
  const [isLoading,setIsLoading] = useState<boolean>(true)
  const [error,setError] = useState<string | null>(null)
  const {user} = useSession()
  useEffect(()=>{
    const fetchListChats = async()=>{
      try {
        if (!user) return
        setIsLoading(true)
        setError(null)
        const response = await getChatList(user.token)
        setListChats(response)
      } catch (error) {
        console.log('Error fetching list chats:', error);
        setError(`${error}`)
      }finally{
        setIsLoading(false)
      }
    }
    fetchListChats()
  },[user])

  return {listChats, isLoading, error}
}