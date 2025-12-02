import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <div className="not-found-page__content">
        <h1 className="not-found-page__title">404</h1>
        <h2 className="title-color">Página No Encontrada</h2>
        <p className="content-color">
          Lo sentimos, la página que buscas no existe.
        </p>
        <button
          className="not-found-page__button"
          onClick={() => navigate("/")}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
}
