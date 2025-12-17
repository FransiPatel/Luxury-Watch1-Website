import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Settings, CheckCircle } from 'lucide-react';

const Craftsmanship = () => {
    // New Reliable Image Assets
    const HEADER_IMG = "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1200";
    const MOVEMENT_IMG = "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200";
    const MATERIAL_IMG = "https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=800";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-black min-h-screen pt-0"
        >
            {/* Header / Banner */}
            <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${HEADER_IMG}')` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative z-10 text-center text-white p-4"
                >
                    <h1 className="text-5xl md:text-7xl font-serif mb-4">The Atelier</h1>
                    <p className="text-sm md:text-lg font-light tracking-[0.2em] uppercase opacity-90">Where Art Meets Engineering</p>
                </motion.div>
            </section>

            {/* Section A: The Movement */}
            <section className="py-24 px-6 md:px-12 lg:px-20 container mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    <motion.div
                        className="md:w-1/2 overflow-hidden rounded-2xl shadow-2xl"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={MOVEMENT_IMG}
                            alt="Swiss Movement"
                            className="w-full h-auto hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-6">The Heartbeat</h2>
                        <div className="w-16 h-[2px] bg-yellow-600 mb-8" />
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light mb-6">
                            At the core of every Chronos timepiece lies a Swiss-made automatic caliber.
                            Comprising over 200 individual components, assembled by hand, our movements typically feature a 72-hour power reserve.
                        </p>
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light">
                            The oscillation of the balance wheel is the heartbeat of the watch—a steady, hypnotic rhythm that measures time with chronometric precision.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section B: The Materials - Fix: Added explicit Padding Wrapper */}
            <section className="py-24 bg-white dark:bg-zinc-900/50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                    <motion.div
                        className="md:w-1/2 overflow-hidden rounded-2xl shadow-2xl"
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={MATERIAL_IMG}
                            alt="High Grade Materials"
                            className="w-full h-auto hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                    <motion.div
                        className="md:w-1/2"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-6">Uncompromising Strength</h2>
                        <div className="w-16 h-[2px] bg-yellow-600 mb-8" />
                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-light mb-6">
                            We use only Grade 5 Titanium and 316L Surgical Stainless Steel.
                            These materials are selected for their exceptional strength-to-weight ratio and resistance to corrosion using advanced metallurgy.
                        </p>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-gray-400 font-medium tracking-wide">
                            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span> Sapphire Crystal Glass</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span> Diamond-Cut Indices</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span> PVD Gold Coating</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Section C: The Process Grid */}
            <section className="py-24 px-6 md:px-12 lg:px-20 container mx-auto text-center">
                <motion.div
                    className="mb-16"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-4">The Process</h2>
                    <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto font-light">From sketch to wrist, a journey of passion.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ProcessCard
                        icon={<PenTool className="w-8 h-8" />}
                        title="Design"
                        description="Every curve is deliberated. Our designers spend months refining the ergonomics and aesthetics."
                    />
                    <ProcessCard
                        icon={<Settings className="w-8 h-8" />}
                        title="Assembly"
                        description="Master watchmakers assemble the movement in a dust-free environment, ensuring perfect alignment."
                    />
                    <ProcessCard
                        icon={<CheckCircle className="w-8 h-8" />}
                        title="Quality Control"
                        description="Each watch undergoes a rigorous 500-hour testing phase to guarantee accuracy and durability."
                    />
                </div>
            </section>

        </motion.div>
    );
};

// Helper Card
const ProcessCard = ({ icon, title, description }) => (
    <motion.div
        className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
    >
        <div className="w-16 h-16 mx-auto bg-slate-50 dark:bg-black rounded-full flex items-center justify-center text-yellow-600 mb-6 border border-gray-100 dark:border-zinc-800">
            {icon}
        </div>
        <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-4">{title}</h3>
        <p className="text-slate-500 dark:text-gray-400 font-light text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export default Craftsmanship;
