import AOS from "aos"
import "aos/dist/aos.css"
import React, { useState, useEffect } from 'react';
const data=[
    
    "A supportive Q&A section assists users in interview preparation by providing valuable and thoughtful solutions.",
    "Digitron offers digital interview support that assists users in preparing for effective interviews. ",
    "A Live Feedback support to the user with in a second. Our cutting-edge system ensures that users receive immediate guidance and insights, allowing them to optimize their performance and enhance their overall interview preparation.",
    "Can you please provide us with any questions? We have online notes available to assist you with your preparation."
  ]
const DataDisplay = () => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedData, setDisplayedData] = useState([]);
 

  useEffect(() => {
    AOS.init({ duration: 800 });
    const interval = setInterval(() => {
      if (currentIndex < data.length) {
        setDisplayedData((prevData) => [...prevData, data[currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, data]);

  return (
    <div>
      {displayedData.map((item, index) => (
        <div style={{margin:' 7% 5%'}}>
        <p data-aos="fade-right" key={index}>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;