import { ContentDescription } from "./ContentDescription"
import { New } from "./News"
import { History } from "lucide-react"
import { useListChats } from "../hooks/useListChats"
import type { SetURLSearchParams } from "react-router"

type THistoryChatProps = {
  sessionId?: string
  setSessionId:SetURLSearchParams
}

export const ListChat = ({sessionId, setSessionId}: THistoryChatProps) => {
  const {listChats, isLoading, error} = useListChats()

  if (isLoading) {
    return(
      <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
        <p className="text-slate-100">Loading...</p>
      </div>
    )
  }
  if (error) {
    return(
      <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
        <p className="text-slate-100">{error}</p>
      </div>
    )
  }
  console.log("sessionId in HistoryChat:", sessionId);
  return (
    <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
      <h1 className="text-slate-100 text-2xl font-bold text-center">History Chat</h1>
      {
        listChats.length === 0 ? (
          <ContentDescription 
            title="No history chat"
            description="You haven't started any chat yet."
            icon={<History className="text-indigo-400" size={32} />}
          />
        ) : (
          listChats.map((chat,i) => (
            <New key={i} chat={chat} handleDetailChat={()=> setSessionId({sessionId: chat.sessionId})} />
          ))
        )
      }
    </div>
  )
}