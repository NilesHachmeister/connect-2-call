import React, { useState } from "react";
import Info from './InfoCards';
import '../homepg.css';
import backgroundImage from '../assets/new-header.jpg';
import signUp from '../assets/newsignup.jpeg';
const Home = () => {

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
          <p><h7>Connect 2 Call is a platform utilized to assist others in making phone calls!
            <br></br>
            <br></br>Whether the reason be anxiety, language barriers, or available time, we help connect you to callers who are available, capable, and comfortable calling for you.</h7></p>

        </div>


        <div class="container" id="container">
          <div class="form-container log-in-container">
            <form>
              <h1>Welcome Back!</h1>
              <br />

              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />

              <button>Log In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay" style={{ backgroundImage: `url(${signUp})` }}>
              <div class="overlay-panel overlay-right">

                <h4>New Here?</h4>

                <p><h3>Sign up below to either make or request calls.</h3></p>
                <br></br>

                <a1 className="button" href="/signupform">
                  <button>Sign Up</button>
                </a1>

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
