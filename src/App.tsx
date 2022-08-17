import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import default styles
import '@style/main.scss';

// page & layout imports
import Header from '@component/Header';
import Footer from '@component/Footer';
import Homepage from '@route/Homepage';
import ProductPage from '@route/ProductPage';
import CategoryPage from '@route/CategoryPage';

// create app component
export default function App() {
  const [isNightMode, setNightMode] = useState(false);

  return (
    <Router>
      <div className={`App ${isNightMode ? 'night_mode' : ''}`}>
        <Header isNightMode={isNightMode} setNightMode={setNightMode} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="category/:id" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}