import { Navbar } from "../Component/Navbar";
import Interviewslide from "../Component/slideinterview";
import {MdOutlineMicExternalOn} from "react-icons/md"


export function DigitalInterview() {
    return <div>
        <Navbar />
        <div style={{ borderTop: '1px solid #757575', height: '100vh', backgroundColor: '#1F2937' }}>
            <div style={{ height: '90%', width: '17%', position: 'absolute', bottom: '0', left: '0' }}>
                <div style={{ whiteSpace: 'nowrap', width: '100%', color: 'white', textAlign: 'left' }}>
                    <Interviewslide />
                </div>
            </div>
            <div style={{ height: '83%', width: '83%', borderRadius: '10px 0px 0px 0px', backgroundColor: 'black', position: 'absolute', bottom: '0', right: '0', overflow: 'scroll', overflowX: 'auto' }}>
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
               <input type="text" style={{padding:'7px 7px',width:'40%',borderRadius:'10px',color:'black',fontFamily:'serif'}}/>
               
               <button style={{backgroundColor:'#0097A7',padding:'8px 9px',borderRadius:'50%',marginLeft:'20px'}}><MdOutlineMicExternalOn/></button>
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 23px',borderRadius:'10px'}}>START</button>
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 23px',borderRadius:'10px'}}>STOP</button>

            </div>

            </div>

        </div>
    </div>
}