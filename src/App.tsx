import { ThemeProvider } from 'styled-components'
import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container } from './containers/ListaVagas/styles'
import { GlobalStyle } from './globalStyle'
import originalTheme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={originalTheme}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
