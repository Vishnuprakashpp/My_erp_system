import React, { useState } from 'react';
import './order.css';

const Order = ({ orders, setOrders }) => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  const updateOrderStatus = (orderId, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Processing' : currentStatus === 'Processing' ? 'Shipped' : 'Delivered';

    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    setOrders(updatedOrders);
  };

  const deleteOrder = (orderId) => {
    setOrders(prevOrders => prevOrders.filter(order => order.orderId !== orderId));
  };

  return (
    <div className="order-list">
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.status}</td>
              <td >
                <button className='button1'onClick={() => viewOrderDetails(order)}>View Details</button>
                <button className='button2' onClick={() => updateOrderStatus(order.orderId, order.status)}>Update Status</button>
                <button  className='button3' onClick={() => deleteOrder(order.orderId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeOrderDetails}>&times;</span>
            <h2>Order Details</h2>
            <p>Order ID: {selectedOrder.orderId}</p>
            <p>Customer Name: {selectedOrder.customerName}</p>
            <p>Order Date: {selectedOrder.orderDate}</p>
            <p>Delivery Date: {selectedOrder.deliveryDate}</p>
            <p>Status: {selectedOrder.status}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
