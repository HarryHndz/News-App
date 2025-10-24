import { InputNew } from "./InputNew"
import { ContentDescription } from "./ContentDescription"
import { Message } from "./Message"


const messages = [
  // {
  //   sender: "User",
  //   message: "Hello, how are you?"
  // },
  // {
  //   sender: "AI",
  //   message: "I'm good, thank you!"
  // }
]
export const ChatGeneral = ()=>{
  return (
    <div className=" flex flex-col gap-4 bg-gray-600 p-4 rounded-lg w-4/5">
      <h1 className="text-white text-2xl font-bold">Chat General</h1>
      {
        messages.length === 0 ? (
          <ContentDescription />
        ) : (
          messages.map((message, index) => (
            <Message key={index} sender={message.sender} message={message.message} />
          ))
        )
      }
      <InputNew />
    </div>
  )
}