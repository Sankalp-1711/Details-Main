

import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/Logo marks/PN Mark-White.svg';

<style>
@import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
</style>

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className='footer-start'>
          <div className="footer__logo">
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: "column" }}>
              {/* Replace the text with the logo */}
              <img src={logo} alt="Logo" style={{ width: '90px', height: 'auto' }} />
              <p style={{ padding: '10px', margin: '0' }}>COUTURE</p>
            </div>
            <p>Don't just buy an outfit. Buy an identity.</p>
          </div>

          <div className="footer__section">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Couture Process</li>
              <li>Runways</li>
              <li>Associations</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Customer Services</h3>
            <ul>
              <li>Contact Us</li>
              <li>Book an Appointment</li>
              <li>Shipping</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Store Locator</h3>
            <div className="footer__locator">
              <button>Enter Your Location</button>
              <button>USD (United States)</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© Copyright 2024. All Rights Reserved by Pritam Nayak Couture.</p>
        <div className="footer-social">
          <FaFacebookF className='social_logo' />
          <FaInstagram className='social_logo' />
          <FaTwitter className='social_logo' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
