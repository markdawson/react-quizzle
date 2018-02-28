import React, { Component } from 'react';
import MenuAppBar from './components/MenuAppBar';
import QuestionContainer from './components/QuestionContainer';
import Grid from 'material-ui/Grid';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <br /><br />
        <Grid container className="Question" justify="center">
          <QuestionContainer />
        </Grid>
      </div>
    );
  }
}

export default App;
