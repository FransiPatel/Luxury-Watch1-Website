import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col items-center text-center w-full"
        >
            <Link to={`/product/${product.id}`} className="w-full block">
                {/* Image Container with Luxury Hover */}
                <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 rounded-xl bg-gray-100 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm group-hover:shadow-2xl transition-all duration-500">

                    {/* Background Gradient Blob (Subtle) */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600/10 dark:bg-yellow-400/10 rounded-full blur-2xl transform translate-x-10 -translate-y-10" />

                    {/* Product Image - Scales on Hover */}
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 relative z-10 p-6 mix-blend-darken dark:mix-blend-normal"
                    />

                    {/* The "Luxury Hover" Overlay */}
                    <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="flex items-center space-x-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="uppercase text-xs font-bold tracking-[0.2em]">View Timepiece</span>
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </div>

                {/* Typography details */}
                <h3 className="text-xl font-serif text-slate-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {product.name}
                </h3>
                <p className="text-slate-500 dark:text-gray-400 font-medium text-xs uppercase tracking-widest">
                    {product.price}
                </p>
            </Link>
        </motion.div>
    );
};

export default ProductCard;
