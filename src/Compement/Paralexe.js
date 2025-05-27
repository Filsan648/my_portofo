import parallexe from "../assets/istockphoto-997842654-612x612.jpg";

const Paralexe = ({ position }) => {
  return (
    <div className={`flex flex-col gap-8 ${position === 'left' ? 'items-start' : 'items-end'}`}>
      <img src={parallexe} alt="para" className="w-96 h-52 object-cover rounded-xl" />
      <img src={parallexe} alt="para2" className="w-96 h-24 object-cover rounded-xl" />
    </div>
  );
  
};

export default Paralexe;
