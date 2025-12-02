import { useState } from "react";
import type { FormEvent } from "react";

export const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // No lanzará ninguna acción
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <div className="checkout-form">
      <h2 className="checkout-form__title">Información de Envío</h2>

      <form onSubmit={handleSubmit} className="checkout-form__form">
        <div className="checkout-form__field checkout-form__field--full">
          <label htmlFor="email" className="checkout-form__label">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="checkout-form__input"
            placeholder="tu@email.com"
            required
          />
        </div>

        <div className="checkout-form__row">
          <div className="checkout-form__field checkout-form__field--half">
            <label htmlFor="firstName" className="checkout-form__label">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="checkout-form__input"
              placeholder="Juan"
              required
            />
          </div>

          <div className="checkout-form__field checkout-form__field--half">
            <label htmlFor="lastName" className="checkout-form__label">
              Apellido
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="checkout-form__input"
              placeholder="Pérez"
              required
            />
          </div>
        </div>

        <div className="checkout-form__field checkout-form__field--full">
          <label htmlFor="address" className="checkout-form__label">
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="checkout-form__input"
            placeholder="Calle Principal #123, Ciudad"
            required
          />
        </div>

        <button type="submit" className="checkout-form__button">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
};
