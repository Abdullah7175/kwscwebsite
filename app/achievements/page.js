"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export default function Achievements() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeline = gsap.timeline({
      onComplete: () => setLoading(false),
    });

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
  }, []);

  const achievements = [
    {
      title: "Hydrant Management Cell",
      description: "Established comprehensive hydrant management system to combat illegal water connections and ensure proper water distribution.",
      icon: "/icon/airdrop.png",
      year: "2024"
    },
    {
      title: "Global Water Summit 2024",
      description: "Represented Pakistan at the prestigious Global Water Summit in London, showcasing KW&SC's innovative water management solutions.",
      icon: "/icon/people.png",
      year: "2024"
    },
    {
      title: "Rangers Partnership",
      description: "Joined forces with Pakistan Rangers to combat illegal hydrants and water theft, ensuring fair water distribution.",
      icon: "/icon/microphone.png",
      year: "2024"
    },
    {
      title: "Fareeda Salam Development Center",
      description: "Established community development center to engage with local communities and improve service delivery.",
      icon: "/icon/user-icon.png",
      year: "2024"
    },
    {
      title: "Grievance Redressal Management",
      description: "Introduced comprehensive GRM cell to address customer complaints and improve service quality.",
      icon: "/icon/clipboar02.svg",
      year: "2024"
    },
    {
      title: "Digital Transformation",
      description: "Implemented digital solutions including online billing, mobile apps, and automated systems for better service delivery.",
      icon: "/icon/medal-star.svg",
      year: "2024"
    }
  ];

  return (
    <>
      {loading && <Loader />}
      
      <section className={`relative h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover text-white flex justify-center items-center`}>
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>
        
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              MILESTONES ACHIEVED BY KW&SC
            </h2>
            <p className="mt-6 text-[3.5vh]">
              Celebrating our achievements in transforming Karachi's water and sewerage infrastructure
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                Our Achievements
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                KW&SC has made significant strides in improving water and sewerage services across Karachi
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
                  <div className="flex items-center mb-4">
                    <Image
                      src={achievement.icon}
                      width={40}
                      height={40}
                      alt={achievement.title}
                      className="mr-4"
                    />
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
