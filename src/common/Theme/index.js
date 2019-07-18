import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#E64A19',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    background: '#7B1FA2',
    textColor: '#FFF',
    border: '#CCCCCC',
  },
});

export default theme;
