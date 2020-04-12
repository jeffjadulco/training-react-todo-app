const tailwindcss = require("tailwindcss");

module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
