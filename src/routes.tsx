import { Navigate, Route, Routes, Outlet } from "react-router";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Landing from "./pages/landing";
import { useSession } from "./hooks/useSession";



export default function RouterRoot() {
  return(
    <Routes>
      <Route path="/" element={<HomeOrRedirect />} />
      <Route path="/auth" element={<Login />} />
      <Route element={<RouterProtected />}>
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}

const HomeOrRedirect = () => {
  const { user, loading } = useSession()
  if (loading) return <div>Cargando...</div>
  if (user) return <Navigate to="/chat" replace />
  return <Landing />
}

const RouterProtected = () => {
  const { user, loading } = useSession()
  if (loading) {
    return <div>Cargando acaaaa...</div>
  }
  if (!user) {
    return <Navigate to="/auth" replace />
  }
  return <Outlet />
}