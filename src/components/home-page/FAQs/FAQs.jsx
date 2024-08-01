import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa6";
import "./FAQs.css";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What can I do with TranZact?",
      answer: "With TranZact, you can seamlessly manage all core business processes in your manufacturing business. It offers customized automation for Sales, Purchase, Quotations, Inventory, and Production, with Tally and Excel integration."
    },
    {
      question: "Is my data safe on TranZact?",
      answer: "TranZact is built on AWS cloud platform, by Indian engineers specifically for Indian SMEs. It offers 100% data security, assuring complete data protection for you."
    },
    {
      question: "Can I use TranZact for free?",
      answer: "Yes, TranZact offers an expert inventory management tool for SME businesses. It provides end-to-end inventory management solutions for your manufacturing business and provides you with key business insights."
    },
    {
      question: "Who all can use TranZact?",
      answer: "TranZact is built specifically for Indian SME manufacturers, with a simple user interface. It is very easy to use and can be used effortlessly by anyone in the team."
    },
    {
      question: "Can I tarck my inventory on TranZact?",
      answer: "Yes, TranZact offers an expert inventory management tool for SME businesses. It provides end-to-end inventory management solutions for your manufacturing business and provides you with key business insights."
    },{
        question:"Can I use TranZact on a mobile app?",
        answer:"Yes, TranZact comes with a mobile app download as well!"
    }
  ];

  return (
    <div className='FAQs-container'>
      <div className="line-container">
        <div className="line-text">
          <h3 className='text-s'>
            FAQs
          </h3>
        </div>
      </div>
      <div className='FAQs-info'>
        {faqs.map((faq, index) => (
          <div className={`i-box ${openIndex === index ? 'open' : ''}`} onClick={() => toggleFAQ(index)} key={index}>
            <p className='p1text'>{openIndex === index ? <FaMinus className='bar'/> : <FaPlus className='bar'/>} {faq.question}</p>
            {openIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
      <button className='button11'>Get Started For Free</button>
    </div>
  );
}

export default FAQs;
