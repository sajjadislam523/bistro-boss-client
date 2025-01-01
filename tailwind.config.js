/** @type {import('tailwindcss').Config} */
export default {
    content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            cinzel: ["Cinzel", "serif"],
        },
        extend: {
            backgroundImage: {
                authBg: "url('./src/assets/others/authentication.png')",
            },
        },
    },
    plugins: [require("daisyui")],
};
