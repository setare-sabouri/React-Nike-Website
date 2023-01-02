<<<<<<< HEAD
import "./Populars.css"
import Card from "./Cards/card";
import { Carousel } from 'react-responsive-carousel';

const Populars = () => {
    return (
        <section className="component populars-section">
            <h2>Popular Picks</h2>
            <p>Our popular picks for most favorited Nike Men’s & Women’s shoes.</p>
            <div className="populars-carousel">
                <Card title={"first"} imageSrc={"./Populars1.png"} />
                <Card title={"first"} imageSrc={"./Populars2.png"} />
                <Card title={"first"} imageSrc={"./Populars3.png"} />
            </div>
        </section>
    )
}
=======
import "../../../styles/popular.css";
>>>>>>> c42a4f6e71f10ed41f3283ec6c679a2eb1d4ee2f

const Populars = () => {
  return (
    // <section className="popular-section">

      <div className="popular-header">
        <h1 className="header-font">Popular Picks</h1>
        <p className="paragraph-font">
          Our popular picks for most favorited Nike Men’s & Women’s shoes.
        </p>
        
      </div>
    // </section>
  );
};

export default Populars;
