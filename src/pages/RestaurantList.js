import React from "react";
import "../styles.css";
import styled from "styled-components";
import RestaurantCard from "../components/RestaurantCard";
import logoImage from "../image/logo23.png";
import { RestaurantCardSideWrapper, SelectWrapper, FiltersWrapper, RestaurantsPartition, RestaurantsGridWrapper } from "../styles/ContentStyles";

import restaurantApiData from "../restaurantapi.json";  // example Api 

export default function RestaurantList() {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [selectedPrice, setSelectedPrice] = React.useState("");
  const [selectedRating, setSelectedRating] = React.useState("");
  const [selectedOpen, setSelectedOpen] = React.useState("none");
  const [toggleButton, settoggleButton] = React.useState(false);

  const filterRestaurantsByType = rest => {
    if (selectedCategory !== "") {
      return rest.category === selectedCategory;
    }
    return rest;
  };
  const filterRestaurantsByPrice = rest => {
    if (selectedPrice !== "") {
      return rest.price === selectedPrice;
    }
    return rest;
  };
  const filterRestaurantsByRating = rest => {
    if (selectedRating !== "") {
      return rest.rating === selectedRating;
    }
    return rest;
  };
  const filterRestaurantsByOpen = rest => {
    if (selectedOpen === "none") {
      return rest;
    }
    if (rest.isOpen === toggleButton) {
      return;
    }
    return rest;
  };
  const handleTypeChange = event => {
    setSelectedCategory(event.target.value);
  };
  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };
  const handleRatingChange = event => {
    setSelectedRating(event.target.value);
  };
  const handleOpenChange = event => {
    setSelectedOpen(event.target.value);
    if (event.target.value === "open") {
      return settoggleButton(false);
    } else {
      return settoggleButton(true);
    }
  };
 
  return (
    <div>
      <FiltersWrapper>
        <h3 className="marginItem" style={{ marginLeft: "20%" }}>
          Filter{" "}
        </h3>
        <h3 className="marginItem">Categories </h3>

        <SelectWrapper
          name="category"
          id="category"
          onChange={handleTypeChange}
        >
          <option value="">Show All</option>
          <option value="take-away">Take Away</option>
          <option value="eat-in">Eat In</option>
          <option value="delivery">Delivery</option>
        </SelectWrapper>
        <h3 className="marginItem">Price </h3>
        <SelectWrapper name="price" id="price" onChange={handlePriceChange}>
          <option value="">Show All</option>
          <option value="$">Cheap</option>
          <option value="$$">Normal</option>
          <option value="$$$">Expensive</option>
        </SelectWrapper>
        <h3 className="marginItem">Rating </h3>
        <SelectWrapper name="rating" id="rating" onChange={handleRatingChange}>
          <option value="">Show All</option>
          <option value="2">Lower</option>
          <option value="3">Medium</option>
          <option value="4">High</option>
        </SelectWrapper>
      </FiltersWrapper>
      <RestaurantsPartition>
        <RestaurantCardSideWrapper>
          <h3 style={{ marginTop: "40%" }}>Filter </h3>
          <div>
            <input
              type="radio"
              value="none"
              checked={selectedOpen === "none"}
              onChange={handleOpenChange}
            />{" "}
            None
          </div>
          <div>
            <input
              type="radio"
              value="open"
              checked={selectedOpen === "open"}
              onChange={handleOpenChange}
            />{" "}
            Open
          </div>
          <div>
            <input
              type="radio"
              value="closed"
              checked={selectedOpen === "closed"}
              onChange={handleOpenChange}
            />{" "}
            Closed
          </div>
        </RestaurantCardSideWrapper>

        <RestaurantsGridWrapper>
          {restaurantApiData
            .filter(filterRestaurantsByType)
            .filter(filterRestaurantsByPrice)
            .filter(filterRestaurantsByRating)
            .filter(filterRestaurantsByOpen)
            .map(rest => (
              <RestaurantCard key={rest.name} restaurantApiData={rest} />
            ))}
        </RestaurantsGridWrapper>
      </RestaurantsPartition>
    </div>
  );
}
