import { Paper, IconButton, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Navbar = () => {
  return (
    <Paper position="static" color="paper" elevation={3}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          color="primary"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Paper>
  );
};

export default Navbar;
