import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm'
import SignUpPage from '../pages/signUpPage';
import Footer from '../components/Footer';

import '../homepg.css';
import pattern2 from '../assets/pattern2.jpeg';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';
const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}

const MainHomePage = () => {


  return (
    <>
      <main style={{ backgroundImage: `url(${pattern2})` }}>
        <Header
        />

        <Home />
        <Footer />
      </main>
    </>
  )
};
export default MainHomePage;


