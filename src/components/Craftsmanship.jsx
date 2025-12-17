import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Activity, PenTool } from 'lucide-react';

const Craftsmanship = () => {

    const features = [
        { text: "Swiss Movement", sub: "Automatic Caliber" },
        { text: "Sapphire Crystal", sub: "Anti-reflective Coating" },
        { text: "Hand-stitched Leather", sub: "Italian Full Grain" }
    ];

    return (
        <section id="craftsmanship" className="py-24 bg-luxury-cream dark:bg-luxury-black overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    className="order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-luxury-green dark:text-white mb-8 leading-tight">
                        The Art of <span className="text-luxury-bronze dark:text-luxury-gold italic">Horology</span>
                    </h2>
                    <p className="text-luxury-green/70 dark:text-gray-400 mb-10 leading-relaxed font-light text-lg">
                        Every Chronos timepiece is a result of hundreds of hours of meticulous craftsmanship.
                        From the hand-polished surfaces to the intricate movement within, we ensure perfection in every detail.
                    </p>

                    <ul className="space-y-8">
                        {features.map((item, index) => (
                            <li key={index} className="flex flex-col space-y-1">
                                <div className="flex items-center space-x-4">
                                    <span className="h-px w-12 bg-luxury-bronze dark:bg-luxury-gold"></span>
                                    <span className="uppercase tracking-[0.15em] text-luxury-green dark:text-luxury-white font-medium">{item.text}</span>
                                </div>
                                <span className="pl-16 text-sm text-luxury-green/50 dark:text-gray-500 font-light italic">{item.sub}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image with Loupe Effect */}
                <motion.div
                    className="order-1 md:order-2 relative overflow-hidden h-[600px] w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full h-full overflow-hidden group cursor-crosshair relative shadow-2xl dark:shadow-none">
                        <img
                            src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop"
                            alt="Watch Mechanism"
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Craftsmanship;
