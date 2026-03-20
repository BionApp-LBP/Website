/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'moon-light': '#FBF8F3',
        'moon-medium': '#F0EDE6',
        'squash': '#F5D88D',
        'tomato': '#FF6F4D',
        'peachy-light': '#FDCBA2',
        'peachy': '#FCAF70',
        'periwinkle-light': '#D1DEFF',
        'periwinkle': '#83A0F0',
        'malibu-light': '#BCE5EB',
        'malibu': '#54A8D8',
        'pistachio': '#C6E6C1',
        'navy': '#0A1128'
      },
    },
  },
  plugins: [],
};
