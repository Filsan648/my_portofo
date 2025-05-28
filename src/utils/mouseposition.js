import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Mouse({ variablbe }) {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
 const [truemouse,settruemouse]=useState(false);
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      console.log(e.clientX);
    };
    
    
  }, []);

  const Variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  const isMouseAvailable = mousePosition.x !== null && mousePosition.y !== null;

  return (
<div>
  {isMouseAvailable ? (
    variablbe ? (
      <motion.div
        className="size-10 border-2 border-[#9ca3af] rounded-full fixed pointer-events-none z-10"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      />
    ) : (
      <motion.div
        className="size-14 shadow-slate-800 bg-orange-500 rounded-full fixed z-10 flex items-center justify-center text-white text-2xl font-semibold"
        variants={Variants}
        animate="default"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-16 h-16"
          style={{ transform: "rotate(45deg)" }}
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </motion.div>
    )
  ) : (
    <motion.div
    className=""
    style={{
      left: mousePosition.x,
      top: mousePosition.y,
      position: "fixed",
      transform: "translate(-50%, -50%)",
    }}
  />
  )}
</div>

  );
}

export default Mouse;
