import { useState } from "react";
const Search = ({ products }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const onChangeSearchTerm = (e) => setSearchTerm(e.target.value);
	const filteredProducts = products.filter((Product) => {
		return Product.title.toLowerCase().includes(searchTerm.toLowerCase());
	});

	console.log(filteredProducts);
	return (
		<>
			<input value={searchTerm} onChange={onChangeSearchTerm} />
		</>
	);
};
export default Search;
