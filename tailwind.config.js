module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora"]
    },
    extend: { 
      fontSize: {
        13: "13px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        36: "36px",
        48: "48px",
      },
      boxShadow: {
        "md": "20px 20px 50px 10px smoke", 
      },
      },
  },
  plugins: [],
  darkMode: 'class',
}