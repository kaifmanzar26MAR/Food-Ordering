import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeToCart = (item) => {
    cart.filter((product) => product.id!==item.id
    )
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
