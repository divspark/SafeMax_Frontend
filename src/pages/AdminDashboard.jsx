import React, { useEffect, useState } from 'react';
import AppointmentList from '../components/AppointmentList';
import AppointmentDetail from '../components/AppointmentDetail';
import dummyAppointments from '../data/dummyAppointments';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);


  useEffect(() => {
    setAppointments(dummyAppointments);
  }, []);

  // Fetch appointments from backend (replace with your API endpoint)
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await fetch('/api/appointments');
//         const data = await response.json();
//         setAppointments(data);
//       } catch (error) {
//         console.error("Error fetching appointments:", error);
//       }
//     };
//     fetchAppointments();
//   }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleStatusUpdate = (id, status) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status } : appt
      )
    );
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin CMS - Appointments</h1>
      <div className="dashboard-content">
        <AppointmentList
          appointments={appointments}
          onSelect={handleSelectAppointment}
        />
        {selectedAppointment && (
          <AppointmentDetail
            appointment={selectedAppointment}
            onStatusUpdate={handleStatusUpdate}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
