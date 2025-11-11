import type { IChatList } from "../data/IChat"
import { ContentDescription } from "./ContentDescription"
import { New } from "./News"
import { History, X } from "lucide-react"
import { useNavigate } from "react-router"

type THistoryChatProps = {
  handleDetailChat: (sessionId: string) => void
  listChats:IChatList[]
  isLoading: boolean
  error: string | null
  mobileOpen?: boolean
  onClose?: () => void
}

export const ListChat = ({handleDetailChat, listChats, isLoading, error, mobileOpen = false, onClose}: THistoryChatProps) => {
  const navigate = useNavigate()
  if (isLoading) {
    return(
      <div className="hidden md:block bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
        <p className="text-slate-100">Loading...</p>
      </div>
    )
  }
  if (error) {
    return(
      <div className="hidden md:block bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
        <p className="text-slate-100">{error}</p>
      </div>
    )
  }

  const desktop = (
    <div className="hidden md:block bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
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

  const mobilePanel = (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden ${mobileOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-slate-800 p-4 z-50 drop-shadow-xl border border-slate-700 transform transition-transform md:hidden ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <h1 className="text-slate-100 text-2xl font-bold">History Chat</h1>
          <button onClick={onClose} className="p-2 rounded-md text-slate-200 hover:bg-slate-700">
            <X className="h-5 w-5" />
          </button>
        </div>

        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md mt-4 mb-6 hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => { navigate('/chat'); if (onClose) onClose(); }}
        >
          New Chat
        </button>

        <div className="overflow-y-auto h-[calc(100%-160px)]">
        {
          listChats.length === 0 ? (
            <ContentDescription 
              description="You haven't started any chat yet."
              icon={<History className="text-indigo-400" size={32} />}
            />
          ) : (
            listChats.map((chat,i) => (
              <New key={i} chat={chat} handleDetailChat={() => { handleDetailChat(chat.sessionId); if (onClose) onClose(); }} />
            ))
          )
        }
        </div>
      </div>
    </>
  )

  return (
    <>
      {desktop}
      {mobilePanel}
    </>
  )
}