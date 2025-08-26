import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Finish from "./Components/Finish/Finish";
import { CartCheckout } from "./component/organisms/cart-checkout/cart-checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="rdelivery"
          element={<Home />} /* this route is only for use on GitHub Pages */
        />
        <Route path="/checkout" element={<CartCheckout />} />
        <Route path="/completed" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
