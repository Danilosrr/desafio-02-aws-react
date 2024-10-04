import { createContext, ReactNode, useState } from "react";
import { Comic } from "../types/comic-type";



interface ICartContext {
  cartItems: Comic[];
  setCartItems: React.Dispatch<React.SetStateAction<Comic[]>>;
  addToCart: (item: Comic) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext | null>(null);

interface CartContextProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartContextProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Comic[]>([]);

  const addToCart = (item: Comic) => {
    console.log(item)
    setCartItems(cartItems.concat(item));
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
