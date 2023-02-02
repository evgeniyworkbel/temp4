import React from 'react';
import { Outlet, redirect } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import useAuth from '../hooks/index.jsx';

export async function loader() {
  const user = localStorage.getItem('user');
  if (!user) {
    throw redirect('/login');
  }

  return null;
}

function Root() {
  const auth = useAuth();
  console.log(auth);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <div id="main" className="h-100">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
