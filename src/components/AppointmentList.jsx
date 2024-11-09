import React from 'react';
import '../styles/adminDashboard.css';

const AppointmentList = ({ appointments, onSelect }) => {
  return (
    <div className="appointment-list">
      <h2>All Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li
            key={appointment.id}
            onClick={() => onSelect(appointment)}
            className={`appointment-item ${appointment.status}`}
          >
            <p className='client-name'>{appointment.clientName}</p>
            <p>Status: {appointment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
