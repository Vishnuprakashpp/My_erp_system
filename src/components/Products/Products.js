import React, { useState } from 'react';
import './Product.css';

const Product = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({ name: '', category: '', price: '', stock: '' });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedProduct) {
      const updatedProducts = products.map(product =>
        product.id === selectedProduct.id ? { ...product, ...formData } : product
      );
      setProducts(updatedProducts);
      setSelectedProduct(null);
    } else {
      const newProduct = { id: products.length + 1, ...formData };
      setProducts([...products, newProduct]);
    }
    setFormData({ name: '', category: '', price: '', stock: '' });
  };

  const editProduct = (product) => {
    setSelectedProduct(product);
    setFormData(product);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="product-list">
      <h2 className='product'>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button className='button1' onClick={() => editProduct(product)}>Edit</button>
                <button  className='button0' onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="add-product-form">
        <h2 className='add_product' >{selectedProduct ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} />
          <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} />
          <input type="number" name="stock" placeholder="Stock Quantity" value={formData.stock} onChange={handleInputChange} />
          <button className='button4'type="submit">{selectedProduct ? 'Update Product' : 'Add Product'}</button>
        </form>
      </div>
    </div>
  );
};

export default Product;
