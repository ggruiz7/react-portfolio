import React from "react";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import "./About.css";

function About() {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 300,
          minHeight: 600,
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
        }}
      >
        <CardContent>
          <h1>About</h1>
          <p>
            Student at UC Davis, majoring in Economics and Math. Studying programming through online boot-camp. Cook at Panda
            Express.
            <br />
            <a href="https://github.com/ggruiz7">Check me out on GitHub.</a>
          </p>
        </CardContent>
        <CardMedia
          style={{ objectFit: "contain" }}
          component="img"
          alt="screenshot"
          height="1200"
          image="https://user-images.githubusercontent.com/80734798/160964196-76775f5a-c06b-4920-909c-0abafb4e696d.jpg"
        />
      </Card>
    </div>
  );
}

export default About;
