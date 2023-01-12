import Products from "./components/Sections/Products/products";
import Features from "./components/Sections/Features/features";
import Populars from "./components/Sections/Populars/populars";
import Promos from "./components/Sections/Promos/promos";
import Footer from "./components/Sections/Footer/footer";
import Intro from "./components/Sections/Intro/intro";
import Navbar from "./components/Sections/Navbar/Navbar";

function Home() {
  return (
    <div className="App">
      <Intro />
      <Products />
      <Features />
      <Populars />
      <Promos />
      <Footer />
    </div >
  );
}

export default Home;
