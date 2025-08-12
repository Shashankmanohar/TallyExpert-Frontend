import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const contact = [
    
    { id: 1, title: "Email Address", detail: "info@tallyexpert.com", icon: faEnvelope },
    { id: 2, title: "Office Hour", detail: "Monday to Saturday: 8.30am – 03.00pm", icon: faClock }
];

const locations = [
    {
        id: 1,
        city: "BiharSharif, Nalanda",
        address: "Navinagar",
        lat: "25.158741",
        lng: "85.484307"
    }
];

export default function Contact() {
    
    return (
        <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center">
            <ToastContainer position="top-right" autoClose={3000} />
            <h1 className='text-3xl md:text-5xl font-semibold text-[#081646] mt-8 md:mt-12'>Contact Us</h1>

            {/* Contact Cards */}
            <div className="w-full min-h-auto rounded-t-[60px] md:rounded-t-[100px] flex flex-col md:flex-row items-center bg-[#ffffff] mt-8 md:mt-15 p-4 md:p-6">
                <div className="w-full h-auto p-10 flex flex-wrap justify-center gap-6">
                    {contact.map((c) => (
                        <div key={c.id} className="bg-[#F7F9FC] border rounded-2xl shadow-lg w-72 md:w-300 p-6 text-center flex flex-col items-center">
                            <div className="w-16 h-16 bg-[#FF6464] flex items-center justify-center rounded-full">
                                <FontAwesomeIcon icon={c.icon} className="text-white text-2xl" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#081646] mt-4">{c.title}</h3>
                            <p className="text-gray-600 text-md mt-2">{c.detail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
