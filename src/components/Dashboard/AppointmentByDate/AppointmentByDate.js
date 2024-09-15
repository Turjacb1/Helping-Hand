import React from 'react';

const AppointmentByDate = ({ appointments }) => {
  return (
    <div>
      <h2>Appointments on {appointments.length > 0 ? new Date(appointments[0].date).toDateString() : 'Selected Date'}</h2>
      {appointments.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Gender</th>
              <th>Appointment On</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.age}</td>
                <td>{appointment.weight}</td>
                <td>{appointment.gender}</td>
                <td>{new Date(appointment.date).toDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No appointments found for this date.</p>
      )}
    </div>
  );
};

export default AppointmentByDate;
