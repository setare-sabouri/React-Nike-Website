import "../../../styles/products.css";

const Products = () => {
  return (
    <section className="products-section">
      <h1 className="header-font">Just do it</h1>
      <p className="paragraph-font">
        Captures messages that stands for more than just sport.
      </p>
      <div className="product-grid">
        <div className="box">
          <img
            className="product-img"
            src="https://images.unsplash.com/photo-1615290642882-6b9501729a27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="product-text">Newcomer</div>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="product-text">Men</div>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="product-text">Women</div>
        </div>

        <div className="box">
          <img
            className="product-img"
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            alt=""
          />
          <div className="product-text">Kids</div>
        </div>
      </div>
    </section>
  );
};

export default Products;
