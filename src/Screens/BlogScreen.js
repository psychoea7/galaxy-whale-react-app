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
  useScrollTrigger,
  Box,
  Button,
} from "@mui/material";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
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

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function BlogScreen() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const blogCategories = [
    "All",
    "Technology",
    "Travel",
    "Food",
    "Fashion",
    "Technology",
    "Travel",
    "Food",
    "Fashion",
    "Technology",
    "Travel",
    "Food",
    "Fashion",
  ];

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <div className="blogScreen__container">
      <Sidebar />
      <Container>
        <ElevationScroll>
          <AppBar className="blogScreen__appBar" position="static">
            <Toolbar>
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blog
              </Typography> */}
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{
                  style: { backgroundColor: "var(--clr-super-light-blue)" }, // Hide the indicator
                }}
              >
                {blogCategories.map((category, index) => (
                  <Tab
                    label={category}
                    key={index}
                    className="blogScreen__tab"
                  />
                ))}
              </Tabs>
            </Toolbar>
          </AppBar>
        </ElevationScroll>

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

        {/* New section for most-watched blog post */}
        <Card className="most-watched">
          <div
            className="most-watched__image"
            style={{
              backgroundImage: `url('path-to-your-image.jpg')`,
            }}
          >
            <Box className="dark-overlay">
              <CardContent className="post-content">
                <Typography variant="h4" className="post-title">
                  Blog Post Title
                </Typography>
                <Typography variant="body1" className="preview-text">
                  This is a preview of the blog post content. It can be a
                  summary or introduction to the topic.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="/full-blog-post"
                  className="continue-reading"
                >
                  Continue Reading
                </Button>
              </CardContent>
            </Box>
          </div>
        </Card>
        {/* End of most-watched blog post section */}
      </Container>

      <Footer />
    </div>
  );
}

export default BlogScreen;
