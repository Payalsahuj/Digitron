import axios from "axios"
import {  POST_REGISTER_REQUEST } from "./actionTypes";

export const register =(data)=> (dispatch) => {
    console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post("https://frail-toad-sunglasses.cyclic.app/users/register",data)
  
};

export const login=(data)=>(dispatch)=>{
  // console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post("https://frail-toad-sunglasses.cyclic.app/users/login",data)
}

