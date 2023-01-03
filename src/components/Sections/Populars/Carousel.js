import { useState, useEffect } from 'react';
import "../../../styles/popular.css";
import Card from './Popular-Cards/Popular-Cards';
import ReactSimplyCarousel from 'react-simply-carousel';

function PopularsCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(1);
    useEffect(() => {
        setActiveSlideIndex(0);
    }, []);
    return (
        <div className='carousel-container'>
            <ReactSimplyCarousel
                className="carousel"
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={2}
                itemsToScroll={2}
                showSlidesBeforeInit={true}
                forwardBtnProps={{
                    className: "Carousel-btn right",
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    className: "Carousel-btn left",
                    children: <span>{`<`}</span>,
                }}

                speed={400}
                easing="linear"
            >
                <Card imageSrc={"Images/Populars/Populars1.png"}></Card>
                <Card imageSrc={"Images/Populars/Populars2.png"}></Card>
                <Card imageSrc={"Images/Populars/Populars3.png"}></Card>

            </ReactSimplyCarousel>
        </div>
    );
}

export default PopularsCarousel;