import "../../../styles/popular.css";
import React from "react";
import PopularsCarousel from "./Carousel";
const Populars = () => {
  return (
    <section className="component populars-component">
      <h2>Popular Picks</h2>
      <p>Our popular picks for most favorited Nike Men’s & Women’s shoes.</p>
      <PopularsCarousel />
    </section>
  );
};

export default Populars;

/* <Card title={"ss"} imageSrc={"Images/Populars/Populars1.png"}></Card> */
