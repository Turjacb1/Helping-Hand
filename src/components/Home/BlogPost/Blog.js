import React from 'react';
import './BlogPost.css'; // Import the CSS file

import Harry from '../../../images/people1.png';
import ema from '../../../images/people2.png';
import alize from '../../../images/people3.png';
import Navber from '../../Shared/Navber/Navber';
import Animation from '../../Animation/Animation/Animation';

// Blog data
const featuredBlogs = [
    
    {
      BlogHead: 'Innovations in Cardiovascular Medicine',
      blogPara: 'Cardiovascular medicine is a rapidly evolving field with new innovations...',
      name: 'Dr. Y',
      blogDate: '10 Jan 2024',
      img: alize,
      url: 'https://example.com/cardiovascular-innovations', // Add your blog link here
    },
    {
        BlogHead: 'Understanding Hypertension: Causes and Treatments',
        blogPara: 'Hypertension, also known as high blood pressure, is a common condition that affects millions of people worldwide...',
        name: 'Dr. Turja',
        blogDate: '1 Jan 2024',
        img: Harry,
        url: 'https://example.com/hypertension-blog', // Add your blog link here
      },
      {
        BlogHead: 'Managing Diabetes: Tips for a Healthier Lifestyle',
        blogPara: 'Diabetes management involves a combination of lifestyle changes, medication, and monitoring...',
        name: 'Dr. X',
        blogDate: '7 Jan 2024',
        img: ema,
        url: 'https://example.com/diabetes-management', // Add your blog link here
      },
      {
        BlogHead: 'Innovations in Cardiovascular Medicine',
        blogPara: 'Cardiovascular medicine is a rapidly evolving field with new innovations...',
        name: 'Dr. Y',
        blogDate: '10 Jan 2024',
        img: alize,
        url: 'https://example.com/cardiovascular-innovations', // Add your blog link here
      },
  ];
  

// Medical services data
const medicalServices = [
  {
    serviceTitle: 'Cardiology',
    serviceDesc: 'Comprehensive heart care and cardiovascular treatment for all ages.',
    img: Harry,
  },
  {
    serviceTitle: 'Dermatology',
    serviceDesc: 'Expert skin care and treatment for various skin conditions.',
    img: ema,
  },
  {
    serviceTitle: 'Pediatrics',
    serviceDesc: 'Child healthcare services, including regular check-ups and vaccinations.',
    img: alize,
  },
];

// Blog post component
const Testimonial = ({ blog }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg border-light">
        <img src={blog.img} className="card-img-top" alt={blog.name} />
        <div className="card-body">
          <h5 className="card-title text-primary">{blog.name}</h5>
          <a  href="url" className="card-text">{blog.blogPara}</a>
          <p className="text-muted">{blog.blogDate}</p>
        </div>
        <div className="card-footer">
          <h4 className="text-secondary">{blog.BlogHead}</h4>
        </div>
      </div>
    </div>
  );
};

// Medical service component
const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg border-light">
        <img src={service.img} className="card-img-top" alt={service.serviceTitle} />
        <div className="card-body">
          <a href="url"className="card-title text-primary">{service.serviceTitle} </a>
          <p className="card-text">{service.serviceDesc}</p>
        </div>
      </div>
    </div>
  );
};

// Main Blog component
const Blog = () => {
    return (
      <div>
        <Animation/>
        <Navber />
  
        <section className="testimonials my-5 py-5">
          <div className="section-header text-center mb-4">
            <h5 className="text-primary">Featured Blog Posts</h5>
            <h3 className="text-dark">Highlighted Articles</h3>
            <p className="lead text-muted">Check out our featured blog posts with valuable insights and updates.</p>
          </div>
          <div className="container">
            <div className="row">
              {featuredBlogs.map((blog, index) => (
                <Testimonial key={index} blog={blog} url={blog.url} />
              ))}
            </div>
          </div>
        </section>
  
        <section className="services my-5 py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-4">
              <h5 className="text-primary">Our Medical Services</h5>
              <h3 className="text-dark">Comprehensive Healthcare Solutions</h3>
              <p className="lead text-muted">Explore our wide range of medical services tailored to your needs.</p>
            </div>
            <div className="row">
              {medicalServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  

export default Blog;
