import { Navigate } from "react-router-dom";



export const PrivateRoute = ({children})=>{
   

 let email=localStorage.getItem("email")
 if(email){
    return children
 }
 alert("First Login Please !!")
 return  <Navigate to = "/login"/>
}