import { Route, Routes } from "react-router";
import Login from "./pages/login";
import Chat from "./pages/chat";
import Landing from "./pages/landing";

export default function RouterRoot() {
  return(
    <Routes>
      <Route index element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  )
}
