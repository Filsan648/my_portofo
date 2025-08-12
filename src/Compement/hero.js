import { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Hero() {
  
  useEffect(() => {
    
    const position = document.getElementById("Filsan").getBoundingClientRect();
    gsap.fromTo(
      ".filsan",
      {
        fontSize: "20vw",   position:"absolute",
        left:"15%",
       fontFamily:"normal",
      },
      {
        scrollTrigger: {
          trigger: "#part1",
          start: "top top",
          end: "+=900",
          scrub: 1,
          
     
        },
        top: position.top -80 ,
        left: position.left ,
        ease: "none",
        fontSize:"4vw",
      
        fontFamily:"Marko One",
      
      }
    );

    gsap.fromTo(
      ".opcit",
      { opacity: 1 },
      {
        scrollTrigger: {
          start: "top top",
          end: "+=5",
          scrub: 1,
        },
        opacity: 0,
        ease: "none",
      }
    );
  }, []);
  return (
    <section className="h-screen flex flex-col justify-center items-center  relative  " id='part1'>
 
      <div className='absolute top-[10%]  text-xl'> Hi 👋,i am </div>
      <div className='filsan'> FILSA  </div> 

      <div className="flex justify-between w-full mt-96 items-center opcit ">
        <div className="flex items-center gap-4">
          <div className="scroll-icon">
            <span className="scroll-icon__wheel-outer">
              <span className="scroll-icon__wheel-inner"></span>
            </span>
          </div>
          <div>Scroll to Explore</div>
        </div>

        <div className="text-xl text-center">
          SOFTWARE EGINNER <br />
          <span className="marko-one-regular text-lg">Solver problems</span>
        </div>

        <div>Feature Project</div>
      </div>
    </section>
  );
}


export default Hero;
