/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        md: { max: "800px", min: "620px" },
        sm: { max: "620px", min: "500px" },
        xs: { max: "500px" },
        cardMd: { max: "1100px" },
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#1f2235",
        "primary-light": "#23273a",
        secondary: "#ff4a57",
      }),
      colors: {
        secondary: "#ff4a57",
        "code-green": "#4AF626",
        red: "#ef4444",
        yellow: "#f59e0b",
        green: "#22c55e",
        stone: "#57534e",
        gray: "#374151",
        "light-gray": "#869fc4",
        white: "#ffffff",
      },
      fontFamily: {
        whitrabt: ["whitrabt", "sans-serif"],
      },
    },
  },
  plugins: [],
};
