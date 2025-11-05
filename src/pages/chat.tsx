import { ChatGeneral } from "../components/ChatGeneral"
import { ListChat } from "../components/ListChat"
import Header from "../components/Header"
import { useState } from "react"
import { useSearchParams } from "react-router"

export default function Chat() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sessionId = searchParams.get("sessionId")
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const classNames = collapsed ? 'h-full py-5' : 'h-5/6'
  
  return (
    <div className="h-screen bg-slate-900 flex flex-col p-5">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <main className={`${classNames} flex flex-row gap-4`}>
        <ListChat 
          handleDetailChat={(params)=> setSearchParams({sessionId: params})} 
        />
        <ChatGeneral 
          sessionId={sessionId ?? undefined} 
          setSessionId={(params) => setSearchParams({sessionId: params})}
        />
      </main>
    </div>
  )

}