import { useRef, useState } from "react";
import { Navbar } from "../Component/Navbar";
import Interviewslide from "../Component/slideinterview";
import {MdOutlineMicExternalOn} from "react-icons/md"
import { Spinner } from '@chakra-ui/react'
import axios from "axios";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

export function DigitalInterview() {
  const [disableinput,setdisableinput]=useState(false)
  const [startmsg,setstartmsg]=useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
 
  const navigate=useNavigate()
  const toast=useToast()
  const inputref = useRef()
  const you = "you"
  const ai = "ai"

  const [qna, setQna]= useState([])

  function handlestart(){
    setdisableinput(true)
    const obj={
      msg:"Hi"
    }
    axios.post("https://digitron.onrender.com/chat/interviewChat",obj).then((res)=>{
      setstartmsg(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  function handleend(){
    setdisableinput(false)
    // navigate("/progress")
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
    axios.post("https://digitron.onrender.com/chat/interviewChat",obj)
    .then((res)=>{
      console.log(res)
      updateQandA(ai, res.data)
      inputref.current.value=""
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
    inputref.current.value=""
    return <p>{value}</p>;
  };

  function handlrestart(){
    navigate("/dashboard")
  //   toast({
  //     position: 'top-right',
  //     title: 'Interview get restarted',
     
  //     status: 'success',
  //     duration: 4000,
  //     isClosable: true,

  // })
   

  }
    return <div>
        <Navbar />
        <div style={{ borderTop: '1px solid #757575', height: '100vh', backgroundColor: '#1F2937' }}>
            <div style={{ height: '90%', width: '17%', position: 'absolute', bottom: '0', left: '0' }}>
                <div style={{ whiteSpace: 'nowrap', width: '100%', color: 'white', textAlign: 'left' }}>
                    <Interviewslide />
                </div>
            </div>
            <div style={{ height: '83%', width: '83%', borderRadius: '10px 0px 0px 0px', backgroundColor: 'black', position: 'absolute', bottom: '0', right: '0', overflow: 'scroll', overflowX: 'auto' ,color:'white',textAlign:'left',padding:'4% 5%'}}>
            <p style={{marginBottom:'25px',fontSize:'20px',display:disableinput?'flex':'none'}}>{startmsg?startmsg:<Spinner color='red.500' />}</p>
           <div style={{marginBottom:'7%'}}>{
              qna.map((el)=>{
                if(el.from == you){
                  return <div>
                    <div style={{display:'flex',fontSize:'15px'}}>
                    <img
                        class="h-8 w-8 rounded- mr-5"
                        src="https://cdn0.iconfinder.com/data/icons/customers-and-service/512/15.png"
                        alt=""
                      />
                    {renderContent(el)}
                    </div>
                  </div>
                }else {
                  return <div>
                    <br/>
                    
                    <div style={{display:'flex',fontSize:'17px',marginBottom:'10px'}}>
                    <img
                        class="h-8 w-8 rounded- mr-5" style={{borderRadius:'50%'}}
                        src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1449791403i/17337929._SX540_.jpg"
                        alt=""
                      />
                  {renderContent(el)}
                  </div>
                </div>
                }
              })
            }</div> 
            <div style={{ height: '10%',marginBottom:'10px', width: '83%', position: 'fixed', bottom: '0', right: '0',display:'flex',justifyContent:'center',alignItems:'center',color:'white',margin:'auto' }}>
            <style>
        {`
          ::-webkit-scrollbar {
            width: 10px; /* Width of the scroll bar */
          }
          
          ::-webkit-scrollbar-track {
            background: black; /* Background color of the scroll bar track */
          }
          
          ::-webkit-scrollbar-thumb {
            background: #888; /* Color of the scroll bar thumb */
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #555; /* Color of the scroll bar thumb on hover */
          }
        `}
      </style>
      <button style={{backgroundColor:'#0097A7',marginRight:'20px',padding:'5px 29px',borderRadius:'10px',display:disableinput?'flex':'none'}}  onClick={onOpen}>RESTART SESSION</button>

               <input ref={inputref} type="text" style={{padding:'7px 7px',width:'40%',borderRadius:'10px',color:'black',fontFamily:'serif',display:disableinput?'flex':'none'}}  />
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 29px',borderRadius:'10px',display:disableinput?'flex':'none'}} onClick={handlesubmit}>Submit</button>
               
               {/* <button style={{backgroundColor:'#0097A7',padding:'8px 9px',borderRadius:'50%',marginLeft:'20px',display:disableinput?'flex':'none'}} ><MdOutlineMicExternalOn/></button> */}
               <button style={{backgroundColor:'#0097A7',marginLeft:'20px',padding:'5px 29px',borderRadius:'10px',display:disableinput?'none':'flex'}} onClick={handlestart}>START THE INTERVIEW</button>
               <button style={{backgroundColor:'red',marginLeft:'20px',padding:'5px 22px',borderRadius:'10px',display:disableinput?'flex':'none'}} onClick={handleend}>END THE SESSION</button>
               <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Do you really want to Restart the Interview?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  colorScheme='red' onClick={handlrestart}>Yes !</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

            </div>

            </div>

        </div>
    </div>
}
