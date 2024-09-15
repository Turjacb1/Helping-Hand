import React from 'react';
import chair from '../../../images/chair.png';
import './HeaderMain.css'; // Create a custom CSS file for additional styling

const HeaderMain = () => {
  return (
    <main style={{ height: '600px' }} className="row d-flex align-items-center header-main">
      <div className="col-md-5 offset-md-1">
        <h1 className="main-title">
          Your New Smile <br /> Starts Here
        </h1>
        <p className="main-description">
          Discover your perfect smile with our expert dental care. Experience world-class service
          and customized treatments that leave you smiling brighter than ever before.
        </p>
        <button className="btn btn-primary main-btn">Get Appointment</button>
      </div>

      <div className="col-md-6">
        <img src={chair} alt="Dental Chair" className="img-fluid chair-img" />
      </div>
    </main>
  );
};

export default HeaderMain;
