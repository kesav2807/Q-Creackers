import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FilterBar from '../components/FilterBar';
import { products } from '../data/products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = [...new Set(products.map(p => p.category))];
  const types = [...new Set(products.map(p => p.type))];

  useEffect(() => {
    let filtered = products;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    
    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.type === selectedType);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedType]);

  return (
    <div className="home-page">
      {/* ✅ Toast notification setup */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className="hero-section">
        <h2>Welcome to Q Crackers</h2>
        <p>Your trusted source for quality crackers</p>
      </div>
      
      <FilterBar
        selectedCategory={selectedCategory}
        selectedType={selectedType}
        onCategoryChange={setSelectedCategory}
        onTypeChange={setSelectedType}
        categories={categories}
        types={types}
      />
      
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
