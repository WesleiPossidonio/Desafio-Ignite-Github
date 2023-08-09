import styled from 'styled-components'

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-bottom: 35rem;
`
export const ContainerBodyIssues = styled.section`
  width: 54rem;

  padding: 2.5rem 2rem;

  color: ${({ theme }) => theme.colors['base-text']};
`
