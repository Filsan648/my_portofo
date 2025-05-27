import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projetTable from '../utils/projettable';
import BouncyText from '../utils/bouncytext';

gsap.registerPlugin(ScrollTrigger);

function Project() {

 
  useEffect(() => {

    const slides = gsap.utils.toArray('.slide');

    const scrollTween= gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '#ProjetContainer',
        pin: true,
        scrub: 1,
        end: () => `+=${window.innerWidth * slides.length}`,
      },
    });



    projetTable.forEach((projet)=>{
     gsap.to(`#image-${projet.id}`,
       
        {
        scrollTrigger:{
          trigger:`#image-${projet.id}`,
          containerAnimation: scrollTween,
          scrub:true,
      
        },
        x:100,
        width:"50%",
    
        }
      
      )

     gsap.fromTo(`#title-${projet.id}`,{
      left:"30%"
     },


   {   scrollTrigger:{
        trigger:`#title-${projet.id}`,
        containerAnimation: scrollTween,
        scrub:true,
    
      },
      left:"20%",
      ease:"bounce"
     }
  
      

     )



    })






  }, []);



  


  return (
    <div className="mt-72 relative rounded-br-lg" id="project">
    <div className="text-center mb-16">
      <BouncyText text="Featured Project" />
    </div>
  
    <div id="ProjetContainer" className="overflow-hidden h-screen relative">
      <div id="Projet" className="flex w-max h-full">
        {projetTable.map((projet) => (
          <div
            id={`section-${projet.id}`}
            key={projet.id}
            className=" slide flex-col h-screen w-screen flex   border-r gap-12 relative group"
           
          > 
          <div className="max-w-xl flex  flex-col justify-center items-center ">
      
              <h1
                id={`title-${projet.id}`}
                className="marko-one-regular text-6xl "
              > {projet.title}
              </h1>
              <div className="mt-6 flex gap-6 text-sm text-black">
              <div   className=" ">Live</div>
              <div className=" ">Description</div>
              <div className=" ">Github</div>
              </div>
            </div>
            <div className=' h-96 relative'  id={`image-${projet.id}`}>
            <div style={{ backgroundImage: `url(${projet.image})` }}  className='h-96 rounded-xl'>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
}

export default Project;
