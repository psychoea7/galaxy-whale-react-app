import React from "react";
import "./Footer.css";
import {
  Container,
  Grid,
  Typography,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import { Link as RouterLink } from "react-router-dom";
import { Email, Phone, Room } from "@mui/icons-material";
import Logo from "../assets/images/Logo.svg";

function Footer() {
  return (
    <div className="footer__container">
      <Container>
        <Grid container spacing={3}>
          {/* First Column: Logo */}
          <Grid item xs={12} sm={12} md={3}>
            <img className="footer__logo" src={Logo} alt="Logo" />
          </Grid>

          {/* Second Column: Quick Access Links */}
          <Grid item xs={12} sm={12} md={4}>
            {/* Second Column: Quick Access Links */}
            <Typography variant="h6">
              Quick Links
            </Typography>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon fontSize="small" color="primary"/>
                </ListItemIcon>
                <Link className="footer__quickLink" component={RouterLink} to="/home">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InfoRoundedIcon fontSize="small" color="primary"/>
                </ListItemIcon>
                <Link className="footer__quickLink" component={RouterLink} to="/about">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ConnectWithoutContactRoundedIcon fontSize="small" color="primary"/>
                </ListItemIcon>
                <Link className="footer__quickLink" component={RouterLink} to="/contact">
                  Contact
                </Link>
              </ListItem>
              {/* Add more quick access links */}
            </List>
          </Grid>

          {/* Third Column: Contact Information */}
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant="h6">Contact Us</Typography>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Room fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="123 Main Street"
                secondary="City, State ZIP"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText primary="(123) 456-7890" secondary="Phone Number" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email fontSize="small" color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="example@example.com"
                secondary="Email address"
              />
            </ListItem>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
