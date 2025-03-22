import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e){
        e.preventDefault();
        alert("Message Sent!");
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    }

    return (
        <section id="contact" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
                <motion.div
                    initial={{opacity:0 ,x: -100}}
                    whileInView={{opacity:1, x: 0}}
                    transition={{duration: 1}} 
                    className='flex justify-center'>
                    <form onSubmit={handleSubmit} className="bg-white p-6 w-full rounded shadow-md max-w-lg">
                        <div className='mb-4'>
                            <label htmlFor="name" className="block text-gray-700 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 mt-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="email" className="block text-gray-700 font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 mt-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="message" className="block text-gray-700 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 mt-2 border-2 border-gray-300 rounded outline-none focus:border-blue-500"
                                placeholder="Your Message"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full mt-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
