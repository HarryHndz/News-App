import { useState } from "react"
import type { MessageProps } from "./Message"
import { ContentDescription } from "./ContentDescription"
import { New } from "./News"
import { History } from "lucide-react"

export const HistoryChat = () => {
  const [historyChat,setHistoryChat] = useState<MessageProps[]>([
    {sender: 'assistant', message: 'Hello, how are you?'},
    {sender: 'user', message: 'I am fine, thank you.'},
    {sender: 'assistant', message: 'What is your name?'},
    {sender: 'user', message: 'My name is John.'},
    {sender: 'assistant', message: 'What is your age?'},
    {sender: 'user', message: 'I am 20 years old.'},
    {sender: 'assistant', message: 'What is your city?'},
    {sender: 'user', message: 'I live in New York.'},
  ])
  return (
    <div className="bg-slate-800 p-4 rounded-lg w-1/5 h-full drop-shadow-xl/50 border border-slate-700 overflow-y-auto">
      <h1 className="text-slate-100 text-2xl font-bold text-center">History Chat</h1>
      {
        historyChat.length === 0 ? (
          <ContentDescription 
            title="No history chat"
            description="You haven't started any chat yet."
            icon={<History className="text-indigo-400" size={32} />}
          />
        ) : (
          historyChat.map(()=>(
            <New />
          ))
        )
      }
    </div>
  )
}