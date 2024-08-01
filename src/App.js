import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/home-page/Banner/Banner';
import Sponsor from './components/home-page/Sponsor/Sponsor';
import Sales from './components/home-page/Sales/Sales';
import Security from './components/home-page/Security/Security';
import FAQs from './components/home-page/FAQs/FAQs';
import Tbanner from './components/home-page/Tbanner/Tbanner';
import Footer from './components/home-page/Footer/Footer';
import Solution from './components/home-page/Solution/Solution';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Sponsor/>
      <Solution/>
      <Sales/>
      <Security/>
      <FAQs/>
      <Tbanner/>
      <Footer/>
    </div>
  )
}

export default App;