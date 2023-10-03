import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Modal,
  IconButton,
} from "@mui/material";
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon
import "./PortfolioScreen.css"; // You can create a CSS file for additional styling
import TestImage from "../assets/images/3.png";
import TestImageTwo from "../assets/images/4.png";
import TestImageThree from "../assets/images/5.png";
import TestImageFour from "../assets/images/6.png";
import { Link } from "react-router-dom";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioItems from "../components/PortfolioItems";

function PortfolioScreen() {
  // Define your portfolio items (you can replace this with your actual data)
  const portfolioItems = [
    {
      title: "Web Design Project 1",
      category: "Web Design",
      preview: TestImage, // Add the preview image URL here
      images: [
        {
          original: TestImage,
          thumbnail: TestImage, // Add the thumbnail image URL here
          description: "Image 1 Description",
        },
        {
          original: TestImageTwo,
          thumbnail: TestImageTwo, // Add the thumbnail image URL here
          description: "Image 2 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Development Project 1",
      category: "Web Development",
      preview: TestImageTwo, // Add the preview image URL here
      images: [
        {
          original: TestImageTwo,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Logo Design Project 1",
      category: "Logo Design",
      preview: TestImageThree, // Add the preview image URL here
      images: [
        {
          original: TestImageThree,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Banner Design Project 1",
      category: "Banner Design",
      preview: TestImageFour, // Add the preview image URL here
      images: [
        {
          original: TestImageFour,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Design Project 2",
      category: "Web Design",
      preview: TestImage, // Add the preview image URL here
      images: [
        {
          original: TestImage,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Web Development Project 2",
      category: "Web Development",
      preview: TestImageTwo, // Add the preview image URL here
      images: [
        {
          original: TestImageTwo,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Logo Design Project 2",
      category: "Logo Design",
      preview: TestImageThree, // Add the preview image URL here
      images: [
        {
          original: TestImageThree,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    {
      title: "Banner Design Project 2",
      category: "Banner Design",
      preview: TestImageFour, // Add the preview image URL here
      images: [
        {
          original: TestImageFour,
          description: "Image 1 Description",
        },
      ],
      description: "A brief description of the project goes here.",
    },
    // Add more portfolio items as needed
  ];

  const [sortBy, setSortBy] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImages] = useState([]);

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

  const handleOpenModal = (itemImages) => {
    setModalOpen(true);
    setImages(itemImages); // Use the images from the clicked portfolio item
  };
  

  const handleCloseModal = () => {
    setModalOpen(false);
  };


  // Define filteredAndSortedItems based on sortBy, categoryFilter, and searchQuery
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

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryFilterChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <Container className="portfolio__container">
        <h2 className="portfolio__headerText">Portfolio</h2>
        <Divider className="portfolio__divider" />
        <PortfolioFilter
          sortBy={sortBy}
          categoryFilter={categoryFilter}
          searchQuery={searchQuery}
          handleSortChange={handleSortChange}
          handleCategoryFilterChange={handleCategoryFilterChange}
          handleSearchInputChange={handleSearchInputChange}
          sortingOptions={sortingOptions}
          categoryOptions={categoryOptions}
        />
        <PortfolioItems
          portfolioItems={portfolioItems}
          filteredAndSortedItems={filteredAndSortedItems}
          handleOpenModal={handleOpenModal} 
        />
       <Modal open={isModalOpen} onClose={handleCloseModal}>
          <div className="modal-content">
            {/* Custom close button */}
            <div className="close-button-container">
  <IconButton
    className="close-button"
    onClick={handleCloseModal}
    style={{
      fontSize: '2rem', // Increase the icon size
      color: 'white',
    }}
  >
    <CloseIcon />
  </IconButton>
</div>

            <Gallery items={images} thumbnailPosition="bottom"  />
          </div>
        </Modal>
      </Container>
      <Footer />
    </div>
  );
}

export default PortfolioScreen;
