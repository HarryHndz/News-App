
export const InputNew = ()=>{
  return(
    <div className="flex flex-row gap-2 bg-gray-800 p-4 rounded-lg">
      <input type="text" placeholder="Enter your message" className="w-full" />
      <button className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
    </div>
  )
}