/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainAppBar from './components/MainAppBar';
import Home from './components/Home';
import Courses from './components/Courses';
import Quizzes from './components/Quizzes';
import Ask from './components/Ask';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <MainAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/ask" component={Ask} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>

  );
}

export default App;
