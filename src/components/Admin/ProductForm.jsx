import React, { useState, useContext } from 'react';
import { InventoryContext } from '../../contexts/InventoryContext';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const { addProduct } = useContext(InventoryContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ id: Date.now(), name, stock: parseInt(stock) });
    setName('');
    setStock('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del producto" />
      <input value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" type="number" />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default ProductForm;
// En esta es la cual presenta la integracion de los productos con su respetivo valor en la cual tiene cada uno con una breve descripcion.