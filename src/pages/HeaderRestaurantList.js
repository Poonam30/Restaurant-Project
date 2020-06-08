import React from "react";
import { FirstHeaderPartition, BackRestaurantContentWrapper } from "../styles/ContentStyles";
import logoImage from "../image/logo23.png";

export default function HeaderRestaurantList() {

  return (
    <div>
      <FirstHeaderPartition>
        <BackRestaurantContentWrapper>
          <a
            href="{RestaurantFirstPage}"
            style={{ textDecoration: "none" }}
          >
            <h3 style={{ color: "rgb(151, 36, 65)" }}>Back </h3>
          </a>
        </BackRestaurantContentWrapper>
        <img
          src={logoImage}
          alt="Logo"
          style={{ width: "100px", height: "95px" }}
        />
        <h1 style={{ color: "rgb(151, 36, 65)" }}>
          Friendly Food Finder
</h1>
      </FirstHeaderPartition>
    </div>
  );
}