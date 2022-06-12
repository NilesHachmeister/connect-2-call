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


function Footer() {


  return (
    <footer>

      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">{t("Home")}</a></li>
        <li className="list-inline-item"><a href="#login-form">{t("Login")}</a></li>
        <li className="list-inline-item"><a href="/signupform">{t("Sign Up")}</a></li>

      </ul>

      <p className="copyright">Connect 2 Call © 2022</p>
    </footer>
  );
}

export default Footer;
