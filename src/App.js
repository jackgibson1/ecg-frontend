/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import MainAppBar from './components/misc/MainAppBar';
import Home from './components/home/Home';
import Courses from './components/courses/course-components/Courses';
import Quizzes from './components/quizzes/quiz-components/Quizzes';
import Ask from './components/forum/Ask';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Profile from './components/profile/Profile';
import AuthService from './services/auth.service';
import { SetupInterceptors } from './services/api';
import CourseLayout from './components/courses/course-components/CourseLayout';
import QuizLayout from './components/quizzes/quiz-components/QuizLayout';
import PostPage from './components/forum/PostPage';

const theme = createTheme({
  typography: {
    fontFamily: ['Kanit', 'sans-serif'].join(','),
  },
});

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  const isLoggedIn = (component, path) => {
    if (AuthService.isLoggedIn()) return component;
    return <Redirect to={{ pathname: '/login', state: { from: path, alert: true, message: 'Please login before accessing!' } }} />;
  };

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) setCurrentUser(user);
  }, []);

  function HistoryFunctionForAxiosInterceptors() {
    const history = useHistory();
    SetupInterceptors(history, logOut);
    return <></>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <HistoryFunctionForAxiosInterceptors />
        <MainAppBar currentUser={currentUser} logOut={logOut} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses" render={(props) => isLoggedIn(<Courses {...props} />, '/courses')} />
          <Route exact path="/quizzes" render={(props) => isLoggedIn(<Quizzes {...props} />, '/quizzes')} />
          <Route exact path="/ask" component={Ask} />
          <Route path="/ask/posts/:postId" component={PostPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" render={(props) => isLoggedIn(<Profile {...props} />, '/profile')} />
          <Route path={['/courses/anatomy', '/courses/understanding', '/courses/parts', '/courses/reading', '/courses/documenting', '/courses/conditions']} render={(props) => isLoggedIn(<CourseLayout {...props} />, '/courses')} />
          <Route path={['/quizzes/anatomy', '/quizzes/introduction', '/quizzes/parts', '/quizzes/reading', '/quizzes/documenting', '/quizzes/conditions']} render={(props) => isLoggedIn(<QuizLayout {...props} />, '/quizzes')} />
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
