import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#E22326',     // برتقالي واضح على الخلفية الداكنة
          background: '#1c1c1e',  // خلفية داكنة للموقع كله
          card: '#2a2a2d',        // بطاقات وخلفيات ثانوية
          textBase: '#f1f1f1',    // النص الأساسي (فاتح)
          muted: '#999999',       // نصوص ثانوية
          secondary: '#2d9cdb',   // لون تفاعلي
          success: '#27ae60',     // لون النجاح
          error: '#eb5757',       // لون الخطأ,
          darkBlueGray: '#2a2a40' // الغروب
        },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;