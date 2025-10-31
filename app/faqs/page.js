"use client";
import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";

export default function FAQs() {
  const [loading, setLoading] = useState(true);
  const [openFAQ, setOpenFAQ] = useState(null);

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

  const faqs = [
    {
      question: "How can I get a new water connection?",
      answer: "For residential, commercial, bulk, or industrial connections, you need to submit an application form along with required documents to the nearest KW&SC office. The process includes site inspection, approval, and connection installation.",
      category: "New Connection"
    },
    {
      question: "How can I get a duplicate bill?",
      answer: "You can obtain a duplicate bill by visiting our online portal at https://web.kwsb.crdc.biz/ or by visiting the nearest KW&SC office with your account number and CNIC.",
      category: "Billing"
    },
    {
      question: "Where can I complain about sewerage?",
      answer: "You can register sewerage complaints through our online complaint system at https://complain.kwsc.gos.pk or contact our customer service helpline at (+92) 021 111 597 200.",
      category: "Complaints"
    },
    {
      question: "Where can I complain for water shortage?",
      answer: "Water shortage complaints can be registered through our complaint portal at https://complain.kwsc.gos.pk or by contacting your area's Executive Engineer (XEN) office.",
      category: "Complaints"
    },
    {
      question: "How can I report water theft?",
      answer: "Report water theft by calling our helpline (+92) 021 111 597 200 or through our online complaint system. You can also contact the Hydrant Management Cell for immediate action.",
      category: "Water Theft"
    },
    {
      question: "How can I order water tanker?",
      answer: "You can order water tankers through our online booking system at https://campaign.kwsc.gos.pk/ or by calling our customer service helpline.",
      category: "Tanker Service"
    },
    {
      question: "Where can I complain about online tanker service?",
      answer: "Complaints about online tanker service can be registered through our complaint portal or by contacting our customer service team directly.",
      category: "Tanker Service"
    },
    {
      question: "How can I contact XEN (Executive Engineer) of my area?",
      answer: "You can find contact information for XEN offices in your area by downloading the XEN offices list from our Right to Information section or by calling our main helpline.",
      category: "Contact"
    },
    {
      question: "How can I change password of my mobile app?",
      answer: "To change your mobile app password, open the app, go to settings/profile section, and select 'Change Password'. Follow the instructions to set a new password.",
      category: "Mobile App"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {loading && <Loader />}
      
      <section className={`relative h-screen transition-opacity duration-700 bg-[url('/downtownkarachi.gif')] bg-cover text-white flex justify-center items-center`}>
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>
        
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-[3.5vh]">
              Find answers to common questions about KW&SC services
            </p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
        <div className="max-w-[85%] mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce duration={1000}>
              <h1 className="text-5xl font-bold text-blue-900 mb-4">
                FAQs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get quick answers to the most commonly asked questions about KW&SC services
              </p>
            </Fade>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Fade key={index} direction="up" triggerOnce duration={1000} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50 transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <svg
                      className={`w-5 h-5 text-blue-600 transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Fade>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
            <Fade direction="up" triggerOnce duration={1000}>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  If you couldn't find the answer you're looking for, feel free to contact us
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+92021111597200"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: (+92) 021 111 597 200
                  </a>
                  <a
                    href="mailto:info@kwsc.gos.pk"
                    className="inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us: info@kwsc.gos.pk
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
