/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MainAppBar from './components/MainAppBar';
import Home from './components/home/Home';
import Courses from './components/courses/course-components/Courses';
import Quizzes from './components/quizzes/quiz-components/Quizzes';
import Ask from './components/forum/Ask';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Profile from './components/authentication/Profile';
import AuthService from './services/auth.service';
import CourseLayout from './components/courses/course-components/CourseLayout';
import QuizLayout from './components/quizzes/quiz-components/quizLayout';

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const logOut = () => {
    AuthService.logout();
  };

  const isLoggedIn = (component, path) => {
    if (AuthService.isLoggedIn()) {
      return component;
    }
    return <Redirect to={{ pathname: '/login', state: { from: path, alert: true } }} />;
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
        <Route exact path="/courses" render={() => isLoggedIn(<Courses />, '/courses')} />
        <Route exact path="/quizzes" render={() => isLoggedIn(<Quizzes />, '/quizzes')} />
        <Route path="/ask" component={Ask} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" render={() => isLoggedIn(<Profile />, '/profile')} />
        <Route path={['/courses/anatomy', '/courses/understanding', '/courses/parts', '/courses/reading', '/courses/documenting', '/courses/conditions']} render={() => isLoggedIn(<CourseLayout />, '/courses')} />
        <Route path={['/quizzes/anatomy', '/quizzes/introduction', '/quizzes/parts', '/quizzes/reading', '/quizzes/documenting', '/quizzes/conditions']} render={() => isLoggedIn(<QuizLayout />, '/quizzes')} />
      </Switch>
    </Router>

  );
}

export default App;
