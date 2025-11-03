"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { TypeAnimation } from "react-type-animation";
import Loader from "@/components/Loader";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { usePerformanceMonitor, useImagePreloader } from "@/hooks/usePerformance";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showCityOfLights, setShowCityOfLights] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [nextBgIndex, setNextBgIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState([]);
  
  // Performance monitoring
  const performanceMetrics = usePerformanceMonitor();
  
  // Array of Karachi GIFs - Optimized loading order
  const backgroundGifs = [
    "/downtownkarachi.gif",
    "/karachicharminar.gif", 
    "/teentalwarkarachi.gif",
    "/4.gif",
    "/5.gif",
    "/6.gif",
    "/7.gif",
    "/8.gif",
    "/9.gif",
    "/10.gif",
    "/11.gif",
    "/12.gif"
  ];

  // Use optimized image preloader hook
  const { loadedImages, loadingProgress } = useImagePreloader(backgroundGifs);

  // Preload critical images for faster loading
  useEffect(() => {
    const preloadImages = () => {
      // Preload first 3 critical GIFs immediately
      const criticalGifs = backgroundGifs.slice(0, 3);
      criticalGifs.forEach((gif, index) => {
        const img = new Image();
        img.src = gif;
        img.onload = () => {
          console.log(`✅ Preloaded critical GIF ${index + 1}: ${gif}`);
        };
        img.onerror = () => {
          console.warn(`❌ Failed to preload: ${gif}`);
        };
      });

      // Preload remaining GIFs after a delay to not block initial render
      setTimeout(() => {
        const remainingGifs = backgroundGifs.slice(3);
        remainingGifs.forEach((gif, index) => {
          const img = new Image();
          img.src = gif;
          img.onload = () => {
            console.log(`✅ Preloaded additional GIF ${index + 4}: ${gif}`);
          };
        });
      }, 2000); // Delay non-critical preloading
    };

    preloadImages();
  }, []);

  // Log image loading progress
  useEffect(() => {
    if (loadingProgress > 0) {
      console.log(`📸 Image Loading Progress: ${loadingProgress.toFixed(1)}%`);
    }
  }, [loadingProgress]);

  // Generate particles on client side only
  useEffect(() => {
    const generateParticles = () => {
      const particleData = Array.from({ length: 20 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 2,
      }));
      setParticles(particleData);
    };
    generateParticles();
  }, []);
 
  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => {
        setLoading(false);
        // Show "City of Lights" first
        setTimeout(() => {
          setShowCityOfLights(true);
          // After 3 seconds, slide to main content
          setTimeout(() => {
            setShowCityOfLights(false);
            setTimeout(() => {
              setShowMainContent(true);
              // Animate main content after slide transition
              setTimeout(() => {
                const textWrapper = document.querySelector(".animated-header");
                if (textWrapper) {
                  textWrapper.innerHTML = textWrapper.textContent.replace(
                    /\S/g,
                    "<span class='inline-block opacity-0'>$&</span>"
                  );

                  gsap
                    .timeline({ delay: 0.5 })
                    .fromTo(
                      ".animated-header span",
                      { y: "100%", opacity: 0 },
                      { y: "0%", opacity: 1, duration: .5, ease: "power2.out", stagger: 0.05 }
                    );
                }

                // Animate action buttons wrapper if it exists
                const actionButtonsWrapper = document.querySelector(".action-buttons-wrapper");
                if (actionButtonsWrapper) {
                  gsap.fromTo(
                    actionButtonsWrapper,
                    { y: 50, opacity: 0 },
                    {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power2.out",
                      delay: 1.5,
                      onComplete: () => {
                        const actionButtons = document.querySelectorAll(".action-buttons button");
                        if (actionButtons.length > 0) {
                          gsap.set(actionButtons, { clearProps: "all" });
                        }
                      },
                    }
                  );
                }

                // Animate header image if it exists
                const headerImage = document.querySelector(".header-image");
                if (headerImage) {
                  gsap.fromTo(
                    headerImage,
                    { x: -200, opacity: 0 },
                    { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 1 }
                  );
                }
              }, 500);
            }, 500);
          }, 3000);
        }, 500);
      },
    });

    // Check if loader elements exist before animating
    const loaderElement = document.querySelector(".loader");
    const wrapperElement = document.querySelector(".wrapper");
    
    if (loaderElement && wrapperElement) {
    loaderTimeline
      .fromTo(
        ".loader",
        { scaleY: 0, transformOrigin: "50% 100%" },
        { scaleY: 1, duration: 0.5, ease: "power2.inOut" }
      )
      .to(".loader", {
        scaleY: 0,
        transformOrigin: "0% -100%",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        ".wrapper",
        { y: "-100%", ease: "power4.inOut", duration: 1 },
        "-=0.8"
      );
    } else {
      // Fallback: just set loading to false if elements don't exist
      console.warn("Loader elements not found, skipping loader animation");
      setTimeout(() => setLoading(false), 1000);
    }
  }, []);

  // Background rotation effect with smooth crossfade - Optimized
  useEffect(() => {
    // Only start rotation after initial images are loaded
    const startRotation = () => {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        
        // Start transition
        setTimeout(() => {
          setCurrentBgIndex((prevIndex) => 
            (prevIndex + 1) % backgroundGifs.length
          );
          setNextBgIndex((prevIndex) => 
            (prevIndex + 2) % backgroundGifs.length
          );
          
          // End transition
          setTimeout(() => {
            setIsTransitioning(false);
          }, 2000); // 2 second crossfade duration
        }, 100);
        
      }, 8000); // Increased to 8 seconds for better performance

      return interval;
    };

    // Delay rotation start to allow initial load
    const rotationTimer = setTimeout(() => {
      const interval = startRotation();
      return () => {
        clearInterval(interval);
        clearTimeout(rotationTimer);
      };
    }, 3000); // Wait 3 seconds before starting rotation

    return () => {
      clearTimeout(rotationTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Use the Loader component */}
      <section
        className={`relative h-screen transition-opacity duration-700 ${
          loading ? "opacity-100" : "opacity-100"
        } bg-cover text-white flex justify-center items-center overflow-hidden`}
      >
        {/* Background Layer 1 - Current Image with loading optimization */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url('${backgroundGifs[currentBgIndex]}')`,
            opacity: isTransitioning ? 0 : 1,
            zIndex: 1,
            willChange: 'opacity', // Optimize for animations
            transform: 'translateZ(0)' // Force hardware acceleration
          }}
        />
        
        {/* Background Layer 2 - Next Image with loading optimization */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out"
          style={{
            backgroundImage: `url('${backgroundGifs[nextBgIndex]}')`,
            opacity: isTransitioning ? 1 : 0,
            zIndex: 2,
            willChange: 'opacity', // Optimize for animations
            transform: 'translateZ(0)' // Force hardware acceleration
          }}
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90z-10"></div>
        
        {/* Animated Particles Layer */}
        <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cyan-400/30 animate-pulse"
              style={{
                width: `${particle.width}px`,
                height: `${particle.height}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDuration: `${particle.animationDuration}s`,
                animationDelay: `${particle.animationDelay}s`,
              }}
            />
          ))}
        </div>

        {/* External Resources Buttons - Below Navbar */}
        {!loading && (
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-auto">
            <div className="flex gap-2 justify-center whitespace-nowrap">
              <a
                href="https://complain.kwsc.gos.pk/add/new/connection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-blue-800 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-[12px]"
              >
                New Connection
              </a>
              <a
                href="https://web.kwsb.crdc.biz/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-blue-800 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-[12px]"
              >
                Book Tanker
              </a>
              <a
                href="https://complain.kwsc.gos.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-blue-800 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-[12px]"
              >
                E-Complaint
              </a>
              <a
                href="https://www.kwsc.gos.pk/e-bill"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur-sm text-blue-800 px-3 py-2 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-[12px]"
              >
                Get Your Bill
              </a>
            </div>
          </div>
        )}        
        {/* Content (Ensures text and images are above overlay) */}
        <div className="relative z-20 max-w-[75%] m-20 mx-auto flex items-center justify-center text-center pointer-events-none">
          <div className="w-[160%] pointer-events-auto">
          
          {/* Karachi City of Lights - First slide */}
          {showCityOfLights && (
            <div className="slide-in">
              <h1 className="text-[72px] font-bold text-white animate-pulse"
                  style={{
                    
                    filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.9))'
                  }}>
                KARACHI THE CITY OF LIGHTS
              </h1>
            </div>
          )}
          
          {/* Main KW&SC Content - Second slide */}
          {showMainContent && (
            <div className="slide-in">
              {/* Glassmorphism Container */}
              <div className="flex flex-col justify-center items-center backdrop-blur-lg bg-blue/15 border border-white/20 rounded-xl p-8 shadow-2xl pointer-events-none">
                <h2
                  className="mx-auto text-center animated-header text-[42px] font-bold text-white-300"
                >
                  COMMITTED TO DELIVER!
            </h2>
                <p
                  className="mx-auto text-center mt-6 text-[22px] text-white-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse"
                >
              Karachi Water and Sewerage Corporation (KW&SC) is committed to
              <br /> providing reliable water and sewerage services to Karachi.
            </p>

                <p className="mt-6 text-[16px] text-white-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                >
              <TypeAnimation
                sequence={[
                  "Ensuring clean, safe drinking water for all Karachi residents.",
                  2000,
                  "Maintaining and upgrading sewerage infrastructure across the city...",
                  2000,
                  "Providing 24/7 water supply and emergency services...",
                  2000,
                  "Implementing sustainable water management solutions...",
                  2000,
                  "Building a healthier Karachi through efficient utilities...",
                  2000,
                ]}
                wrapper="span"
                speed={30}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </p>

                <div className="text-center mt-16 action-buttons-wrapper relative z-20 pointer-events-auto">
              <Fade direction="up" triggerOnce duration={1500} delay={9}>
                  <Link
                    href="/aboutus"
                      className="relative z-20 text-[18px] px-6 py-3 border-2 border-cyan-400 rounded-lg font-bold 
             hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 ease-in-out 
             inline-flex group items-center pl-6 bg-white/10 backdrop-blur-sm hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 cursor-pointer"
                    onClick={() => console.log('Button clicked!')}
                  >
                    Learn About KW&SC
                    <span className="ml-3 w-0 overflow-hidden transition-all duration-300 delay-75 ease-in-out group-hover:min-w-8 group-hover:w-8">
                      <MoveRight size={50} />
                    </span>
                  </Link>
              </Fade>
            </div>
          </div>
        </div>
          )}
          </div>
        </div>

      </section>
    </>
  );
}
