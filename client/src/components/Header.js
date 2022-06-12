import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import '../homepg.css';
import { Form } from 'react-bootstrap';
import Home from './Home';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';
const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}


function Header() {

  // const { i18n } = useTranslation();

  const [siteLanguage, setSiteLanguage] = useState({ siteLanguage: 'en' });

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
    setSiteLanguage(currentLanguage)
    console.log(siteLanguage)
  });

  const checkLogginForNewPost = () => {
    if (Auth.loggedIn()) {
      window.location.assign('/new-post');
    } else {
      window.location.assign('/#login-form')
    }
  };

  const checkLogginForBoard = () => {
    if (Auth.loggedIn()) {
      window.location.assign('/board');
    } else {
      window.location.assign('/#login-form')
    }
  };



  return (

    <>
      <header>
        <div className="header">

          <a className="button" href="/">
            {t("Home")}
          </a>

          <a className="button" href="/#login-form">
            {t("Login")}
          </a>
          <a className="button" href="/signupform">
            {t("Sign Up")}
          </a>
          <a className="button" onClick={checkLogginForBoard}>
            {t("Board")}
          </a>
          <a className="button" onClick={checkLogginForNewPost}>
            {t("New post")}
          </a>
          <br />
          <div id="site-language">
            <Form.Group id="site-language-form">
              <Form.Label id="site-language-form-label" htmlFor='spokenLanguage'
                onChange={handleInputChange}
              >{t("Site Language")}:
                <select name='spokenLanguage'
                  value={siteLanguage}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="ru">Русский</option>
                </select></Form.Label>
              <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
            </Form.Group>
            {/* <div>
              {Object.keys(lngs).map((lng)=>(
                <button type="submit" key={lng} 
                >{lngs[lng].nativeName}</button>
              ))}
            </div> */}
          </div>

        </div>




      </header>

    </>
  );
}

export default Header;