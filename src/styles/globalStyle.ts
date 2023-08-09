import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Nunito', sans-serif;
    font-style: normal;
}


html {
    background: ${({ theme }) => theme.colors['base-background']};
}
`
