import React from 'react';
import './Sidebar.css'; // Importing the CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTachometerAlt, 
  faCalendarAlt, 
  faUser, 
  faFilePrescription, 
  faCogs, 
  faPlus, 
  faSignOutAlt, 
  faHome 
} from '@fortawesome/free-solid-svg-icons'; // Importing specific icons
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from 'react-router-dom'; // Correct useNavigate hook

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log("User signed out.");
        navigate('/login'); // Correctly navigate to the login page
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/Home">
            <FontAwesomeIcon icon={faHome} /> Home
          </a>
        </li>
        <li>
          <a href="/dashboard/appointment">
            <FontAwesomeIcon icon={faTachometerAlt} /> Dashboard
          </a>
        </li>
        <li>
          <a href="/Appointment">
            <FontAwesomeIcon icon={faCalendarAlt} /> Appointment
          </a>
        </li>
        <li>
          <a href="/AllPatients">
            <FontAwesomeIcon icon={faUser} /> Patient
          </a>
        </li>
        <li>
          <a href="#prescription">
            <FontAwesomeIcon icon={faFilePrescription} /> Prescription
          </a>
        </li>
        <li>
          <a href="/addDoctor">
            <FontAwesomeIcon icon={faPlus} /> Add Doctor
          </a>
        </li>
        <li>
          <a href="#setting">
            <FontAwesomeIcon icon={faCogs} /> Setting
          </a>
        </li>
        <li>
          <a href="#logout" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
