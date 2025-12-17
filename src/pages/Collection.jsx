import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Collection = () => {
    const [filter, setFilter] = useState('All');

    // Filter Logic
    const filteredProducts = useMemo(() => {
        if (filter === 'All') return products;
        if (filter === 'Limited Edition') return products.filter(p => p.category === 'Limited');
        return products.filter(p => p.category === filter);
    }, [filter]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-32 pb-24 min-h-screen container mx-auto px-6"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif text-luxury-green dark:text-white mb-6">The Masterpiece Collection</h1>
                <div className="w-24 h-[1px] bg-luxury-bronze dark:bg-luxury-gold mx-auto"></div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-8 mb-16 text-sm tracking-widest uppercase font-medium text-luxury-green/40 dark:text-gray-400">
                {['All', 'Men', 'Women', 'Limited Edition'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`pb-1 border-b-2 transition-colors duration-300 ${filter === category
                                ? 'text-luxury-bronze border-luxury-bronze dark:text-luxury-gold dark:border-luxury-gold'
                                : 'border-transparent hover:text-luxury-green dark:hover:text-white'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
                <AnimatePresence>
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-luxury-green/50 dark:text-gray-500 font-serif italic">
                    No timepieces found in this category.
                </div>
            )}

        </motion.div>
    );
};

export default Collection;
