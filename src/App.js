/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainAppBar from './components/MainAppBar';
import Home from './components/Home';
import Courses from './components/Courses';
import Quizzes from './components/Quizzes';
import Ask from './components/Ask';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

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
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>

  );
}

export default App;
