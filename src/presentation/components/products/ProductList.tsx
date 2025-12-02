import type { Product } from "../../../types";
import { ProductCard } from "./ProductCard";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) {
    return (
      <div className="product-list__empty">
        <p>No hay productos disponibles</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
