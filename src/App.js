import './App.css';
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";

import Navbar from './components/Sections/Header/Navbar';
=======
import "./styles/fonts.css"
import Header from './components/Sections/Intro/header';
>>>>>>> c42a4f6e71f10ed41f3283ec6c679a2eb1d4ee2f
import Products from './components/Sections/Products/products';
import Features from './components/Sections/Features/features';
import Populars from './components/Sections/Populars/populars';
import Promos from './components/Sections/Promos/promos';
import Footer from './components/Sections/Footer/footer';
import Intro from './components/Sections/Header/intro';
function App() {
  return (
    <div className="App">
      <div className='Header-Intro-Wrapper'>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
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

export default App;
