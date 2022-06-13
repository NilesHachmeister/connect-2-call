import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import pattern2 from '../assets/pattern2.jpeg';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { emailValidation } from '../utils/emailValidation';
import Header from '../components/Header';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';
const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}


const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', siteLanguage: '', spokenLanguage: 'English', isCaller: false });
  const [addUser, { error }] = useMutation(ADD_USER);



  const [usernameValidate, setUsernameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [spokenLanguageValidate, setSpokenLanguageValidate] = useState(false);




  const [showAlert, setShowAlert] = useState(false);


  useEffect(() => {

    if (userFormData.username.split("").length >= 5) {
      setUsernameValidate(true)
    } else {
      setUsernameValidate(false)
    }
    if (emailValidation(userFormData.email)) {
      setEmailValidate(true)
    } else {
      setEmailValidate(false)
    }

    if (userFormData.password.split("").length >= 5) {
      setPasswordValidate(true)
    } else {
      setPasswordValidate(false)
    }
    if (userFormData.spokenLanguage.split("").length >= 2) {
      setSpokenLanguageValidate(true)
    } else {
      setSpokenLanguageValidate(false)
    }


  });


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

      <main style={{ backgroundImage: `url(${pattern2})` }}>
        <Header />



        <br></br>
        {/* This is needed for the validation functionality above */}
        <Form className="sign-up-form" onSubmit={handleFormSubmit}>
          <h1>{t("Happy To Have You!")}</h1>
          <br></br>
          {/* show alert if server response is bad */}
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            {t("Something went wrong with your signup!")}
          </Alert>

          <Form.Group>
            <Form.Label htmlFor='username'>{t("Username")}:</Form.Label>
            <br></br>
            <Form.Control
              type='text'
              placeholder='YOUR USERNAME'
              name='username'
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Control.Feedback type='invalid'>{!usernameValidate ? "Username must be 5 characters or more." : ""}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>{t("Email")}:</Form.Label>
            <br></br>
            <Form.Control
              type='email'
              placeholder='EMAIL ADDRESS'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>{!emailValidate ? "Must be a valid email." : ""}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'>{t("Password")}:</Form.Label>
            <br></br>
            <Form.Control
              type='password'
              placeholder='PASSWORD'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>{!passwordValidate ? "Password must be 5 characters or more." : ""}</Form.Control.Feedback>
          </Form.Group>

          {/* <Form.Group>
              <Form.Label htmlFor='siteLanguage'>siteLanguage</Form.Label>
              <Form.Control
                type='text'
                placeholder='siteLanguage'
                name='siteLanguage'
                onChange={handleInputChange}
                value={userFormData.siteLanguage}
                required
              />
              <Form.Control.Feedback type='invalid'>Site Language Preference is required.</Form.Control.Feedback>
            </Form.Group> */}

          <Form.Group>
            <Form.Label htmlFor='spokenLanguage' onChange={handleInputChange} >{t("Spoken Language")}:
              <select name='spokenLanguage'>
                <br></br>
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="ru">Русский</option>

              </select></Form.Label>
            <br></br>
            <Form.Control.Feedback type='invalid'>{!spokenLanguageValidate ? "Please enter languages you speak." : ""}</Form.Control.Feedback>
          </Form.Group>


          <Form.Group>
            <Form.Label htmlFor='isCaller'>{t("I will be making calls.")}</Form.Label>
            <br></br>
            <Form.Control
              type='checkbox'
              name='isCaller'
              onChange={booleanChange}
            // value={userFormData.isCaller}
            />
            <br></br>
            <h11>{t("Yes!")}</h11>
            <br></br>
            <br></br>
          </Form.Group>



          <Button
            disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            {t("Submit")}
          </Button>
        </Form>



        <footer className="footer2">
          <p className="copyright">Connect 2 Call © 2022</p>
        </footer>

      </main>
    </>
  );
};

export default SignupForm;