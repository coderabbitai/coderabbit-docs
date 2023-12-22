// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    corePlugins: {
        preflight: false, // disable Tailwind's reset
    },
    content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
    darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
    theme: {
        fontFamily: {
            figtree: ["Figtree", "sans-serif"],
            // You can replace 'figtree' with any name you want to use for the font family
            // 'Figtree' should match the name specified in the Google Fonts link
        },
        extend: {},
    },
    plugins: [],
};
