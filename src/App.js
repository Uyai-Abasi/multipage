import React from 'react'
import MyImage from './istockphoto.jpg'
// import {createContext, useContext} from 'react'
import { Provider } from './auth'
import './singleitem.css'
import Display from './display'

function App(){
  const {auth}=Provider()
  console.log(auth)
const items=[{
  article:'Game',
  header:'Nvidia Release New Way of Producing NFTs',
  text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
  image:MyImage,
title:'Super Admin',
date:'june 21,2022',
  id:'1'
},

{
  article:'Technology',
  header:'Nvidia Release New Way of Producing NFTs',
  text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
  image:MyImage,
title:'Super Admin',
date:'june 21,2022',
  id:'2'
},
{
  article:'NFT',
  header:'Nvidia Release New Way of Producing NFTs',
  text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
  image:MyImage,
title:'Super Admin',
date:'june 21,2022',
  id:'3'
}]

  return (
<>
<Display data={items}/>
</>
  );
}

export default App;
