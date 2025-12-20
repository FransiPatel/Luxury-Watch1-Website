import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white mb-8 text-center">Our Story</h1>
                    <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-12" />

                    <div className="space-y-8 text-slate-600 dark:text-gray-300 font-light leading-relaxed text-lg">
                        <p>
                            Founded in 2025, Chronos & Co. was born from a simple yet ambitious vision: to redefine luxury for the modern era. We believe that a watch is more than just a timekeeping device; it is a statement of intent, a piece of history on your wrist, and a legacy to be passed down.
                        </p>
                        <p>
                            Our journey began in a small atelier, where our founders combined traditional Swiss watchmaking techniques with contemporary design aesthetics. Every timepiece we create is a testament to this fusion—bold, elegant, and mechanically superior.
                        </p>
                        <p>
                            We scour the globe for the finest materials: Grade 5 Titanium, sapphire crystal, and ethically sourced leather. But materials are nothing without mastery. That’s why we collaborate with the world’s most skilled artisans to assemble each watch, ensuring that perfection isn't just a goal, but a standard.
                        </p>
                        <p>
                            Chronos & Co. is not just about selling watches; it's about building a community of individuals who value time, precision, and the art of living well. Welcome to our story.
                        </p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default OurStory;
