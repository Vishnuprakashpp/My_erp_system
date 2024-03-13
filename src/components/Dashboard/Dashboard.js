import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import CalendarView from './CalendarView';

const Dashboard = ({ products, orders }) => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  useEffect(() => {
    setTotalProducts(products.length);
    setTotalOrders(orders.length);
  }, [products, orders]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="metrics">
        <div className="metric">
          <span>Total Products:</span>
          <span>{totalProducts}</span>
        </div>
        <div className="metric">
          <span>Total Orders:</span>
          <span>{totalOrders}</span>
        </div>
      </div>
      <CalendarView orders={orders} />
    </div>
  );
};

export default Dashboard;
