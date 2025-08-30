
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


// app/layout.tsx

import { Clicker_Script } from 'next/font/google';

const clickerScript = Clicker_Script({
  subsets: ['latin'],
  weight: '400', // A Clicker Script só possui um peso, que é o '400'
  variable: '--font-clicker-script',
});

// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'clicker-script': ['var(--font-clicker-script)'],
      },
    },
  },
  plugins: [],
};
