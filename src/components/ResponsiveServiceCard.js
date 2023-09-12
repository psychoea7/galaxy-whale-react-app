import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import "./ServiceCard.css";

const serviceData = [
  {
    title: "Great Outdoors",
    description: "Get some fresh air",
    imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc1.png",
  },
  {
    title: "City Breaks",
    description: "Go somewhere new",
    imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc4.png",
  },
  {
    title: "Cheap Flights",
    description: "Come fly with me",
    imageSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png",
  },
];

function ResponsiveServiceCard() {
  return (
    <Container className="service-card-container">
      <Grid container spacing={2}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <div className="circle">
              <div className="circle_inner">
                {service.imageSrc && (
                  <img src={service.imageSrc} alt={service.title} />
                )}
                <div className="circle_title">
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </div>
              <div className="content_shadow"></div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ResponsiveServiceCard;
