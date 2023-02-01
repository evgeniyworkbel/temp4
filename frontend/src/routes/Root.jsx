import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import AuthContext from '../contexts/index.jsx';

function Root() {
  const auth = useContext(AuthContext);

  return (
    <div className="d-flex flex-column h-100">
      <Navbar variant="light" bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/">Chat</Navbar.Brand>
        </Container>
      </Navbar>
      <div id="main" className="h-100">
        {auth.loggedIn ? <Outlet /> : <Navigate to="/login" replace />}
      </div>
    </div>
  );
}

export default Root;
