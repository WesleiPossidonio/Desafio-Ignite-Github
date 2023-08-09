import { ReactNode, useState, useCallback, useEffect } from 'react'
import { createContext } from 'use-context-selector'

import { searchApi } from '../services/api'

interface IssuesProps {
  body: string
  updated_at: string
  title: string
  number: number
}

interface IssuesContextTypes {
  listIssues: IssuesProps[]
  fechIssuesData: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextTypes)

export const IssuesContextProvider = ({ children }: IssuesProviderProps) => {
  const [listIssues, setListIssues] = useState<IssuesProps[]>([])

  const fechIssuesData = useCallback(async (query?: string) => {
    const repo = 'WesleiPossidonio/Desafio-Ignite-Github'
    const searchText = query
    const queryString = `${searchText} repo:${repo}`

    if (searchText) {
      try {
        const responseDataIssues = await searchApi.get('issues', {
          params: {
            q: queryString,
          },
        })

        const { items } = responseDataIssues.data

        setListIssues(items)
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        const responseDataIssues = await searchApi.get('issues', {
          params: {
            q: `repo:${repo}`,
          },
        })

        const { items } = responseDataIssues.data

        setListIssues(items)
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  useEffect(() => {
    fechIssuesData()
  }, [fechIssuesData])

  return (
    <IssuesContext.Provider value={{ listIssues, fechIssuesData }}>
      {children}
    </IssuesContext.Provider>
  )
}
