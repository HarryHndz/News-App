import { ChatGeneral } from "./components/ChatGeneral"
import { HistoryChat } from "./components/HistoryChat"


function App() {
  return (
    <main className='flex flex-row gap-4 p-10 h-screen'>
      <HistoryChat />
      <ChatGeneral />
    </main>
  )
}

export default App
