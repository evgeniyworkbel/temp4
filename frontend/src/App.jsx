import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './routes/Error-page';
import LoginForm from './routes/LoginForm';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginForm />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
