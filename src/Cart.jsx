import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = sessionStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const clearCart = () => setCartItems([]);
  // const addToCart = (item) => {
  //   setCartItems((prevItems) => {
  //   const existingItem = prevItems.find((i) => i.uniqueId === item.uniqueId);

  //     if (existingItem) {
  //       return prevItems.map((i) =>
  //         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
  //       );
  //     }
  //     return [...prevItems, { ...item, quantity: 1 }];
  //   });
  // };

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.uniqueId === item.uniqueId);

      if (existingItem) {
        return prevItems.map((i) =>
          i.uniqueId === item.uniqueId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.uniqueId !== uniqueId)
    );
  };

  const increaseQuantity = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.uniqueId === uniqueId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  useEffect(() => {
    sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const cart = cartItems;
  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        clearCart,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
