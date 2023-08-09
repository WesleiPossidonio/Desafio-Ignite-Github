import { AboutUser } from './components/AboutUser'
import { CardIssues } from './components/CardIssues'
import { Search } from './components/Search'
import { ContainerHome } from './styled'

export const Home = () => {
  return (
    <ContainerHome>
      <AboutUser />
      <Search />
      <CardIssues />
    </ContainerHome>
  )
}
