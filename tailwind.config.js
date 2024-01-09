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
            satoshi: ["Satoshi", "Satoshi Placeholder", "sans-serif"],
        },
        extend: {
            colors: {
                customGray: "rgb(189, 189, 189)",
                customWhite: "rgb(255, 255, 255)",
            },
        },
    },
    plugins: [],
};
