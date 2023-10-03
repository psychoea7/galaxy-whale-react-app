import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost"; // Import your BlogPost component
import "./BlogScreen.css";

const blogPosts = [
  {
    title: "First Blog Post",
    date: "September 20, 2023",
    content: "This is the content of the first blog post.",
  },
  {
    title: "Second Blog Post",
    date: "September 25, 2023",
    content: "This is the content of the second blog post.",
  },
  // Add more blog posts as needed
];

function BlogScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0); // Default selected category index

  // Define your blog categories here
  const blogCategories = ["All", "Technology", "Travel", "Food", "Fashion"];

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <div className="blogScreen__container">
      <Sidebar />
      <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {blogCategories.map((category, index) => (
              <Tab label={category} key={index} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
        <Grid container spacing={3}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <BlogPost
                title={post.title}
                date={post.date}
                content={post.content}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </div>
  );
}

export default BlogScreen;
