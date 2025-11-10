import { InputNew } from "./InputNews"
import { ContentDescription } from "./ContentDescription"
import { Message } from "./Message"
import { useState } from "react"
import { Sparkles, Newspaper } from "lucide-react"
import { useHistoryChat } from "../hooks/useHistoryChat"
import type { IChatList } from "../data/IChat"

type TChatGeneralProps = {
  sessionId?: string
  setSessionId: (params: string) => void
  setNewChatHistory: (data:IChatList) => void
}

export const ChatGeneral = ({sessionId, setSessionId,setNewChatHistory}: TChatGeneralProps)=>{
  const [valueInput,setValueInput] = useState<string>("")
  const {history, isLoading, error,handleNewMessage,isLoadingSend} = useHistoryChat({sessionId, setSessionId,setNewChatHistory})

  if (isLoading) {
    return (
    <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-lg w-4/5 overflow-y-auto relative drop-shadow-xl/50 border border-slate-700">
        <p className="text-slate-100">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-lg w-4/5 overflow-y-auto relative drop-shadow-xl/50 border border-slate-700">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 bg-slate-800 p-4 rounded-lg w-4/5 h-full relative drop-shadow-xl/50 border border-slate-700">
      <h1 className="text-slate-100 text-2xl font-bold text-center">Chat General</h1>

      {/* Scrollable messages area */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">
        {
          history.messages.length === 0 ? (
            <ContentDescription 
              description="This assistant allows you to quickly and reliably verify whether a news story is true or false. It analyzes content using official sources and fact-checking."
              description2={
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="bg-slate-700 rounded-lg p-5 text-left text-sm border border-slate-600">
                    <p className="font-semibold mb-3 text-slate-200">How to use</p>
                    <ol className="list-decimal list-inside space-y-2 text-slate-300">
                      <li>
                        Paste a news article URL (e.g. <span className="text-blue-300">https://bbc.com/...</span>) or paste the article text directly.
                      </li>
                      <li>
                        Optionally ask a focused question: <span className="italic">"Is this claim supported by reliable sources?"</span>
                      </li>
                      <li>
                        The assistant will analyze sources, highlight questionable claims, and provide a concise Trust Score with links.
                      </li>
                    </ol>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gradient-to-br from-indigo-700 to-slate-800 rounded-2xl p-6 border border-slate-700 flex flex-col items-center gap-3">
                      <div className="bg-indigo-600 rounded-lg w-20 h-20 flex items-center justify-center text-white shadow-md">
                        <Newspaper className="w-10 h-10" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-slate-300 font-medium">Paste a URL or article text</p>
                        <p className="text-xs text-slate-400">We&apos;ll extract sources and key claims</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
              icon={<Sparkles className="text-indigo-400" size={32} />}
            />
          ) : (
            history.messages.map((m, index) => (
              <div key={index} className="gap-5">
                <Message sender={m.sender} message={m.message} />
                {
                  isLoadingSend && index === history.messages.length -1 && m.sender === 'user' && (
                    <Message key={"loading"} sender={"bot"} message={"Typing..."} />
                  )
                }
              </div>
            ))
          )
        }
      </div>
      <div>
        <InputNew 
          valueInput={valueInput} 
          setValueInput={setValueInput} 
          handleSend={() => handleNewMessage({value: valueInput, setValue: setValueInput})}
          loadingSend={isLoadingSend}
          disableSend={history.messages.length === 2}
        />
      </div>
    </div>
  )
}