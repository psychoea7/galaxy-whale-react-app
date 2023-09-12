import "./Sidebar.css";
import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import HomeIcon from "@mui/icons-material/Home";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import ConnectWithoutContactRoundedIcon from "@mui/icons-material/ConnectWithoutContactRounded";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Theme switch icon
import LanguageIcon from "@mui/icons-material/Language"; // Language selector icon
import Logo from "../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = ["sidebar__header"];
  if (isScrolled) {
    headerClasses.push("white-background");
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement theme switching logic here
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // Implement language switching logic here
  };

  return (
    <div className="sidebar__container">
      {/* Toggle button */}
      <div className={headerClasses.join(" ")}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="sidebar__toggler"
          sx={{
            zIndex: 2,
          }}
        >
          <MenuOpenRoundedIcon style={{ fontSize: 40 }} />
        </IconButton>

        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        // style={{ width: "300px" }}
      >
        <div className="sidebar" style={{ width: "270px" }}>
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>

          {/* Horizontal Line Above Links */}
          <Divider />

          {/* Navigation Links with Icons */}
          <List className="sidebar__linksContainer">
            <Link to="/" className="sidebar__link">
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon className="sidebar__icon" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/about-us" className="sidebar__link">
              <ListItem button>
                <ListItemIcon>
                  <InfoRoundedIcon className="sidebar__icon" />
                </ListItemIcon>
                <ListItemText primary="About us" />
              </ListItem>
            </Link>
            <Link to="/contact-us" className="sidebar__link">
              <ListItem button>
                <ListItemIcon>
                  <ConnectWithoutContactRoundedIcon className="sidebar__icon" />
                </ListItemIcon>
                <ListItemText primary="Contact us" />
              </ListItem>
            </Link>
            {/* Add other links as needed */}
          </List>

          {/* Horizontal Line Below Links */}
          <Divider />

          {/* Language Selector */}
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <ListItemIcon>
              <LanguageIcon className="sidebar__icon" />{" "}
              {/* Language selector icon */}
            </ListItemIcon>
            <label>Language:</label>
            <Select value={selectedLanguage} onChange={handleLanguageChange}>
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
              {/* Add more language options */}
            </Select>
          </div>

          {/* Theme Switcher */}
          <div
            style={{ display: "flex", alignItems: "center", padding: "16px" }}
          >
            <ListItemIcon>
              <Brightness4Icon className="sidebar__icon" />{" "}
              {/* Theme switch icon */}
            </ListItemIcon>
            <label>Dark Mode:</label>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              color="primary"
            />
          </div>
        </div>
      </Drawer>

      {/* Main content */}
      <main
        style={{
          marginLeft: open ? "270px" : "0",
          transition: "margin-left 0.3s",
        }}
      >
        {/* Add your main content here */}
      </main>
    </div>
  );
}

export default Sidebar;
