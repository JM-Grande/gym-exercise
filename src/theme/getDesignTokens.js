const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      background: {
        default: "#1B1B1B",
        paper: "#1B1B1B",
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: "#0e0e0e",
            secondary: "#ff2625",
          }
        : {
            // dark mode
            primary: "#ffffff",
            secondary: "#ff2625",
          }),
    },
  },
});

export default getDesignTokens;
