import { AppRouter } from "./presentation/router/AppRouter";
import { CartProvider } from "./context";

export const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};
