import { createContext } from "react";
import type { ISession } from "../data/ISession";

interface ISessionContext{
  user: ISession | undefined
  logout: () => Promise<void>
}

export const SessionContext = createContext<ISessionContext | undefined>(undefined)