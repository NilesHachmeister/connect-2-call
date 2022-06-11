import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'
import SignUpPage from '../pages/signUpPage';
import YourBoard from '../components/YourBoard';
import '../homepg.css';
import pattern2 from '../assets/pattern2.jpeg';


const BoardPage = () => {


  return (
    <>
      <main>
        <Header

        />



        <YourBoard />

        <Footer />
      </main>


    </>
  )
};
export default BoardPage;


