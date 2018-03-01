import React, { Component } from 'react';
import MenuAppBar from './components/MenuAppBar';
import QuestionContainer from './components/QuestionContainer';
import Grid from 'material-ui/Grid';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MenuAppBar />
          <br /><br />
          <Grid container className="Question" justify="center">
            <QuestionContainer />
          </Grid>
          
        <Route exact path='/' render={() => (
          <Redirect
            to="/question/2"
          />
          )}
        />
        </div>
      </ BrowserRouter>
    );
  }
}

export default App;
