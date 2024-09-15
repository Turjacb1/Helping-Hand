import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
  return (
    <section className="makeAppointment">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 d-none d-md-block">
            <img src={doctor} alt="Doctor" className="img-fluid" />
          </div>
          <div className="col-md-7 text-white py-5">
            <h5 className="text-uppercase text-primary">Appointment</h5>
            <h1 className="my-4 appointment-title">Make an Appointment Today</h1>
            <p className="my-4 text-secondary appointment-description">
              It's a long established fact that a reader will be distracted by the readable content of a page.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
