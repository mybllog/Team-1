import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ox: ['Oxygen', 'sans'],
        Grotesk: ['Space Grotesk', 'sans'],
        Mulish: ['Space Mulish', 'sans'],
        sans: ['Poppins', 'sans-serif'],
        sen: ['sen', 'sans'],
     },
    },
  },
  plugins: [],
} satisfies Config;
