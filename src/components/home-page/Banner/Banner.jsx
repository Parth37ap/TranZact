import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
      <div className='Banner-text'>
        <h1 className='text1'>Easiest Software</h1>
        <h1 className='text2'>for MSME Manufactures</h1>
        <hr className='b-hr'/>
        <h3 className='text3'>Streamline your <span className='text-h'> Inventory </span> and <span className='text-h'> Production </span></h3>
        <button className='button1'>Get Started For Free</button> 
        <button className='button2'>Book a Demo</button>
        <h3 className='text4'>Made in India, for Makers of India IN</h3>
      </div>
      <div className='Banner-video'>
        <iframe 
          src="https://www.youtube.com/embed/SYNNuhaY0lU" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className='video'
        ></iframe>
        <div className='Banner-buttons'>
          <button className='button1 mobile-only'>Get Started For Free</button> 
          <button className='button2 mobile-only'>Book a Demo</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;