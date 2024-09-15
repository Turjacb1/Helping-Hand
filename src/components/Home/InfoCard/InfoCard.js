import React from 'react';
import './IndoCard.css'; // Additional CSS for InfoCard component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ info }) => {
  return (
    <div className={`info-card bg-${info.background}`}>
      <div className="icon">
        <FontAwesomeIcon icon={info.icon} />
      </div>
      <h3>{info.title}</h3>
      <p>{info.description}</p>
    </div>
  );
};

export default InfoCard;
