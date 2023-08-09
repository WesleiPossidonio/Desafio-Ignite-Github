import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { RegularText, Subtitle, Title } from '../../../../Components/typography'
import { useUser } from '../../../../Hooks/useUser'
import {
  ContainerIconsText,
  ContainerText,
  ContentAboutUser,
  FooterIcons,
  HeaderText,
  Image,
  LinkGitHub,
} from './styled'

export const AboutUser = () => {
  const { userData } = useUser()
  return (
    <ContentAboutUser>
      <Image src={userData?.avatar_url} />
      <ContainerText>
        <HeaderText>
          <Title size="m" weight={700}>
            {userData?.name}
          </Title>

          <LinkGitHub href={userData?.html_url} target="_blank">
            github
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </LinkGitHub>
        </HeaderText>
        <RegularText size="m" weight={400} color="text">
          {userData?.bio}
        </RegularText>

        <FooterIcons>
          <ContainerIconsText>
            <FontAwesomeIcon icon={faGithub} />
            <Subtitle size="s">{userData?.login}</Subtitle>
          </ContainerIconsText>
          <ContainerIconsText>
            <FontAwesomeIcon icon={faBuilding} />
            <Subtitle size="s">{userData?.company}</Subtitle>
          </ContainerIconsText>
          <ContainerIconsText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 640 512"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
            <Subtitle size="s">{userData?.followers} Seguidores</Subtitle>
          </ContainerIconsText>
        </FooterIcons>
      </ContainerText>
    </ContentAboutUser>
  )
}
