import React, { useState, useEffect } from 'react';

import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';
import '../homepg.css';
import { Form } from 'react-bootstrap';
import Home from './Home';

import { useTranslation, Trans } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
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
      navigate('/board')
    } else {
      navigate('/#login-form')
    }
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
          <Link to="/#login-form" style={inlineStyle}>{t("Login")}</Link>
          <Link to="/signupform" style={inlineStyle}>  {t("Sign Up")}</Link>
          <Link to={checkLogginForBoard} style={inlineStyle}>{t("Board")}</Link>
          <Link to={checkLogginForNewPost} style={inlineStyle}>{t("New post")}</Link>

          <br />
          <div id="site-language">
            <Form.Group id="site-language-form">
              <Form.Label id="site-language-form-label" htmlFor='siteLanguage'
                onChange={handleInputChange}
              >{t("Site Language")}:
                <select name='siteLanguage'
                  value={siteLanguage.siteLanguage}
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