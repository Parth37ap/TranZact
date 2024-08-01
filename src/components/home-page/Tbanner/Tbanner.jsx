import React from 'react';
import logo1 from "../../home-page/assets-h/logo.png";
import "./Tbanner.css";

const Tbanner = () => {
  return (
    <div className='T-banner'>
      <div className='Tz-img'>
        <img src={logo1} alt=''/>
      </div>
      <div className='Tz-text'>
        <p>TranZact is a team of IIT & IIM graduates who have developed a GST compliant, cloud-based, inventory
             management software for SME manufacturers. It digitizes your entire business operations, right from customer
             inquiry to dispatch. This also streamlines your Inventory, Purchase, Sales & Quotation management processes in a
              hassle-free user-friendly manner. The software is free to signup and gets implemented within a week.  </p>
      </div>
    </div>
  )
}

export default Tbanner
