import {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useCallback,
} from 'react'

import { apiUserGithub } from '../services/api'

interface UserProps {
  name: string
  bio: string
  avatar_url: string
  company: string
  followers: string
  login: string
  html_url: string
}

interface UserContextTypes {
  userData?: UserProps
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextTypes)

export const UserContextProvider = ({ children }: UserProviderProps) => {
  const [userData, setUserData] = useState<UserProps>()

  const fechResponseDataUser = useCallback(async () => {
    const responseData = await apiUserGithub.get('WesleiPossidonio')
    setUserData(responseData.data)
  }, [])

  useEffect(() => {
    fechResponseDataUser()
  }, [fechResponseDataUser])

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  )
}
