import { useContext } from "react"
import { SessionContext } from "../context/sessionContext"


export const useSession = ()=>{
  const sessionContext = useContext(SessionContext)
  if (!sessionContext) {
    throw new Error("useSession must be used within a SessionProvider")
  }
  return sessionContext
}