module.exports = {
  content: [
    './src/*.{html,js}',
    './src/components/*.{html,js}',
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        200: "#292f36",
        300: "#001",
        100: "rgba(19, 19, 19, .64)"
      },
      white: '#fff',
      yellow: {
        100: "#b696a0",
        200: "#ffce5c",
      },
      blue: {
        100: "#00a3f5",
      },
      brown: {
        100: "#ffce5c22",
      },
      green: {
        100: "#60d63c",
      },
      pink: {
        100: "#d63c6b",
      }
    }
  },
  plugins: [],
}
