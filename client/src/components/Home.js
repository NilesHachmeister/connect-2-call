import React, { useState } from "react";
import Info from './InfoCards';
import '../homepg.css';



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
      <div class="card" id="card-about">
        <p>Blah Blah Blah....where we explain our App</p>
        <br />
      </div>


      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Welcome Back!</h1>
            <br />

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <button>Log In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h4>New Here?</h4>

              <p>SIgn up below to either make or request calls.</p>
              <button>Sign Up</button>
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
