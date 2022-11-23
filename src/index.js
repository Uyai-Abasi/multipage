import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from './auth';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SingleItem from './SingleItem';
import Context from './context';
import Card from './card'
import Login from './Login';

import Blogpost from './blogpost';
import Post from './post';
import Single from './Single';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Single/> */}

    <AuthProvider>
    <Context> 
    <BrowserRouter>
    <Routes>
   
      {/* <Route path="/" element={<Login/>}></Route> */}
      <Route path="/" element={  <App />}></Route>
      <Route path="/singleitem" element={  <SingleItem />}></Route>
      <Route path="/card:id" element={  <Card />}></Route>
      <Route path="/blog" element={<Blogpost/>}></Route>
      <Route path="/post" element={<Post/>}></Route>
      <Route path="/single" element={<Single/>}></Route>
    </Routes>
    </BrowserRouter>
    </Context>
  </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
