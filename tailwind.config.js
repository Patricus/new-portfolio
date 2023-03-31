/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            emerald: "#35ce8d",
            charcoal: "#3e505b",
            columbiaBlue: "#c1dff0",
            eerieBlack: "#1a1a1a",
            night: "#03120e",
        },
    },
    plugins: [],
};
