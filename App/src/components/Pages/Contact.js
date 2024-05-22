import React from 'react';
import Button from 'react-bootstrap/Button';
import './Contact.css'; // Import your CSS file for contact styling

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <h1>Contact</h1>
        <p>Contact me at:</p>
        <div className="buttons-container">
          <a className='me-4'  href="mailto:vineyshaolivo@gmail.com">
            <Button className='btn-primary'>Email</Button>
          </a>
          <a className='me-4' href="https://github.com/Vineysha">
            <Button className='btn-primary'>Github</Button>
          </a>
          <a className='me-4' href="https://www.linkedin.com/in/vineysha-olivo-velázquez-280336199">
            <Button className='btn-primary'>Linkedin</Button>
          </a>
        </div>
      </div>
    </div>
  );
}





