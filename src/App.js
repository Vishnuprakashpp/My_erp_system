import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Products/Products';
import Order from './components/Orders/Orders';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20.99, stock: 15 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 15.99, stock: 25 },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 17.99, stock: 22 }
  ]);

  const [orders, setOrders] = useState([
    { id: 1, orderId: 'ORD001', customerName: 'John Doe', orderDate: '2024-01-10', deliveryDate: '2024-01-15', status: 'Pending' },
    { id: 2, orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '2024-01-15', deliveryDate: '2024-01-20', status: 'Shipped' },
    { id: 3, orderId: 'ORD003', customerName: 'Alice Johnson', orderDate: '2024-01-20', deliveryDate: '2024-01-25', status: 'Delivered' },
    { id: 4, orderId: 'ORD004', customerName: 'Robert', orderDate: '2024-01-25', deliveryDate: '2024-01-28', status: 'Pending' }
  ]);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard products={products} orders={orders} />} />
          <Route path="/products" element={<Product products={products} setProducts={setProducts} />} />
          <Route path="/orders" element={<Order orders={orders} setOrders={setOrders} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
