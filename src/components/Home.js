import React from "react";
import { Box } from "@material-ui/core";

function Home() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& > *": {
            m: 1,
          },
        }}
      >
        <h1>Portfolio | Gabriel Garcia-Ruiz</h1>
      </Box>
    </div>
  );
}

export default Home;
