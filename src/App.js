import "./App.css";
import Navbar from './Component/navbar/navbar';
import Header from './Component/header/header';
import About from './Component/about/about';
import Seoul from './Component/seoul/seoul';
import Jeju from './Component/jeju/jeju';
import Busan from './Component/busan/busan';
import Place from './Component/place/place';
import Second from './Component/second_header/second';
import Footer from './Component/footer/footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Place />
      <Seoul />
      <Jeju />
      <Busan />
      <Second />
      <Footer />
    </>
  );
};
export default App;