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
        <br />
        <br />
        <br />
        <br />
        <h1>gg</h1>
        <h4>Portfolio</h4>
      </Box>
    </div>
  );
}

export default Home;
