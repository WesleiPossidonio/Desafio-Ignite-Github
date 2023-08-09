import { styled } from 'styled-components'

export const ContainerCardIssues = styled.section`
  width: 54rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 26rem);
  grid-gap: 2rem;

  margin-top: 3rem;
`

export const ContentCard = styled.div`
  width: 100%;
  height: 16.25rem;

  padding: 2rem;

  background: ${({ theme }) => theme.colors['base-post']};
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors['base-label']};
  }
`

export const HeaderCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  h1 {
    width: 17.6875rem;
  }
`
