module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      // Extend colors with custom a color palette.
      // By default these colors will be made available everywhere in the framework like text color, border color and background color
      colors: {
        primary: "#224014",
        secondary: "#8C1F33",
        accent: "#D9D6D2",
      },
    },
  },
  plugins: [],
}