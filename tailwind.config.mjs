/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        roboto: ['var(--font-roboto)'],
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        },
      gradientColorStops: {
          'orange-red': ['#f97316', '#ef4444'],
          'green-blue': ['#10b981', '#3b82f6'],
          'purple-pink': ['#a855f7', '#ec4899'],
          'yellow-orange': ['#facc15', '#f97316'],
          'red-purple': ['#ef4444', '#a855f7'],
          'blue-indigo': ['#3b82f6', '#6366f1'],
          'teal-green': ['#14b8a6', '#10b981'],
          'indigo-blue': ['#6366f1', '#3b82f6'],
          'pink-red': ['#ec4899', '#ef4444'],
        },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(170.21deg, #ad35bf -7.89%, #3077e2 40.71%, #11266a 89.98%, #0b1b4f 119.95%)',
        },
    },
  },
  plugins: [],
};
