function withOpacity(varaibleName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varaibleName}),${opacityValue})`
    }
    return `rgb(var(${varaibleName}))`
  }
}
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}", "./styles/**/*.{css}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          base: withOpacity("--text-color-base"),
          inverted: withOpacity("--background-color-base"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--background-color-base"),
          inverted: withOpacity("--text-color-base"),
        },
      },
      borderColor: {
        skin: {
          base: withOpacity("--border-color-base"),
          inverted: withOpacity("--background-color-base")
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography', '@tailwindcss/forms')
  ],
};
