import React from 'react';
import "./Sales.css";
import Sales1 from "../../home-page/assets-h/Sales1.png";
import Sales2 from "../../home-page/assets-h/Sales2.png";
import Sales3 from "../../home-page/assets-h/Sales3.png"

const Sales = () => {
  return (
    <div className='Sales'>
      <div className="line-containers">
        <div className="line-texts">
          <h3 className='text-ss'>
            Implementation & after-sales support
          </h3>
        </div>
      </div>
      <div className='sales-containers'>
        <div className='box1s'>
            <img src={Sales1} alt=''/>
            <h3 className='s-texts'>Go Live in</h3>
            <h3 className='s-texts'>14 Days!</h3>
        </div>
        <div className='box1s'>
            <img src={Sales2} alt=''/>
            <h3 className='s-texts'>Free </h3>
            <h3 className='s-texts'>Implementation</h3>
            <h3 className='s-texts'>& Training</h3>
        </div>
        <div className='box1s'>
            <img src={Sales3} alt=''/>
            <h3 className='s-texts'>Free Chat Support</h3>
            <h3 className='s-texts'>within 10 seconds</h3>
        </div>
      </div>
      <button className='s-buttons'>Get Started For Free</button>
    </div>
  )
}

export default Sales