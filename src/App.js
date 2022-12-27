import './App.css';
import Header from './components/Sections/Intro/header';
import Products from './components/Sections/Products/products';
import Features from './components/Sections/Features/features';
import Populars from './components/Sections/Populars/populars';
import Promos from './components/Sections/Promos/promos';
import Footer from './components/Sections/Footer/footer';
import Intro from './components/Sections/Intro/intro';
function App() {
  return (
    <div className="App">
      <div className='Header-Intro-Wrapper'>
        <Header></Header>
        <Intro></Intro>
      </div>
      <Products></Products>
      <Features></Features>
      <Populars></Populars>
      <Promos></Promos>
      <Footer></Footer>
    </div>
  );
}

export default App;
