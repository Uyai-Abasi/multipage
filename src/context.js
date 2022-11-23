import React,{createContext, useContext} from 'react'
import image from "./istockphoto.jpg"
const mycontext = createContext()

function Context({children}) {
  const items=[{
    article:'Game',
    header:'Nvidia Release New Way of Producing NFTs',
    text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
    image:image,
    title:'Super Admin',
    date:'june 21,2022',
        id:'1'
      },
      
      
      {
        article:'Technology',
        header:'Nvidia Release New Way of Producing NFTs',
        text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
        image:image,
      title:'Super Admin',
      date:'june 21,2022',
        id:'2'
      },
      {
        article:'NFT',
        header:'Nvidia Release New Way of Producing NFTs',
        text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
        image:image,
        title:'Super Admin',
        date:'june 21,2022',
        id:'3'
      },
      {article:'Game',
    header:'Nvidia Release New Way of Producing NFTs',
    text:'Lorem ipsum delor sit amet, consectectur cing elit,sed do eiusmod tempor Non blandit massa enim nec dui nunc',
    image:image,
    title:'Super Admin',
    date:'june 21,2022',
        id:'4'
      }
    ]
   
      return (
    <mycontext.Provider value={items}>
        {children}
    </mycontext.Provider>
  )
}

const useProvider = ()=>useContext(mycontext)
export{useProvider}
export default Context