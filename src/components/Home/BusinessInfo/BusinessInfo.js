import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './BusinessInfo.css'; // Custom CSS for styling

const infoData = [
  {
    title: 'Opening Hours',
    description: 'We are open 7 days',
    icon: faClock,
    background: 'primary',
  },
  {
    title: 'Visit Our Location',
    description: 'Frankfurt, Germany',
    icon: faMapMarkerAlt,
    background: 'primary',
  },
  {
    title: 'Call Us',
    description: '+12345678',
    icon: faPhone,
    background: 'primary',
  },
];

const BusinessInfo = () => {
  return (
    <section className="business-info-section">
      <div className="container">
        <div className="row">
          {infoData.map((info) => (
            <div className="col-md-4 mb-4" key={info.title}>
              <InfoCard info={info} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
