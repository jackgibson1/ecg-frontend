/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainAppBar from './components/MainAppBar';
import Home from './components/Home';
import Courses from './components/Courses';
import Quizzes from './components/Quizzes';
import Ask from './components/Ask';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import AuthService from './services/auth.service';
import AnatomyCourse from './components/AnatomyCourse';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const logOut = () => {
    AuthService.logout();
    // window.location.reload();
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <Router>
      <MainAppBar currentUser={currentUser} logOut={logOut} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/courses" component={Courses} />
        <Route path="/quizzes" component={Quizzes} />
        <Route path="/ask" component={Ask} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/courses/anatomy" component={AnatomyCourse} />
      </Switch>
    </Router>

  );
}

export default App;
