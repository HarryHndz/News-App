import { useState } from "react"
import type { MessageProps } from "./Message"
import { ContentDescription } from "./ContentDescription"
import { History } from "lucide-react"

export const HistoryChat = () => {
  const [historyChat,setHistoryChat] = useState<MessageProps[]>([])
  return (
    <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700">
      <h1 className="text-slate-100 text-2xl font-bold text-center">History Chat</h1>
      {
        historyChat.length === 0 ? (
          <ContentDescription 
            title="No history chat"
            description="You haven't started any chat yet."
            icon={<History className="text-indigo-400" size={32} />}
          />
        ) : (
          <p>History chat</p>
        )
      }
    </div>
  )
}