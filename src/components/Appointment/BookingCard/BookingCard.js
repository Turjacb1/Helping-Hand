import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';
import './BookingCard.css';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="booking-card">
            <div className="card p-4 shadow-sm">
                <div className="card-body text-center">
                    <h5 className="card-title text-primary">{booking.subject}</h5>
                    <h6 className="card-subtitle text-secondary">{booking.visitingHour}</h6>
                    <p className="card-text">{booking.totalSpace} Space Available</p>
                    <button onClick={openModal} className="btn btn-primary">Book Appointment</button>
                    <AppointmentForm 
                        modalIsOpen={modalIsOpen} 
                        appointmentOn={booking.subject} 
                        closeModal={closeModal} 
                        date={date} 
                    />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;
