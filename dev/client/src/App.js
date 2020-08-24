import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import theme from './styles/themes';
import Routes from './routes';
import history from './services/history';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
