import { useEffect, useState } from "react";
import { searchPrice } from "./api/SearchPrice";
import "./App.scss";
import Navbar from "./components/Navbar";
import { Banner } from "./components/Banner";
import Footer from "./components/Footer";
import './theme/stylesheet.scss'

function App() {
  const [cryptoPrice, setCryptoPrice] = useState([]);

  useEffect(() => {
    searchPrice().then(({ data: { data } }) => {
      setCryptoPrice(JSON.parse(JSON.stringify(data)));
    });
  }, []);

  return (
    <div>
      <Navbar cryptoPrice={cryptoPrice} />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
