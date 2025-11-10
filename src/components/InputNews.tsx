import { Send } from 'lucide-react'

interface InputNewProps {
  valueInput: string
  setValueInput: (value: string) => void
  handleSend: () => Promise<void>
  loadingSend: boolean
  disableSend:boolean
}
export const InputNew = ({ valueInput, setValueInput, handleSend, loadingSend, disableSend }: InputNewProps)=>{
  return(
  <div className="flex flex-row gap-2 bg-slate-700 p-4 rounded-xl hover:ring-2 hover:ring-indigo-500 transition-all duration-300 ease-in-out border border-slate-600">
      <textarea
        value={valueInput}
        onChange={(e) => {
          setValueInput(e.target.value)
          const t = e.target as HTMLTextAreaElement
          t.style.height = 'auto'
          t.style.height = `${t.scrollHeight}px`
        }}
        placeholder="Enter your message or paste a URL"
        rows={2}
        className="w-full bg-transparent outline-none text-slate-100 placeholder-slate-400 field-sizing-fixed resize-none max-h-60 overflow-auto"
      />
      <button 
        className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer" 
        onClick={handleSend}
        disabled={(disableSend) ||(loadingSend  || valueInput.trim() === '')}
      >
        <Send className="w-4 h-4" />
      </button>
    </div>
  )
}