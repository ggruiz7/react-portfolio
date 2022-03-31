import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Projects() {
  return (
    <div>
      <Grid container spacing={1} justifyContent="center" alignItems="center" xs={{ flexDirection: "column" }}>
        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 300,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="60" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 400,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="90" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 400,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="90" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 400,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="90" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 400,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="90" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 600,
              maxHeight: 400,
            }}
          >
            <CardMedia component="img" alt="screenshot" height="90" image="./img/background.jpg" />
            <CardContent>
              <h3>Project 1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi expedita vel rerum dolores quia perferendis
                quas sit, consectetur voluptatum cum, nostrum veniam, fuga a illum reprehenderit temporibus laborum ex nulla?
              </p>
            </CardContent>
            <CardActions>
              <Button>
                <a href="google.com">Project 1</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
