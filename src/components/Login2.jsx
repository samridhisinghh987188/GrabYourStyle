import React, { useState } from "react";

function Login() {
  const [step, setStep] = useState(1); // 1 = email step, 2 = sign-up details
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleContinue = () => {
    if (email.trim() !== "") {
      setStep(2); // Move to next step
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, name, password, confirmPassword });
    // Here you can add backend call for sign-up or login
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/login.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Login Box */}
      <div className="relative z-10 flex items-start justify-center pt-20  w-full h-full">
        <div className="max-w-md w-full bg-white rounded-lg p-6 shadow-lg">
          {step === 1 ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Sign in</h2>
              <p className="text-sm mb-6">
                New user?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Create an account
                </a>
              </p>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleContinue}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Continue
              </button>

              <div className="flex items-center my-4">
                <div className="flex-1 border-t" />
                <span className="px-2 text-gray-500 text-sm">Or</span>
                <div className="flex-1 border-t" />
              </div>

              <button className="w-full border py-2 rounded flex items-center justify-center mb-3 hover:bg-gray-100">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>

              <a
                href="#"
                className="block text-center text-sm text-blue-600 hover:underline mt-4"
              >
                More sign-in options
              </a>

              <a
                href="#"
                className="block text-center text-sm text-blue-600 hover:underline mt-2"
              >
                Get help signing in
              </a>
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
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Sign Up
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


import React, { useState } from "react";
import { auth, provider } from "../config/firebase";
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
    await signInWithPopup(auth, provider);
    navigate("/account");
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
  };

  // ✅ Logged-in view
  if (user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl grid grid-cols-2 gap-6">
          {/* Left side - Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">
              Welcome, {user.displayName || "User"}!
            </h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <button
              onClick={signInWithGoogle}
              className="bg-blue-600 text-white px-4 py-2 rounded mb-3 hover:bg-blue-700"
            >
              Log in with another account
            </button>
            <button
              onClick={logOutUser}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Log Out
            </button>
          </div>

          {/* Right side - Profile Image */}
          <div className="flex justify-center items-center">
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ Default login form
  return (
    <div className="relative w-full h-screen">
      <img
        src="/login.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 flex items-start justify-center pt-20 w-full h-full">
        <div className="max-w-md w-full bg-white rounded-lg p-6 shadow-lg">
          {step === 1 ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Sign in</h2>
              <p className="text-sm mb-6">
                New user?{" "}
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
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Sign Up
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
