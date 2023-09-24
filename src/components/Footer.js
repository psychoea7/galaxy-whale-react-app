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
  IconButton,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import BookIcon from '@mui/icons-material/Book';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import { Link as RouterLink } from "react-router-dom";
import { Email, Facebook, Instagram, Phone, Room, Twitter } from "@mui/icons-material";
import Logo from "../assets/images/Logo.svg";

function Footer() {
  return (
    <div className="footer__container">
      <Container>
        <Grid container spacing={3}>
          {/* First Column: Logo */}
          <Grid item xs={12} sm={12} md={3}>
            <img className="footer__logo" src={Logo} alt="Logo" />
            {/* Social Media Icons */}
            <Divider className="contactInfo__divider" />
            <IconButton
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="contactInfo__socialIcon" />
            </IconButton>
            <IconButton
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="contactInfo__socialIcon" />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="contactInfo__socialIcon" />
            </IconButton>
          </Grid>

          {/* Second Column: Quick Access Links */}
          <Grid item xs={12} sm={12} md={4}>
            {/* Second Column: Quick Access Links */}
            <Typography variant="h6">Quick Links</Typography>
            <Divider />
            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon fontSize="small" className="footer__Icon" />
                </ListItemIcon>
                <Link
                  className="footer__quickLink"
                  component={RouterLink}
                  to="/"
                >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <InfoRoundedIcon fontSize="small" className="footer__Icon" />
                </ListItemIcon>
                <Link
                  className="footer__quickLink"
                  component={RouterLink}
                  to="/about-us"
                >
                  About
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ConnectWithoutContactRoundedIcon
                    fontSize="small"
                    className="footer__Icon"
                  />
                </ListItemIcon>
                <Link
                  className="footer__quickLink"
                  component={RouterLink}
                  to="/contact-us"
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArtTrackIcon
                    fontSize="small"
                    className="footer__Icon"
                  />
                </ListItemIcon>
                <Link
                  className="footer__quickLink"
                  component={RouterLink}
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <BookIcon
                    fontSize="small"
                    className="footer__Icon"
                  />
                </ListItemIcon>
                <Link
                  className="footer__quickLink"
                  component={RouterLink}
                  to="/contact-us"
                >
                  Blog
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
                <Room fontSize="small" className="footer__Icon" />
              </ListItemIcon>
              <ListItemText
                primary="123 Main Street"
                secondary="City, State ZIP"
                secondaryTypographyProps={{ className: "customSecondaryText" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Phone fontSize="small" className="footer__Icon" />
              </ListItemIcon>
              <ListItemText
                primary="(123) 456-7890"
                secondary="Phone Number"
                secondaryTypographyProps={{ className: "customSecondaryText" }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email fontSize="small" className="footer__Icon" />
              </ListItemIcon>
              <ListItemText
                primary="example@example.com"
                secondary="Email address"
                secondaryTypographyProps={{ className: "customSecondaryText" }}
              />
            </ListItem>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
