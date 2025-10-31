"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function News() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('updates');

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

  const latestUpdates = [
    {
      date: "Aug 13, 2025",
      title: "PPP Chairman Bilawal Bhutto Zardari inaugurates New Hub Canal",
      description: "The New Hub Canal project has been officially inaugurated, marking a significant milestone in Karachi's water infrastructure development.",
      type: "Inauguration"
    },
    {
      date: "Aug 6, 2025",
      title: "Mayor Karachi visits New Hub Canal with officials and experts",
      description: "Comprehensive inspection and review of the completed New Hub Canal project by city leadership.",
      type: "Inspection"
    },
    {
      date: "Aug 6, 2025",
      title: "First major water project completed in 22 years",
      description: "KW&SC celebrates the completion of the city's first major water project in nearly two decades.",
      type: "Achievement"
    },
    {
      date: "July 24, 2025",
      title: "KWSC Board approves Ahmed Ali Siddiqui as permanent CEO",
      description: "Board of Directors officially appoints Ahmed Ali Siddiqui as the permanent CEO of KW&SC.",
      type: "Leadership"
    },
    {
      date: "May 3, 2025",
      title: "CEO visits NEK Old & New Filter Plants",
      description: "CEO conducts inspection of water filtration facilities to ensure quality standards.",
      type: "Inspection"
    }
  ];

  const pressReleases = [
    {
      date: "Aug 13, 2025",
      title: "New Hub Canal Project Successfully Completed",
      description: "KW&SC announces the successful completion of the New Hub Canal project, ahead of schedule.",
      link: "https://www.kwsc.gos.pk/news-and-updates#press-release"
    },
    {
      date: "July 24, 2025",
      title: "New CEO Appointment Announcement",
      description: "Official announcement regarding the appointment of Ahmed Ali Siddiqui as permanent CEO.",
      link: "https://www.kwsc.gos.pk/news-and-updates#press-release"
    }
  ];

  const mediaGallery = [
    {
      title: "Hub Canal Inauguration Ceremony",
      description: "Photos from the official inauguration ceremony of the New Hub Canal project",
      type: "Photos"
    },
    {
      title: "Infrastructure Development",
      description: "Visual documentation of ongoing infrastructure development projects",
      type: "Photos"
    },
    {
      title: "Community Engagement",
      description: "Images from community engagement and development programs",
      type: "Photos"
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
              News & Updates
            </h2>
            <p className="mt-6 text-[3.5vh]">
              Stay informed about KW&SC's latest developments and achievements
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                Latest News & Updates
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay updated with KW&SC's latest developments, achievements, and announcements
              </p>
            </Fade>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setActiveTab('updates')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'updates' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Latest Updates
              </button>
              <button
                onClick={() => setActiveTab('press')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'press' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Press Releases
              </button>
              <button
                onClick={() => setActiveTab('media')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'media' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Media Gallery
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'updates' && (
              <div className="space-y-6">
                {latestUpdates.map((update, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {update.type}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {update.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {update.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {update.description}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {activeTab === 'press' && (
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Press Release
                        </span>
                        <span className="text-gray-500 text-sm">
                          {release.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {release.description}
                      </p>
                      <Link
                        href={release.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Read Full Release
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </Fade>
                ))}
              </div>
            )}

            {activeTab === 'media' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {mediaGallery.map((item, index) => (
                  <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="p-6">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-3 inline-block">
                          {item.type}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
