import React, { useState, useEffect } from 'react';
import "./Solution.css";
import laptop from "../../home-page/assets-h/laptop.png";
import box from "../../home-page/assets-h/box.png";
import alert from "../../home-page/assets-h/alerts.png";
import location from "../../home-page/assets-h/location.png";
import scrap from "../../home-page/assets-h/scrap.png";
import file from "../../home-page/assets-h/file.png";
import report from "../../home-page/assets-h/reports (1).png";
import tark from "../../home-page/assets-h/trackes.png";
import setting from "../../home-page/assets-h/setting.png";
import lead from "../../home-page/assets-h/lead.png";
import timeline from "../../home-page/assets-h/timeline.png";
import gmail from "../../home-page/assets-h/gamil.png";
import invoice from "../../home-page/assets-h/invoice.png";
import payout from "../../home-page/assets-h/payouts.png";
import reminder from "../../home-page/assets-h/reminders.png";
import tally from "../../home-page/assets-h/tally.png";
import accountingrt from "../../home-page/assets-h/accounting-reports.png";
import datatally from "../../home-page/assets-h/data-tally.png";

const Solution = () => {
  // Always set 'Inventory' as the default option
  const [selectedOption, setSelectedOption] = useState('Inventory');

  const options = [
    { 
      name: 'Inventory', 
      details: [
        { top: 'Stock Update', bottom: 'Automation' },
        { top: 'Stock Valuation,', bottom: 'History and Ageing' },
        { top: 'Automatic Alerts', bottom: 'and Reminders' }
      ]
    },
    { 
      name: 'Production',
      details: [
        { top: 'End-to-end', bottom: 'Process Tracking' },
        { top: 'Production Costing', bottom: '& Scrap Tracking' }, 
        { top: 'Subcontract', bottom: 'Management' }
      ]
    },
    { 
      name: 'Planning', 
      details: [
        { top: 'One-click', bottom: 'MRP Reports' }, 
        { top: 'Purchase Requisition', bottom: '(Indent) Tracking' }, 
        { top: 'Easy Made-to-Order', bottom: 'Planning' }
      ] 
    },
    { 
      name: 'Sales & Purchase', 
      details: [
        { top: 'Advanced Lead', bottom: 'Management' }, 
        { top: '16+ Documents', bottom: 'Transaction Timeline' }, 
        { top: 'Gmail/WhatsApp', bottom: 'Integration' }
      ] 
    },
    { 
      name: 'Payments', 
      details: [
        { top: 'Log Payments', bottom: 'against Invoices' }, 
        { top: 'Effortless &', bottom: 'Error-free Payouts' }, 
        { top: 'Automated', bottom: 'Payment Reminders' }
      ] 
    },
    { 
      name: 'Accounting', 
      details: [
        { top: 'Integration with', bottom: 'Tally, Busy & Zoho' }, 
        { top: '8+', bottom: 'Accounting Reports' }, 
        { top: 'Import Master', bottom: 'Data from Tally' }] },
  ];

  const handleOptionClick = (optionName) => {
    setSelectedOption(optionName);
    // Save the selected option to localStorage
    localStorage.setItem('selectedOption', optionName);
  };

  useEffect(() => {
    // Set 'Inventory' as the default option regardless of localStorage
    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
      setSelectedOption(storedOption);
    } else {
      setSelectedOption('Inventory');
    }
  }, []);

  return (
    <div className='Solution'>
      <div className="line-container-ssl">
        <div className="line-text-sl">
          <h3 className='text-s-sl'>
            Our Solutions
          </h3>
        </div>
      </div>
      <div className='selection-box'>
        <div className='selection-text'>
          <ul>
            {options.map(option => (
              <li className='s-lisu' key={option.name}>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleOptionClick(option.name); }}
                  className={option.name === selectedOption ? 'active' : ''}
                >
                  {option.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='details-box'>
        {options.find(option => option.name === selectedOption)?.details.map((detail, index) => {
          let backgroundColor = '#f6e1cc';
          let borderColor = '#47390a';
          if (selectedOption === 'Inventory' || selectedOption === 'Production' || selectedOption === 'Planning' || selectedOption === 'Sales & Purchase' || selectedOption === 'Payments' || selectedOption === 'Accounting') {
            if (selectedOption === 'Inventory') {
              if (index === 0) {
                backgroundColor = '#fff4cf';
                borderColor = '#d32f2f';
              } else if (index === 1) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 2) {
                backgroundColor = '#e8f4ff';
                borderColor = '#388e3c';
              }
            } else if (selectedOption === 'Production') {
              if (index === 0) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 1) {
                backgroundColor = '#fff4cf';
                borderColor = '#d32f2f';
              } else if (index === 2) {
                backgroundColor = '#e8f4ff';
                borderColor = '#388e3c';
              }
            } else if (selectedOption === 'Planning') {
              if (index === 0) {
                backgroundColor = '#fff4cf';
                borderColor = '#d32f2f';
              } else if (index === 1) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 2) {
                backgroundColor = '#e8f4ff';
                borderColor = '#388e3c';
              }
            } else if (selectedOption === 'Sales & Purchase') {
              if (index === 0) {
                backgroundColor = '#e8f4ff';
                borderColor = '#d32f2f';
              } else if (index === 1) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 2) {
                backgroundColor = '#fff4cf';
                borderColor = '#388e3c';
              }
            } else if (selectedOption === 'Payments') {
              if (index === 0) {
                backgroundColor = '#fff4cf';
                borderColor = '#d32f2f';
              } else if (index === 1) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 2) {
                backgroundColor = '#e8f4ff';
                borderColor = '#388e3c';
              }
            } else if (selectedOption === 'Accounting') {
              if (index === 0) {
                backgroundColor = '#d7fbd0';
                borderColor = '#fbc02d';
              } else if (index === 1) {
                backgroundColor = '#fff4cf';
                borderColor = '#d32f2f';
              } else if (index === 2) {
                backgroundColor = '#e8f4ff';
                borderColor = '#388e3c';
              }
            }
          }
          return (
            <div
              key={index}
              className='detail-item'
              style={{
                backgroundColor,
                borderColor
              }}
            >
              <div>
                <div>{detail.top}</div>
                <div>{detail.bottom}</div>
              </div>
              {selectedOption === 'Inventory' && index === 0 && <img src={laptop} alt="Laptop" className='detail-image' />}
              {selectedOption === 'Inventory' && index === 1 && <img src={box} alt="Box" className='detail-image' />}
              {selectedOption === 'Inventory' && index === 2 && <img src={alert} alt="Alert" className='detail-image' />}
              {selectedOption === 'Production' && index === 0 && <img src={location} alt="Location" className='detail-image' />}
              {selectedOption === 'Production' && index === 1 && <img src={scrap} alt="Scrap" className='detail-image' />}
              {selectedOption === 'Production' && index === 2 && <img src={file} alt="File" className='detail-image' />}
              {selectedOption === 'Planning' && index === 0 && <img src={report} alt="Location" className='detail-image' />}
              {selectedOption === 'Planning' && index === 1 && <img src={tark} alt="Scrap" className='detail-image' />}
              {selectedOption === 'Planning' && index === 2 && <img src={setting} alt="File" className='detail-image' />}
              {selectedOption === 'Sales & Purchase' && index === 0 && <img src={lead} alt="Location" className='detail-image' />}
              {selectedOption === 'Sales & Purchase' && index === 1 && <img src={timeline} alt="Scrap" className='detail-image' />}
              {selectedOption === 'Sales & Purchase' && index === 2 && <img src={gmail} alt="File" className='detail-image' />}
              {selectedOption === 'Payments' && index === 0 && <img src={invoice} alt="Location" className='detail-image' />}
              {selectedOption === 'Payments' && index === 1 && <img src={payout} alt="Scrap" className='detail-image' />}
              {selectedOption === 'Payments' && index === 2 && <img src={reminder} alt="File" className='detail-image' />}
              {selectedOption === 'Accounting' && index === 0 && <img src={tally} alt="Location" className='detail-image' />}
              {selectedOption === 'Accounting' && index === 1 && <img src={accountingrt} alt="Scrap" className='detail-image' />}
              {selectedOption === 'Accounting' && index === 2 && <img src={datatally} alt="File" className='detail-image' />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solution;
