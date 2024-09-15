import React from 'react';
import './ServiceDetail.css';


const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-4 text-center service-card">
    <div className="service-image-container">
        <img src={service.image} alt={service.name} className="service-image" />
    </div>
    <h5 className="service-name mt-4">{service.name}</h5>
    <p className="service-description mt-3">{service.description}</p>
</div>
);
};

export default ServiceDetail;