import { UserRound,Bot} from "lucide-react";
import type { TSender } from "../data/IChat";

export interface MessageProps {
  message: string
  sender: TSender
}

export const Message = ({ message, sender }: MessageProps)=>{
  const urlRegex = /(https?:\/\/[^\s]+)/g

  const renderFormatted = (text: string) => {
    const lines = text.split(/\r?\n/)
    const verdictRegex = /^\s*(The news is|the news is)\s+(TRUE|FALSE|AMBIGUOUS|AMBIGUE|UNVERIFIED)\b/i
    const elements: React.ReactNode[] = []
    let i = 0
    while (i < lines.length) {
      const line = lines[i].trimEnd()
      if (!line) {
        elements.push(<div key={`br-${i}`} className="h-2" />)
        i++
        continue
      }

      const vMatch = line.match(verdictRegex)
      if (vMatch) {
        const verdict = (vMatch[2] || '').toUpperCase()
        const colorClass = verdict === 'TRUE' ? 'bg-green-600' : verdict === 'FALSE' ? 'bg-red-600' : 'bg-yellow-600'
        elements.push(
          <div key={`verdict-${i}`} className={`inline-flex items-center gap-3 ${colorClass} text-white px-3 py-2 rounded-md font-semibold`}>{verdict}</div>
        )
        const rest = line.replace(vMatch[0], '').trim()
        if (rest) elements.push(<p key={`verdict-rest-${i}`} className="text-slate-200 mt-2">{rest}</p>)
        i++
        continue
      }

      if (/^[-•]\s+/.test(line)) {
        const items: React.ReactNode[] = []
        while (i < lines.length && /^[-•]\s+/.test(lines[i].trim())) {
          const itemLine = lines[i].trim().replace(/^[-•]\s+/, '')
          const parts = itemLine.split(urlRegex).filter(Boolean)
          items.push(
            <li key={`li-${i}`} className="text-slate-300">
              {parts.map((part, idx) => {
                if (urlRegex.test(part)) {
                  return (
                    <a key={idx} href={part} target="_blank" rel="noreferrer" className="text-blue-300 underline break-words">{part}</a>
                  )
                }
                return <span key={idx}>{part}</span>
              })}
            </li>
          )
          i++
        }
        elements.push(<ul key={`ul-${i}`} className="list-disc list-inside mb-2 pl-4">{items}</ul>)
        continue
      }

      const parts = line.split(urlRegex).filter(Boolean)
      elements.push(
        <p key={`p-${i}`} className="text-slate-200 break-words whitespace-pre-wrap">
          {parts.map((part, idx) => {
            if (urlRegex.test(part)) {
              return (
                <a key={idx} href={part} target="_blank" rel="noreferrer" className="text-blue-300 underline break-words">{part}</a>
              )
            }
            return <span key={idx}>{part}</span>
          })}
        </p>
      )
      i++
    }

    return elements
  }

  return(
    <div className={`flex flex-row gap-2 p-4 rounded-xl border w-full ${sender === 'user' ? 'bg-slate-700 border-slate-600' : 'bg-slate-800 border-slate-700'}`}>
      <div className="rounded-full bg-indigo-600 p-2 w-10 h-10 flex items-center justify-center">
        {sender === "user" ? 
          <UserRound className="w-6 h-6 text-white" /> : 
          <Bot className="w-6 h-6 text-white" />
        }
      </div>
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <p className="text-slate-100 font-bold capitalize">{sender}</p>
        </div>
        <div className="space-y-2">
          {sender === 'bot' ? renderFormatted(message) : <p className="text-slate-200 break-words whitespace-pre-wrap max-w-full">{message}</p>}
        </div>
      </div>
    </div>
  )
}
