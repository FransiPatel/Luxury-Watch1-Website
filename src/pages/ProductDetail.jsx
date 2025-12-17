import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import { ChevronDown, ArrowLeft, Truck, ShieldCheck, Ruler } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    // Accordion State
    const [openSection, setOpenSection] = useState('specs'); // 'specs', 'shipping', 'warranty'

    if (!product) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-luxury-green dark:text-white">
                <h2 className="text-2xl font-serif mb-4">Timepiece not found</h2>
                <button onClick={() => navigate('/collection')} className="text-luxury-bronze dark:text-luxury-gold underline">Return to Collection</button>
            </div>
        )
    }

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-24 pb-12 min-h-screen bg-luxury-cream dark:bg-luxury-black text-luxury-green dark:text-white transition-colors duration-300"
        >
            <div className="container mx-auto px-6">

                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link to="/collection" className="inline-flex items-center text-luxury-green/60 dark:text-gray-400 hover:text-luxury-bronze dark:hover:text-luxury-gold text-xs tracking-widest uppercase transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Collection
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Visual Side */}
                    <motion.div
                        className="relative h-[500px] lg:h-[700px] bg-white dark:bg-[#0f0f0f] shadow-xl dark:shadow-none flex items-center justify-center overflow-hidden transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Details Side */}
                    <motion.div
                        className="flex flex-col justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <p className="text-luxury-bronze dark:text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-4">{product.category} Collection</p>
                        <h1 className="text-4xl lg:text-5xl font-serif text-luxury-green dark:text-white mb-6 leading-tight">{product.name}</h1>
                        <h2 className="text-3xl font-light text-luxury-green/80 dark:text-gray-200 mb-8">{product.price}</h2>

                        <p className="text-luxury-green/70 dark:text-gray-400 leading-relaxed mb-10 font-light">
                            {product.description}
                        </p>

                        <button className="w-full py-4 bg-luxury-green text-luxury-cream dark:bg-luxury-gold dark:text-black font-semibold uppercase tracking-[0.2em] hover:bg-luxury-bronze dark:hover:bg-white transition-colors duration-300 mb-12 shadow-lg dark:shadow-none">
                            Add to Bag
                        </button>

                        {/* Accordion / Tabs */}
                        <div className="border-t border-luxury-green/20 dark:border-gray-800">
                            {/* Specs */}
                            <AccordionItem
                                title="Specifications"
                                isOpen={openSection === 'specs'}
                                onClick={() => toggleSection('specs')}
                                icon={<Ruler className="w-4 h-4" />}
                            >
                                <ul className="text-sm text-luxury-green/70 dark:text-gray-400 space-y-2 font-light">
                                    <li className="flex justify-between"><span>Case Material</span> <span>18k Gold / Platinum</span></li>
                                    <li className="flex justify-between"><span>Movement</span> <span>Swiss Automatic Caliber</span></li>
                                    <li className="flex justify-between"><span>Diameter</span> <span>42 mm</span></li>
                                    <li className="flex justify-between"><span>Water Resistance</span> <span>100 m</span></li>
                                </ul>
                            </AccordionItem>

                            {/* Shipping */}
                            <AccordionItem
                                title="Shipping & Returns"
                                isOpen={openSection === 'shipping'}
                                onClick={() => toggleSection('shipping')}
                                icon={<Truck className="w-4 h-4" />}
                            >
                                <p className="text-sm text-luxury-green/70 dark:text-gray-400 font-light leading-relaxed">
                                    Complimentary worldwide shipping via secure courier. Orders are processed within 24 hours.
                                    We offer a 30-day return policy for items in unworn condition.
                                </p>
                            </AccordionItem>

                            {/* Warranty */}
                            <AccordionItem
                                title="Warranty"
                                isOpen={openSection === 'warranty'}
                                onClick={() => toggleSection('warranty')}
                                icon={<ShieldCheck className="w-4 h-4" />}
                            >
                                <p className="text-sm text-luxury-green/70 dark:text-gray-400 font-light leading-relaxed">
                                    Each Chronos timepiece is backed by a comprehensive 5-year international warranty covering manufacturing defects and movement precision.
                                </p>
                            </AccordionItem>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

// Helper Component for Accordion
const AccordionItem = ({ title, isOpen, onClick, children, icon }) => {
    return (
        <div className="border-b border-luxury-green/20 dark:border-gray-800">
            <button
                onClick={onClick}
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none group"
            >
                <div className="flex items-center space-x-3 text-luxury-green dark:text-white group-hover:text-luxury-bronze dark:group-hover:text-luxury-gold transition-colors">
                    {icon}
                    <span className="uppercase text-xs font-semibold tracking-widest">{title}</span>
                </div>
                <ChevronDown
                    className={`w-4 h-4 text-luxury-green/50 dark:text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 pt-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ProductDetail;
