"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function Careers() {
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

  const careerOpportunities = [
    {
      title: "Recruitment",
      description: "Join KW&SC's team of dedicated professionals working to improve Karachi's water and sewerage infrastructure.",
      features: [
        "Competitive salary packages",
        "Professional development opportunities",
        "Health insurance benefits",
        "Pension scheme",
        "Career growth prospects"
      ],
      link: "https://www.kwsc.gos.pk/careers#Recruitment",
      type: "Full-time Positions"
    },
    {
      title: "Young Graduate Program",
      description: "Launch your career with KW&SC's comprehensive graduate program designed for fresh graduates.",
      features: [
        "12-month structured program",
        "Mentorship from senior professionals",
        "Hands-on project experience",
        "Training and skill development",
        "Potential for permanent employment"
      ],
      link: "https://www.kwsc.gos.pk/careers#YoungGraduateProgram",
      type: "Graduate Program"
    },
    {
      title: "Consultancies",
      description: "Partner with KW&SC as a consultant to contribute your expertise to critical water and sewerage projects.",
      features: [
        "Project-based assignments",
        "Flexible working arrangements",
        "Competitive consultancy rates",
        "Access to latest technology",
        "Collaboration with experts"
      ],
      link: "https://www.kwsc.gos.pk/careers#Consultancies",
      type: "Consulting"
    }
  ];

  const currentOpenings = [
    {
      position: "Executive Engineer (Water)",
      department: "Water Supply Department",
      location: "Karachi",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      position: "Executive Engineer (Sewerage)",
      department: "Sewerage Department", 
      location: "Karachi",
      type: "Full-time",
      experience: "5+ years"
    },
    {
      position: "Assistant Engineer",
      department: "Technical Services",
      location: "Karachi",
      type: "Full-time",
      experience: "2+ years"
    },
    {
      position: "Graduate Trainee",
      department: "Various Departments",
      location: "Karachi",
      type: "Training Program",
      experience: "Fresh Graduate"
    }
  ];

  return (
    <>
      {loading && <Loader />}
      
      <section className={`relative h-screen transition-opacity duration-700 bg-[url('/teentalwarkarachi.gif')] bg-cover text-white flex justify-center items-center`}>
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>
        
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              Careers at KW&SC
            </h2>
            <p className="mt-6 text-[3.5vh]">
              Join our mission to provide clean water and efficient sewerage services to Karachi
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                Work With Us
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of KW&SC's mission to transform Karachi's water and sewerage infrastructure
              </p>
            </Fade>
          </div>

          {/* Career Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {careerOpportunities.map((opportunity, index) => (
              <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-6">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      {opportunity.type}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {opportunity.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {opportunity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={opportunity.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center w-full justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </Fade>
            ))}
          </div>

          {/* Current Openings */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Fade direction="up" triggerOnce duration={1000}>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Current Job Openings
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentOpenings.map((opening, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {opening.position}
                      </h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {opening.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {opening.department}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {opening.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Experience: {opening.experience}
                      </div>
                    </div>
                    <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </Fade>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <Fade direction="up" triggerOnce duration={1000}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Ready to Join Our Team?
                </h2>
                <p className="text-gray-600 mb-6">
                  For more information about career opportunities, contact our HR department
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:hr@kwsc.gos.pk"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email HR: hr@kwsc.gos.pk
                  </a>
                  <a
                    href="tel:+92021111597200"
                    className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call: (+92) 021 111 597 200
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
