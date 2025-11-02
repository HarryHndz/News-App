import { createContext } from "react";
import type { ISession } from "../data/ISession";

interface ISessionContext{
  user: ISession | undefined
  loading: boolean
  logout: () => Promise<void>
}

export const SessionContext = createContext<ISessionContext | undefined>(undefined)