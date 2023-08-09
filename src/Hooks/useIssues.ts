import { useContext } from 'use-context-selector'

import { IssuesContext } from '../contexts/IssuesContext'

export const useIssues = () => {
  const context = useContext(IssuesContext)
  return context
}
