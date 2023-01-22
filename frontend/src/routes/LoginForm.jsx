import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';

import { loginFormSchema } from '../schemas/index';

function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Container fluid className="h-100">
      <Row className="h-100 justify-content-center align-content-center">
        <Col md={8} xxl={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-5">
              <Row>
                <Col>
                  <div className="text-center">
                    <img src="./images/mountain.png" className="rounded-circle" alt="Войти" />
                  </div>
                </Col>
                <Col>
                  <Form onSubmit={formik.handleSubmit}>
                    <h1 className="text-center mb-4">Войти</h1>
                    <Form.Group className="form-floating mb-3" controlId="username">
                      <Form.Control
                        name="username"
                        type="text"
                        placeholder="Ваш ник"
                        autoComplete="username"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.username}
                      />
                      <Form.Label>Ваш ник</Form.Label>
                    </Form.Group>

                    <Form.Group className="form-floating mb-4" controlId="password">
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        autoComplete="current-password"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      <Form.Label>Пароль</Form.Label>
                    </Form.Group>

                    <Button variant="outline-primary" className="mb-4" type="submit">
                      Войти
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span className="me-1">Нет аккаунта?</span>
                <Link to="/signup">Регистрация</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
