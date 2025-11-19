import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import PopupForm from "./components/Form/PopupForm";

const App = () => {

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    try {
      const filled = localStorage.getItem("formFilled");
      if (filled === "1") setShowModal(false);
    } catch (err) {
      // ignore localStorage errors
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* Main content always renders behind modal */}
        <main>
          <Home />
          {/* other main site components */}
        </main>

        {/* Modal renders on top */}
        {showModal && <PopupForm onClose={handleClose} />}
      </div>
    </>
  )
}

export default App