import logo from './logo.svg';
import './App.css';
import Product from './Product.js';
import {useEffect, useState} from 'react';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="App">
      <div>{categories.map(category => <a href="#">category</a>)}</div>
      <div className="products">
        {products.length === 0
          ? "Loading..."
          : products.map(product => <Product {...product} />)}
      </div>
    </div>
  );
}

export default App;
