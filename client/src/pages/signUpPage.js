import React from "react";
import { useState } from "react";
import pattern2 from "../assets/pattern2.jpeg";
import Header from "../components/Header";
import Home from "../components/Home";
import Footer from "../components/Footer";
import SignupForm from "../components/SignupForm";



const SignUpPage = () => {
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
  }
  return (
    <>
    <Header currentPage={content} changeFunction={handleChange}/>
        <main style={{ backgroundImage: `url(${pattern2})` }}>
     

      {render(SignupForm)}
      
      <Footer />
      </main>
      </>
    
  )
};
export default SignUpPage;