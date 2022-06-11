import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import pattern2 from '../assets/pattern2.jpeg';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { emailValidation } from '../utils/emailValidation';

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '', siteLanguage: '', spokenLanguage: '', isCaller: false });
  const [addUser, { error }] = useMutation(ADD_USER);



  const [usernameValidate, setUsernameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [spokenLanguageValidate, setSpokenLanguageValidate] = useState(false);




  const [showAlert, setShowAlert] = useState(false);




  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });



    if (userFormData.username.split("").length >= 4) {
      setUsernameValidate(true)
    } else {
      setUsernameValidate(false)
    }
    if (emailValidation(userFormData.email)) {
      setEmailValidate(true)
    } else {
      setEmailValidate(false)
    }

    if (userFormData.password.split("").length >= 4) {
      setPasswordValidate(true)
    } else {
      setPasswordValidate(false)
    }
    if (userFormData.spokenLanguage.split("").length >= 2) {
      setSpokenLanguageValidate(true)
    } else {
      setSpokenLanguageValidate(false)
    }




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
      <div style={{ backgroundImage: `url(${pattern2})` }}>
        <div className="sign-up-form">
          <h1>Happy To Have You!</h1>
          {/* This is needed for the validation functionality above */}
          <Form onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              Something went wrong with your signup!
            </Alert>

            <Form.Group>
              <Form.Label htmlFor='username'>Username:</Form.Label>
              <br></br>
              <Form.Control
                type='text'
                placeholder='YOUR USERNAME'
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              <Form.Control.Feedback type='invalid'>{!usernameValidate ? "Username must be 5 characters or more" : ""}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='email'>Email:</Form.Label>
              <br></br>
              <Form.Control
                type='email'
                placeholder='EMAIL ADDRESS'
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              <Form.Control.Feedback type='invalid'>{!emailValidate ? "Must be a valid email" : ""}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='password'>Password:</Form.Label>
              <br></br>
              <Form.Control
                type='password'
                placeholder='PASSWORD'
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              <Form.Control.Feedback type='invalid'>{!passwordValidate ? "Password must be 5 characters or more" : ""}</Form.Control.Feedback>
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
              <Form.Label htmlFor='spokenLanguage'>Spoken Language:
              <select>
                <option value="en">English</option>
                <option value="sp">Español</option>
                <option value="fr">Français</option>
                <option value="br">Беларускі</option>
                <option value="ru">Русский</option>
                
              </select></Form.Label>
              <br></br>
              <Form.Control
                type='text'
                placeholder='SPOKEN LANGUAGE'
                name='spokenLanguage'
                onChange={handleInputChange}
                value={userFormData.spokenLanguage}
                required
              />
              <Form.Control.Feedback type='invalid'>{!spokenLanguageValidate ? "Please enter languages you speak" : ""}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group>
              <Form.Label htmlFor='isCaller'>I will be making calls.</Form.Label>
              <br></br>
              <Form.Control
                type='checkbox'
                name='isCaller'
                onChange={booleanChange}
              // value={userFormData.isCaller}
              />
                 <br></br>
          <h11>Yes!</h11>
                <br></br>
                <br></br>
            </Form.Group>



            <Button
              disabled={!(userFormData.username && userFormData.email && userFormData.password)}
              type='submit'
              variant='success'>
              Submit
            </Button>
          </Form>
        </div>
        <footer className = "footer2">
      <p className="copyright">Connect 2 Call © 2022</p>
      </footer>
      </div>

    </>
  );
};

export default SignupForm;