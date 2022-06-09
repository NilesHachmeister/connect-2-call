import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';
import '../homepg.css';



const MainHomePage = () => {

  return (
    <>
      <main>
        <Home />
      </main>
    </>
  )
};
export default MainHomePage;


