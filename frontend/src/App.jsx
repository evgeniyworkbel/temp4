import React, { useState, useMemo } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import AuthContext from './contexts/index.jsx';
import Root, { loader as rootLoader } from './routes/Root.jsx';
import ErrorPage from './routes/Error-page.jsx';
import LoginForm from './routes/LoginForm.jsx';

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  // Look about rule at https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
  const authServices = useMemo(() => ({ loggedIn, logIn, logOut }), []);

  return (
    <AuthContext.Provider value={authServices}>
      {children}
    </AuthContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: 'login',
        element: <LoginForm />,
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
