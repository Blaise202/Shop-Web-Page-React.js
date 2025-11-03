import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            />
            <Route
              path="/products"
              element={
                <Products
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
