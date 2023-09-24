import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./PortfolioScreen.css"; // You can create a CSS file for additional styling
import TestImage from "../assets/images/3.png";
import TestImageTwo from "../assets/images/4.png";
import TestImageThree from "../assets/images/5.png";
import TestImageFour from "../assets/images/6.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function PortfolioScreen() {
  // Define your portfolio items (you can replace this with your actual data)
  // Define your portfolio items (you can replace this with your actual data)
  const portfolioItems = [
    {
      title: "Web Design Project 1",
      category: "Web Design",
      image: TestImage,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Development Project 1",
      category: "Web Development",
      image: TestImageTwo,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Logo Design Project 1",
      category: "Logo Design",
      image: TestImageThree,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Banner Design Project 1",
      category: "Banner Design",
      image: TestImageFour,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Design Project 2",
      category: "Web Design",
      image: TestImage,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Development Project 2",
      category: "Web Development",
      image: TestImageTwo,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Logo Design Project 2",
      category: "Logo Design",
      image: TestImageThree,
      description: "A brief description of the project goes here.",
    },
    {
      title: "Banner Design Project 2",
      category: "Banner Design",
      image: TestImageFour,
      description: "A brief description of the project goes here.",
    },
    // Add more portfolio items as needed
  ];

  const [sortBy, setSortBy] = useState("default"); // Default sorting option
  const [categoryFilter, setCategoryFilter] = useState("all"); // Default category filter
  const [searchQuery, setSearchQuery] = useState(""); // Search query

  const sortingOptions = [
    { value: "default", label: "Default" },
    { value: "titleAsc", label: "Title (A-Z)" },
    { value: "titleDesc", label: "Title (Z-A)" },
  ];

  const categoryOptions = [
    { value: "all", label: "All Categories" },
    { value: "Web Design", label: "Web Design" },
    { value: "Web Development", label: "Web Development" },
    { value: "Logo Design", label: "Logo Design" },
    { value: "Banner Design", label: "Banner Design" },
    // Add more categories as needed
  ];

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAndSortedItems = portfolioItems
    .filter((item) => {
      if (categoryFilter === "all") {
        return true;
      } else {
        return item.category === categoryFilter;
      }
    })
    .filter((item) => {
      return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "titleAsc":
          return a.title.localeCompare(b.title);
        case "titleDesc":
          return b.title.localeCompare(a.title);
        default:
          return 0; // Default order
      }
    });

  return (
    <div>
      <Sidebar />
      <Container className="portfolio__container">
        <div>
          <h2 className="portfolio__headerText">Portfolio</h2>
          <Divider className="portfolio__divider" />
          <Grid className="portfolio__filterOptions" container spacing={3}>
            <Grid item xs={12} sm={4} md={4}>
              {" "}
              {/* 3 columns for medium screens */}
              <InputLabel
                className="portfolio__inputLabel"
                htmlFor="sort-select"
              >
                Sort By
              </InputLabel>
              <Select
                className="portfolio__inputLabel"
                value={sortBy}
                onChange={handleSortChange}
                inputProps={{
                  name: "sort",
                  id: "sort-select",
                }}
              >
                {sortingOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              {" "}
              {/* 3 columns for medium screens */}
              <InputLabel
                className="portfolio__inputLabel"
                htmlFor="category-select"
              >
                Category
              </InputLabel>
              <Select
                className="portfolio__inputLabel"
                value={categoryFilter}
                onChange={handleCategoryFilterChange}
                inputProps={{
                  name: "category",
                  id: "category-select",
                }}
              >
                {categoryOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              {" "}
              {/* 3 columns for medium screens */}
              <TextField
                className="portfolio__searchInput"
                variant="filled"
                id="search-input"
                label="Search"
                value={searchQuery}
                onChange={handleSearchInputChange}
                InputProps={{
                  endAdornment: (
                    <SearchIcon className="portfolio__searchIcon" />
                  ),
                  classes: {
                    underline: "customInputUnderline",
                  },
                  style: { color: "#dde6ed" },
                }}
                InputLabelProps={{
                  classes: {
                    root: "input-label-color-default", // Add a CSS class for default state
                    focused: "input-label-color-focus", // Add a CSS class for focused state
                  },
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={3}>
          {filteredAndSortedItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Link className="hero-image-container" to="/">
                <Card className="portfolio__card">
                  <img
                    src={item.image}
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
      </Container>
      <Footer />
    </div>
  );
}

export default PortfolioScreen;
