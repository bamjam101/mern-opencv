module.exports = {
  content: ["./src/*/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "light-green": "#1ED760",
        green: "#1d8954",
        white: "#ffffff",
        black: "#191414",
        "light-black": "#282828",
        primary: "#FFFFFF",
        secondary: "#b3b3b3",
      },
      gridTemplateColumns: {
        "auto-fill-cards": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
