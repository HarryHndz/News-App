import type { IChatList } from "../data/IChat"
import { ContentDescription } from "./ContentDescription"
import { New } from "./News"
import { History } from "lucide-react"
import { useNavigate } from "react-router"

type THistoryChatProps = {
  handleDetailChat: (sessionId: string) => void
  listChats:IChatList[]
  isLoading: boolean
  error: string | null
}

export const ListChat = ({handleDetailChat, listChats, isLoading, error}: THistoryChatProps) => {
  const navigate = useNavigate()
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
  
  return (
    <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
      <h1 className="text-slate-100 text-2xl font-bold text-center">History Chat</h1>
      <button
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md mt-4 mb-6 hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => navigate('/chat')}
      >
        New Chat
      </button>
      {
        listChats.length === 0 ? (
          <ContentDescription 
            title="No history chat"
            description="You haven't started any chat yet."
            icon={<History className="text-indigo-400" size={32} />}
          />
        ) : (
          listChats.map((chat,i) => (
            <New key={i} chat={chat} handleDetailChat={() => handleDetailChat(chat.sessionId)} />
          ))
        )
      }
    </div>
  )
}