import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial',
    h1: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
      '@media (max-width:600px)': {
        fontSize: '24px',
      },
      '@media (min-width:600px) and (max-width:1200px)': {
        fontSize: '28px',
      },
    },
    h2: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      '@media (max-width:600px)': {
        fontSize: '14px',
      },
      '@media (min-width:600px) and (max-width:1200px)': {
        fontSize: '15px',
      },
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      '@media (max-width:600px)': {
        fontSize: '12px',
      },
      '@media (min-width:600px) and (max-width:1200px)': {
        fontSize: '13px',
      },
    },
  },
});

export default theme;
