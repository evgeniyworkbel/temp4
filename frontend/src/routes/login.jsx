import React from 'react';
import { useFormik } from 'formik';
import { Button, Form } from 'react-bootstrap';

function Login() {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <h1 className="text-center mb-4">Войти</h1>
      <Form onSubmit={formik.handleSubmit}>
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
            type="text"
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
    </>
  );
}

export default Login;
