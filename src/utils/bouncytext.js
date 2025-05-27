import React, { useEffect, useState } from "react";
import "../index.css"

function BouncyText({text})  {
  const [textArray, setTextArray] = useState([]);
console.log(text)
  useEffect(() => {
    const str = text.split("");
    setTextArray(str);
  }, []);

  const handleMouseEnter = (index) => {
    const element = document.getElementById(`char-${index}`);
    if (element) {
      element.classList.add("animated");
    }
  };

  const handleAnimationEnd = (index) => {
    const element = document.getElementById(`char-${index}`);
    if (element) {
      element.classList.remove("animated");
    }
  };

  return (
    <div>
      <h1 className="bouncy_text  marko-one-regular text-4xl mb-10">
        {textArray.map((char, index) => (
          <span
            key={index}
            id={`char-${index}`}
            className="hoverEffect"
            onMouseEnter={() => handleMouseEnter(index)}
            onAnimationEnd={() => handleAnimationEnd(index)}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default BouncyText;
