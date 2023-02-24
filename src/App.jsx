
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import About from './pages/about/About';
import New from './pages/new/New';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path= "/what's new" element = {<New />} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
