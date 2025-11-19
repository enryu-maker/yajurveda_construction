import React, { useEffect, useState } from "react";

export default function PopupForm({ onClose }) {

useEffect(() => {
    // Disable background scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scroll when component unmounts
      document.body.style.overflow = "auto";
    };
  }, []);


  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    location: "",
    pincode: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ID";

  const handleChange = (e) => {
    setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const closeModal = () => {
    setShowModal(false);
    if (typeof onClose === "function") onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.number || !formData.email) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        payload.append(key, formData[key]);
      });

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        try {
          localStorage.setItem("formFilled", "1");
        } catch (err) {}

        setTimeout(() => {
          setLoading(false);
          closeModal();
        }, 900);
      } else {
        setStatus("error");
        setLoading(false);
        console.error("Formspree error:", json);
      }
    } catch (err) {
      setStatus("error");
      setLoading(false);
      console.error("Submit error:", err);
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50 p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg p-6 sm:p-8 relative animate-fadeIn font-[Poppins] max-h-[85vh] overflow-y-auto">
        <button
          onClick={closeModal}
          aria-label="Close"
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2
          className="text-xl sm:text-3xl text-center my-4 font-[PoppinsSbold] leading-snug"
          style={{ color: "#253672" }}
        >
          Welcome! <br className="hidden sm:block" /> Please verify your details
        </h2>

        {status === "success" && (
          <div className="mb-4 text-center text-green-600 font-[PoppinsRegular] text-sm sm:text-base">
            Thanks — your details were submitted!
          </div>
        )}
        {status === "error" && (
          <div className="mb-4 text-center text-red-600 font-[PoppinsRegular] text-sm sm:text-base">
            Something went wrong. Please check required fields.
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label className="text-gray-700 font-[PoppinsRegular] text-sm block mb-1">Full Name *</label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="text-gray-700 font-[PoppinsRegular] text-sm block mb-1">Mobile Number *</label>
            <input
              required
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              inputMode="tel"
              className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-700 font-[PoppinsRegular] text-sm block mb-1">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City / Area"
                className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="text-gray-700 font-[PoppinsRegular] text-sm block mb-1">Pin Code</label>
              <input
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pin code"
                inputMode="numeric"
                className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-700 font-[PoppinsRegular] text-sm block mb-1">Email *</label>
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@domain.com"
              className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-1 p-3 rounded-xl text-white font-[PoppinsRegular] text-sm sm:text-base transition ${
              loading
                ? "bg-[#253672]/80 cursor-not-allowed"
                : "bg-[#253672] hover:bg-[#1f2f5a]"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center font-[PoppinsRegular] mt-3">
          We respect your privacy — your data will not be shared.
        </p>
      </div>
    </div>
  );
}
