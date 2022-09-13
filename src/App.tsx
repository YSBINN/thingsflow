import Router from 'router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/Global';
import theme from 'styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
};

export default App;
