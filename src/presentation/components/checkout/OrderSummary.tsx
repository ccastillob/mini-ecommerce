import { useMemo } from "react";
import { useCart } from "../../../hooks/useCart";

export const OrderSummary = () => {
  const { state } = useCart();

  const shipping = useMemo(() => {
    // Se le podria añadir una constante para que maneje la cantidad minima para el envio gratis
    if (state.totalPrice > 1000) {
      return 0;
    }
    return 9.99;
  }, [state.totalPrice]);

  const total = state.totalPrice + shipping;

  return (
    <aside className="order-summary">
      <h2 className="order-summary__title">Resumen de la Compra</h2>

      <div className="order-summary__products">
        {state.items.map((item) => (
          <div key={item.id} className="order-summary__product">
            <img
              src={item.image}
              alt={item.name}
              className="order-summary__product-image"
            />
            <div className="order-summary__product-details">
              <p className="order-summary__product-name">{item.name}</p>
              <p className="order-summary__product-quantity">Qty: {item.quantity}</p>
            </div>
            <p className="order-summary__product-price">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <hr className="order-summary__divider" />

      <div className="order-summary__totals">
        <div className="order-summary__row">
          <span className="order-summary__label">Subtotal:</span>
          <span className="order-summary__value">${state.totalPrice.toFixed(2)}</span>
        </div>

        <div className="order-summary__row">
          <span className="order-summary__label">Envío:</span>
          <span className="order-summary__value">
            {shipping === 0 ? (
              <span className="order-summary__free">Gratis</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        <hr className="order-summary__divider" />

        <div className="order-summary__row order-summary__row--total">
          <span className="order-summary__label">Total:</span>
          <span className="order-summary__value order-summary__value--total">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </aside>
  );
};
