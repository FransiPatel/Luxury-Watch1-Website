import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RefreshCw, Globe } from 'lucide-react';

const ShippingReturns = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-black min-h-screen pt-24 pb-12 px-6"
        >
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-8 text-center">Shipping & Returns</h1>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <Globe className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Global Shipping</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">Complimentary insured shipping worldwide.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <Truck className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Express Delivery</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">2-4 business days for major international cities.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <RefreshCw className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">30-Day Returns</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">Hassle-free returns within 30 days of delivery.</p>
                        </div>
                    </div>

                    <div className="space-y-8 text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif text-slate-900 dark:text-white mb-4">Shipping Policy</h2>
                            <p className="mb-4">
                                Depending on your location, shipping is handled by DHL Express or FedEx Priority. All shipments are fully insured and require a signature upon delivery. We process orders within 1-2 business days.
                            </p>
                            <p>
                                Please note that import duties and taxes are not included in the item price or shipping cost. These charges are the buyer's responsibility and will be collected by the carrier upon delivery.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif text-slate-900 dark:text-white mb-4">Return Policy</h2>
                            <p className="mb-4">
                                We want you to be completely satisfied with your Chronos & Co. timepiece. If for any reason you are not, we will accept a return of any unworn watch in its original condition and packaging within 30 days of receipt.
                            </p>
                            <p>
                                To initiate a return, please contact our support team. Once the return is received and inspected, we will send you an email to notify you that we have received your returned item and the status of your refund.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ShippingReturns;
