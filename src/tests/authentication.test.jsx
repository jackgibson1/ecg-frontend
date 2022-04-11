import React from 'react';
import { fireEvent, cleanup, render } from '@testing-library/react';
import Login from '../components/authentication/Login';

const { createMemoryHistory } = require('history');
const { Router } = require('react-router-dom');

afterEach(cleanup);

it('renders redirect alert if redirected', () => {
  const history = createMemoryHistory();
  const state = { alert: true, message: 'Been redirected!' };
  history.push('/login', state);

  const { getByText } = render(
    <Router location={history.location} history={history}>
      <Login />
    </Router>,
  );

  // check that alert with assigned text has rendered
  // note the getByText finds the appropriate DOM Node
  expect(getByText(state.message).textContent).toBe('Been redirected!');
});

it('does not render redirect alert if not redirected', () => {
  const history = createMemoryHistory();
  const state = {};
  // simulate no state being present in route
  history.push('/login', state);

  const { queryByText } = render(
    <Router location={history.location} history={history}>
      <Login />
    </Router>,
  );

  // check that alert isn't present within DOM
  expect(queryByText('Been redirected')).toBeNull();
});

it('inputting username text updates the state', () => {
  const history = createMemoryHistory();
  const state = {};
  // simulate no state being present in route
  history.push('/login', state);

  const { getByTestId } = render(
    <Router location={history.location} history={history}>
      <Login />
    </Router>,
  );

  const usernameInput = getByTestId('username').querySelector('input');

  // initial input should be empty
  expect(usernameInput.value).toBe('');
  // simulate change on input
  fireEvent.change(usernameInput, { target: { value: 'Testuser' } });
  // check change has worked
  expect(usernameInput.value).toBe('Testuser');
});

it('inputting password text updates the state', () => {
  const history = createMemoryHistory();
  const state = {};
  // simulate no state being present in route
  history.push('/login', state);

  const { getByTestId } = render(
    <Router location={history.location} history={history}>
      <Login />
    </Router>,
  );

  const passwordInput = getByTestId('password').querySelector('input');

  // initial input should be empty
  expect(passwordInput.value).toBe('');
  // simulate change on input
  fireEvent.change(passwordInput, { target: { value: 'testpass' } });
  // check change has worked
  expect(passwordInput.value).toBe('testpass');
});

it('can sucessfully submit form when conditions correct', () => {
  const history = createMemoryHistory();
  const state = {};
  // simulate no state being present in route
  history.push('/login', state);

  const { getByTestId } = render(
    <Router location={history.location} history={history}>
      <Login />
    </Router>,
  );

  // simulate typing data in fields
  const usernameInput = getByTestId('username').querySelector('input');
  const passwordInput = getByTestId('password').querySelector('input');
  fireEvent.change(passwordInput, { target: { value: 'testpass' } });
  fireEvent.change(usernameInput, { target: { value: 'Testuser' } });

  const form = getByTestId('form');
  fireEvent.submit(form);
  // the presence of the loading validates that the form has been submitted
  expect(getByTestId('loading')).not.toBeNull();
});
