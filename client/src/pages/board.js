import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer';



const boardPage = () => {
  const [content, setContent] = useState("Home")
  const handleChange = (content) => {
    setContent(content)
  }
  const render = () => {
    if (content === "Home") {
      return <Home />
    }
    else if (content === "Logout") {
      return <Home
      />
    }
    else if (content === "Add Post") {
      return <AddPost />
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
export default boardPage;


