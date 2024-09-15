import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AllPatients.css'; // Add a CSS file for colorful styling
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllPatients = () => {
  const [appointments, setAppointments] = useState([]);

  // Fetch all appointments when the component mounts
  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/allAppointments');
        setAppointments(response.data); // Set the fetched data
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAllAppointments();
  }, []);

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* Sidebar (left-aligned) */}
        <div className="col-md-3">
          <Sidebar />
        </div>

        {/* Main content (center-aligned) */}
        <div className="col-md-9 d-flex flex-column align-items-center">
          <h2 className="text-center mb-4">All Patients</h2>

          {/* Display the colorful table */}
          <table className="table table-bordered table-hover colorful-table text-center">
            <thead>
              <tr className="table-primary">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Weight</th>
                <th>Gender</th>
                <th>Appointment On</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appointment) => (
                  <tr key={appointment._id}>
                    <td>{appointment.name}</td>
                    <td>{appointment.email}</td>
                    <td>{appointment.phone}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.weight}</td>
                    <td>{appointment.gender}</td>
                    <td>{appointment.appointmentOn}</td>
                    <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
