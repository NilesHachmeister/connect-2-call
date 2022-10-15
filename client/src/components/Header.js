import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import '../homepg.css';
import { Form } from 'react-bootstrap';
import Home from './Home';

import { useTranslation, Trans } from "react-i18next";
<<<<<<< HEAD
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
=======
import { useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
>>>>>>> a3c4a9be1316ea2c70ba53cbee74e5b5fa5704a0
import "../i18n"
import { t } from 'i18next';
const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}


function Header() {

  // const { i18n } = useTranslation();

  const [siteLanguage, setSiteLanguage] = useState({ siteLanguage: 'en' });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSiteLanguage({ ...siteLanguage, [name]: value });
    localStorage.setItem("i18nextLng", value);
    console.log(siteLanguage)
    console.log(value)
    console.log(localStorage.getItem("i18nextLng"))
  };


  useEffect(() => {
    const currentLanguage = localStorage.getItem("i18nextLng");
    setSiteLanguage({ siteLanguage: currentLanguage })
    console.log(siteLanguage)
  }, []);

  const checkLogginForNewPost = () => {
    if (Auth.loggedIn()) {
      navigate('/new-post')
    } else {
      navigate('/#login-form')
    }
  };

  const checkLogginForBoard = () => {
    if (Auth.loggedIn()) {
      return '/board'
    } else {
      return '/'
    }
  };


  const goToLoginForm = () => {
    navigate('#homepage-signup');
  };


  const inlineStyle = {
    "border-radius": "10px",
    "background-color": "#5b806baf",
    "padding": "10px",
    "font-size": "20px",
    "margin": "6px"
  }

  return (

    <>
      <header>
        <div className="header">


          <Link to="/" style={inlineStyle}> {t("Home")}</Link>
          <Link to="/#homepage-signup" style={inlineStyle}>{t("Login")}</Link>
          <Link to="/signupform" style={inlineStyle}>  {t("Sign Up")}</Link>
<<<<<<< HEAD
          <Link to={Auth.loggedIn() ? '/board' : '/'} style={inlineStyle}>{t("Board")}</Link>
          <Link to='/new-post' style={inlineStyle}>{t("New post")}</Link>
=======
          <Link to={Auth.loggedIn() ? '/board' : '/signupform'} style={inlineStyle}>{t("Board")}</Link>
          <Link to={Auth.loggedIn() ? '/new-post' : '/signupform'} style={inlineStyle}>{t("New post")}</Link>
>>>>>>> a3c4a9be1316ea2c70ba53cbee74e5b5fa5704a0

          <br />

        </div>

      </header>

    </>
  );
}

export default Header;