import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const variants = [
    {
        id: 'gold',
        name: 'Chronos Gold Edition',
        subtitle: 'Classic Elegance',
        color: '#D4AF37',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop', // Gold Isolated
        style: {}
    },
    {
        id: 'silver',
        name: 'Chronos Silver Edition',
        subtitle: 'Modern Minimalist',
        color: '#E5E5E5',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
        style: { filter: 'grayscale(100%) contrast(1.2)' } // Simulated Silver
    },
    {
        id: 'rosegold',
        name: 'Chronos Rose Edition',
        subtitle: 'Romantic Allure',
        color: '#E0BFB8',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1000&auto=format&fit=crop',
        style: { filter: 'sepia(50%) hue-rotate(315deg) saturate(1.5) contrast(1.1)' } // Simulated Rose Gold
    }
];

const ProductShowcase = () => {
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);

    return (
        <section id="collection" className="py-24 bg-white dark:bg-[#0F0F0F] relative transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-luxury-green dark:text-white mb-4">The Collection</h2>
                    <div className="w-16 h-[2px] bg-luxury-bronze dark:bg-luxury-gold mx-auto"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
                    {/* Image Side */}
                    <div className="md:w-1/2 flex justify-center relative h-[500px] w-full items-center">
                        {/* Abstract Background Element */}
                        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-luxury-green/10 dark:border-white/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border border-luxury-bronze/20 dark:border-luxury-gold/10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={selectedVariant.id}
                                src={selectedVariant.image}
                                alt={selectedVariant.name}
                                style={selectedVariant.style}
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="max-h-[400px] md:max-h-[550px] object-contain drop-shadow-2xl relative z-10"
                            />
                        </AnimatePresence>
                    </div>

                    {/* Content Side */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <div className="overflow-hidden mb-2">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={`sub-${selectedVariant.id}`}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    className="text-luxury-bronze dark:text-luxury-gold tracking-widest uppercase text-sm font-semibold"
                                >
                                    {selectedVariant.subtitle}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="h-20 mb-4 flex items-center justify-center md:justify-start">
                            <AnimatePresence mode="wait">
                                <motion.h3
                                    key={`title-${selectedVariant.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl lg:text-5xl font-serif text-luxury-green dark:text-white"
                                >
                                    {selectedVariant.name}
                                </motion.h3>
                            </AnimatePresence>
                        </div>

                        <p className="text-2xl text-luxury-green/70 dark:text-gray-300 mb-8 font-light">$12,500.00</p>

                        <p className="text-luxury-green/70 dark:text-gray-400 mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                            A masterpiece of engineering and design. Featuring our signature automatic movement and a casing that defies the elements.
                        </p>

                        <div className="mb-10">
                            <p className="text-xs uppercase tracking-widest text-luxury-green/50 dark:text-gray-500 mb-4">Select Material</p>
                            <div className="flex space-x-6 justify-center md:justify-start">
                                {variants.map((variant) => (
                                    <button
                                        key={variant.id}
                                        onClick={() => setSelectedVariant(variant)}
                                        className={`w-10 h-10 rounded-full relative outline-none focus:outline-none transition-all duration-300 ${selectedVariant.id === variant.id ? 'transform scale-125' : 'opacity-60 hover:opacity-100'}`}
                                        aria-label={`Select ${variant.name}`}
                                    >
                                        <div
                                            className="w-full h-full rounded-full border border-gray-300 dark:border-gray-700 shadow-lg"
                                            style={{ backgroundColor: variant.color }}
                                        />
                                        {selectedVariant.id === variant.id && (
                                            <motion.div
                                                layoutId="ring"
                                                className="absolute -inset-2 rounded-full border border-luxury-bronze dark:border-luxury-gold"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="px-12 py-4 bg-luxury-green text-luxury-cream dark:bg-white dark:text-black font-semibold uppercase tracking-[0.2em] hover:bg-luxury-bronze dark:hover:bg-luxury-gold hover:text-white dark:hover:text-black transition-colors duration-300">
                            Add to Bag
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProductShowcase;
