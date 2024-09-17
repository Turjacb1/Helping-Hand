// import React, { useState } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; // Calendar CSS

// // Custom container style
// const containerStyle = {
//   backgroundColor: "#F4FDFB",  // Light background color
//   height: "100vh"              // Full height
// };

// const Dashboard = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   // Handle calendar date change
//   const handleDateChange = date => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <section>
//         <div style={containerStyle} className="container-fluid row">
//           {/* Sidebar Section */}
//           <div className="col-md-2">
//             <Sidebar />
//           </div>

//           {/* Calendar Section */}
//           <div className="col-md-5">
//             <Calendar onChange={handleDateChange} value={selectedDate} />
//           </div>

//           {/* Appointment Section */}
//           <div className="col-md-5">
//             <AppointmentByDate />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;







//send data in appointmentByDate 

import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Calendar CSS
import axios from 'axios';  // Import Axios for API requests

// Custom container style
const containerStyle = {
  backgroundColor: "#F4FDFB",  // Light background color
  height: "100vh"              // Full height
};

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle calendar date change
  const handleDateChange = (date) => {
    console.log('Selected Date:', date);  // Log selected date
    setSelectedDate(date);
  };

  // Fetch appointments by selected date
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.post('http://localhost:5000/appointmentsByDate', {
          date: selectedDate.toISOString(),  // Use ISO format
        });
        console.log('Appointments Response:', response.data);  // Log API response
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('Failed to fetch appointments. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [selectedDate]);

  return (
    <div>
      <section>
        <div style={containerStyle} className="container-fluid row">
          {/* Sidebar Section */}
          <div className="col-md-2">
            <Sidebar />
            <br />
          </div>

          {/* Calendar Section */}
          <div className="col-md-5">
            <Calendar onChange={handleDateChange} value={selectedDate} />
          </div>

          {/* Appointment Section */}
          <div className="col-md-5">
            {loading ? (
              <p>Loading appointments...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              <AppointmentByDate appointments={appointments} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;










