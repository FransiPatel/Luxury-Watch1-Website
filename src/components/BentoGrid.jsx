import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Snowflake, ArrowUpRight } from 'lucide-react';

const BentoGrid = () => {
    const { scrollYProgress } = useScroll();
    const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="craftsmanship" className="py-24 px-4 bg-gray-50 dark:bg-black transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">

                <div className="text-center mb-16">
                    <p className="text-xs font-bold tracking-[0.2em] text-yellow-600 dark:text-yellow-500 uppercase mb-4">Architectural Precision</p>
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white">Every Detail Counted</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:h-[800px]">

                    {/* Cell 1: Large Feature Image (Span 2 col, 2 row) */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group">
                        <motion.div style={{ y: yParallaxSlow }} className="absolute inset-0 h-[120%] w-full">
                            <img
                                src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop"
                                alt="Watch Movement"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h3 className="text-2xl font-serif mb-1">In-House Movement</h3>
                            <p className="text-sm font-light text-gray-300">Caliber 9001 - 72h Reserve</p>
                        </div>
                    </div>

                    {/* Cell 2: Minimal Text (Span 1 col, 1 row) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between border border-gray-100 dark:border-zinc-800 shadow-sm transition-colors duration-300 group hover:border-yellow-600/30">
                        <div className="w-10 h-10 rounded-full bg-yellow-600/10 flex items-center justify-center text-yellow-600">
                            <Snowflake className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-serif text-slate-900 dark:text-white mb-2">316L</h4>
                            <p className="text-sm text-slate-500 dark:text-gray-400 font-medium tracking-wide">Surgical Grade Stainless Steel</p>
                        </div>
                    </div>

                    {/* Cell 3: Vertical Strap Image (Span 1 col, 2 row) */}
                    <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden group">
                        <motion.div style={{ y: yParallaxFast }} className="absolute inset-0 h-[120%] w-full">
                            <img
                                src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1000&auto=format&fit=crop"
                                alt="Leather Strap"
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                            />
                        </motion.div>
                        <div className="absolute top-6 right-6">
                            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-6 text-white z-10">
                            <h3 className="text-xl font-serif">Italian Leather</h3>
                        </div>
                    </div>

                    {/* Cell 4: Warranty Block (Span 1 col, 1 row) */}
                    <div className="md:col-span-1 md:row-span-1 bg-yellow-600 text-white rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-lg">
                        <ShieldCheck className="w-12 h-12 mb-4 text-white/90" />
                        <h4 className="text-2xl font-serif mb-2">Lifetime Warranty</h4>
                        <p className="text-xs text-white/80 uppercase tracking-widest font-semibold">Global Coverage</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
