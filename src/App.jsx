import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import theme from './styles/theme';
import './styles/global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
