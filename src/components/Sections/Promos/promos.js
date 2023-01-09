import "../../../styles/promos.css";

const Promos = () => {
  return (
    // <section className="promo-section">
    <div className="component promo-container">
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
        src="/Images/Promos/air-max-sc-shoes-bd4QB6.png"
        alt=""
      />
    </div>
    // </section>
  );
};

export default Promos;
