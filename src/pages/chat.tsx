import { ChatGeneral } from "../components/ChatGeneral"
import { ListChat } from "../components/ListChat"
import Header from "../components/Header"
import { useState } from "react"
import { useSearchParams } from "react-router"
import { useListChats } from "../hooks/useListChats"
import type { IChatList } from "../data/IChat"

export default function Chat() {
  const [searchParams, setSearchParams] = useSearchParams()
  const {listChats, isLoading, error,setListChats} = useListChats()
  const sessionId = searchParams.get("sessionId")
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const classNames = collapsed ? 'h-full py-5' : 'h-5/6'
  return (
    <div className="h-screen bg-slate-900 flex flex-col p-5">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`${classNames} flex flex-row gap-4`}>
        <ListChat 
          handleDetailChat={(params)=> setSearchParams({sessionId: params})
          }
          listChats={listChats}
          isLoading={isLoading}
          error={error}
        />
        <ChatGeneral 
          sessionId={sessionId ?? undefined} 
          setSessionId={(params) => setSearchParams({sessionId: params})}
          setNewChatHistory={(data:IChatList)=> setListChats((prev)=> [...prev,data])}
        />
      </main>
    </div>
  )

}