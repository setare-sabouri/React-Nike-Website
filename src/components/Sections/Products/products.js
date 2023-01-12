import "./products.css";

const Products = () => {
  return (
    <section className="component products-section">
      <h1 className="header-font">Just do it</h1>
      <p className="paragraph-font">
        Captures messages that stands for more than just sport.
      </p>
      <div className="product-list">
        <div className="box">
          <img
            className="product-img"
            src="Images/Products/NewComer.png"
            alt=""
          />
          <p className="product-text">Newcomer</p>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="Images/Products/Men.png"
            alt=""
          />
          <p className="product-text">Men</p>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="Images/Products/Women.png"
            alt=""
          />
          <p className="product-text">Women</p>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="Images/Products/Kids.png"
            alt=""
          />
          <p className="product-text">Kids</p>
        </div>
      </div>
    </section>
  );
};

export default Products;
