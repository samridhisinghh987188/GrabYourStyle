import React, { useState } from "react";

const BookingPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [mode, setMode] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingInfo = { name, phone, service, mode, date, time, address };
    console.log("Booking Info:", bookingInfo);
    alert("Booking confirmed! Check console for details.");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center pt-20">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        PERSONAL STYLIST
      </h1>
      <h2 className="text-3xl md:text-4xl mt-2 text-center text-gray-900">
        BOOK YOUR APPOINTMENT
      </h2>
      <p className="text-gray-600 text-center mt-4 max-w-xl">
        Select a service, choose online or offline, pick a date & time, and we’ll handle the rest!
      </p>

      {/* Service Buttons */}
      <div className="flex mt-6 gap-4 flex-wrap justify-center">
        {["Personal Styling", "Event Makeovers", "Wardrobe Revamp"].map((s) => (
          <button
            key={s}
            className={`px-5 py-2 rounded-full text-white font-medium ${
              service === s ? "bg-gray-900" : "bg-black"
            } hover:bg-gray-800 transition`}
            onClick={() => setService(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Mode Buttons */}
      <div className="flex mt-4 gap-4 flex-wrap justify-center">
        {["Online", "Offline"].map((m) => (
          <button
            key={m}
            className={`px-5 py-2 rounded-full text-white font-medium ${
              mode === m ? "bg-gray-900" : "bg-black"
            } hover:bg-gray-800 transition`}
            onClick={() => setMode(m)}
          >
            {m} Service
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white shadow-lg rounded-xl mt-10 w-full max-w-2xl p-8 relative">
        {/* Close button if needed */}
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-800">
          &#10005;
        </button>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-800 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-800 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="+1234567890"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Address if Offline */}
          {mode === "Offline" && (
            <div>
              <label className="block text-gray-800 mb-1">Address</label>
              <input
                type="text"
                placeholder="123 Street, City, Country"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          )}

          {/* Date */}
          <div>
            <label className="block text-gray-800 mb-1">Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-gray-800 mb-1">Time</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              <option value="Morning">Morning (9am - 12pm)</option>
              <option value="Afternoon">Afternoon (12pm - 4pm)</option>
              <option value="Evening">Evening (4pm - 8pm)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
