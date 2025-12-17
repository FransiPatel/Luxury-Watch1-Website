import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position state
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px cursor
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            // Check if hovering over interactive elements or images
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('.cursor-pointer') ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.tagName.toLowerCase() === 'img'
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-luxury-green dark:border-luxury-gold pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
                borderColor: isHovered ? 'transparent' : 'currentColor',
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
        >
            <motion.span
                className="text-[8px] font-bold text-black uppercase tracking-widest"
                animate={{ opacity: isHovered ? 1 : 0 }}
            >
                View
            </motion.span>
        </motion.div>
    );
};

export default CustomCursor;
