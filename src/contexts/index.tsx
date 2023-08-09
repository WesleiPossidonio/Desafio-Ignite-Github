import { ReactNode } from 'react'

import { IssuesContextProvider } from './IssuesContext'
import { UserContextProvider } from './UserContext'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <IssuesContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </IssuesContextProvider>
  )
}
