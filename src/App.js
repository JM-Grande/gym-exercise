import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//mui theme
import getDesignTokens from "./theme/getDesignTokens";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkModeTheme = createTheme(getDesignTokens(mode));

  return (
    <ThemeProvider theme={darkModeTheme}>
      <CssBaseline />
      <Box
        width="400px"
        sx={{ width: { xl: "1488px" }, backgroundColor: "background.default" }}
        m="auto"
      >
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
