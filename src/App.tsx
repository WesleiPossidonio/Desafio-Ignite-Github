import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AppProvider } from './contexts'
import { Router } from './Routes/routes'
import { GlobalStyle } from './styles/globalStyle'
import { defaultThemes } from './styles/Theme/default'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultThemes}>
        <AppProvider>
          <GlobalStyle />
          <Router />
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
