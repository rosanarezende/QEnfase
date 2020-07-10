import React from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import theme from "./utils/theme"

import Appbar from './components/Appbar';
import Content from './components/Content';

function App() {
  return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Appbar />
        <Content />
      </MuiThemeProvider>
  );
}

export default App;
