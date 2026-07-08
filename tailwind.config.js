/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        selva: {
          50: "#E8F5E9",
          100: "#C8E6C9",
          200: "#81C784",
          300: "#40916C",
          400: "#2D6A4F",
          500: "#1B4332",
          600: "#14352A",
          700: "#0D2818",
          800: "#081C12",
          900: "#041009",
        },
        orquidea: {
          300: "#F4A261",
          400: "#E76F51",
          500: "#E63946",
          600: "#C1121F",
        },
        sol: {
          200: "#FFF3B0",
          300: "#FFE066",
          400: "#FCD116",
          500: "#FFB703",
          600: "#F48C06",
        },
        cielo: {
          200: "#ADE8F4",
          300: "#90E0EF",
          400: "#4CC9F0",
          500: "#0077B6",
          600: "#003893",
        },
        tierra: {
          200: "#E8D5C4",
          300: "#D4A574",
          400: "#A67C52",
          500: "#6B4226",
          600: "#4A3728",
          700: "#3D2E21",
        },
        papel: {
          50: "#FDFBF7",
          100: "#F7F0E4",
          200: "#F0E6D3",
          300: "#E8D9BE",
        },
        montana: {
          300: "#5C9EAD",
          400: "#3D7A8A",
          500: "#2A5F6E",
          600: "#1E4A57",
        },
        neblina: {
          100: "#F8F9FA",
          200: "#E9ECEF",
          300: "#DEE2E6",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "Inter", "system-ui", "sans-serif"],
      },
      animation: {
        drift: "drift 8s ease-in-out infinite",
        "drift-slow": "drift 12s ease-in-out infinite",
        "drift-reverse": "drift-reverse 10s ease-in-out infinite",
        "spin-warm": "spin-warm 6s linear infinite",
        bloom: "bloom 0.6s ease-out forwards",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(20px, -15px) scale(1.05)" },
          "66%": { transform: "translate(-10px, 10px) scale(0.95)" },
        },
        "drift-reverse": {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(-15px, 20px) rotate(5deg)" },
        },
        "spin-warm": {
          to: { transform: "rotate(360deg)" },
        },
        bloom: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      borderRadius: {
        organic: "2rem 0.5rem 2rem 0.5rem",
        "organic-alt": "0.5rem 2rem 0.5rem 2rem",
      },
    },
  },
  plugins: [],
}
