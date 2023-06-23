import { Navbar } from "../Component/Navbar";
import video from "../Image/dashvedio.mp4"
import dashbot from "../Image/dashbot.png"
import DataDisplay from "../Component/Slidedata";
import IconDisplay from "../Component/slideicon";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";
import Footer from "../Component/Footer";
export function Dashboard(){
  useEffect(()=>{
    AOS.init({ duration: 1000 });
  },[])
    return (
        <div>
            <Navbar/>
            <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 pb-2 sm:px-6 lg:px-8 ">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Welcome to Digitron Hub</h1>
      </div>
    </header>
    <div class="width:100% flex flex-row mx-auto my-10">
      <div  class= "w-4/12 ml-6" >
        <img  src={dashbot} alt="" />
      </div>
      <div class="w-8/12  flex flex-row item-center justify-center">
      <div class= "w-1/12 item-center flex flex-col justify-center">
        <IconDisplay/>

      </div>
      <div class="w-9/12 text-left">
      <DataDisplay/>
      </div>
      </div>
    </div>
    <br/>
    <div class="w-full flex flex-row mx-auto"  >
      <div class="w-full text-center m-auto" >
      <video width={'100%'} height={'100%'}  opacity='.9' style={{ objectFit: 'cover', filter: 'brightness(60%)' }} src={video} autoPlay muted loop></video>
      <div style={{height:'90px',position:'relative',top:'-90px',zIndex:'4',backgroundColor:'white'}}></div>
      </div>
    </div>
    <div class="w-11/12 flex flex-col mx-auto border-solid border-2 py-3 px-7 br-5 mb-7" style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:'10px'}} >
    <h1 class="text-3xl font-bold tracking-tight text-gray-900 m-auto">About Digitron a Digital interview platform</h1>
    <div class="w-full mt-3 flex flex-col mx-auto py-3 px-0 br-5 text-left"  >
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p ><b>Data Security and Privacy: </b> Since interviews involve sensitive information, DIGITRON platforms prioritize data security and privacy. They implement measures to protect the confidentiality of the interviews and comply with relevant data protection regulations.</p>
      </div>
      <br/>
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p><b>Integration with Applicant Tracking Systems:</b> Integration with GPT platforms allows for seamless data transfer and integration of interview outcomes. This ensures that interview feedback and evaluations are easily accessible and can be considered alongside other candidate information.</p>
      </div>
      <br/>
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p><b>Recording and Playback:</b> One of the advantages of DIGITRON platforms is the ability to record interviews. This feature allows interviewers to review interviews at a later time and share them with other stakeholders for evaluation and feedback. </p>
      </div>
      <br/>
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p><b>Interview Question Libraries:</b> Platforms offer a library of interview questions, categorized by industry, job role, or competency. These question banks serve as valuable resources for interviewers, helping them prepare for interviews and ensuring consistency in the interview process.</p>
      </div>
      <br/>
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p><b>Mobile Accessibility:</b> DIGITRON offer mobile accessibility, allowing candidates and interviewers to participate in interviews using their smartphones or tablets. Mobile compatibility expands accessibility and convenience for users who prefer or require mobile devices.</p>
      </div>
      <br/>
      <div style={{boxShadow:' rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px 10px',width:'100%',borderRadius:'10px'}}>
      <p><b>Information:</b> a digital interview platform offers a modern and efficient approach to conducting interviews, providing convenience, flexibility, and powerful features that enhance the hiring process for both employers and candidates.</p>
      </div>
    </div>
    </div>
    <Footer/>
        </div>
    )
}