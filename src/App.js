import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Treatment from "./components/Treatment";
import Countries from "./components/Countries";
import Medeminence from "./components/Medeminence";
import PatientJourney from "./components/PatientJourney";
import MedicalEnquiry from "./components/MedicalEnquiry";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Disclaimer from "./Disclaimer";
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/treatment" element={<Treatment />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/medeminence" element={<Medeminence />} />
          <Route path="/patient-journey" element={<PatientJourney />} />
          <Route path="/medical-enquiry" element={<MedicalEnquiry />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
