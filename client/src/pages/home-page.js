import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';



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
      return <SignupForm />
    }
  }
  return (
    <>
      <Header
        currentPage={content} changeFunction={handleChange}
      />
      {render()}
      
      <Footer />
    </>
  )
};
export default MainHomePage;


