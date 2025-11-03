"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Whoarewe = () => {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Activate animation when section enters middle of viewport
      if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.4) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-4 md:px-20 lg:px-40 overflow-hidden"
    >
      <div className="container mx-auto relative">
        <div
          className={`
            flex flex-col md:flex-row items-center justify-between gap-10
            transition-all duration-1000 ease-out
          `}
        >
          {/* LEFT - Heading */}
          <div
            className={`
              w-full md:w-1/2
              transform transition-all duration-1000 ease-out
              ${isActive ? "translate-x-0 opacity-100 text-left" : "translate-x-1/2 opacity-100 text-center"}
            `}
          >
            <h2
              className={`
                text-5xl md:text-7xl font-black
                bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent
                transition-all duration-1000 ease-out
                ${isActive ? "text-left" : "text-center"}
              `}
            >
              Who We Are
            </h2>
          </div>

          {/* RIGHT - Content */}
          <div
            className={`
              w-full md:w-1/2 space-y-6 transition-all duration-1000 ease-out
              ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
            `}
          >
            <h3 className="text-3xl font-bold text-gray-900">Core Values</h3>

            {[
              {
                img: "/icon/airdrop.png",
                title: "Reliability",
                desc: "Ensuring consistent water supply and efficient sewerage services across Karachi.",
              },
              {
                img: "/icon/people.png",
                title: "Community Focus",
                desc: "Serving the citizens of Karachi with dedication and commitment to public welfare.",
              },
              {
                img: "/icon/microphone.png",
                title: "Transparency",
                desc: "Clear communication and honest reporting at every step of our operations.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`
                  flex items-start gap-4 p-5 rounded-lg bg-white/70 backdrop-blur-sm shadow-sm
                  transition-all duration-700 ease-out
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                `}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                <Image src={item.img} width={45} height={45} alt={item.title} />
                <div>
                  <p className="font-semibold text-gray-900">{item.title}</p>
                  <p className="text-gray-700 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
