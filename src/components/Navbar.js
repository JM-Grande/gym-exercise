import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";
import { IconButton } from "@mui/material";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";

const Navbar = ({ mode, setMode }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            borderBottom: "3px solid #FF2625",
            color: "text.primary",
          }}
        >
          Home
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "text.primary" }}>
          Exercises
        </Link>
      </Stack>

      {/* DarkMode Button */}
      <IconButton
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
      >
        {mode === "light" ? <NightlightIcon /> : <LightModeIcon />}
      </IconButton>
    </Stack>
  );
};

export default Navbar;
