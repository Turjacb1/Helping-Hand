import React from 'react';
import './Navber.css'; // Custom CSS for styling

const Navber = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="/">Helping Hand</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link nav-link-custom" aria-current="page" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/appointment">Appointment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/dashboard/appointment">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/blog">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/review">Review</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
