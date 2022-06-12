import React from "react";
import { useState } from "react";
import pattern2 from "../assets/pattern2.jpeg";
import Home from "../components/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from '../components/LoginForm'
import SignupForm from "../components/SignupForm";
import '../homepg.css';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';
const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}

const SignUpPage = () => {
  const [content, setContent] = useState("Home")
  const handleChange = (content) => {
    setContent(content)
  }
  const render = () => {
    if (content === "Home") {
      return <Home />
    }
    else if (content === "Login") {
      return <LoginForm
      />
    }
    else if (content === "SignUp") {
      return <SignUpPage />
    }
  }
  return (
    <>
<main>
      <Header
        currentPage={content} changeFunction={handleChange}
      />
      
     
      {render()}

      <SignupForm />
      
    
      </main>
      
      </>
    
  )
};
export default SignUpPage;