//header
//sub-banner
//search input
//categories tab
//products cards
//checkout page
//footer component
import Head from "./components/header-component/headers";
import Cards from "./components/Products/products";
import Side from "./components/Sidebar/sidebar";
import Checkout from "./components/Checkout-component/checkout";
import ProductPage from "./Product/ProductPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Data } from "./context/context";
import "./styles.css";
import Footer from "./components/Footer-component/footer";

const App = () => {
  return (
    <Data>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div id="body">
                <Head />

                <div id="products">
                  <Side />
                  <Cards />
                </div>
                <Footer />
              </div>
            }
          />
          <Route exact path="/:nam" element={<ProductPage />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Data>
  );
};

export default App;
