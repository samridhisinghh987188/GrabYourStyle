import React, { useState } from "react";
import { auth, provider } from "../config/firebase"; // Adjust if needed
import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithGoogle = async () => {
    await signOut(auth);
    await signInWithPopup(auth, provider);
    navigate("/");
  };

  const logOutUser = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleContinue = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, password, confirmPassword });
    // You can implement signup logic here
  };

  // ✅ STYLIST DASHBOARD AFTER LOGIN
  if (user) {
    return (
      <div className="relative w-full h-screen overflow-hidden font-serif">
        {/* Background image */}
        <img
          src="/stylist-bg.jpg" // Replace with your own image
          alt="Stylist Dashboard Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Welcome, {user.displayName || "Stylist"}!
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Manage your appointments, update your profile, and offer amazing style experiences.
          </p>

          {/* Dashboard Actions */}
          <div className="flex flex-col md:flex-row gap-4">
            <button
              className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
              onClick={() => navigate("/bookings")}
            >
              View Bookings
            </button>
            <button
              className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
              onClick={() => navigate("/profile")}
            >
              Edit Profile
            </button>
            <button
              className="px-6 py-3 border border-white text-white rounded hover:bg-white hover:text-black transition"
              onClick={() => navigate("/services")}
            >
              Explore Services
            </button>
          </div>

          {/* Log Out */}
          <button
            onClick={logOutUser}
            className="mt-8 px-4 py-2 text-sm border border-white rounded hover:bg-white hover:text-black transition"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  // ✅ LOGIN PAGE
  return (
    <div className="relative w-full h-screen font-serif">
      <img
        src="/login.jpg" // Replace with your login background image
        alt="Login Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-start justify-center pt-20 w-full h-full">
        <div className="max-w-md w-full bg-white rounded-lg p-6 shadow-lg">
          {step === 1 ? (
            <>
              <h2 className="text-3xl font-light mb-4 text-center">Sign In</h2>
              <p className="text-sm mb-6 text-center">
                New stylist?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Create an account
                </a>
              </p>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

              <button
                onClick={handleContinue}
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Continue
              </button>

              <div className="flex items-center my-4">
                <div className="flex-1 border-t" />
                <span className="px-2 text-gray-500 text-sm">Or</span>
                <div className="flex-1 border-t" />
              </div>

              <button
                onClick={signInWithGoogle}
                className="w-full border py-2 rounded flex items-center justify-center mb-3 hover:bg-gray-100"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-4">Complete Your Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
