import "../../../styles/features.css";
import React from 'react';
import FeaturesCarousel from "./features-carousel";
const Features = () => {
    return (
        <section className="component features-component">
            <h1 className="header-font">Featured</h1>
            <p className="paragraph-font">These are the newest style of the season.</p>
            <FeaturesCarousel />
        </section>

    )
}

export default Features;    