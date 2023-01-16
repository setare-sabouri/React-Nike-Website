import ProductsDATA from "./pages/Shop-page/ProductsDATA";

const { productList } = ProductsDATA;
const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const onChangeSearchTerm = (e) => setSearchTerm(e.target.value);

    const filteredProducts =
        productList.filter((product) => {
            return product.title
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                );
        });

    console.log(productList);

    return (
        <React.Fragment>
            <input
                value={searchTerm}
                onChange={onChangeSearchTerm}
            />
            <Navbar />
            <AllProducts
                products={filteredProducts}
            />
        </React.Fragment>
    );
};
export default ProductsPage