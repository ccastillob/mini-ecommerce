import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { CheckoutForm } from "../../components/checkout/CheckoutForm";
import { OrderSummary } from "../../components/checkout/OrderSummary";

export const CheckoutPage = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (state.items.length === 0) {
      navigate("/cart");
    }
  }, [state.items.length, navigate]);

  if (state.items.length === 0) {
    return null;
  }

  return (
    <div className="checkout-page">
      <Link to="/cart" className="checkout-page__back-link">
        ← Volver al carrito
      </Link>

      <header className="checkout-page__header">
        <h1 className="title-color">Finalizar Compra</h1>
        <p className="content-color">Completa tu información para procesar el pedido</p>
      </header>

      <div className="checkout-page__content">
        <section className="checkout-page__form">
          <CheckoutForm />
        </section>

        <aside className="checkout-page__summary">
          <OrderSummary />
        </aside>
      </div>
    </div>
  );
}
