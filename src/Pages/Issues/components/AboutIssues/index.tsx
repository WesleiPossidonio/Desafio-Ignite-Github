import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

import { Subtitle, Title } from '../../../../Components/typography'
import { IssuesProps } from '../../index'
import {
  ContainerIconsText,
  ContainerText,
  ContentAboutUser,
  FooterIcons,
  HeaderText,
  LinkGitHub,
} from './styled'

export const HeaderIssues = ({ state }: IssuesProps) => {
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }
  return (
    <ContentAboutUser>
      <ContainerText>
        <HeaderText>
          <LinkGitHub onClick={handleNavigateToHome} target="_blank">
            <FontAwesomeIcon icon={faChevronLeft} />
            Voltar
          </LinkGitHub>
          <LinkGitHub href={state.html_url} target="_blank">
            Ver no github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </LinkGitHub>
        </HeaderText>
        <Title size="s" weight={400}>
          {state.title}
        </Title>

        <FooterIcons>
          <ContainerIconsText>
            <FontAwesomeIcon icon={faGithub} />
            <Subtitle size="s">{state.login}</Subtitle>
          </ContainerIconsText>
          <ContainerIconsText>
            <FontAwesomeIcon icon={faCalendar} />
            <Subtitle size="s">
              {' '}
              {formatDistanceToNow(new Date(state.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </Subtitle>
          </ContainerIconsText>
          <ContainerIconsText>
            <FontAwesomeIcon icon={faComment} />
            <Subtitle size="s">{state.comments} Comentários</Subtitle>
          </ContainerIconsText>
        </FooterIcons>
      </ContainerText>
    </ContentAboutUser>
  )
}
