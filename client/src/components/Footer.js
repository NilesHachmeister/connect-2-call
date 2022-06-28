import React, { useState, useEffect } from "react";
import '../homepg.css';
import Home from './Home';

import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';
import "../i18n"
import { t } from 'i18next';

const lngs = {
  en: { nativeName: 'English' },
  es: { nativeName: 'Spanish' }
}


const footerStyle = {
  "text-align": "center",
  "align-items": "center",
  "list-style": "none"
}


function Footer() {


  return (
    <footer className="footer2">
      <p className="copyright">Connect 2 Call © 2022</p>

    </footer>
  );
}

export default Footer;
