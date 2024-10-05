import React from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookAppointment.css';

const bookingData = [
    {
        id: '1',
        subject: 'Teethe Orthodontics',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
    {
        id: '2',
        subject: 'Tooth Decay',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
    {
        id: '3',
        subject: 'Bad Breath',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
    {
        id: '4',
        subject: 'Sensitive Teeth',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
    {
        id: '5',
        subject: 'Root Infection',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
    {
        id: '6',
        subject: 'Enamel Erosion',
        visitingHour: '8:00 AM - 10:00 AM',
        totalSpace: '10',
    },
];

const BookAppointment = ({ date }) => {
    return (
        <section className="book-appointment-section">
            <h2 className="text-center appointment-heading">
                Available Appointments on {date.toDateString()}
            </h2>

            <div className="container">
                <div className="row">
                    {bookingData.map((booking) => (
                        <div className="col-md-4 mb-4" key={booking.id}>
                            <BookingCard booking={booking} date={date}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;
