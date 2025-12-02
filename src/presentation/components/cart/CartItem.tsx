import type { CartItem as CartItemType } from "../../../types";
import { useCart } from "../../../hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  const subtotal = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img
          src={item.image}
          alt={item.name}
          className="cart-item__image"
        />
      </div>

      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item__quantity">
        <button
          className="cart-item__quantity-btn"
          onClick={handleDecrement}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="cart-item__quantity-value">{item.quantity}</span>
        <button
          className="cart-item__quantity-btn"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      <div className="cart-item__subtotal">
        <p className="cart-item__subtotal-label">Subtotal:</p>
        <p className="cart-item__subtotal-value">${subtotal.toFixed(2)}</p>
      </div>

      <button
        className="cart-item__remove-btn"
        onClick={handleRemove}
        title="Eliminar producto"
      >
        ×
      </button>
    </div>
  );
};
