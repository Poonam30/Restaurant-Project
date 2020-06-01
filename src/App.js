import React from "react";
import "./styles.css";
import styled from "styled-components";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList";
import ContactForm from "./pages/ContactForm";
import RestaurantFirstPage from "./pages/RestaurantFirstPage";
export default function App() {
  return (
      
          <RestaurantFirstPage />
       
  );
}
