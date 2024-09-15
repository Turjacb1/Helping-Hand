import React from 'react';
import chair from '../../../images/appot.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'; // Import the custom CSS

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main className="appointment-header d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <h1 className="header-title">Appointment</h1>
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
              className="calendar"
            />
          </div>
          <div className="col-md-6 text-center">
            <img src={chair} alt="Chair" className="img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppointmentHeader;
