import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enServices from "./locales/en/services.json";
import enTreatments from "./locales/en/treatments.json";
import enCountries from "./locales/en/countries.json";
import enWhyChoose from "./locales/en/whyChoose.json";
import enJourney from "./locales/en/journey.json";
import enEnquiry from "./locales/en/enquiry.json";
import enContact from "./locales/en/contact.json";
import enLegal from "./locales/en/privacy.json";
import enTerms from "./locales/en/terms.json";

// Arabic translations
import arCommon from "./locales/ar/common.json";
import arHome from "./locales/ar/home.json";
import arAbout from "./locales/ar/about.json";
import arServices from "./locales/ar/services.json";
import arTreatments from "./locales/ar/treatments.json";
import arCountries from "./locales/ar/countries.json";
import arWhyChoose from "./locales/ar/whyChoose.json";
import arJourney from "./locales/ar/journey.json";
import arEnquiry from "./locales/ar/enquiry.json";
import arContact from "./locales/ar/contact.json";
import arLegal from "./locales/ar/privacy.json";
import arTerms from "./locales/ar/terms.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        home: enHome,
        about: enAbout,
        services: enServices,
        treatments: enTreatments,
        countries: enCountries,
        whyChoose: enWhyChoose,
        journey: enJourney,
        enquiry: enEnquiry,
        contact: enContact,
        legal: enLegal,
        terms: enTerms  // Added missing terms namespace
      },
      ar: {
        common: arCommon,
        home: arHome,
        about: arAbout,
        services: arServices,
        treatments: arTreatments,
        countries: arCountries,
        whyChoose: arWhyChoose,
        journey: arJourney,
        enquiry: arEnquiry,
        contact: arContact,
        legal: arLegal,
        terms: arTerms  // Added missing terms namespace
      }
    },

    fallbackLng: "en",
    debug: true,

    ns: [
      "common",
      "home",
      "about",
      "services",
      "treatments",
      "countries",
      "whyChoose",
      "journey",
      "enquiry",
      "contact",
      "legal",
      "terms"  // Make sure terms is included here
    ],

    defaultNS: "common",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;