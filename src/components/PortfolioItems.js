import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./PortfolioItems.css";

function PortfolioItems({ filteredAndSortedItems, handleOpenModal }) {
  return (
    <Grid container spacing={3}>
      {filteredAndSortedItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Link
            className="hero-image-container"
            onClick={() => handleOpenModal(item.images)}
          >
            <Card className="portfolio__card">
              {/* Display the preview image */}
              <img
                src={item.preview} // Use the 'preview' property for the preview image
                alt={item.title}
                className="portfolio__image"
              />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {item.category}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default PortfolioItems;
