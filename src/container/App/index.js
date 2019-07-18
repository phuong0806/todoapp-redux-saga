import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core';
import theme from '../../common/Theme/index.js';
import TaskBoard from '../TaskBoard/index.js';
import styles from './styles.js';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
