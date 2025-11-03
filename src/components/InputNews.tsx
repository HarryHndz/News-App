import { Send } from 'lucide-react'

interface InputNewProps {
  valueInput: string
  setValueInput: (value: string) => void
  handleSend: () => Promise<void>
}
export const InputNew = ({ valueInput, setValueInput, handleSend }: InputNewProps)=>{
  return(
    <div className="flex flex-row gap-2 bg-slate-700 p-4 rounded-xl sticky bottom-0 left-0 right-0 hover:ring-2 hover:ring-indigo-500 transition-all duration-300 ease-in-out border border-slate-600">
      <input 
        type="text" 
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder="Enter your message" 
        className="w-full bg-transparent outline-none text-slate-100 placeholder-slate-400 field-sizing-fixed" />
      <button className="bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-all duration-300 ease-in-out cursor-pointer" onClick={handleSend}>
        <Send className="w-4 h-4" />
      </button>
    </div>
  )
}