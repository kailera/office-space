import { useEffect, useState } from "react";
import { phrases } from "../../res/phrases";

export default function MotivationalPhrase() {
  const [index, setIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("animate-fade-in-scale");

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass("opacity-0 scale-95 transition-all duration-300"); 
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setFadeClass("animate-fade-in-scale"); 
      }, 300); 
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-[260px] sm-w-[300px] md:w-[360px] min-h-[48px] max-h-[64px] overflow-hidden 
        text-center font-medium text-sm sm:text-base md:text-lg ${fadeClass}`}
      style={{
        lineHeight:"1.3",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        textWrap:"balance"
      }}
    >
      {phrases[index]}
    </div>
  );
}
