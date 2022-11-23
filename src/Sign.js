import React from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import {Provider} from "./auth"


let user = ""
let password = ""

function Login() {
  const{setauth}= Provider()
console.log(setauth)
  function HandleUser(e) {
    user = e.target.value
  }
  function HandlePassword(e) {
    password = e.target.value
  }
  
  function HandleLogin(e) {
    e.preventDefault();
    const data = {
      username: user,
      password: password
    }
    axios.post(
      "https://sparsh.pythonanywhere.com/auth/login", data)
      .then(res=>{
        console.log(res);
        console.log(res.data.token);
console.log(setauth)

        setauth(res.data);
        let storage= JSON.stringify(res.data)
        localStorage.setItem("getToken", storage)
      })
      
  }
  return (
<form className="App">
      <h1>LOG IN</h1>
      <label for="username">Username</label>
      <input type="text"
        onChange={HandleUser}
        required />
      <label for="password">password</label>
      <input type="password"
        onChange={HandlePassword}
        required />
      <Link to ="blog"><button onClick={HandleLogin}>Log in</button></Link>
     <h4>Need an Account?</h4>
     <Link to= "Sign"><a href="./">Sign Up</a></Link>
    </form>
  )
}

export default Login