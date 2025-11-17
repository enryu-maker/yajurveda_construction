import React, { useState } from 'react';

const Form = () => {
    // State for the OTP process (simulated)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pinCode, setPinCode] = useState('');


    // Custom colors/styles (same as before)
    const primaryBlue = '#4169e1'; 
    const lighterDeepBlue = '#3051c7'; 
    const inputClasses = `w-full px-5 py-4 text-white text-lg bg-transparent border-2 border-white/50 rounded-xl focus:outline-none focus:border-white transition duration-200 placeholder-white/80`;
    const buttonBg = '#31447e'; // Used for the Send/Verify button

    // Simulated OTP handlers
    const handleSendOTP = () => {
        if (phoneNumber.length === 10 && /^\d+$/.test(phoneNumber)) {
            alert("OTP Sent! (Simulated code: 1234)");
            setIsOtpSent(true);
        } else {
            alert("Please enter a valid 10-digit number.");
        }
    };

    const handleVerifyOTP = () => {
        if (otp === "1234") { // Simulated verification
            setIsOtpVerified(true);
            setIsOtpSent(false); // Hide OTP field after successful verification
            alert("Phone Number Verified!");
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isOtpVerified) {
            alert("Please verify your phone number before submitting.");
            return;
        }
        // Check if required fields are filled (basic client-side check)
        if (!name || !email || !pinCode) {
            alert("Please fill in all required fields.");
            return;
        }
        alert(`Form Submitted! Name: ${name}, Email: ${email}`);
        // Logic to send data to the backend would go here
    };

    return (
        <div 
            className="w-full min-h-screen py-16 px-4 sm:px-8 lg:px-16 text-white font-sans flex items-center justify-center"
            style={{ backgroundColor: primaryBlue }}
        >
            <div 
                className="max-w-6xl w-full p-8 sm:p-12 lg:p-16 relative border-2 border-white/50 rounded-[2rem]" 
                style={{ backgroundColor: lighterDeepBlue }}
            >
                
                {/* Contact Us Button */}
                <button className="absolute top-[-1.5rem] left-8 sm:left-12 px-6 py-2 border-2 border-white/70 rounded-full text-lg font-medium bg-white/10 hover:bg-white/20 transition-colors">
                    Contact Us
                </button>

                {/* --- Main Two-Column Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">

                    {/* === LEFT COLUMN: FORM FIELDS (Single Column) === */}
                    <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
                        
                        {/* 1. Name */}
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className={inputClasses}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        {/* 2. Email ID */}
                        <input 
                            type="email" 
                            placeholder="Email ID" 
                            className={inputClasses}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        
                        {/* 3. Phone Number Input & Send OTP Button */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6">
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className={`col-span-2 ${inputClasses}`}
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                disabled={isOtpVerified}
                                required
                            />
                            {!isOtpVerified && (
                                <button 
                                    type="button"
                                    className="col-span-1 px-3 py-3 text-lg font-medium rounded-xl text-white transition duration-300"
                                    style={{ backgroundColor: buttonBg }}
                                    onClick={handleSendOTP}
                                    disabled={isOtpSent || phoneNumber.length !== 10}
                                >
                                    {isOtpSent ? 'Sent' : 'Send OTP'}
                                </button>
                            )}
                        </div>

                        {/* 4. OTP Verification Input (Conditional) */}
                        {isOtpSent && !isOtpVerified && (
                            <div className="grid grid-cols-3 gap-3 sm:gap-6">
                                <input 
                                    type="text" 
                                    placeholder="Enter OTP" 
                                    className={`col-span-2 ${inputClasses}`}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    required
                                />
                                <button 
                                    type="button"
                                    className="col-span-1 px-3 py-3 text-lg font-medium rounded-xl text-white transition duration-300 bg-green-600 hover:bg-green-700"
                                    onClick={handleVerifyOTP}
                                >
                                    Verify
                                </button>
                            </div>
                        )}

                        {/* 5. Location with Pin Code */}
                        <input 
                            type="text" 
                            placeholder="Location with Pin Code" 
                            className={inputClasses}
                            value={pinCode}
                            onChange={(e) => setPinCode(e.target.value)}
                            required
                        />
                        
                        {/* --- Footer and Submission --- */}
                        <div className="flex justify-between items-center pt-4">
                            
                            {/* Tagline */}
                            <p className="text-lg">
                                Let's turn plans into possibilities
                            </p>
                            
                            {/* Submission Button */}
                            <button 
                                type="submit"
                                className={`px-10 py-3 text-xl font-medium rounded-xl text-gray-900 transition duration-300 shadow-md ${isOtpVerified ? 'bg-white/90 hover:bg-white' : 'bg-gray-400 cursor-not-allowed'}`}
                                disabled={!isOtpVerified}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    
                    {/* === RIGHT COLUMN: HEADER & ADDRESS (Fixed Alignment) === */}
                    <div className="flex flex-col justify-between items-end text-right space-y-16 mt-8 md:mt-0">
                        
                        {/* Header */}
                        <h2 className="text-4xl sm:text-5xl font-semibold leading-snug">
                            Start The
                            <br />
                            Conversation!
                        </h2>

                        {/* Location Text */}
                        <div className="text-xl sm:text-2xl font-medium leading-snug">
                            Gangapur Road,
                            <br />
                            Nashik, 444001
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;