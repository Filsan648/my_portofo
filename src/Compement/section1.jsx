import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css';
import photo from "../assets/my_photo.jpg";

gsap.registerPlugin(ScrollTrigger);

function Section1() {

  const turbulenceRef = useRef(null);
  const timeline = useRef(null);
  const sectionRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    gsap.fromTo("#imgRef", 
      {  y: 100 }, 
      { 
      
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: "#imgRef",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
          toggleActions: "play none none reverse"
        }
      });

    timeline.current = gsap.timeline({ paused: true });
    timeline.current.to(turbulenceRef.current, {
      duration: 0.6,
      attr: { baseFrequency: "0.05 0.08" },
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });


    gsap.to(turbulenceRef.current, {
      attr: { baseFrequency: "0.05 0.05" },
      ease: "none",
      scrollTrigger: {
        trigger: "#Section2",
        start: "top bottom",
        end: "top top",
        scrub: true,
        onUpdate: () => {
          // On scroll update, reset timer
          clearTimeout(scrollTimeout.current);
          scrollTimeout.current = setTimeout(() => {
            // Quand le scroll s'arrête : on remet baseFrequency à 0
            gsap.to(turbulenceRef.current, {
              attr: { baseFrequency: "0 0" },
              duration: 0.3,
              ease: "power2.out",
            });
          }, 200); // ← ici, 200ms après la dernière animation
        },
      },
    });

    return () => {
      timeline.current?.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearTimeout(scrollTimeout.current);
    };

 
  },
  
 
  []);

  

 



  return (
    <div className="about mt-72 ">
    <div
      ref={sectionRef}
      className="relative flex flex-row  items-center gap-48"
      id="Section2"
    >
      <div className="flex flex-col ml-9 text-4xl w-[50%] ">
      <h2 className="   marko-one-regular text-black/60  text-2xl">
        <span id="Filsan" className=" font-extrabold mb-40"> </span> <br/> <br/> 
        <span className="mt-40 ">a solver problems</span> <br/>
        

        </h2>
     <p className="text-gray-800 max-w-xl text-xl mt-12">
  Filsan Fouad Youssouf, a young developer based in the capital of Djibouti, holds a degree in Computer Science from the University of Djibouti and brings one year of professional experience.  
  <br/><br/>
  Passionate about coding and technology, with a strong drive to innovate and deliver solutions for real-world challenges.  
  <br/><br/>
 I work with various programming languages such as Python, JavaScript, and PHP. I am also a junior data analyst skilled in Python, capable of developing accurate machine learning models to make predictions.  <br/><br/>
  Motivated, curious, and adaptable, thriving in dynamic team environments while constantly seeking opportunities to grow and innovate.
</p>


      </div>

      
     
      <div className="flex  items-center justify-center gap-11  w-[50%]">
     

        <img
         
         
          src={photo}
          alt="profile"
          className="h-[100vh] scale-95 "
         
        
        />
      
      </div>
     
       
    </div>

        </div>
  );
}

export default Section1;
