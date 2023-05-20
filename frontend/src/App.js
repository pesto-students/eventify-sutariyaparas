import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Website/HomePage';
import ContactUsPage from './pages/Website/ContactUsPage';
import AboutUsPage from './pages/Website/AboutUsPage';
import FaqPage from './pages/Website/FaqPage';
import TermsAndConditionsPage from './pages/Website/TermsAndConditionsPage';
import PrivacyPolicyPage from './pages/Website/PrivacyPolicyPage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/terms_and_condition" element={<TermsAndConditionsPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
