import Products from "../Sections/Products/products";
import Features from "../Sections/Features/features";
import Populars from "../Sections/Populars/populars";
import Promos from "../Sections/Promos/promos";
import Footer from "../Sections/Footer/footer";
import Intro from "../Sections/Intro/intro";
import Navbar from "../Sections/Navbar/Navbar";

function Home() {
	return (
		<div className="App">
			<div className="Header-Intro-Wrapper">
				<Intro />
			</div>

			<Products />
			<Features />
			<Populars />
			<Promos />
			<Footer />
		</div>
	);
}

export default Home;
