import './App.css';
import Header from './components/Slider';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import DealoftheDay from './components/Deal-of-the-day.jsx/DealoftheDay';
// import ContainerBase from './components/ContainerBase';
// import ProductContainer from './components/ProductContainer';
// import Productx from './components/Productx';
// import SlashedPricesbase from './components/SlashedPricesbase';



function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      {/* <Header /> */}
      <DealoftheDay />
      {/* <SlashedPricesbase /> */}
      {/* <Productx /> */}
      {/* <ContainerBase /> */}
       {/* <ProductContainer /> */}
    </>
  );
}

export default App;
