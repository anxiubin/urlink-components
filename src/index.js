import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2083ff',
    }
  },
  typography: {
    fontFamily: [
      '"Spoqa Han Sans"', 
      '"Spoqa Han Sans JP"',
      'sans-serif',
    ].join(','),
  },
})

ReactDOM.render(
  <BrowserRouter>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <App/>
      </MuiThemeProvider>
    </StylesProvider>
  </BrowserRouter>
  ,document.getElementById('root')
);
