/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
 "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
 extend: {
   colors: {
     primary: '#4A90E2',
     secondary: '#50E3C2',
     accent: '#F5A623',
     background: '#F8F8F8',
     text: '#333333',
   },
   fontFamily: {
     sans: ['Inter', 'sans-serif'],
     serif: ['Merriweather', 'serif'],
   },
   boxShadow: {
     'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
   },
 },
 plugins: [],
 }
}