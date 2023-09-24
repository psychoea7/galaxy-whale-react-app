import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AboutUsSection from "../components/AboutUsSection";
import { Container, Grid, Typography, Paper, Divider } from "@mui/material";
import "../Screens/AboutUsScreen.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import MissionImage from "../assets/images/mission.jpg";
import PersonOne from "../assets/images/person-1.jpg";
import PersonTwo from "../assets/images/person-2.jpg";
import PersonThree from "../assets/images/person-3.jpg";
import { Button, CardActionArea, CardActions } from "@mui/material";

function AboutUsScreen() {
  return (
    <div className="aboutUsScreen__container">
      <Sidebar />
      <div className="aboutUsScreen__aboutMargin">
        <AboutUsSection />
      </div>
      <Container>
        <Paper elevation={3} className="aboutUsScreen__teamContainer">
          <h1>Our team</h1>
          <Divider className="aboutUsSection__divider" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={PersonOne}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    John Smith
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Web Developer - John is our talented web developer who crafts beautiful and functional websites.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={PersonTwo}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Emily Johnson
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Graphic Designer - Emily's creative designs bring visual appeal and innovation to our projects.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={PersonThree}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    David Clark
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Digital Marketer - David specializes in digital marketing strategies that drive growth and engagement for our clients.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Contact
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          elevation={3}
          className="aboutUsScreen__teamContainer marginTopForContainer"
        >
          <h1>Our Mission</h1>
          <Divider className="aboutUsSection__divider" />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <img
                src={MissionImage}
                alt="Mission Image"
                className="aboutUsScreen__missionImage"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Typography variant="body1">
                At [Your Company Name], we are driven by a bold mission to
                transform the way businesses operate and succeed in the digital
                age.
              </Typography>
              <Typography variant="body1">
                Our mission is to empower organizations with cutting-edge
                technology solutions, enabling them to thrive, innovate, and
                make a positive impact on the world.
              </Typography>
              <Typography variant="body1">We are committed to:</Typography>
              <ul>
                <li>
                  <Typography variant="body1">
                    <strong>Innovation:</strong> Continuously innovate and
                    deliver solutions that drive business growth and efficiency.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Client Success:</strong> Partner with our clients to
                    understand their unique needs and help them achieve their
                    goals.
                  </Typography>
                </li>
                <li>
                  <Typography variant="body1">
                    <strong>Social Responsibility:</strong> Contribute to a
                    better world through sustainable practices and community
                    engagement.
                  </Typography>
                </li>
              </ul>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="aboutUsScreen__missionButton"
              >
                Contact us
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Footer />
    </div>
  );
}

export default AboutUsScreen;
