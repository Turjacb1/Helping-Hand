import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './BlogPost.css'; // Import the CSS file
import Harry from '../../../images/people1.png';
import ema from '../../../images/people2.png';
import alize from '../../../images/people3.png';

// Featured blog posts
const featuredBlogs = [
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

  {
    BlogHead: 'Innovations in Cardiovascular Medicine',
    blogPara: 'Cardiovascular medicine is a rapidly evolving field with new innovations...',
    name: 'Dr. Y',
    blogDate: '10 Jan 2024',
    img: alize,
    url: 'https://example.com/cardiovascular-innovations', // Add your blog link here
  },
];

const Testimonial = ({ blog }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg border-light">
        <img src={blog.img} className="card-img-top" alt={blog.name} />
        <div className="card-body">
          <h5 className="card-title text-primary">{blog.name}</h5>
          <a  href="url"className="card-text">{blog.blogPara}</a>
          <p className="text-muted">{blog.blogDate}</p>
        </div>
        <div className="card-footer">
          <h4 className="text-secondary">{blog.BlogHead}</h4>
        </div>
      </div>
    </div>
  );
};

const BlogPost = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Initially show 3 blogs
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleLoadMore = () => {
    navigate('/blog'); // Navigate to the Blog component when button is clicked
  };

  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header text-center mb-4">
          <h5 className="text-primary">Featured Blog Posts</h5>
          <h3 className="text-dark">Highlighted Articles</h3>
          <p className="lead text-muted">Check out our featured blog posts with valuable insights and updates.</p>
        </div>
        <div className="row">
          {featuredBlogs.slice(0, visibleBlogs).map((blog, index) => (
            <Testimonial key={index} blog={blog}  url={blog.url} />
          ))}
        </div>
        {visibleBlogs < featuredBlogs.length && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPost;
