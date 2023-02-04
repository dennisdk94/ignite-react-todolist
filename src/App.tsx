import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

import { Header } from './components/Header';
import { ToDoList } from './components/ToDoList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <ToDoList />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
