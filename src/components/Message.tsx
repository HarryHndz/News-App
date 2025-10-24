interface MessageProps {
  message: string;
  sender: string;
}

export const Message = ({ message, sender }: MessageProps)=>{
  return(
    <div className="flex flex-col gap-2 bg-gray-400 p-4 rounded-xl">
      <p className="text-white font-bold">{sender}</p>
      <p className="text-white">{message}</p>
    </div>
  )
}
