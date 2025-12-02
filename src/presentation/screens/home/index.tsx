import { productsData } from "../../../data/products";
import { ProductList } from "../../components/products/ProductList";

export const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-page__header">
        <h1 className="title-color">Productos Disponibles</h1>
        <p className="content-color">Explora nuestro catálogo y añade productos a tu carrito</p>
      </header>

      <ProductList products={productsData} />
    </div>
  )
}
