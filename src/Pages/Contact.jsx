import React, { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  // Book a Slot state
  const [slotData, setSlotData] = useState({
    service: '',
    datetime: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [slotSubmitted, setSlotSubmitted] = useState(false);

  // Send Message state
  const [messageData, setMessageData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [messageSubmitted, setMessageSubmitted] = useState(false);

  // Handlers for Book a Slot
  const handleSlotChange = (e) => {
    const { name, value } = e.target;
    setSlotData(prev => ({ ...prev, [name]: value }));
  };
  const handleSlotSubmit = (e) => {
    e.preventDefault();
    if (!slotData.name.trim() || !slotData.email.trim() || !slotData.service.trim()) {
      alert("Please fill in all required fields for booking.");
      return;
    }
    setSlotSubmitted(true);
    setSlotData({
      service: '',
      datetime: '',
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    setTimeout(() => setSlotSubmitted(false), 3000);
  };

  // Handlers for Send Message
  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setMessageData(prev => ({ ...prev, [name]: value }));
  };
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageData.name.trim() || !messageData.email.trim() || !messageData.message.trim()) {
      alert("Please fill in all fields before sending.");
      return;
    }
    setMessageSubmitted(true);
    setMessageData({ name: '', email: '', message: '' });
    setTimeout(() => setMessageSubmitted(false), 3000);
  };

  return (
    <div className='bg-[#86473D] hover:bg-[#A15C51] w-full min-h-screen flex flex-col pt-10'>
      <div className='topblock pt-10'>
        <h1 className='px-20 pl-40 text-white font-bold text-[4vw]'>Get Started With Us</h1>
        <p className='px-20 pl-40 text-white'>Book Your Slot or Send Us Message -- We will love to hear from you.</p>
      </div>

      <div className='2ndblock flex-row flex mt-10'>
        {/* Book a Slot Form */}
        <div className='flex-1 pl-20 ml-20'>
          <h1 className='font-semibold pt-4 text-white'>Book a slot</h1>
          <form onSubmit={handleSlotSubmit} className="max-w-[300px] shadow-md p-4 rounded-md space-y-3">
            <select name="service" value={slotData.service} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm">
              <option value="">Select service</option>
              <option value="Styling">Styling</option>
              <option value="Makeup">Makeup</option>
            </select>
            <input type="datetime-local" name="datetime" value={slotData.datetime} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm" />
            <input type="text" name="name" placeholder="Name" value={slotData.name} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm" />
            <input type="email" name="email" placeholder="Email" value={slotData.email} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm" />
            <input type="text" name="phone" placeholder="Phone no." value={slotData.phone} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm" />
            <input type="text" name="address" placeholder="Address" value={slotData.address} onChange={handleSlotChange} className="w-full outline-none border-gray-300 h-8 rounded-sm" />
            <button type="submit" className="w-full bg-[#1d3f8e] text-white py-2 rounded-md font-medium transition-transform duration-300 ease-in-out transform hover:scale-105">
              Book Now
            </button>
            {slotSubmitted && <p className="text-green-300 text-sm font-semibold text-center">✅ Slot booked!</p>}
          </form>
        </div>

        {/* Contact Info & Send Message Form */}
        <div className='flex-1 pl-20 ml-20'>
          <div className='info pt-20'>
            <h1 className='text-white font-semibold'>
              <IoIosCall className='inline mr-2' />
              +91 xxx xx xxxx
            </h1>
            <h1 className='text-white font-semibold mt-4'>
              <IoIosMail className='inline mr-2' />
              grabyourstyle@gmail.com
            </h1>
            <h1 className='text-white font-semibold mt-4'>
              <FaMapMarkerAlt className='inline mr-2' />
              123 Business colony Rd, City 1234
            </h1>

            <h1 className='text-black font-semibold mt-10'>Send Message</h1>

            <form onSubmit={handleMessageSubmit} className='mt-2 flex flex-col space-y-3 pr-20 mr-20 max-w-[300px]'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                className='h-8 rounded-sm px-2'
                value={messageData.name}
                onChange={handleMessageChange}
              />
              <input
                type='email'
                name='email'
                placeholder='E-mail'
                className='h-8 rounded-sm px-2'
                value={messageData.email}
                onChange={handleMessageChange}
              />
              <textarea
                name='message'
                placeholder='Send Message'
                rows={3}
                className='rounded-sm px-2 py-1 resize-none'
                value={messageData.message}
                onChange={handleMessageChange}
              ></textarea>
              <button
                type='submit'
                className='bg-[#1d3f8e] text-white font-semibold h-8 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-sm'
              >
                Send Message
              </button>
              {messageSubmitted && (
                <p className="text-green-300 text-sm font-semibold text-center">
                  ✅ Message sent!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
