import React from 'react';
import featured from '../../../images/treatment.png';
import './FeaturedService.css';

const FeaturedService = () => {
  return (
    <section className="featured-service-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <img className="img-fluid" src={featured} alt="Dental Treatment" />
          </div>
          <div className="col-md-7">
            <h1 className="featured-title">Exceptional Dental Care, on Your Terms</h1>
            <p className="text-secondary my-4 featured-description">
              Our dental care services are designed to provide comprehensive treatment for all your oral health needs. 
              Experience professional, patient-centered care that prioritizes your comfort and convenience.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
