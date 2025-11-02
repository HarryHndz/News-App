import { useEffect, useState,type ReactNode } from "react"
import type { ISession } from "../data/ISession"
import { SessionContext } from "./sessionContext"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebaseConfig'

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session,setSession] = useState<ISession | undefined>(undefined)

  const logoutSession = async () => {
    try {
      await auth.signOut()
      setSession(undefined)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          setSession({
            token:idToken,
            userId: user.uid,
            email: user.email ?? ''
          })
        })
      } else {
        setSession(undefined)
      }
    })
  },[])

  return(
    <SessionContext.Provider value={{
      user:session,
      logout:logoutSession
    }}>
      {children}
    </SessionContext.Provider>
  )
}