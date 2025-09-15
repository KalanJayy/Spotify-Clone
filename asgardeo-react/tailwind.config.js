// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212", // main dark background
        sidebar: "#000000",    // pure black sidebar
        card: "#181818",       // for cards / containers
        hover: "#282828",      // hover effect
        text: {
          DEFAULT: "#FFFFFF",  // main text
          muted: "#B3B3B3",    // secondary text
        },
        primary: "#1DB954",    // Spotify green (buttons / highlights)
        accent: "#1ED760",     // lighter green for hover states
        border: "#2A2A2A",     // subtle border lines
      },
    },
  },
  plugins: [],
}
