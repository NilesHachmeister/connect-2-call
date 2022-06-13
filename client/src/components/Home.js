import React, { useState } from "react";
import Info from './InfoCards';
import '../homepg.css';
import backgroundImage from '../assets/new-header.jpg';
import signUp from '../assets/newsignup.jpeg';
import LoginForm from "./LoginForm";
import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}


const Home = () => {




  const inlineStyle = {
    "border-radius": "10px",
    "background-color": "#5b806baf",
    "padding": "10px",
    "font-size": "20px",
    "margin": "6px"
  }





  return (
    <>


      <div className="fixed-bg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      <main>
        <aside >
          <ul id="cards" style={{ width: "600px", paddingLeft: 0 }}>
            <Info />
          </ul>
        </aside>
      </main>



      <aside>
        <div class="card" id="card-about">
          <p><h7>{t("Connect 2 Call is a platform utilized to assist others in making phone calls!")}
            <br></br>
            <br></br>{t("Whether the reason be anxiety, language barriers, or available time, we help connect you to callers who are available, capable, and comfortable calling for you.")}</h7></p>

        </div>


        <div class="container1" id="container1">
          <div class="form-container1 log-in-container1">

            < LoginForm />


          </div>
          <div class="overlay-container">
            <div class="overlay" style={{ backgroundImage: `url(${signUp})` }}>
              <div class="overlay-panel overlay-right">

                <h4>{t("New Here?")}</h4>

                <p><h3>{t("Sign up below to either make or request calls.")}</h3></p>
                <br></br>

                <Link to="/signupform" style={inlineStyle}>{t("Sign Up")}</Link>



                <br />

              </div>
            </div>
          </div>
        </div>

      </aside>
    </>

  );
};

export default Home;
