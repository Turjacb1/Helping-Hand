import React from 'react';
import './Testimonials.css'; // Import the CSS file
import Harry from '../../../images/people1.png';
import ema from '../../../images/people2.png';
import alize from '../../../images/people3.png';






const testimonials = [
  {
    quote: 'aaaaaaaaaaaaaa',
    name: 'Wilson Harry',
    from: 'California',
    img: Harry, // Replace with your image path
  },
  {
    quote: 'bbbbbbbbbbb',
    name: 'Ema Gomez',
    from: 'California',
    img: ema, // Replace with your image path
  },
  {
    quote: 'cccccccccc',
    name: 'Alize Farari',
    from: 'California',
    img: alize, // Replace with your image path
  },
];

const Testimonial = ({ testimonial }) => {
  return (
    <div className="col-md-4 text-center">
      
      <img
        style={{ height: '130px' }}
        src={testimonial.img}
        alt=''
      />
      <h5 className="mt-5 mb-5 pt-5">{testimonial.name}</h5>
      <p className="text-secondary">{testimonial.quote}</p>
      <span className="location">{testimonial.from}</span>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-primary text-white">Testimonial</h5>
          <h1>What Our Patients Say</h1>
        </div>
        <div className="card-deck mt-5">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;