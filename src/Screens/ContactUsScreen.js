import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Email,
  Phone,
  Room,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import ContactForm from "../components/ContactForm";
import "./ContactUsScreen.css";
import LeafletMap from "../components/LeafletMap";

function ContactUsScreen() {
  return (
    <div className="contactUsScreen__container">
      <Sidebar />
      <Container>
        <Grid container spacing={4}>
          {/* First Column: Address, Phone, Email, and Social Media Icons */}
          <Grid item xs={12} md={6} className="contactInfo__container">
            <div className="contactUsScreen__contactInfoBg">

            <Typography mb={5} variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Typography
              variant="body1"
              display="flex"
              my={3}
              alignItems="center"
              >
              <Room className="contactInfo__icon" />
              <Link
                to="/location"
                className="contactInfo__links"
                >
                Qurum, Muscat, Sultanate of Oman
              </Link>
            </Typography>
            <Typography
              variant="body1"
              my={3}
              display="flex"
              alignItems="center"
              >
              <Phone className="contactInfo__icon" />
              <Link
                to="/phone"
                className="contactInfo__links"
                >
                +968 92976223
              </Link>
            </Typography>
            <Typography
              variant="body1"
              my={3}
              display="flex"
              alignItems="center"
              >
              <Email className="contactInfo__icon" />
              <Link
                to="/email"
                className="contactInfo__links"
                >
                example@email.com
              </Link>
            </Typography>

            {/* Social Media Icons */}
            <Divider className="contactInfo__divider" />

            <Typography mb={5} variant="h5" gutterBottom>
              Socials
            </Typography>

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
              </div>
          </Grid>

          {/* Second Column: Contact Form */}
          <Grid item xs={12} md={6}>
            <ContactForm />
          </Grid>
        </Grid>

        <Grid container>
          {/* Full-width Leaflet Map */}
          <LeafletMap />
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default ContactUsScreen;
