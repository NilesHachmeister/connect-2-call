import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';

import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '', siteLanguage: '', spokenLanguage: '', isCaller: false, category: '', rating: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);



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
      const { data } = await addUser({
        variables: { ...userFormData }
      });
      console.log(data);

      if (error) {
        throw new Error('something went wrong!');
      }

      // const { token, user } = await response.json();
      // console.log(user);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      name: '',
      email: '',
      password: '',
      siteLanguage: '',
      spokenLanguage: '',
      isCaller: false,
      category: '',
      rating: ''
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
          <Form.Label htmlFor='name'>name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your name'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
          <Form.Control.Feedback type='invalid'>name is required!</Form.Control.Feedback>
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
          <Form.Label htmlFor='siteLanguage'>siteLanguage</Form.Label>
          <Form.Control
            type='checkbox'
            name='siteLanguage'
            onChange={handleInputChange}
            value={userFormData.siteLanguage}
            required
          />
          <Form.Control.Feedback type='invalid'>siteLanguage is required!</Form.Control.Feedback>
        </Form.Group>



        <Form.Group>
          <Form.Label htmlFor='category'>category</Form.Label>
          <Form.Control
            type='text'
            placeholder='category'
            name='category'
            onChange={handleInputChange}
            value={userFormData.category}
            required
          />
          <Form.Control.Feedback type='invalid'>category is required!</Form.Control.Feedback>
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