import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

export const Navbar = () => {
  const location = useLocation();
  const { state } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <h2>Mini E-Commerce</h2>
        </Link>

        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link
              to="/"
              className={`navbar__link ${location.pathname === "/" ? "navbar__link--active" : ""}`}
            >
              Inicio
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/cart"
              className={`navbar__link ${location.pathname === "/cart" ? "navbar__link--active" : ""}`}
            >
              Carrito
              {state.totalItems > 0 && (
                <span className="navbar__badge">{state.totalItems}</span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
