import Grid from "@material-ui/core/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

export default function Projects() {
  return (
    <div>
      <Grid container spacing={3} justifyContent="center" alignItems="center" xs={{ flexDirection: "column" }}>
        <Grid item>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "center",
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Password Generator</h3>
              <p>
                An app that generates a random password. Prompts for password criteria. Length between 8 and 128 characters.
                Lowercase, uppercase, numeric, and/or special characters selections. At least one character type must be selected.
                Password generated matches the selected criteria. Password is displayed on page.
              </p>
            </CardContent>
            <CardActions class="button">
              <Button color="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/password-generator">View on GitHub</a>
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
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Run Buddy</h3>
              <p>A website that offers fitness training services.</p>
            </CardContent>
            <CardActions class="button">
              <Button olor="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/run-buddy">View on GitHub</a>
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
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Horiseon Refactor</h3>
              <p>
                Uses semantic html elements. Html elements follow logical structure. Image elements have correct alt attributes.
                Heading attributes fall in sequential order. Title element has concise, descriptive title.
              </p>
            </CardContent>
            <CardActions class="button">
              <Button olor="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/horiseon-refactor">View on GitHub</a>
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
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Job Aid</h3>
              <p>
                Job-Aid is a web application that helps candidates look for a job using a job title, zip code and State. Unlike a
                traditional website, Job-Aid could have an added feature of posting articles related to companies recruitment
                strategies to help candidates focus on companies with the same shared interests such as working for companies
                hiring moms, veterans or handicapped.
              </p>
            </CardContent>
            <CardActions class="button">
              <Button olor="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/job-aid">View on GitHub</a>
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
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Artsy</h3>
              <p>
                A website to help you find inspiration for your art! Use the search feature to search through the MET Museum's
                470,000+ items for inspiration for your next artwork!
              </p>
            </CardContent>
            <CardActions class="button">
              <Button olor="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/artsy">View on GitHub</a>
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
              maxWidth: 350,
              minHeight: 250,
            }}
          >
            <CardMedia
              component="img"
              alt="screenshot"
              height="90"
              image="https://user-images.githubusercontent.com/80734798/138680839-a1a6b44e-2374-4493-b328-152130742d36.png"
            />
            <CardContent>
              <h3>Timed Quiz</h3>
              <p>
                Clicking the start button presents you with a question. Answering a question presents you with another question.
                Answering a question incorrectly, penalizes you by decreasing your time left. Game ends when all questions are
                answered.
              </p>
            </CardContent>
            <CardActions class="button">
              <Button olor="secondary" size="small" variant="contained">
                <a href="https://github.com/ggruiz7/timed-quiz">View on GitHub</a>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
