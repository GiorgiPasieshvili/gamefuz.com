/* utilities import */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "util/ThemeContext";

/* default styles import */
import "style/main.scss";

/* page & layout imports */
import Header from "component/Header";
import Footer from "component/Footer";
import Homepage from "route/Homepage";
import ProductPage from "route/ProductPage";
import FilterPage from "route/FilterPage";

export default function App() {
  return (
    <Router>
      <div className={"App " + useTheme()}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="filter/:id" element={<FilterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
