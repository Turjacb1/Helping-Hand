import React from 'react';

const Doctor = ({ doctor }) => {
  return (
    <div className="col-md-4 text-center">
      <img
        className="img-fluid mb-3"
        src={`http://localhost:5000${doctor.img}`}  // Correct URL to access the image
        alt={doctor.name}
      />
      <h4>{doctor.name}</h4>
      <p>{doctor.email}</p>
    </div>
  );
};

export default Doctor;
