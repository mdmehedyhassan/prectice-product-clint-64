import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddedProduct from './components/AddedProduct/AddedProduct';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import Product from './components/Prodcut/Product';
import ProductUpdate from './components/ProductUpdate/ProductUpdate';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductUpdate />} />
        <Route path="/added" element={<AddedProduct />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
