import { useRef, useState } from "react";
import { Navbar } from "../Component/Navbar";
import Interviewslide from "../Component/slideinterview";
import {MdOutlineMicExternalOn} from "react-icons/md"
import axios from "axios";


export function DigitalInterview() {
  const [disableinput,setdisableinput]=useState(false)
  const [startmsg,setstartmsg]=useState("")
  const inputref = useRef()
  const you = "you"
  const ai = "ai"

  const [qna, setQna]= useState([])

  function handlestart(){
    setdisableinput(true)
    const obj={
      msg:"Hi"
    }
    axios.post("https://hackathon-o2kz.onrender.com/chat/interviewChat",obj).then((res)=>{
      setstartmsg(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  function handleend(){
    setdisableinput(false)
  }
  const updateQandA = (from, value)=>{
    setQna((qna)=> [...qna, {from, value}])
  }
  async function handlesubmit(){

    const msg = inputref.current.value
    const obj={
      msg
    }
    updateQandA(you, msg)
    axios.post("https://hackathon-o2kz.onrender.com/chat/interviewChat",obj)
    .then((res)=>{
      console.log(res)
      updateQandA(ai, res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
  const renderContent = (qna) => {
    const value = qna.value;
    if (Array.isArray(value)) {
      return value.map((el) => {
        return el;
      });
    }
    return <p>{value}</p>;
  };
    return <div>
        <Navbar />
        <div style={{ borderTop: '1px solid #757575', height: '100vh', backgroundColor: '#1F2937' }}>
            <div style={{ height: '90%', width: '17%', position: 'absolute', bottom: '0', left: '0' }}>
                <div style={{ whiteSpace: 'nowrap', width: '100%', color: 'white', textAlign: 'left' }}>
                    <Interviewslide />
                </div>
            </div>
            <div style={{ height: '83%', width: '83%', borderRadius: '10px 0px 0px 0px', backgroundColor: 'black', position: 'absolute', bottom: '0', right: '0', overflow: 'scroll', overflowX: 'auto' ,color:'white',textAlign:'left',padding:'4% 5%'}}>
            <p>{startmsg}</p>
            {
              qna.map((el)=>{
                if(el.from == you){
                  return <div>
                    {renderContent(el)}
                  </div>
                }else {
                  return <div>
                  {renderContent(el)}
                </div>
                }
              })
            }
            <div style={{ height: '10%',marginBottom:'10px', width: '100%', position: 'absolute', bottom: '0', left: '0',display:'flex',justifyContent:'center',alignItems:'center',color:'white' }}>
            <style>
        {`
          ::-webkit-scrollbar {
            width: 10px; /* Width of the scroll bar */
          }
          
          ::-webkit-scrollbar-track {
            background: pink; /* Background color of the scroll bar track */
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888; /* Color of the scroll bar thumb */
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555; /* Color of the scroll bar thumb on hover */
          }
        `}
      </style>
               <input ref={inputref} type="text" style={{padding:'7px 7px',width:'40%',borderRadius:'10px',color:'black',fontFamily:'serif',display:disableinput?'flex':'none'}}  />
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 29px',borderRadius:'10px',display:disableinput?'flex':'none'}} onClick={handlesubmit}>Submit</button>
               
               {/* <button style={{backgroundColor:'#0097A7',padding:'8px 9px',borderRadius:'50%',marginLeft:'20px',display:disableinput?'flex':'none'}} ><MdOutlineMicExternalOn/></button> */}
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 29px',borderRadius:'10px',display:disableinput?'none':'flex'}} onClick={handlestart}>START THE INTERVIEW</button>
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 29px',borderRadius:'10px'}} onClick={handleend}>END THE SESSION</button>

            </div>

            </div>

        </div>
    </div>
}