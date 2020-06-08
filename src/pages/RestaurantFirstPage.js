import React from "react";
import "../styles.css";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import Typed from "react-typed";

import logoImage from "../image/logo23.png";
import sideImage1 from "../image/side4.jpg";
import sideImage2 from "../image/side7.jpg";
import {
  PageHeaderContent,
  HeaderWrapper,
  HeaderSideWrapper,
  HeaderContent,
  ContactContentWrapper,
  BackContentWrapper,
  SideImage
} from "../styles/ContentStyles";

import HeaderRestaurantList from "./HeaderRestaurantList";
import RestaurantList from "./RestaurantList";
import ContactForm from "./ContactForm";


export default function RestaurantFirstPage() {
  const [showPage, setShowPage] = React.useState(false);
  const [showFirstPage, setShowFirstPage] = React.useState(true);
  const [showContactPage, setShowContactPage] = React.useState(false);

  const togglePage = () => {
    setShowPage(true);
    setShowFirstPage(false);
    setShowContactPage(false);

  };
  const toggleContactPage = event => {
    console.log("Hello");
    setShowPage(false);
    setShowFirstPage(false);
    setShowContactPage(true);
  };
  return (
    <BrowserRouter>
      <div className="App">
        {showFirstPage && (
          <PageHeaderContent>
            <HeaderWrapper>
              <BackContentWrapper>
                <a href="{RestaurantFirstPage}" style={{ textDecoration: "none" }}>
                  <h3 style={{ color: "rgb(151, 36, 65)" }}>Back </h3>
                </a>
              </BackContentWrapper>
              <ContactContentWrapper>

                <Link to="/con" style={{ textDecoration: "none" }}>
                  <h3 onClick={toggleContactPage} style={{ color: "rgb(151, 36, 65)" }}> Contact Us </h3>
                </Link>

              </ContactContentWrapper>
              <HeaderContent>
                <img
                  src={logoImage}
                  alt="Logo"
                  style={{ width: "100px", height: "95px" }}
                />
                <h1 style={{ color: "rgb(151, 36, 65)" }}>
                  Friendly Food Finder
              </h1>
                <h3 style={{ color: "rgb(151, 36, 65)" }}>
                  <Typed
                    strings={[
                      "Feeling Hungry ?",
                      "Want to try new taste ?",
                      "Here you can find delicious food choice ",
                      "Find your favourite food from your neighbourhood "
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                  />
                </h3>
                <input
                  style={{ fontSize: "18px" }}
                  type="text"
                  placeholder="Enter your location"
                />
                <Link to="/rest">
                  <button onClick={togglePage} style={{ fontSize: "18px",color: "rgb(151, 36, 65)" }}>
                    Search
              </button>
                </Link>
              </HeaderContent>
            </HeaderWrapper>
            <HeaderSideWrapper>
              <SideImage src={sideImage1} alt="F3" />
              <SideImage src={sideImage2} alt="F3" />
            </HeaderSideWrapper>
          </PageHeaderContent>
        )}
        <Switch>
          <Route exact path="/con">
            <div>
              <HeaderRestaurantList />
              <ContactForm />
            </div>
          </Route>
          <Route path="/rest">
            {showPage &&
              (
                <div>
                  <HeaderRestaurantList />
                  <RestaurantList />
                </div>)}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
