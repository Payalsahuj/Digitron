import AOS from "aos"
import "aos/dist/aos.css"
import {BsQuestionOctagonFill} from "react-icons/bs"
import {TbBrandSpeedtest} from "react-icons/tb"
import {MdFeedback} from "react-icons/md"
import {GrNotes} from "react-icons/gr"
import React, { useState, useEffect } from 'react';
const data=[
    "BsQuestionOctagonFill",
    "TbBrandSpeedtest",
   "MdFeedback",
    "GrNotes"
  ]
const IconDisplay = () => {
  
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
    <div style={{height:'100%'}}>
      {displayedData.map((item, index) => (
       <div data-aos="zoom-in" style={{margin:' 80% 5%',display:'flex',justifyContent:'center',textAlign:'center'}}>{item==="BsQuestionOctagonFill"?
        <BsQuestionOctagonFill size={'55%'} />:item==="TbBrandSpeedtest"?
      <TbBrandSpeedtest size={'55%'}/>:item==="BsQuestionOctagonFill"?
    <BsQuestionOctagonFill size={'55%'}/>:item==="MdFeedback"?
  <MdFeedback size={'55%'}/>:<GrNotes size={'55%'}/>}
        </div>
      ))}
    </div>
  );
};

export default IconDisplay;