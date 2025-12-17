import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import LuxuryMap from '../components/LuxuryMap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        date: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 min-h-screen bg-gray-50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300"
        >
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-16 text-center">
                <motion.h1
                    className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Concierge Services
                </motion.h1>
                <div className="w-24 h-[1px] bg-yellow-600 dark:bg-yellow-400 mx-auto mb-6"></div>
                <motion.p
                    className="text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    Experience Chronos & Co. firsthand. Whether you wish to book a private viewing or require assistance with your timepiece, our dedicated concierge team is at your service.
                </motion.p>
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">

                {/* Left Column: Contact Info */}
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="space-y-12">
                        {/* Address */}
                        <div>
                            <h3 className="text-yellow-600 dark:text-yellow-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                Boutique Address
                            </h3>
                            <p className="font-serif text-2xl mb-2">Chronos & Co. Flagship</p>
                            <p className="text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                                123 Luxury Avenue<br />
                                The Plaza District<br />
                                New York, NY 10019
                            </p>
                        </div>

                        {/* Hours */}
                        <div>
                            <h3 className="text-yellow-600 dark:text-yellow-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                Opening Hours
                            </h3>
                            <div className="text-slate-600 dark:text-gray-400 font-light space-y-1">
                                <p><span className="text-slate-900 dark:text-white w-24 inline-block">Mon - Sat:</span> 10:00 AM - 8:00 PM</p>
                                <p><span className="text-slate-900 dark:text-white w-24 inline-block">Sunday:</span> By Appointment Only</p>
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-yellow-600 dark:text-yellow-400 uppercase tracking-widest text-xs font-bold mb-4 flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                Direct Line
                            </h3>
                            <p className="text-xl font-light hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors cursor-pointer">+1 (555) 000-0000</p>
                            <p className="text-sm text-slate-500 dark:text-gray-500 mt-2">concierge@chronosandco.com</p>
                        </div>

                        {/* Socials */}
                        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex space-x-6 text-slate-400 dark:text-gray-400">
                            <Instagram className="w-5 h-5 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors cursor-pointer" />
                            <Twitter className="w-5 h-5 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors cursor-pointer" />
                            <Facebook className="w-5 h-5 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors cursor-pointer" />
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: The Form */}
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white dark:bg-zinc-900 p-8 md:p-12 border border-gray-200 dark:border-zinc-800 shadow-xl dark:shadow-none transition-colors duration-300 rounded-xl"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 text-slate-900 dark:text-white outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors font-light"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 text-slate-900 dark:text-white outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors font-light"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2">Subject</label>
                            <div className="relative">
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 text-slate-900 dark:text-white outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors font-light appearance-none cursor-pointer"
                                >
                                    <option className="bg-gray-50 dark:bg-black text-slate-900 dark:text-gray-300">General Inquiry</option>
                                    <option className="bg-gray-50 dark:bg-black text-slate-900 dark:text-gray-300">Service & Repair</option>
                                    <option className="bg-gray-50 dark:bg-black text-slate-900 dark:text-gray-300">Book an Appointment</option>
                                </select>
                            </div>
                        </div>

                        {/* Conditional Date Input */}
                        <AnimatePresence>
                            {formData.subject === 'Book an Appointment' && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-2">
                                        <label className="block text-xs uppercase tracking-widest text-yellow-600 dark:text-yellow-400 mb-2">Preferred Date & Time</label>
                                        <input
                                            type="datetime-local"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 text-slate-900 dark:text-white outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors font-light placeholder-gray-400 dark:placeholder-gray-600"
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 dark:text-gray-500 mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-transparent border-b border-gray-200 dark:border-gray-700 py-2 text-slate-900 dark:text-white outline-none focus:border-yellow-600 dark:focus:border-yellow-400 transition-colors font-light resize-none"
                                placeholder="How can we assist you?"
                            ></textarea>
                        </div>

                        <button type="button" className="w-full py-4 bg-yellow-600 dark:bg-yellow-400 text-white dark:text-black font-bold uppercase tracking-widest hover:bg-yellow-700 dark:hover:bg-white transition-colors duration-300 flex items-center justify-center">
                            <span>Send Request</span>
                            <Send className="w-4 h-4 ml-2" />
                        </button>
                    </form>
                </motion.div>
            </div>

            {/* Interactive Luxury Map Section */}
            <LuxuryMap />

        </motion.div>
    );
};

export default Contact;
