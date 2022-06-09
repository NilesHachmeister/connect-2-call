import React, { useState } from "react";
import Info from './InfoCards';
import '../homepg.css';
import LoginForm from './LoginForm'


const Home = () => {

  return (

    <><>

      <div className="fixed-bg"></div>
    </><aside>
        <ul>
          <Info />
        </ul>
      </aside>



      <aside>
        <div className="card" id="card-about">
          <p>Blah Blah Blah....where we explain our App</p>
          <br />
        </div>


        <div className="container" id="container">
          <div className="form-container log-in-container">

            <LoginForm />

          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h4>New Here?</h4>

                <p>SIgn up below to either make or request calls.</p>

                <a className="button" href="/signupform">
                  <button href='/signupform'>Sign Up</button>
                </a>


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
