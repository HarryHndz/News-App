
export type TSender = "user" | "bot";

export interface IChatMessage {
  message:string,
  sender:TSender,
  createdAt?: string
  sessionId: string
}

export interface IChat{
  sessionId:string
  messages:IChatMessage[]
}

export interface IChatList{
  sessionId: string,
  title: string,
  createdAt: string
}
