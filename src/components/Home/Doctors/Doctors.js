import React, { useState, useEffect } from 'react';
import './Doctors.css'; // Import the CSS file

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/doctors') // Fetch doctors from the backend
      .then((response) => response.json())
      .then((data) => setDoctors(data))
      .catch((error) => console.error('Error fetching doctors:', error));
  }, []); // Runs only once when the component mounts

  return (
    <section className="doctors-section my-5 py-5">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h5 className="text-primary">Testimonial</h5>
          <h1>Our Doctors</h1>
        </div>
        <div className="row">
          {doctors.map((doctor) => (
            <div key={doctor._id} className="col-md-4 d-flex flex-column align-items-center mb-4">
              <img
                className="doctor-img"
                src={`http://localhost:5000/${doctor.image}`} // Use the image path from the doctor object
                alt=""
              />
              <h5 className="mt-3 mb-1">{doctor.name}</h5>
              <p className="text-secondary">{doctor.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
