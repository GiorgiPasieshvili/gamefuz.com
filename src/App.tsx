import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}