import { useLocation } from 'react-router-dom'

import { HeaderIssues } from './components/AboutIssues'
import { ContainerBodyIssues, ContainerHome } from './styled'

interface ListIssuesProps {
  body: string
  number: number
  title: string
  created_at: string
  comments: number
  html_url: string
  login: string
}

export interface IssuesProps {
  state: ListIssuesProps
}

export const AboutIssues = () => {
  const { state } = useLocation() as unknown as IssuesProps

  return (
    <ContainerHome>
      <HeaderIssues state={state} />
      <ContainerBodyIssues>{state.body}</ContainerBodyIssues>
    </ContainerHome>
  )
}
