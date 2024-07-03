import React from 'react';
import '../styles/ContactUS.css';

const ContactUs = () => {
  return (
    <div className='App'>
    <div className="container-contact" style={{justifyContent:'center' , alignItems:'center'}}>
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p><strong>Mail:</strong> <a href="mailto:info@rhyno.in">info@rhyno.in</a></p>
        <p><strong>Mobile no.:</strong> <a href="tel:+919023987528">+91-9023987528</a></p>
        <p><strong>Location:</strong> Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India</p>
      </div>
      <div className="contact-form">
        <h2 style={{fontSize: '2.5em', fontFamily: 'calibri', color: '#FFF225'}}>Send us a message</h2>
        <div className='Appi'>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" style={{alignSelf:'center'}}required  />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" className="form-control" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-3" style={{color:'black'}}>Send Message</button>
          </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
