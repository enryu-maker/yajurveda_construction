import React, { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import PopupForm from "./components/Form/PopupForm";
import AboutPage from './pages/AboutPage'
import OurCompanyPage from './pages/OurCompanyPage';
import { BrowserRouter, Route, Routes } from 'react-router';
import ScrollToTop from './ScrollToTop';
import FinancialPlan from './pages/FinancialPlan';

const App = () => {

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // 1. ENVIRONMENT CHECK: Ensure code runs only on the client (browser)
    // This is crucial for Server-Side Rendering (SSR) environments like Next.js or Gatsby
    if (typeof window === 'undefined') {
      return;
    }

    try {
      // 2. ERROR HANDLING: Check for localStorage accessibility
      // Some browsers (e.g., Safari in private mode) or security policies 
      // block localStorage access, throwing a SecurityError.
      const storage = window.localStorage;

      const filled = storage.getItem("formFilled");

      // 3. STRICT CHECK: Compare against the exact string value
      if (filled === "1") {
        setShowModal(false);
      }
    } catch (err) {
      // 4. ROBUST ERROR HANDLING: Log the error and fail gracefully
      // Instead of just ignoring it, log it to your monitoring system (Sentry, console) 
      // while still preventing the app from crashing.
      console.error("Error accessing localStorage:", err);
      // In a production app, you might want a specific action here, 
      // but usually, falling back to the default state (showing the modal) is safest.
    }
  }, [setShowModal]); // 5. Dependency Array: Include external dependencies

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className='overflow-x-hidden'>

        {/* 2. Define the Routes container */}
        <Routes>
          {/* Route for the Home Page (Path: /) */}
          <Route path="/" element={<HomePage />} />

          {/* Route for the About Page (Path: /about) */}
          <Route path="/about" element={<AboutPage />} />

          {/* Route for the Our Company Page (Path: /ourCompany) */}
          <Route path="/ourcompany" element={<OurCompanyPage />} />

          <Route path="/financialplan" element={<FinancialPlan />} />


        </Routes>

        {/* 3. Modal Renders (Outside the Routes, so it persists across pages) */}
        {showModal && <PopupForm onClose={handleClose} />}

      </div>
    </>
  )
}

export default App