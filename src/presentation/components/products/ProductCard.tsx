import type { Product } from "../../../types";
import { useCart } from "../../../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="product-card">
      <div className="product-card__image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image"
        />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>

        <p className="product-card__description">
          {product.description}
        </p>

        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>

          <button
            className="product-card__button"
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </article>
  );
};
