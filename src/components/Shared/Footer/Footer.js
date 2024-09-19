import React from 'react';
import './Footer.css'; // Import the CSS file
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4></h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <div className="col-md-4">
            <h4></h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4></h4>
            <p>
              <strong>Address:</strong> 123 Main Street, City, Country
              <br />
              <strong>Phone:</strong> +123 456 7890
              <br />
              <strong>Email:</strong> info@medicalservice.com
            </p>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <FaFacebook className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaTwitter className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram className="social-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 Medical Service. All rights reserved.</p>
            <p>&copy; Developed By Turja Chakraborty</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
