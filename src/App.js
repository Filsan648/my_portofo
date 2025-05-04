import logo from './logo.svg';
import './App.css';
import './index.css';
import Navbar from './Compement/navbar';
import Hero from './Compement/hero';
import {useState,useEffect} from 'react';
import { motion } from 'motion/react';

function App() {
  const [mousePosition,setmouseposition]=useState({x:0,y:0});
useEffect(()=>{
const mouseMove=e=>{
  setmouseposition({
    x: e.clientX,
    y: e.clientY
  })

}
window.addEventListener("mousemove", mouseMove);
 return ()=>{
  window.removeEventListener("mousemove",mouseMove);
 }
})

const Variants={
  default:{
    x:mousePosition.x,
    y:mousePosition.y
  }
}




  return (
    <body className="bg-lightgray cursor-og">
        <motion.div className="size-16 border-2 border-black/25  rounded-full fixed bg-transparent" variants={Variants} animate="default" />
     <Navbar />
     <Hero />
    </body>
  );
}

export default App;
