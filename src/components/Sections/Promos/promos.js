<<<<<<< HEAD
import { useState } from "react";
const Promos = () => {
    const [count, setCount] = useState(0);
    const increase = () => setCount(prevCount => prevCount + 1);
    const Deacrease = () => setCount(prevCount => prevCount - 1);
    return (
        <section className="component">
            <p>Promos</p>
            <div>Currentcount is {count}</div>
            <button onClick={increase}>+</button>
            <button onClick={Deacrease}>-</button>
        </section >
    )
}
=======
import "../../../styles/promos.css";
>>>>>>> c42a4f6e71f10ed41f3283ec6c679a2eb1d4ee2f

const Promos = () => {
  return (
    // <section className="promo-section">
      <div className="promo-container">
        <div className="promo-header">
          <h1 className="header-font">
            Rewarding <br />
            Days Ahead
          </h1>{" "}
          <p className="paragraph-font">
            More rewards for Members as we celebrate the <br /> Nike App
            Anniversary. <br /> <br /> From 02 - 07 Aug, stand a chance to score a pair <br />{" "}
            of Nike Air Max “all type” when you shop on the <br /> Nike App. <br />
            <br />
            Not a Nike Member?{" "}
          </p>
          <div className="join-now-button">Join Now</div>
        </div>
          <img className="promo-woman-image"
            src="https://static.nike.com/a/videos/so_0/e328b4f3-ff6f-4d55-af2a-393cdc5ee755/air-max-sc-shoes-bd4QB6.jpg"
            alt=""
          />
      </div>
    // </section>
  );
};

export default Promos;
