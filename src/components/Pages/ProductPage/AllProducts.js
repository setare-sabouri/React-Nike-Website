import "../../../styles/AllProducts.css";

const ProductCard = ({ product }) => {
	return (
		<div className="card">
			<img
				className="product-card-image"
				src={product.image}
				alt={product.title}
			/>
			<p>{`$${product.price}`}</p>{" "}
			<h3>{product.title}</h3> <br />{" "}
			<button className="product-button">
				Add To Cart
			</button>
		</div>
	);
};

const AllProducts = ({ products }) => {
	return (
		<div className="All-Products-Container">
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default AllProducts;
