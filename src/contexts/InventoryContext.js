import React, { createContext, useState } from 'react';

const InventoryContext = createcontext();

const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <InventoryContext.Provider value={{ products, addProduct, updateProduct, cart, addToCart, updateCart }}>
      {children}
    </InventoryContext.Provider>
  );
};

export { InventoryContext, InventoryProvider };
//Creacion del inventario y sus factores como el anadir, actualizar , añadir al carrito y actualizar el carrito 
// esto va de la mano  con la cual cada producto se añade o se venta actualize el invenatario a conforme de los producto que hay 