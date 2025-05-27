import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css';
import photo from "../assets/my_photo.jpg";

gsap.registerPlugin(ScrollTrigger);

function Section1() {
  const imgRef = useRef(null);
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

  const handleHover = () => {
    gsap.to(".about",
      {
   

      }
     )
    
  };

  const handleHoverEnd = () => {
    gsap.to(".about",
      {
    backgroundColor:"#D9D9D9"
      }
     )
  };



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
        <span className="mt-40 ">a software developer</span> <br/>
        <div className="flex flex-row justify-start text-sm "> <div className="size-2 bg-green-300 rounded-full"></div>Avaible for work</div>

        </h2>
        <p className=" text-gray-800 max-w-xl text-2xl mt-32">
          Solutions digitales sur mesure – pour PME, grands comptes et institutions.        <br/>
          Parfait ! Si tu veux un fond de couleur bg-lightgray (gris clair) et un bruit 
          en noir fusionné dessus, voici exactement comment le faire en SVG.
        </p>
      </div>

      
     
      <div className="flex  items-center justify-center gap-11  w-[50%]">
     

        <img
          ref={imgRef}
          id="imgRef"
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
