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
      <h6>
        By <a href="https://github.com/ggruiz7">gg</a>© 2022
      </h6>
    </Box>
  );
}

export default Footer;
