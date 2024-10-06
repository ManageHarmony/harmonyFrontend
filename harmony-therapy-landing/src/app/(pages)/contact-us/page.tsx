// pages/contact.tsx
'use client';

import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        role: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form Submitted', formData);

        // Here you can handle form submission logic, such as sending data to an API
    };

    return (
        <div className="flex justify-center items-center py-14 mt-32 md:px-36 px-2">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-3xl p-8 w-full max-w-max-w-2xl mx-4 transition-all duration-500"
            >
                <h2 className="text-2xl font-bold text-center text-[#33C9D2] mb-6">Contact Us</h2>

                <div className='md:flex justify-between gap-5'>
                    {/* Name Input */}
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33C9D2] transition-all duration-500 ease-in-out"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33C9D2] transition-all duration-500 ease-in-out"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className='md:flex justify-between gap-5'>
                    {/* Phone Input */}
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Mobile Number
                        </label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            placeholder="Your Contact Number"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33C9D2] transition-all duration-500 ease-in-out"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Role (Doctor or Patient) */}
                    <div className="mb-4 md:w-1/2">
                        <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                            Are you a Doctor or a Patient?
                        </label>
                        <select
                            name="role"
                            id="role"
                            className="md:w-full w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33C9D2] transition-all duration-500 ease-in-out"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select your role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>

                </div>

                {/* Message Input */}
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#33C9D2] transition-all duration-500 ease-in-out"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
               <div className='flex items-center justify-center'>
               <button
                    type="submit"
                    className="md:w-[20%] bg-[#FFA05D] text-white font-bold py-2 px-5 rounded-md hover:bg-[#33C9D2] transition duration-500"
                >
                    Submit
                </button>
               </div>
            </form>
        </div>
    );
};

export default ContactForm;
