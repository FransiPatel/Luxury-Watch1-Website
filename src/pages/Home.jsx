import React from 'react';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import ProductShowcase from '../components/ProductShowcase';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <BentoGrid />
            <ProductShowcase />
        </motion.div>
    );
};

export default Home;
