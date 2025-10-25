import { ChatGeneral } from "./components/ChatGeneral"
import { HistoryChat } from "./components/HistoryChat"


function App() {
  return (
    <main className='flex flex-row gap-4 p-10 bg-slate-900 h-screen'>
      <HistoryChat />
      <ChatGeneral />
    </main>
  )
}

export default App
