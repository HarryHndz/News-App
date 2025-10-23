import { InputNew } from "./InputNew"
import { ContentDescription } from "./ContentDescription"

export const ChatGeneral = ()=>{
  return (
    <div className="bg-gray-800 p-4 rounded-lg w-4/5 h-full">
      <h1>Chat General</h1>
      <ContentDescription />
      <InputNew />
    </div>
  )
}