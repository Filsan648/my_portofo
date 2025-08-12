import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import BouncyText from '../utils/bouncytext';

// Import your images (ensure they look good against a black background)
import github from "../assets/github.png";
import gsapimage from "../assets/gsap.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import laravel from "../assets/laravel.png";
import php from "../assets/php.png";
import reactimage from "../assets/react.png";
import tailwind from "../assets/téléchargement.png";
import python from "../assets/python.jpeg";
import api from "../assets/Api.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";
import odoo from "../assets/odoo.jpeg";
import wordpress from "../assets/wordpress.png";
import pandas from "../assets/pandas.jpeg";
import numby from "../assets/numby.png";
import matplot from "../assets/matplot.png";
import sckit_learn from "../assets/sckit_learn.jpg";

// Register GSAP plugins once
gsap.registerPlugin(ScrollTrigger);

// Define your skills data
const skills = [
{
  Title :"Programming Languages",
  Content:
     [{ src: python, name: "Python" },
     { src: javascript, name: "JavaScript" },
     { src: php, name: "PHP" },
     { src: java, name: "Java" },]

  

}
,
{
  Title:"Framworks",
  Content:
   [ { src: gsapimage, name: "GSAP" },
    { src: laravel, name: "Laravel" },
    { src: reactimage, name: "React" },
    { src: tailwind, name: "Tailwind CSS" },]
  
},
{
  Title:"Tools",
  Content:[
    { src: github, name: "GitHub" },
    { src: api, name: "API Design" },
  ]
},
{
  Title:"Database",
  Content:[
    { src: mysql, name: "MySQL" },
    { src: sql, name: "SQL" },
  ]
},

{
  Title:"Libraries",
  Content:[
    {src: pandas,name:"Pandas"},
    {src: numby,name:"NumPy"},
    {src: matplot,name:"Matplotlib"},
    {src: sckit_learn,name:"Scikit-learn"},
 

    
    

  ]
}
  ,{
  Title:"CMS and ERP",
  Content:[
    { src: odoo, name: "Odoo" },
    { src: wordpress, name: "WordPress" },
  ]
},
];

function Skill() {
  const skillSectionRef = useRef(null);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    if (!skillSectionRef.current) return;

 
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX - innerWidth / 2) * 0.015;
      const moveY = (clientY - innerHeight / 2) * 0.015;

      gsap.to(".background-grid-effect", {
        x: moveX,
        y: moveY,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <section ref={skillSectionRef} className="min-h-screen flex flex-col items-center justify-center py-20 px-4  text-black relative overflow-hidden">

      <div className="absolute inset-0 z-0 opacity-10 background-grid-effect">
        <div className="w-full h-full bg-[size:50px_50px] relative flex items-center justify-center">

          <div className="absolute pointer-events-none inset-0 flex items-center justify-center  "></div>
        </div>
      </div>

     <BouncyText text="Skills" />
      <p className="skills-description text-xl md:text-2xl text-gray-800 mb-16 max-w-3xl text-center z-10 font-light leading-relaxed">
  Proficient in a diverse range of <strong className="font-medium text-black">technologies and tools</strong>, crafting robust and intuitive applications.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 gap-12 z-10 w-full max-w-6xl px-4">
  {skills.map((category, categoryIndex) => (
    <div key={categoryIndex} className="flex flex-col">

      
      <h2 className="text-2xl md:text-xl font-semibold text-gray-900 mb-6">
        {category.Title}
      </h2>

   
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-8">
        {category.Content.map((skill, skillIndex) => (
          <div
            key={`${categoryIndex}-${skillIndex}`}
            ref={el => skillItemsRef.current.push(el)}
            className="skill-item flex flex-col items-center justify-center p-4 py-6 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer group relative overflow-hidden"
          >
         
            <div className="absolute inset-0 bg-[#D9D9D9] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>

            <div className="w-20 h-20 mb-3 flex items-center justify-center rounded-full overflow-hidden group-hover:bg-[#D9D9D9]/20 transition-all duration-300 transform group-hover:scale-110">
              <img
                src={skill.src}
                alt={skill.name}
                className="w-20 h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-xl font-semibold group-hover:text-black transition-colors duration-300 mt-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>

    
      <div className="absolute bottom-10 right-10 text-gray-700 text-sm opacity-50 hidden md:block z-0">
        Faites défiler pour en découvrir plus...
      </div>
    </section>
  );
}

export default Skill;
