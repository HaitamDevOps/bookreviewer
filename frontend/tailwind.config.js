/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width:{
        "mod": "50rem",
      },
      minHeight: {
        "mod": "calc(100vh-3.5rem)",
        "128": "32rem",
      },
      maxHeight: {
        "100": "28rem",
        "128": "32rem",
      },
      border: {
        "1": "1px",
      },
      dropShadow: {
        'mod': '0 8px 5px rgba(0, 0, 0, 0.3)',
        'modh': '0 3px 3px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
