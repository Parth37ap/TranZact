import React from 'react';
import { FaHeart } from "react-icons/fa";
import Icon from "../../home-page/assets-h/icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='Footer-header'>
        <h1>Made in India, with <FaHeart /></h1>
        <h2><img src={Icon} alt='Icon'/> <span className='f-text'>Grow with us. </span>Transform with TranZact.</h2>
      </div>
      <div className='Footer-content'>
        <div className='Footer-section'>
          <h3>TranZact</h3>
          <ul>
            <li><a href='#'>Overview</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Support</a></li>
          </ul>
        </div>
        <div className='Footer-section'>
          <h3>Features</h3>
          <ul>
            <li><a href='#'>Production</a></li>
            <li><a href='#'>Inventory</a></li>
            <li><a href='#'>Transactions</a></li>
            <li><a href='#'>Reports</a></li>
            <li><a href='#'>All Documents</a></li>
            <li><a href='#'>Approvds</a></li>
            <li><a href='#'>Quatations</a></li>
            <li><a href='#'>Buyer & Suppliers</a></li>
          </ul>
        </div>
        <div className='Footer-section'>
          <h3>Resources</h3>
          <ul>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Blogs</a></li>
            <li><a href='#'>Use Cases</a></li>
            <li><a href='#'>Case Studies</a></li>
            <li><a href='#'>Integrations</a></li>
          </ul>
        </div>
        <div className='Footer-section'>
          <h3>Templates</h3>
          <ul>
            <li><a href='#'>E-Wall Bill</a></li>
            <li><a href='#'>E-Invoice</a></li>
            <li><a href='#'>GST Invoive</a></li>
            <li><a href='#'>Export INvoice</a></li>
            <li><a href='#'>Bill of Supply</a></li>
            <li><a href='#'>Purchase Invoice</a></li>
            <li><a href='#'>Wprk Order</a></li>
          </ul>
        </div>
        <div className='Footer-address'>
          <h3>Address</h3>
          <p>123 Main Street, Anytown, India</p>
          <p>Email: <a href='mailto:info@example.com'>info@example.com</a></p>
        </div>
        <div className='Footer-section'>
          <h3 className='f1f'>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
