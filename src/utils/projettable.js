import { text } from "motion/react-client";
import imff from  "../assets/default.png"
import cimenterie from  "../assets/cimenterie.png"
import meto from  "../assets/meto.png"
import bulk from  "../assets/bulk.png"
const  Projet=
   [ { id: 1,
       title:"Gsap project ",
       content:"Contenu du projet A",
       image:imff,
       allignement:"top",
       Tools: [{
       tool:"React",
       color:"#3674B5"

       },{
   tool:"laravel",
      color:"#FFB22C"
       },{
tool:"gsap",
      color:"#8E1616"
       }
       ],
       color:"#000000",

    } ,


    { id: 2,
        title:"Web site for a comenterie",
        content:"Contenu du projet b",
        image:cimenterie,
        Tools: [{
         tool:"React",
         color:"#3674B5"
   
          },{
      tool:"laravel",
         color:"#FFB22C"
          },{
   tool:"gsap",
         color:"#8E1616"
          }
          ],        color:"#EAE4D5",

     },


     { id: 3,
        title:"Meto project ",
        content:"Meto project ",
        image:meto,
        Tools: [{
         tool:"React",
         color:"#3674B5"
   
          },{
      tool:"laravel",
         color:"#FFB22C"
          },{
   tool:"gsap",
         color:"#8E1616"
          }
          ],        color:"#B6B09F",
     },


     { id: 4,
        title:"Webreidge Application",
        content:"Contenu du projet d",
        image:bulk,
        Tools: [{
         tool:"React",
         color:"#3674B5"
   
          },{
      tool:"laravel",
         color:"#FFB22C"
          },{
   tool:"gsap",
         color:"#8E1616"
          }
          ],    
         color:"#F2F2F2",
     }

]




export default Projet;