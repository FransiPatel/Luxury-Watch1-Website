/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'luxury-black': '#0a0a0a',
                'luxury-gold': '#D4AF37',
                'luxury-white': '#E5E5E5',
                'luxury-cream': '#F5F5F0',
                'luxury-green': '#1A2E26',
                'luxury-bronze': '#B8860B',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Montserrat"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
