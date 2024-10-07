import './App.css';
import Navbar from "./Components/Navbar.js";
import Home from "./Components/Home.js";
import Favorites from "./Components/Favorites.js";
import Care from "./Components/Care.js";
import Banner from "./Components/Banner.js";
import Products from "./Components/Products.js";
import Contacts from './Components/Contacts.js';
import Footer from './Components/Footer.js';
import { FaArrowUp } from "react-icons/fa";
import { useState } from 'react';

function App() {

  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300)
      setVisible(true);
    else if (scrolled <= 300)
      setVisible(false);
  }
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Favorites />
      <Care />
      <Banner />
      <Products />
      <Contacts />
      <Footer />
      <FaArrowUp className='scroll-up' onClick={scrollUp} style={{ display: visible ? "inline" : "none" }} />
    </div>
  );
}

export default App;
