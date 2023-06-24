import AOS from "aos"
import "aos/dist/aos.css"

import React, { useState, useEffect } from 'react';
const data=[
    "Focus",
    "Prepration",
    "Consistancy",
    "Cultural Fit",
    "Clear Objectives",
    "Active Listening",
    "Structured Format",
    "Closing and Follow-up",
    "Candidate Engagement",
    
  ]
const Interviewslide = () => {
  
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
    <div style={{height:'100%',marginTop:'34%'}}>
      {displayedData?.map((item, index) => (
       <div data-aos="fade-down"
       data-aos-easing="linear"
       key={item} style={{margin:' 7% 7%',display:'flex',textAlign:'left',fontFamily:'serif'}}>
        <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"><b>{item}</b></p>
        </div>
      ))}
    </div>
  );
};

export default Interviewslide;