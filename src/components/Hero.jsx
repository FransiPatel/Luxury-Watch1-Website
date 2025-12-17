import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';

// Updated Reliable Image Assets
const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1200", // Mechanism (Dark)
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1200", // Classic Watch (Lifestyle)
    "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1200"  // Gold Watch (Detail)
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    // Auto-slide Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const revealVariant = {
        hidden: { y: "100%" },
        visible: {
            y: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // Ken Burns Animation Variants
    const kenBurnsVariant = {
        initial: { scale: 1, opacity: 0 },
        animate: {
            scale: 1.1,
            opacity: 1,
            transition: {
                scale: { duration: 7, ease: "linear" },
                opacity: { duration: 1.5, ease: "easeOut" }
            }
        },
        exit: { opacity: 0, transition: { duration: 1.5 } }
    };

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen bg-gray-900 overflow-hidden"
        >

            {/* Cinematic Background Slideshow */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={currentImageIndex}
                        className="absolute inset-0 w-full h-full"
                        variants={kenBurnsVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <img
                            src={HERO_IMAGES[currentImageIndex]}
                            alt={`Hero Background ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Wrapper - Using Global Padding Rule */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-12 lg:px-20 py-20 md:py-24">

                {/* Top Text */}
                <div className="w-full text-white pointer-events-none mix-blend-overlay flex justify-center mt-4">
                    <div className="overflow-hidden">
                        <motion.h1
                            variants={revealVariant}
                            initial="hidden"
                            animate="visible"
                            className="text-[8vw] leading-[0.8] font-serif font-medium tracking-tighter text-center opacity-90"
                        >
                            TIMELESS
                        </motion.h1>
                    </div>
                </div>

                {/* Call To Action */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 animate-fade-in text-center w-full">
                    <Link to="/collection">
                        <MagneticButton className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all duration-300 shadow-2xl inline-block">
                            Explore Collection
                        </MagneticButton>
                    </Link>
                </div>

                {/* Bottom Text */}
                <div className="w-full text-white pointer-events-none mix-blend-overlay flex justify-center mb-8">
                    <div className="overflow-hidden">
                        <motion.h1
                            variants={revealVariant}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.1 }}
                            className="text-[8vw] leading-[0.8] font-serif italic font-light tracking-wide text-center opacity-90"
                        >
                            PRECISION
                        </motion.h1>
                    </div>
                </div>

            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 right-8 md:right-16 z-30 flex space-x-2">
                {HERO_IMAGES.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                    />
                ))}
            </div>

        </section>
    );
};

export default Hero;
