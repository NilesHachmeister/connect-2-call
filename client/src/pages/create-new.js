import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import NewPostForm from "../components/NewPostForm";
import SignUpPage from "../pages/signUpPage";
import Footer from "../components/Footer";

import "../homepg.css";
import pattern2 from "../assets/pattern2.jpeg";

const NewPostPage = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${pattern2})` }}>
        <main>
           
          <Header />

          <NewPostForm />
         
        </main>
      </div>
    </>
  );
};
export default NewPostPage;
