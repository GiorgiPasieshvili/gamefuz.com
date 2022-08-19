import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import default styles
import '@style/main.scss';

// page & layout imports
import Header from '@component/Header';
import Footer from '@component/Footer';
import Homepage from '@route/Homepage';
import ProductPage from '@route/ProductPage';
import CategoryPage from '@route/CategoryPage';
import { useTheme } from "@util/ThemeContext";

// create app component
export default function App() {
  return (
    <Router>
      <div className={'App ' + useTheme()}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="company/:id" element={<ProductPage />} />
            <Route path="category/:id" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}