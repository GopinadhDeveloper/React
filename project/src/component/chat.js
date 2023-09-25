import React, { createContext } from 'react'
import Message1 from './Message1';
export const MessageContext=createContext();
export default function chat() {
  return (
    <div >
        <MessageContext.Provider value={{username:"kumar"}}>
            <Message1/>
        </MessageContext.Provider>
            </div>
  )
}
