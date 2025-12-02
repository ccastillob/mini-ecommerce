import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../../components/cart/CartItem";
import { CartSummary } from "../../components/cart/CartSummary";

export const ShoppingPage = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  if (state.items.length === 0) {
    return (
      <div className="shopping-page shopping-page--empty">
        <div className="shopping-page__empty-state">
          <h1 className="title-color">Tu carrito está vacío</h1>
          <p className="content-color">Agrega algunos productos para comenzar a comprar</p>
          <button
            className="shopping-page__continue-btn"
            onClick={() => navigate("/")}
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  const uniqueProductsCount = state.items.length;

  return (
    <div className="shopping-page">
      <header className="shopping-page__header">
        <h1 className="title-color">Carrito de Compras</h1>
        <p className="content-color">
          {uniqueProductsCount} {uniqueProductsCount === 1 ? "producto" : "productos"} en tu carrito
        </p>
      </header>

      <div className="shopping-page__content">
        <section className="shopping-page__items">
          {state.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>

        <aside className="shopping-page__summary">
          <CartSummary />
        </aside>
      </div>
    </div>
  );
}
