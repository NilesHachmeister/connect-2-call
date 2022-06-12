import i18n from "i18next";
import Backend from "i18next-locize-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: 'en',
		saveMissing: true,
		backend:{
			projectId: 'e22b7440-de57-4984-9396-1cb0bddc6d4c',
            apiKey: '0d5eed32-da11-4467-a298-c080005ed065'
		}


		});
export default i18n


