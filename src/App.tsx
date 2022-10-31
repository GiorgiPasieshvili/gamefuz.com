/* utilities import */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "util/ThemeContext";
import ScrollToTop from "util/SrollToTop";

/* default styles import */
import "style/main.scss";

/* page & layout imports */
import Header from "component/Header";
import Footer from "component/Footer";
import Filter from "component/Filter";
import Homepage from "route/Homepage";
import ProductPage from "route/ProductPage";
import FilterPage from "route/FilterPage";

export default function App() {
  return (
    <Router>
      <div className={"app " + useTheme()}>
        <Header />
        <Filter />
        <main className="main">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="filter" element={<FilterPage />} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
