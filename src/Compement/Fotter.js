import { useEffect,useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


function Footer(){
const [mouse ,setmouse]=useState([]);

   const getCursor = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setmouse((prev) => [...prev, { x, y }]);
  };
 useEffect(()=>{
    mouse.forEach((pos, index)=> {
        const tl=gsap.timeline()
        tl.to(`#mouse-${index}`,
            { delay:1,
              duration:0.3,
              backgroundColor:"blue",
              x:5
            }
        )
        tl.to(`#mouse-${index}`,
            {   backgroundColor:"red",
                y:5,
                duration:2,
            })
            
            tl.to(`#mouse-${index}`,
                {  duration:0.3,
                    opacity:0,
                })
    })
 })



    return(

 <div className="relative flex justify-center items-start h-[400px]  border" onMouseMove={getCursor} > 


{mouse.map((pos, index) => (
        <div
        id={`mouse-${index}`}
          key={index}
          className="absolute w-10 h-7 bg-black shadow-2xl shadow-gray-400 pointer-events-none"
          style={{ left: pos.x, top: pos.y }}
        />
      ))}
     <div> <div className="marko-one-regular  text-9xl"> Contact Us  </div>
             <div>  filsanfouad2002@gmail.com   </div> </div>




          </div>
    )

}
export default Footer;

