import React from 'react';
import Data from "../../home-page/assets-h/data.png";
import Security4 from "../../home-page/assets-h/Security5.png";
import Security1 from "../../home-page/assets-h/Security1.png";
import Security2 from "../../home-page/assets-h/Security2.png";
import Security3 from "../../home-page/assets-h/Security3.png";
import "./Security.css";

const Security = () => {
  return (
    <div className='Security-container'>
      <div className="line-container">
        <div className="line-text">
          <h3 className='text-s'>
            Integrations & Data Security
          </h3>
        </div>
      </div>
      <div className='Security-img'>
        <img src={Data} alt=''/>
      </div>
      <div className='Security-text'>
        <h4>Best in class data security <img src={Security4} alt=''/></h4>
      </div>
      <div className='Security-class'>
        <div className='box1'>
          <img src={Security1} alt=''/>
          <div className='text-container'>
            <h4 className='su-text'>Data in Indian Server</h4>
            <p className='su-text'>Hosted in AWS Mumbai</p>
          </div>
        </div>
        <div className='box1'>
          <img className='img-s2' src={Security2} alt=''/>
          <div className='text-container'>
            <h4 className='su-text'>SSL Data Encryption</h4>
            <p className='su-text'>Server Connections Secured</p>
          </div>
        </div>
        <div className='box1'>
          <img className='img-s2' src={Security3} alt=''/>
          <div className='text-container'>
            <h4 className='su-text'>PCI DSS Certified</h4>
            <p className='su-text'>Bank level security</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security