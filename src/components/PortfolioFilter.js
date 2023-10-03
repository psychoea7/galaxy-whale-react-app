// PortfolioFilter.js
import React from "react";
import {
  Grid,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./PortfolioFilter.css"

function PortfolioFilter({
  sortBy,
  categoryFilter,
  searchQuery,
  handleSortChange,
  handleCategoryFilterChange,
  handleSearchInputChange,
  sortingOptions,
  categoryOptions,
}) {
  return (
    <div>
      <Grid className="portfolio__filterOptions" container spacing={3}>
        {/* Sort By */}
        <Grid item xs={12} sm={4} md={4}>
          <InputLabel className="portfolio__inputLabel" htmlFor="sort-select">
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
        {/* Category */}
        <Grid item xs={12} sm={4} md={4}>
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
        {/* Search */}
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            className="portfolio__searchInput"
            variant="filled"
            id="search-input"
            label="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            InputProps={{
              endAdornment: <SearchIcon className="portfolio__searchIcon" />,
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
  );
}

export default PortfolioFilter;
