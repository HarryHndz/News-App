import { InputNew } from "./InputNews"
import { ContentDescription } from "./ContentDescription"
import { Message } from "./Message"
import { useState } from "react"
import { Sparkles } from "lucide-react"
import { useHistoryChat } from "../hooks/useHistoryChat"

type TChatGeneralProps = {
  sessionId?: string
  setSessionId: (params: string) => void
}

export const ChatGeneral = ({sessionId, setSessionId}: TChatGeneralProps)=>{
  const [valueInput,setValueInput] = useState<string>("")
  const {history, isLoading, error,handleNewMessage,isLoadingSend} = useHistoryChat({sessionId, setSessionId})

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
    <div className=" flex flex-col gap-4 bg-slate-800 p-4 rounded-lg w-4/5 overflow-y-auto relative drop-shadow-xl/50 border border-slate-700">
      <h1 className="text-slate-100 text-2xl font-bold text-center">Chat General</h1>
      {
        history.messages.length === 0 ? (
          <ContentDescription 
            title="Welcome!"
            description="Send the URL of any news and I will help you verify if it is reliable or not."
            description2={
              <div className="bg-slate-700 rounded-lg p-4 text-left text-sm border border-slate-600">
                <p className="font-semibold mb-2 text-slate-200">Examples:</p>
                <ul className="space-y-1 text-slate-300">
                  <li>• https://bbc.com/news/article</li>
                  <li>• https://reuters.com/world/story</li>
                  <li>• https://fakenews.com/clickbait</li>
                </ul>
              </div>
            }
            icon={<Sparkles className="text-indigo-400" size={32} />}
          />
        ) : (
          history.messages.map((m, index) => (
            <>
              <Message key={index} sender={m.sender} message={m.message} />
              {
                isLoadingSend && index === history.messages.length -1 && m.sender === 'user' && (
                  <Message key={"loading"} sender={"bot"} message={"Typing..."} />
                )
              }
            </>
           
          ))
        )
      }
      <InputNew 
        valueInput={valueInput} 
        setValueInput={setValueInput} 
        handleSend={() => handleNewMessage({value: valueInput, setValue: setValueInput})}
        loadingSend={isLoadingSend}
        disableSend={history.messages.length === 2}
      />
    </div>
  )
}