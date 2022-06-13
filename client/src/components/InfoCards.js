import React from "react";
import "../homepg.css";
import card6 from '../assets/card6.jpeg'
import card3 from '../assets/card3.jpeg'
import card4 from '../assets/card4.jpeg'
import card13 from '../assets/card13.jpeg'

import { useTranslation, Trans } from "react-i18next";

import "../i18n"
import { t } from 'i18next';
import Home from './Home';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}



export default function Info() {
    return (
     <>
  <li className="card" id="card_1">
    <div className="card__content">
      <div>
    
        <h2><i>"I'm so thankful I can depend on you!"</i></h2>
        <p>-Joan from Minneapolis</p>

      </div>
      <figure>
        <img src={card6} alt="Image description" />
      </figure>
    </div>
  </li>
  <li className="card" id="card_2">
    <div className="card__content">
      <div>
      {t("Call Needed")}:
        <h2><i>"So appreciative of this service- I can finally get some errands done while I'm at work."</i></h2>
        <p>-Brook from Scranton.</p>
 
      </div>
      <figure>
        <img src={card3} alt="Image description" />
      </figure>
    </div>
  </li>
  <li className="card" id="card_3">
    <div className="card__content">
      <div>
        <h2><i>"Thank you so much for your help- it means the world."</i></h2>
        <p>-Addie from Austin.</p>
  
      </div>
      <figure>
        <img src={card4} alt="Image description" />
      </figure>
    </div>
  </li>
  <li className="card" id="card_4">
    <div className="card__content">
      <div>
        <h2><i>"I love helping others throughout my day- I've also created amazing friendships!"</i></h2>
        <p>-Michael from Portland</p>
     
      </div>
      <figure>
        <img src={card13} alt="Image description" />
      </figure>
    </div>
  </li>
  </>

      
  );
};


