import React from 'react';
import { ArrowRight, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-black py-16 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-900 dark:text-white">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-2xl font-serif text-slate-900 dark:text-yellow-400 mb-6 tracking-widest">CHRONOS</h4>
                        <div className="flex space-x-4 text-slate-500 dark:text-gray-400">
                            <Instagram className="w-5 h-5 hover:text-yellow-600 dark:hover:text-white cursor-pointer transition-colors" />
                            <Facebook className="w-5 h-5 hover:text-yellow-600 dark:hover:text-white cursor-pointer transition-colors" />
                            <Twitter className="w-5 h-5 hover:text-yellow-600 dark:hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-span-1">
                        <h5 className="uppercase tracking-widest text-xs font-bold text-slate-400 dark:text-gray-500 mb-6">Explore</h5>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-300 font-light">
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Collection</a></li>
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Craftsmanship</a></li>
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Our Story</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h5 className="uppercase tracking-widest text-xs font-bold text-slate-400 dark:text-gray-500 mb-6">Support</h5>
                        <ul className="space-y-4 text-sm text-slate-600 dark:text-gray-300 font-light">
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors">Warranty</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-1 md:col-span-1">
                        <h5 className="uppercase tracking-widest text-xs font-bold text-slate-400 dark:text-gray-500 mb-6">Newsletter</h5>
                        <p className="text-sm text-slate-600 dark:text-gray-400 mb-6 font-light">Subscribe to receive updates on new arrivals and exclusive events.</p>
                        <div className="flex items-center border-b border-gray-300 dark:border-gray-700 pb-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent w-full outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-600 font-light"
                            />
                            <button className="text-yellow-600 dark:text-yellow-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-gray-600 font-light uppercase tracking-wider">
                    <p>&copy; 2025 Chronos & Co. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
