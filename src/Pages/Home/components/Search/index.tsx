import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'

import { RegularText, Subtitle } from '../../../../Components/typography'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useIssues } from '../../../../Hooks/useIssues'
import { ContainerSearch, Form, HeaderInput, Input } from './styled'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export const Search = () => {
  const { listIssues } = useIssues()

  const fetchIssuesData = useContextSelector(IssuesContext, (context) => {
    return context.fechIssuesData
  })

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchIssues = async (data: SearchFormInputs) => {
    await fetchIssuesData(data.query)
    reset()
    console.log(data.query)
  }

  return (
    <ContainerSearch>
      <HeaderInput>
        <Subtitle size="s" weight={700}>
          Publicações
        </Subtitle>
        <RegularText color="span" size="m" weight={400}>
          {listIssues.length}
          {listIssues.length === 1 ? 'Publicação' : ' Publicações'}
        </RegularText>
      </HeaderInput>
      <Form onSubmit={handleSubmit(handleSearchIssues)}>
        <Input
          placeholder="Buscar conteúdo"
          type="text"
          {...register('query')}
        />
      </Form>
    </ContainerSearch>
  )
}
