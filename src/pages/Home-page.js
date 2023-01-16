import Header from "../components/Sections/Header/Header"
import Products from "../components/Sections/Products/products";
import Features from "../components/Sections/Features/features";
import Populars from "../components/Sections/Populars/populars";
import Promos from "../components/Sections/Promos/promos";
import Footer from "../components/Sections/Footer/footer";
function Home() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Features />
      <Populars />
      <Promos />
      <Footer />
    </div >
  );
}

export default Home;
