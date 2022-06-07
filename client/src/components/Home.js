import React, { useState } from "react";
import Testimonials from './Testimonials';
import '../homepg.css';



const Home = () => {
  
  return (
   
    <main>
    <div class="fixed-bg"></div>

 
    <li class="card" id="card_1">
			<div class="card__content">
				<div >
					<h2><i>"I'm so thankful I can depend on you!"</i></h2>
					<p>-Joan from Minneapolis </p>
					<p><a href="#top" class="btn btn--accent">Read more</a></p>
				</div>
				<figure class >
					
         < img src = {require('../assets/card6.jpeg')} alt = 'this is Joan'/>
        
				</figure>
			</div>
		</li>
    


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
    </main>
    
  );
};

export default Home;
