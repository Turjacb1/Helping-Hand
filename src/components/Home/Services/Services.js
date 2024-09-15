import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/serviceDetail';
import './Services.css'; // Import the CSS file for styling

const serviceData = [
    {
        name: 'Fluoride Treatment',
        image: fluoride,
        description: 'Protect your teeth from decay with our professional fluoride treatments.'
    },
    {
        name: 'Cavity Filling',
        image: cavity,
        description: 'We provide safe and comfortable cavity fillings to restore tooth integrity.'
    },
    {
        name: 'Teeth Whitening',
        image: whitening,
        description: 'Get a brighter smile with our advanced teeth whitening services.'
    }
];

const Services = () => {
    return (
        <section className="services-container">
            <div className="text-center services-header">
                <h5 className="service-subtitle">OUR SERVICES</h5>
                <h2 className="service-title">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="service-grid w-75 row">
                    {
                        serviceData.map(service => (
                            <ServiceDetail key={service.name} service={service}></ServiceDetail>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;
