import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "sms-purple":"#190079",
        "sms-aqua":"#73f7dd",
        "sms-gray":"#f7f6f7",
        "sms-white":"#fefeff"
      }
    },
  },
  plugins: [],
} satisfies Config;
