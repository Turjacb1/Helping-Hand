import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import { Navbar } from 'react-bootstrap';
import Navber from '../../Shared/Navber/Navber';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';
import Animation from '../../Animation/Animation/Animation';



const Appointment = () => {
    const [selectedDate,setSelectedDate]=useState(new Date());
    const handleDateChange=date=>{
        setSelectedDate(date);
       
    }


    return (
        <div>
            <Animation/>
            <Navber></Navber>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <br/><br/>
            <Footer></Footer>
            
        </div>
    );
};

export default Appointment;