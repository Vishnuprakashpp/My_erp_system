import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarView.css';

const CalendarView = ({ orders }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const tileClassName = ({ date }) => {
    const formattedDate = date.toISOString().split('T')[0];
    const orderExists = orders.some(order => {
      const formattedOrderDate = new Date(order.deliveryDate).toISOString().split('T')[0];
      return formattedOrderDate === formattedDate;
    });
    return orderExists ? 'highlighted-date' : null;
  };

  const handleDateClick = date => {
    setSelectedDate(date);
  };

  const getOrderStatus = () => {
    if (!selectedDate) return 'No date selected';
    const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
    const order = orders.find(order => {
      const formattedOrderDate = new Date(order.deliveryDate).toISOString().split('T')[0];
      return formattedOrderDate === formattedSelectedDate;
    });
    return order ? `Delivery status: ${order.status}` : 'No order found for selected date';
  };

  return (
    <div className="calendar-container">
      <h2>Delivery Calendar</h2>
      <div className="calendar">
        <Calendar
          tileClassName={tileClassName}
          onClickDay={handleDateClick}
        />
      </div>
      <div className="selected-date-info">{getOrderStatus()}</div>
    </div>
  );
};

export default CalendarView;
