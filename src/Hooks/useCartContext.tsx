import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";

function useCartContext() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error(
      "useCartContext deve ser usado dentro de um CartProvider",
    );
  }
  return context;
}

export default useCartContext;
