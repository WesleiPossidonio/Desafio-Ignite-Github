import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { RegularText, Title } from '../../../../Components/typography'
import { useIssues } from '../../../../Hooks/useIssues'
import { dataCompleteIssuesApi } from '../../../../services/api'
import { ContainerCardIssues, ContentCard, HeaderCard } from './styled'

export const CardIssues = () => {
  const { listIssues } = useIssues()

  const navigate = useNavigate()

  const handleClickPage = useCallback(
    async (data: number) => {
      try {
        const responseDataIssues = await dataCompleteIssuesApi.get(`${data}`)

        // const { body, number, title, created_at, comments, html_url } =
        //   responseDataIssues.data

        const { login } = responseDataIssues.data.user

        const dataIssues = {
          ...responseDataIssues.data,
          login,
        }

        console.log(dataIssues)

        navigate('/Issues', {
          state: dataIssues,
        })

        console.log(dataIssues)
      } catch (error) {
        console.log(error)
      }
    },
    [navigate],
  )

  return (
    <ContainerCardIssues>
      {listIssues.map((list) => {
        return (
          <ContentCard
            key={list.number}
            onClick={() => handleClickPage(list.number)}
          >
            <HeaderCard>
              <Title size="m" weight={700}>
                {list.title}
              </Title>
              <RegularText size="s" weight={400} color="span">
                {formatDistanceToNow(new Date(list.updated_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </RegularText>
            </HeaderCard>
            <RegularText size="m" color="text" weight={400}>
              {list.body}
            </RegularText>
          </ContentCard>
        )
      })}
    </ContainerCardIssues>
  )
}
