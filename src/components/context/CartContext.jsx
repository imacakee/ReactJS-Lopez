import { createContext, useState } from "react";

export const CartContext = createContext(false);

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <CartContext.Provider value={[products, setProducts]}>
      {children}
    </CartContext.Provider>
  );
}
