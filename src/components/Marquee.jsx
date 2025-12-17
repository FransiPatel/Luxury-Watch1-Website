import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    const text = "SWISS ENGINEERED • EST. 1924 • PRECISION CRAFTSMANSHIP • LIFETIME WARRANTY • ";

    return (
        <div className="w-full py-6 md:py-8 bg-luxury-cream dark:bg-luxury-black overflow-hidden flex items-center border-t border-b border-luxury-green/10 dark:border-white/10 transition-colors duration-300">
            <div className="relative flex overflow-hidden w-full mask-linear-fade">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                >
                    <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text opacity-30 dark:opacity-20 px-4">
                        {text.repeat(4)}
                    </span>
                    <span className="text-4xl md:text-6xl font-serif text-transparent stroke-text opacity-30 dark:opacity-20 px-4">
                        {text.repeat(4)}
                    </span>
                </motion.div>
            </div>

            <style jsx>{`
        .stroke-text {
            -webkit-text-stroke: 1px currentColor;
            color: transparent;
            /* In Light mode, stroke is green. In Dark mode, stroke is white. */
        }
        /* Color handling via Tailwind classes on parent but text-stroke needs specific handling or inherit */
        .stroke-text {
            /* Tailwind 'text-luxury-green' hex is #1A2E26 */
            /* Tailwind 'text-white' hex is #ffffff */
            -webkit-text-stroke-color: #1A2E26;
        }
        :global(.dark) .stroke-text {
             -webkit-text-stroke-color: #ffffff;
        }
      `}</style>
        </div>
    );
};

export default Marquee;
