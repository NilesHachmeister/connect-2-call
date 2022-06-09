import React, { useState } from "react";
import '../homepg.css';
import Card from './Card'


const YourBoard = () => {
  
  return (
   
    <main>
    <div className="fixed-bg"></div>
			<div className="card__content" id="card-about">
      <p><Card/></p>
				<br />
			</div>
    
    </main>
    
  );
};

export default YourBoard;
