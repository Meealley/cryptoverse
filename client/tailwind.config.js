/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image":
          "url('https://v2.cimg.co/news/114962/277344/aidoge.jpg')",
      },
      fontFamily: {
        raj: ["Rajdhani", "sans-serif"],
        abc: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
       rocket: "url('https://img.freepik.com/free-vector/rocket-flying-space-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated_138676-7558.jpg?w=2000')",
      },
    },
  },
  plugins: [],
};
