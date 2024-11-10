import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppointmentList from '../components/AppointmentList';
import AppointmentDetail from '../components/AppointmentDetail';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  // Fetch appointments from backend (replace with your API endpoint)
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Retrieve token from localStorage
        const token = localStorage.getItem('authToken');
        
        // If token is not available, handle redirection or show an error
        if (!token) {
          console.log('No token found, please log in');
          return;
        }

        // Send the token in the Authorization header for the request
        const response = await axios.get('https://safe-max-backend.vercel.app/api/appointment/all', {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token to Authorization header
          },
        });

        console.log(response.data); // You should see the appointments with `id` field now.

        // Assuming the response has appointments with an `id` field
        setAppointments(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleStatusUpdate = (id, status) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt._id === id ? { ...appt, status } : appt // Ensure you're checking with the correct key (likely _id)
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
