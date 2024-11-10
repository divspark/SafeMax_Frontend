import React from 'react';
import axios from 'axios';
import '../styles/adminDashboard.css';

const AppointmentDetail = ({ appointment, onStatusUpdate }) => {
  const handleStatusChange = async (newStatus) => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('authToken');
      
      // Make the PATCH request using axios with the auth token in the headers
      const response = await axios.patch(
        `https://safe-max-backend.vercel.app/api/appointment/update/${appointment.id}`,
        { status: newStatus },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` // Pass the token in the Authorization header
          }
        }
      );

      // Handle the response data
      const updatedAppointment = response.data;
      onStatusUpdate(appointment.id, newStatus);
    } catch (error) {
      console.error("Error updating status:", error);
    }
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
