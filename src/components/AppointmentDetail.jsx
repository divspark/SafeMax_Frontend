import React from 'react';
import '../styles/adminDashboard.css';

const AppointmentDetail = ({ appointment, onStatusUpdate }) => {
  const handleStatusChange = (newStatus) => {
    // Update status in backend (replace with your API endpoint)
    fetch(`https://safe-max-backend.vercel.app/api/appointments/${appointment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((updatedAppointment) => {
        onStatusUpdate(appointment.id, newStatus);
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  return (
    <div className="appointment-detail">
      <h2>Appointment Details</h2>
      <p><strong>Client:</strong> {appointment.clientName}</p>
      <p><strong>Date:</strong> {appointment.date}</p>
      <p><strong>Time:</strong> {appointment.time}</p>
      <p><strong>Status:</strong> {appointment.status}</p>
      
      <div className="status-actions">
        <button onClick={() => handleStatusChange('confirmed')}>Confirm</button>
        <button onClick={() => handleStatusChange('pending')}>Pending</button>
        <button onClick={() => handleStatusChange('canceled')}>Cancel</button>
      </div>
    </div>
  );
};

export default AppointmentDetail;
