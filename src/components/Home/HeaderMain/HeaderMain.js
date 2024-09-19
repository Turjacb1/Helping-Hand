import React, { useState, useEffect } from 'react';
import chair1 from '../../../images/chair.png';
import chair2 from '../../../images/Be-Clinic-2.jpg';
import { useNavigate } from 'react-router-dom';

import './HeaderMain.css'; // Custom CSS for additional styling
import { Navigate } from 'react-router-dom';

const HeaderMain = () => {
  const [currentImage, setCurrentImage] = useState(chair1); // Initial image
  const images = [chair1, chair2]; // Array of images
  const imageChangeInterval = 4000; // 3 seconds

  // Effect to handle the automatic image switching
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImageIndex = (images.indexOf(prevImage) + 1) % images.length;
        return images[nextImageIndex];
      });
    }, imageChangeInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);



  const navigate = useNavigate();
  const handleAppointmentClick = () => {
    navigate('/appointment'); // Navigate to the appointment route
  };



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
        <button className="btn btn-primary main-btn" onClick={handleAppointmentClick}>Get Appointment</button>
      </div>

      <div className="col-md-6">
        {/* Image will automatically change */}
        <img src={currentImage} alt="Dental Chair" className="img-fluid chair-img" />
      </div>
    </main>
  );
};

export default HeaderMain;
