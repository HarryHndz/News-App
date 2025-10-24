import { Send } from 'lucide-react'
export const InputNew = ()=>{
  return(
    <div className="flex flex-row gap-2 bg-gray-400 p-4 rounded-xl">
      <input 
        type="text" 
        placeholder="Enter your message" 
        className="w-full bg-transparent outline-none text-white" />
      <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
        <Send className="w-4 h-4" />
      </button>
    </div>
  )
}