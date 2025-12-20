import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleLinkClick = () => setIsMobileMenuOpen(false);

    // Navbar Background: Always Glass Dark for visibility
    const navBackground = 'bg-black/30 backdrop-blur-md border-b border-white/10 shadow-lg';

    // Helper to check active state
    const isActive = (path) => location.pathname === path;

    // Link styling helper - Now always white text for contrast on the glass dark bar
    const getLinkClasses = (path) => {
        const base = "uppercase text-xs font-medium transition-colors relative group tracking-widest ";
        const active = "text-yellow-400";
        const inactive = "text-white hover:text-yellow-400";

        return `${base} ${isActive(path) ? active : inactive}`;
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${navBackground}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-serif font-bold tracking-widest relative z-50 text-white transition-colors hover:text-yellow-400">
                    CHRONOS & CO.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-12 items-center text-sm tracking-widest">
                    <Link to="/collection" className={getLinkClasses("/collection")}>
                        Collection
                        {isActive("/collection") && (
                            <motion.span layoutId="underline" className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400" />
                        )}
                    </Link>
                    <Link to="/craftsmanship" className={getLinkClasses("/craftsmanship")}>
                        Craftsmanship
                        {isActive("/craftsmanship") && (
                            <motion.span layoutId="underline" className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400" />
                        )}
                    </Link>
                    <Link to="/contact" className={getLinkClasses("/contact")}>
                        Contact
                        {isActive("/contact") && (
                            <motion.span layoutId="underline" className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-yellow-400" />
                        )}
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6 text-white">
                    <button
                        onClick={toggleTheme}
                        className="hover:text-yellow-400 transition-colors"
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                            transition={{ duration: 0.5 }}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </motion.div>
                    </button>

                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden z-50 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown (Drawer Style) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 z-40 flex flex-col items-center py-12 gap-8 md:hidden shadow-2xl"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            to="/collection"
                            className={`text-xl font-serif tracking-widest ${isActive('/collection') ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                            onClick={handleLinkClick}
                        >
                            Collection
                        </Link>
                        <Link
                            to="/craftsmanship"
                            className={`text-xl font-serif tracking-widest ${isActive('/craftsmanship') ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                            onClick={handleLinkClick}
                        >
                            Craftsmanship
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-xl font-serif tracking-widest ${isActive('/contact') ? 'text-yellow-400' : 'text-white hover:text-yellow-400'}`}
                            onClick={handleLinkClick}
                        >
                            Contact
                        </Link>

                        <div className="flex space-x-8 mt-4 items-center text-white/80">
                            <button
                                onClick={toggleTheme}
                                className="hover:text-yellow-400 transition-colors bg-white/5 p-3 rounded-full"
                            >
                                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
