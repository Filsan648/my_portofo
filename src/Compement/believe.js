import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import belevie_1 from "../assets/belevie_1.jpg"; 
import belevie_2 from "../assets/belevie_2.jpg";
import belevie_3 from "../assets/belevie_3.jpg";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function Believe() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: '#smootmain',
      content: '#smootcontain',
      smooth: 5,
      effects: true
    });

    smoother.effects(".img1", {
      speed: 5,
      lag: 0.2,
      scale: 1.05,
      opacity: 0.9
    });

    smoother.effects(".img2", {
      speed: 5,
      lag: 5,
      scale: 1.03,
      opacity: 0.85
    });

    smoother.effects(".img3", {
      speed:5,
      lag:9,
      scale: 1.02,
      opacity: 0.8
    });

    gsap.from('.img', {
      scrollTrigger: {
        trigger: '.HEADING',
        start: "top center",
        scrub: true,
        pin: '.pin',
        pinSpacing: true,
      }
    });
    gsap.to('.smootmain', {
      backgroundColor: "black",
      color:"white",
      duration: 0.5,
      scrollTrigger: {
        trigger: '.smootmain',
        start: "top top", 
        end:" bottom bottom",
        toggleActions: "play none none reverse", 
      
      }
    });

  }, []);

  return (
    <div className="relative smootmain  z-20" id="smootmain">
      <div className="overflow-visible" id="smootcontain">
        <div className="smootcontain ">
        <section className="h-[10px] mt-96">
        </section>
          <div className="HEADING flex justify-center items-center">
          <div className="pin absolute marko-one-regular text-4xl text-center">
  <div>I am not a great programmer ,I am just</div>
  <div className="text-9xl "> a god programmer with great habits </div>
  <div className=" italic "> by Kent Beck</div>
</div>


           
          </div>
          <div className=" flex flex-row justify-center items-center gap-40">
              <img className="img1 w-48 " src={belevie_1} alt=" belevie_1" />
              <img className="img2 w-48" src={belevie_2} alt=" belevie_2" />
              <img className="img3 w-48" src={belevie_3} alt="belevie_3 " />
            </div>
          <section className="h-[100px] mt-96">
          </section>
        </div>
      </div>
    </div>
  );
}

export default Believe;
