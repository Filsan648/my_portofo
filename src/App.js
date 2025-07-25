import './App.css';
import './index.css';
import Navbar from './Compement/navbar';
import Hero from './Compement/hero';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; 
import Section1 from './Compement/section1';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import Gsapcorse from './Compement/sc';
import Project from './Compement/project';
import Mouse from './utils/mouseposition';
import Believe from './Compement/believe';
import Footer from './Compement/Fotter';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [mouse,setmouse]=useState(false)
  useEffect(() => {
    

   
    const smoother = ScrollSmoother.create({
      wrapper: '#smootmain',
      content: '#smootcontain', 
      smooth:2, 
    });

  
  }, []);




  return (
    <div className="bg-lightgray  font-normal " id="smootmain">

     <div id="smootcontain" className=''>
     <Mouse variablbe={true} />
     
      <Navbar />
      <Hero />
      <Section1 />
        <Project />
        <Believe />
        <Footer />
 </div>
    </div>
  );
}

export default App;
