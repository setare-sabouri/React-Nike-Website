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

export default Populars;    