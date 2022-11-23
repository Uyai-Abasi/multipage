import React from 'react'
import axios from 'axios';
import {Provider} from './auth'


const data = {
  title: "",
  text: "",
};
function Post() {
  const { auth } =Provider();
  let handleTitle = (e) => {
    data.title = e.target.value;
  };

  let handleDesc = (e) => {
    data.text = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    axios.post("https://sparsh.pythonanywhere.com/blog/", data, {
      headers: { authorization: `Bearer ${auth.token}`},
    }).then(res=>{
        console.log('Api Response ', {res})
    }).catch(e=>{
        console.log(e)
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input onChange={handleTitle} text="text" id="title" />
      </div>
      <div>
        <label>Description</label>
        <input onChange={handleDesc} text="text" id="des" />
      </div>
      <button type="submit"> submit </button>
    </form>
  );
}

export default Post