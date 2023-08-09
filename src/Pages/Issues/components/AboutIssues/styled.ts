import { styled } from 'styled-components'

export const ContentAboutUser = styled.div`
  width: 54rem;
  height: 13.25rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 2rem 2.5rem;

  border-radius: 10px;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  z-index: 9999;
  margin-top: -5.7rem;
`

export const ContainerText = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const LinkGitHub = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;

  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;

  > svg {
    fill: ${({ theme }) => theme.colors.blue};
    width: 0.75rem;
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
  }
`

export const HeaderText = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`

export const FooterIcons = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;

  margin-top: 1.5rem;
`

export const ContainerIconsText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > svg {
    font-size: 1.3rem;

    color: ${({ theme }) => theme.colors['base-subtitle']};
    fill: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
