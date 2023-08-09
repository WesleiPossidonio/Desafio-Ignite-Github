import { styled } from 'styled-components'

export const ContainerSearch = styled.div`
  width: 54rem;
`

export const HeaderInput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 4.5rem;
  margin-bottom: 0.75rem;
`

export const Form = styled.form`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0.75rem 1rem;
  gap: 0.5rem;

  border-radius: 6px;
  border: 1px solid var(--base-border, #1c2f41);
  background: ${({ theme }) => theme.colors['base-input']};

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  color: ${({ theme }) => theme.colors['base-label']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.blue};
    outline: none;
  }
`
