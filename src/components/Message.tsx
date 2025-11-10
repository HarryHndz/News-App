import { UserRound,Bot} from "lucide-react";
import type { TSender } from "../data/IChat";

export interface MessageProps {
  message: string
  sender: TSender
}

export const Message = ({ message, sender }: MessageProps)=>{
  return(
    <div className="flex flex-row gap-2 bg-slate-700 p-4 rounded-xl border border-slate-600 w-full">
      <div className="rounded-full bg-indigo-600 p-2 w-10 h-10 flex items-center justify-center">
        {sender === "user" ? 
          <UserRound className="w-6 h-6 text-white" /> : 
          <Bot className="w-6 h-6 text-white" />
        }
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <p className="text-slate-100 font-bold">{sender}</p>
        <p className="text-slate-200 break-words whitespace-pre-wrap max-w-full">{message}</p>
      </div>
    </div>
  )
}
