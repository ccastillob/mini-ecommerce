import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CheckoutPage, HomePage, NotFoundPage, ShoppingPage } from "../screens";
import { Navbar } from "../components";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<ShoppingPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
