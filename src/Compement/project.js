
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import BouncyText from '../utils/bouncytext';
import AI from  "../assets/ai_studio.png"
import cimenterie from  "../assets/cimenterie.png"
import meto from  "../assets/meto.png"
import bulk from  "../assets/bulk.png"
import stock from "../assets/stockk.png"

import Calculatrice from '../assets/calcula.png'
gsap.registerPlugin(ScrollTrigger);

function Project() {
 const Images=["image1","image2","image3","image4","image5","image6"]
 



      
    
    

    
const entermouse=(e,)=>{
 
  gsap.to("#text",
    {opacity:0}
  )

Images.forEach((image)=>{
  gsap.to(`#${e}`,
    {scale:1.1,
    }

  )

  if(image !== e)
  gsap.to(`#${image}`,
{
      
  filter: "blur(16px)", 
  duration: 0.5

}

  )
})
}

const leave=(e)=>{
  gsap.to("#project",
    {
      backgroundColor:"#D9D9D9"
    }

  )
  gsap.to("#text",
    {opacity:1}
  )
  Images.forEach((image )=>{
    gsap.to(`#${e}`,
      {scale:1

      }
  
    )
    gsap.to(`#${image}`,
  {
    scale: 1,
    filter:  "blur(0px)", 
    duration: 0.5
  
  }
  
    )
  })
  }
  
  return (
     <div>
  
    <div className="mt-24 px-4 relative" id='project' >

      
      <div>
   
      <div className="text-center mb-16">
        <BouncyText text="Featured Project" />
      </div>

      <div className="">
    
  
      <div className='flex flex-row justify-between ' >
     
      <div className='w-[450px] h-[500px]' >
      <img src={AI} alt="immf" className='w-full h-full object-fill ' id='image1' onMouseLeave={()=>leave("image1")} onMouseEnter={()=>entermouse("image1")} />
      <h1 className='text-2xl' id='text'>AI STUDIO - <a href='https://filsan648-ai-studio-main-615u6t.streamlit.app/' className='text-xl text-black/60' > Live demos </a> -<a href='https://github.com/Filsan648/AI-STUDIO-2' className='text-xl text-black/60'> Github</a>  </h1>
      </div>

      <div className='w-96 h-96'>
      </div>
      <div className='w-[700px] h-96' >
      <img  className=' w-full h-full object-contain' src={cimenterie} alt="cimenterie" id='image2' onMouseLeave={()=>leave("image2")} onMouseEnter={()=>entermouse("image2")} /> 
      <h1 className='text-2xl' id='text'>Cimenterie d'ali-sabieh -<a href='https://689ae70a876f339fc89e53ad--projectcim.netlify.app/' className='text-xl text-black/60' > Live demos </a> -<a href='https://github.com/Filsan648/CIMAS' className='text-xl text-black/60'> Github</a>  </h1>
      </div>
      </div>
      <div>
      <div className='flex flex-col justify-end items-end'  >
      <img src={meto} alt="metea" id='image3' onMouseLeave={()=>leave("image3")} onMouseEnter={()=>entermouse("image3")} /> 
      <h1 className='text-2xl' id='text'>Meteo APP -<a href='https://coruscating-dasik-073209.netlify.app/' className='text-xl text-black/60'> Live demos </a>  </h1>
      </div>
      <div className='flex flex-row justify-between '>
      <div className='w-[400px] h-[500px]' >
      <img src={bulk} alt='bulk' className='w-full h-full object-fill' id='image4' onMouseLeave={()=>leave("image4")} onMouseEnter={()=>entermouse("image4")}/>  
      <h1 className='text-2xl' id='text'>Webreidge Application -<a href='https://github.com/Filsan648/Bulk' className='text-xl text-black/60'> Github</a>   </h1>
      </div>
      <div> </div>
      <div className='w-[500px] h-[400px] m-12' >
      <img src={stock} alt='stock' className='w-full h-full object-fill' id='image5' onMouseLeave={()=>leave("image5")} onMouseEnter={()=>entermouse("image5")}/>  
      <h1 className='text-2xl' id='text'>Stock  Application -<a href='https://github.com/Filsan648/Stockapp' className='text-xl text-black/60'> Github</a>   </h1>
      </div>
      </div>
      <div className='flex justify-center mt-10'>
       <div className='w-[500px] h-[400px] m-12 ' >
      <img src={Calculatrice} alt='stock' className='w-full h-full object-fill' id='image6' onMouseLeave={()=>leave("image6")} onMouseEnter={()=>entermouse("image6")}/>  
      <h1 className='text-2xl' id='text'>Calculator-<a href='https://calculator-slzywu4sgqmhabjzxa48qg.streamlit.app/' className='text-xl text-black/60'> Live demos</a>-<a href='https://github.com/Filsan648/Calculator' className='text-xl text-black/60'> Github</a>    </h1>
      </div>
      </div>
      </div>
      </div>
 
      </div>
    </div>
    </div>
  );
}

export default Project;
