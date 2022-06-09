import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', siteLanguage: '', spokenLanguage: '', isCaller: false });
  const [addUser, { error }] = useMutation(ADD_USER);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const booleanChange = (event) => {
    const { name } = event.target;
    setUserFormData({ ...userFormData, [name]: !userFormData.isCaller })
    console.log(userFormData.isCaller)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData }
      });
      console.log(data);

      if (error) {
        throw new Error('something went wrong!');
      }


      Auth.login(data.addUser.token);

    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
      siteLanguage: '',
      spokenLanguage: '',
      isCaller: false,
    });
  };

  return (
    <>
      {/* This is needed for the validation functionality above */}
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='siteLanguage'>siteLanguage</Form.Label>
          <Form.Control
            type='text'
            placeholder='siteLanguage'
            name='siteLanguage'
            onChange={handleInputChange}
            value={userFormData.siteLanguage}
            required
          />
          <Form.Control.Feedback type='invalid'>siteLanguage is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='spokenLanguage'>spokenLanguage</Form.Label>
          <Form.Control
            type='text'
            placeholder='spokenLanguage'
            name='spokenLanguage'
            onChange={handleInputChange}
            value={userFormData.spokenLanguage}
            required
          />
          <Form.Control.Feedback type='invalid'>spokenLanguage is required!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group>
          <Form.Label htmlFor='isCaller'>isCaller</Form.Label>
          <Form.Control
            type='checkbox'
            name='isCaller'
            onChange={booleanChange}
            // value={userFormData.isCaller}
            required
          />
          <Form.Control.Feedback type='invalid'>isCaller is required!</Form.Control.Feedback>
        </Form.Group>



        <Button
          disabled={!(userFormData.name && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;