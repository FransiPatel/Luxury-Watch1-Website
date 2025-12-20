import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar, Wrench } from 'lucide-react';

const Warranty = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-8 text-center">Warranty & Care</h1>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-12" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <ShieldCheck className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">5-Year Warranty</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">Comprehensive coverage on movement and craftsmanship.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <Calendar className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Extended Care</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">Optional service plans available for long-term peace of mind.</p>
                        </div>
                        <div className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm text-center">
                            <Wrench className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                            <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2">Expert Service</h3>
                            <p className="text-sm text-slate-500 dark:text-gray-400">Repairs performed by certified master watchmakers.</p>
                        </div>
                    </div>

                    <div className="space-y-6 text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                        <h2 className="text-2xl font-serif text-slate-900 dark:text-white">Warranty Policy</h2>
                        <p>
                            Chronos & Co. warrants that your watch will be free from defects in material and workmanship for a period of five (5) years from the date of purchase. This warranty covers the watch movement, hands, and dial.
                        </p>
                        <p>
                            The warranty does not cover:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Battery life or normal wear and tear and aging (e.g. scratched crystal, alteration of the color and/or material of non-metallic straps and chains, such as leather, textile, rubber).</li>
                            <li>Any damage on any part of the watch resulting from abnormal/abusive use, lack of care, negligence, accidents (knocks, dents, crushing, broken crystal, etc.).</li>
                            <li>Handling of the watch by non-authorized persons (e.g. for battery replacement, services or repairs) or which involves alterations to the original condition beyond Chronos & Co.’s control.</li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Warranty;
