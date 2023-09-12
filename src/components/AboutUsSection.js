import React from "react";
import "./AboutUsSection.css";
import { Container, Grid, Typography, Paper, Divider } from "@mui/material";
import CompanyImage from "../assets/images/about.jpg"; // Replace with the actual image path

function AboutUsSection() {
  // Sample text about the company (you can replace it with your own content)
  const companyText = `Company Name is a leading provider of innovative solutions in the tech industry. 
  With a team of highly skilled professionals, we are dedicated to delivering cutting-edge products 
  and services that meet the unique needs of our clients. Our commitment to excellence, creativity, 
  and customer satisfaction sets us apart in the industry. Explore our website to learn more about our 
  work and how we can help you succeed.
  What sets us apart is our unwavering dedication to our clients' success. We understand that each business is unique, so we tailor our solutions to meet their specific needs. Our client-centric approach means that we listen carefully to our clients, analyze their challenges, and provide customized strategies that drive growth and profitability. With Company Name as your technology partner, you can expect not just a service provider, but a trusted ally on your journey to success.`;

  return (
    <Container className="aboutUsSection__container">
      <Grid container spacing={2}>
        {/* Text Content */}
        <Grid item xs={12} sm={12} md={6}>
          <Paper elevation={3} className="aboutUsSection__text">
            <Typography variant="body1" gutterBottom>
                <h1>About us</h1>
                <Divider className="aboutUsSection__divider"/>
              {companyText}
            </Typography>
          </Paper>
        </Grid>

        {/* Image */}
        <Grid item xs={12} sm={12} md={6}>
          <img
            src={CompanyImage}
            alt="Company"
            className="aboutUsSection__image"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutUsSection;
