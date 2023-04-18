/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            backgroundImage: {
                circuit: "url('../public/images/circuit-board.svg')",
            },
            keyframes: {
                "fade-in-down": {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
            },
            animation: {
                "fade-in-down": "fade-in-down 1s forwards ease-out 250ms",
            },
        },
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
