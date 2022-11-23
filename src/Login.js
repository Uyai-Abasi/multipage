import React from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import { Typography, FormControl } from "@mui/material";
import {Provider} from './auth'
// import { Form } from 'react-router-dom'
let username = "";
let password = "";
function Login() {
const navigate=useNavigate()
const {setauth}=Provider()
function HandleUser(e) {
  username = e.target.value;
  }
  function HandlePassword(e) {
    password = e.target.value;
  }
  function HandleLogin(e) {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    console.log(data)
    axios.post("https://sparsh.pythonanywhere.com/auth/login",data)
    .then(res=>{
      console.log(res);
      console.log(res.data.token);
      // console.log(setauth)
      
      setauth(res.data);
      let storage=JSON.stringify(res.data)
      localStorage.setItem("getToken",storage)
      navigate('/home')
    })
  }
  return (
    <FormControl sx={{ border: "solid black", m: "auto", width: "500px" }}>
      <Typography>LOG IN</Typography>
      <label htmlFor="username">Username</label>
      <input type="text" onChange={HandleUser} required />
      <label htmlFor="password">password</label>
      <input type="password" onChange={HandlePassword} required />
      <button onClick={HandleLogin}>Log in</button>
      <Typography>Need an Account?</Typography>
      <Link to ="">Sign Up</Link>
    </FormControl>
  );
}

export default Login;
