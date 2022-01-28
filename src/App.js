/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
        <Route exact path="/quizzes" component={Quizzes} />
        <Route path="/ask" component={Ask} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path={['/courses/anatomy', '/courses/understanding', '/courses/parts', '/courses/reading', '/courses/documenting', '/courses/conditions']} component={CourseLayout} />
        <Route path={['/quizzes/anatomy', '/quizzes/introduction', '/quizzes/parts', '/quizzes/reading', '/quizzes/documenting', '/quizzes/conditions']} component={QuizLayout} />
      </Switch>
    </Router>

  );
}

export default App;
