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
        top:"2%", left:"15%",
       fontFamily:"normal", color:"black", 
       
      },
      {
        scrollTrigger: {
          trigger: "#part1",
          start: "top top",
          end: "+=900",
          scrub: 1,
          
     
        },
        top: position.top ,
        left: position.left ,
        ease: "none",
        fontSize:"4vw",
      
        fontFamily:"Marko One",
        color:"#DC5F00",
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
    <section className="min-h-screen flex flex-col justify-center items-center px-10  " id='part1'>
      <div className="  flex flex-col gap-[10%]  ">
      <div className=''> Hi am </div>
      <div className='filsan'> FILSAN  </div> 
 </div>
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
          Bringing brands to life through <br />
          <span className="marko-one-regular">Creative web solutions</span>
        </div>

        <div>Feature Project</div>
      </div>
    </section>
  );
}


export default Hero;
