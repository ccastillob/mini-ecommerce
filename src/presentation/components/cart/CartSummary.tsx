import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

export const CartSummary = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  const shipping = useMemo(() => {
    // Se le podria añadir una constante para que maneje la cantidad minima para el envio gratis
    if (state.totalPrice > 1000) {
      return 0;
    }
    return 9.99;
  }, [state.totalPrice]);

  const total = state.totalPrice + shipping;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <aside className="cart-summary">
      <h2 className="cart-summary__title">Resumen del Pedido</h2>

      <div className="cart-summary__content">
        <div className="cart-summary__row">
          <span className="cart-summary__label">Subtotal:</span>
          <span className="cart-summary__value">${state.totalPrice.toFixed(2)}</span>
        </div>

        <div className="cart-summary__row">
          <span className="cart-summary__label">Envío:</span>
          <span className="cart-summary__value">
            {shipping === 0 ? (
              <span className="cart-summary__free">Gratis</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <hr className="cart-summary__divider" />

        <div className="cart-summary__row cart-summary__row--total">
          <span className="cart-summary__label">Total:</span>
          <span className="cart-summary__value cart-summary__value--total">
            ${total.toFixed(2)}
          </span>
        </div>

        <button
          className="cart-summary__button"
          onClick={handleCheckout}
          disabled={state.items.length === 0}
        >
          Procesar Pago
        </button>
      </div>
    </aside>
  );
};
