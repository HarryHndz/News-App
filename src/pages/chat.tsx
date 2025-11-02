import { ChatGeneral } from "../components/ChatGeneral"
import { HistoryChat } from "../components/HistoryChat"

export default function Chat() {
  return (
    <main className='flex flex-row gap-4 p-10 bg-slate-900 h-screen'>
      <HistoryChat />
      <ChatGeneral />
    </main>
  )


}