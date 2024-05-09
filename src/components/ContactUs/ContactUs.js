import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const ContactUs = () => {
  return (
    <footer className='footer-divs'> 
      <div className="footer-section">
        <h3>Legal Information</h3>
        <ul>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/copyright-notice">Copyright Notice</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li className='media-links'><Link to="https://www.facebook.com/moviesite">Facebook</Link></li>
          <li className='media-links'><Link to="https://twitter.com/moviesite">Twitter</Link></li>
          <li className='media-links'><Link to="https://www.instagram.com/moviesite">Instagram</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li>Email: group2@gmail.com</li>
          <li><Link to="/support">Support Page</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>App Information</h3>
        <ul>
          <li>About Us: Learn more about MovieSite</li>
          <li>App Version: 1.0.0</li>
          <li>Platform Compatibility: iOS, Android</li>
        </ul>
      </div>
    </footer>
  );
}

export default ContactUs;
