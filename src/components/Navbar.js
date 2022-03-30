import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Stack } from "@mui/material";
import { Box } from "@material-ui/core";

function Navbar() {
  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Stack spacing={12} direction="row">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Button variant="contained">Home</Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/projects">
            <Button variant="contained">Projects</Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/contact">
            <Button variant="contained">Contact</Button>
          </NavLink>

          <NavLink style={{ textDecoration: "none" }} to="/about">
            <Button variant="contained">About</Button>
          </NavLink>
        </Stack>
      </Box>
    </div>
  );
}

export default Navbar;
