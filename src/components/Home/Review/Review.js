import React, { useState, useEffect } from 'react';
import './Review.css'; // Import the CSS file for styling
import Navber from '../../Shared/Navber/Navber';
import axios from 'axios'; // Import axios for API calls
import Animation from '../../Animation/Animation/Animation';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    title: '',
    review: '',
    rating: 1
  });
  const [submitted, setSubmitted] = useState(false); // New state for tracking submission
  const [submissionError, setSubmissionError] = useState(''); // New state for tracking errors

  // Fetch reviews from the server when the component loads
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/reviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.review) {
      try {
        const response = await axios.post('http://localhost:5000/reviews', newReview);
        setReviews([...reviews, response.data]); // Add the new review to the reviews list
        setNewReview({ name: '', title: '', review: '', rating: 1 }); // Reset form
        setSubmitted(true); // Set submission state to true
        setSubmissionError(''); // Clear any previous errors
      } catch (error) {
        console.error('Error submitting review:', error);
        setSubmissionError('Something went wrong. Please try again later.'); // Set error message
      }
    } else {
      setSubmissionError('Please fill out all required fields.');
    }
  };

  return (
    <div className="review-container">
      <Animation />
      <Navber />

      <h2 className="review-title">What Our Patients Say</h2>
      <div className="review-list">
        {reviews.map((review) => (
          <div key={review._id} className="review-card">
            <div className="review-header">
              <h3 className="review-name">{review.name}</h3>
              <span className="review-title">{review.title}</span>
            </div>
            <p className="review-text">"{review.review}"</p>
            <div className="review-rating">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>

      {submitted && !submissionError && (
        <div className="thank-you-card">
          <h2>Thank You!</h2>
          <p>Your review has been submitted successfully.</p>
        </div>
      )}

      {submissionError && (
        <div className="error-message">
          <p>{submissionError}</p>
        </div>
      )}

      <div className="review-form">
        <h2 className="form-title">Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newReview.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review</label>
            <textarea
              id="review"
              name="review"
              value={newReview.review}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              value={newReview.rating}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map(r => (
                <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Review;
