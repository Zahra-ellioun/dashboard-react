/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dashPanel: "#3D3D44",
        background: "#FCFCFC",
        bgCard: "#FFFFFF",
        title: "#344775",
        text: "#7B82B1",
        green: "#17C653",
        red: "#F8285A",
        blue: "#056EE9",
        grayLight: "E6E6E6",
        grayMid: "#CCCCCC",
        grayDark: "808080",
      },
    },
  },
  plugins: [],
};
