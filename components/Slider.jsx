"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  useGSAP(() => {
    gsap.from(".marque", {
      x: "-100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        start: "top bottom",
        end: "bottom+=200% top",
        scrub: true,
      },
    });
  });

  return (
    <div className="container overflow-hidden h-[200vh] relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/10 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-cyan-300/10 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="deg15 relative z-10">
        <div id="font" className="flex overflow-hidden py-6 bg-gradient-to-r from-blue-500/90 via-blue-600/90 to-blue-700/90 backdrop-blur-sm border-t border-b border-white/20">
          <div className="stroke text-nowrap move px-2 marque">
            Serving Karachi with Clean Water & Efficient Sewerage
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Serving Karachi with Clean Water & Efficient Sewerage
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Serving Karachi with Clean Water & Efficient Sewerage
          </div>
          <div className="stroke text-nowrap move px-2 marque">
            Serving Karachi with Clean Water & Efficient Sewerage
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
