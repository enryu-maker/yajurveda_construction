import React, { useState } from "react";

export default function PopupForm({ onClose }) {
  const [showModal, setShowModal] = useState(true);
  const [step, setStep] = useState("enterNumber");
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    otp: "",
    location: "",
    pincode: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-lg p-8 relative animate-fadeIn font-[Poppins]">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowModal(false);
                if (typeof onClose === "function") onClose();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-[PoppinsSbold] text-center mb-6" style={{ color: "#253672" }}>
              Welcome! <br /> Please Verify Your Details
            </h2>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setShowModal(false); if (typeof onClose === "function") onClose(); }}>
              {/* Name */}
              <div>
                <label className="text-gray-700 text-sm font-[PoppinsRegular]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Number + OTP */}
              {step === "enterNumber" && (
                <>
                  <div>
                    <label className="text-gray-700 text-sm font-[PoppinsRegular]">Mobile Number</label>
                    <input
                      type="text"
                      name="number"
                      onChange={handleChange}
                      className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("verifyOtp")}
                    className="w-full font-[PoppinsRegular] bg-[#253672] text-white p-3 rounded-xl hover:bg-opacity-90 transition"
                  >
                    Send OTP
                  </button>
                </>
              )}

              {step === "verifyOtp" && (
                <>
                  <div>
                    <label className="text-gray-700 text-sm font-[PoppinsRegular]">Enter OTP</label>
                    <input
                      type="text"
                      name="otp"
                      onChange={handleChange}
                      className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                      placeholder="Enter OTP"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep("finalDetails")}
                    className="w-full bg-[#253672] text-white font-[PoppinsRegular] p-3 rounded-xl hover:bg-opacity-90 transition"
                  >
                    Verify OTP
                  </button>
                </>
              )}

              {/* Location and others */}
              {step === "finalDetails" && (
                <>
                  <div>
                    <label className="text-gray-700 text-sm font-[PoppinsRegular]">Location</label>
                    <input
                      type="text"
                      name="location"
                      onChange={handleChange}
                      className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                      placeholder="Enter your city or area"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 text-sm font-[PoppinsRegular]">Pin Code</label>
                    <input
                      type="text"
                      name="pincode"
                      onChange={handleChange}
                      className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                      placeholder="Enter pin code"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 text-sm font-[PoppinsRegular]">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="w-full font-[PoppinsElight] mt-1 p-3 border rounded-xl focus:ring-2 focus:ring-[#253672] outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#253672] text-white font-[PoppinsRegular] p-3 rounded-xl hover:bg-opacity-90 transition"
                  >
                    Submit
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
