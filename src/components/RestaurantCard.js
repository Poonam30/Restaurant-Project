import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "../styles.css";
import ratingImage from "../image/star1.png";


const RestaurantCardWrapper = styled.div`
  border-radius: 5px;
  padding: 15px;
  width: 230px;
  background-image: linear-gradient(
    rgb(35, 204, 153),
    rgb(55, 180, 211),
    rgb(23, 125, 221)
  );
`;

const RestaurantCard = ({ restaurantApiData }) => {

  return (
    <div>
      <RestaurantCardWrapper key={restaurantApiData.name}>
        <div>
          <img src={restaurantApiData.image} alt="food" className="restImage" />
        </div>
        <div>
          <h4>{restaurantApiData.name}</h4>
        </div>
        <div style={{ textAlign: "left" }}>
          <div>{restaurantApiData.formatted_address}</div>
          <div>Category: {restaurantApiData.category}</div>
          <div>Price: {restaurantApiData.price}</div>
          <div>Now: {restaurantApiData.isOpen ? "Open" : "Closed"}</div>
          <div>
            Rating:{" "}
            <img src={ratingImage} alt="rating" className="ratingImage" />
            {restaurantApiData.rating}/5
          </div>
        </div>
      </RestaurantCardWrapper>
    </div>
  );
};

RestaurantCard.propTypes = {
  restaurantApiData: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};

export default RestaurantCard;
