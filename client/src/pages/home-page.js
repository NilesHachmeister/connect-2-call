import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm'
import SignUpPage from '../pages/signUpPage';
import Footer from '../components/Footer';
import '../homepg.css';

import pattern2 from '../assets/pattern2.jpeg';

const MainHomePage = () => {
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
<main style = {{backgroundImage: `url(${pattern2})`}}>
      <Header
        currentPage={content} changeFunction={handleChange}
      />
   
      {render()}
    
      <Footer />
      </main>
    </>
  )
};
export default MainHomePage;


