/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            cinzel: ["Cinzel", "serif"],
        },
        extend: {},
    },
    plugins: [require("daisyui")],
};
