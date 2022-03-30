import React from "react";
import { Box } from "@material-ui/core";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 20,
        },
      }}
    >
      <h6>gg</h6>
    </Box>
  );
}

export default Footer;
