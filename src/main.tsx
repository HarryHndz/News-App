import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import RouterRoot from './routes.tsx'
import { SessionProvider } from './context/sessionProvider.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <SessionProvider>
      <RouterRoot />
    </SessionProvider>
  </BrowserRouter>,
)
