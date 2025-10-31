'use client'
import Loader from '@/components/Loader'
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'

const page = () => {
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
  return (
    <>
      {loading && <Loader />}  {/* Use the Loader component */}

      <section
        className={`relative h-screen transition-opacity duration-700 bg-[url('/karachicharminar.gif')] bg-cover text-white flex justify-center items-center`}
      >
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        {/* Content (Ensures text and images are above overlay) */}
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              Our Projects
            </h2>
            <p className="mt-6 text-[3.5vh]">
              Major infrastructure projects transforming Karachi's water and sewerage systems
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KW&SC's major infrastructure projects transforming Karachi's water and sewerage systems
            </p>
          </div>

          {/* PSDP/ADP Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">PSDP/ADP Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">The Greater Karachi Sewerage Plan (S-III)</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive sewerage system development to improve wastewater management across Karachi.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Modern sewerage network expansion</li>
                  <li>• Treatment plant upgrades</li>
                  <li>• Pumping station improvements</li>
                  <li>• Environmental compliance</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">The Greater Karachi Bulk Water Supply Scheme (K-IV)</h3>
                <p className="text-gray-600 mb-4">
                  Major water supply project to meet Karachi's growing water demands through Hub Dam.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 260 MGD water supply capacity</li>
                  <li>• Hub Dam water source</li>
                  <li>• Modern conveyance system</li>
                  <li>• Distribution network expansion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PPP Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">PPP Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">West Karachi Recycled Water Project</h3>
                <p className="text-gray-600 mb-4">
                  35 MGD recycled water project at Haroonabad, SITE, Keamari, Karachi for sustainable water management.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 35 MGD capacity</li>
                  <li>• Advanced treatment technology</li>
                  <li>• Industrial water supply</li>
                  <li>• Environmental sustainability</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Municipal Wastewater Recycling Plant</h3>
                <p className="text-gray-600 mb-4">
                  40 MGD wastewater recycling plant at TP-IV, Korangi, Karachi for water conservation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 40 MGD treatment capacity</li>
                  <li>• Tertiary treatment processes</li>
                  <li>• Water reuse applications</li>
                  <li>• Cost-effective operations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Foreign-Funded Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">IBRD/AIIB Foreign-Funded Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">5 MGD Desalination Plant</h3>
                <p className="text-gray-600 mb-4">
                  Reverse osmosis desalination plant at Ibrahim Hyderi, Malir, Karachi for alternative water sources.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 5 MGD desalination capacity</li>
                  <li>• Reverse osmosis technology</li>
                  <li>• Coastal water utilization</li>
                  <li>• Energy-efficient design</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Institutional Reforms</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive institutional strengthening and capacity building initiatives.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Management system upgrades</li>
                  <li>• Technology integration</li>
                  <li>• Staff training programs</li>
                  <li>• Operational efficiency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* New Initiatives */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">KW&SC Employee & Customer Centric Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Hydrant Management Cell</h3>
                <p className="text-gray-600 mb-4">
                  Centralized management system for water hydrants and distribution points.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Digitalized Tanker Supply</h3>
                <p className="text-gray-600 mb-4">
                  Modern tanker booking and tracking system for efficient water delivery.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Biometric Attendance</h3>
                <p className="text-gray-600 mb-4">
                  Automated employee attendance system for improved workforce management.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Grievance Redressal Management</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive system for handling customer complaints and feedback.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Fleet Management System</h3>
                <p className="text-gray-600 mb-4">
                  Advanced vehicle tracking and management system for operational efficiency.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Center of Research & Innovation</h3>
                <p className="text-gray-600 mb-4">
                  CERRI initiative for research, reforms, and innovation in water management.
                </p>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">External Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Government Partners</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.sindh.gov.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Sindh Government Portal
                  </a>
                  <a
                    href="https://web.kwsb.crdc.biz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    KWSB CRDC Portal
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-blue-800">Customer Services</h3>
                <div className="space-y-4">
                  <a
                    href="https://complain.kwsc.gos.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Online Complaint System
                  </a>
                  <a
                    href="https://campaign.kwsc.gos.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Tanker Booking System
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
