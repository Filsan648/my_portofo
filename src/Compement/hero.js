import oval from "../assets/oval.png"
import '../index.css';
import {useState,useEffect} from 'react';
function Hero (){
    useEffect(() => {
        const parallax = (event) => {
          document.querySelectorAll('.parallax-wrap span').forEach((shift) => {
          const position = shift.getAttribute('data-value');
          const x = (window.innerWidth - event.pageX * position /90) ;
        const y = (window.innerHeight - event.pageY * position /90) ;
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
        };
     document.addEventListener('mousemove', parallax);
     return () => {
          document.removeEventListener('mousemove', parallax);
        };
      }, []);
    return(
     
          <div> <p className="text-center mt-24"> Hi ,I'am </p>
            <div className=""><h1 className=" text-9xl  font-extrabold text-center -z-10">   FILSAN    </h1></div> 
            <h1 className="text-center mt-24 font-semibold" > WEB DEVELLOPPER </h1></div> 
         )
}
export default Hero;