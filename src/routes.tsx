import { Navigate, Outlet, Route, Routes } from "react-router";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Landing from "./pages/landing";
import { useSession } from "./hooks/useSession";

export default function RouterRoot() {
  return(
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route element={<RouterProtected />}>
        <Route index element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Route>
    </Routes>
  )
}


const RouterProtected = ()=>{
  const {user,loading} = useSession()
  if (loading) {
    return <div>Cargando...</div>
  }
  if (!user) {
    return <Navigate to="/" />
  }
  return <Outlet />
}