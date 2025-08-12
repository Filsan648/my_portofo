import linkdin from "../assets/linkdin.png";
import github from "../assets/g.png";
function Navbar () {
  return (
    <div className="flex justify-between items-center px-10 py-4 font-satoshi w-full">
    <div className="font-bold text-xl ">filsan.dev</div>
  <div >
      
    </div>
    <div className="flex gap-10 text-base">
      <a href="https://github.com/Filsan648" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="github"  className="w-7 h-7" />
      </a>
      <a href="https://www.linkedin.com/in/filsan-fouad-youssouf-45271b285/" target="_blank" rel="noopener noreferrer">
      <img   src={linkdin} alt="linkdin" className="w-7 h-7" />
      </a>
    </div>
  
    
  </div>
  
  );
}
export default Navbar;