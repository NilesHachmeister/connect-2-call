// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';

import { useTranslation, Trans } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}



const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [loginUser] = useMutation(LOGIN_USER);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ...userFormData }
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    navigate('/board')
  };

  return (
    <>

      <Form noValidate validated={validated} onSubmit={handleFormSubmit} id="login-form">
        <h1>{t("Welcome Back!")}</h1>
        <br></br>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          {t("Something went wrong with your login credentials!")}
        </Alert>
        <Form.Group>
          <Form.Label htmlFor='email'>{t("Email")}:</Form.Label>
          <br></br>
          <Form.Control
            type='text'
            placeholder='Your Email'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>{t("Password")}:</Form.Label>
          <br></br>
          <Form.Control
            type='password'
            placeholder='Your Password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          {t("Submit")}
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
