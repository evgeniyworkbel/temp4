import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

function Root() {
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
