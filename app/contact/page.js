'use client'
import Loader from "@/components/Loader";
import gsap from "gsap";
import { Locate, Mail, MapPin, Phone, SendIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function ContactUs() {
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
      {loading && <Loader />}
      <section
        className={`relative h-screen transition-opacity duration-700 bg-[url('/downtownkarachi.gif')] bg-cover text-white flex justify-center items-center`}
      >
        <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

        {/* Content (Ensures text and images are above overlay) */}
        <div className="relative z-[1] max-w-[75%] m-20 mx-auto flex items-center justify-center text-center">
          <div className="w-[85%]">
            <h2 className="text-[8vh] font-bold">
              Contact Us
            </h2>
            <p className="mt-6 text-[3.5vh] ">
              Get in touch with KW&SC for water and sewerage services,
              complaints,<br /> or any inquiries about our services.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full mt-20 pt-2">
        <div className=" text-black max-w-[85%] mx-auto overflow-x-hidden">
          <div className="flex justify-between items-center gap-10">
            <div className="w-1/2">
              <div className="text-center flex py-1 mb-1">
                <div className="inline-flex items-center gap-2 px-4 py-1 shadow-md rounded-full text-gray-700 text-sm font-medium">
                  <Image
                    src="/icon/user-icon.png"
                    width={20}
                    height={20}
                    alt="Magic Icon"
                  />
                  Contact Us
                </div>
              </div>
              <Fade direction="up" triggerOnce duration={1500} delay={2}>
              <h1 className="text-start text-8xl font-black mt-5 mb-10">Get in <br/>Touch</h1>
              </Fade>
              <form>
                <div className="grid grid-cols-2 items-center gap-8 mt-10">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="peer mt-1 p-2 w-full outline-none border-b-2 border-black placeholder-transparent focus:border-blue-500"
                      placeholder="Your Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-0 text-lg text-black transition-all duration-150  peer-placeholder-shown:top-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-blue-500 peer-focus:text-lg "
                    >
                      Name
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="peer mt-1 p-2 w-full outline-none border-b-2 border-black placeholder-transparent focus:border-blue-500"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email" className="absolute left-0 top-0 text-lg text-black transition-all duration-150  peer-placeholder-shown:top-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-red-500 peer-focus:text-lg">
                      Email
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="peer mt-1 p-2 w-full outline-none border-b-2 border-black placeholder-transparent focus:border-blue-500"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name" className="absolute left-0 top-0 text-lg text-black transition-all duration-150  peer-placeholder-shown:top-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-red-500 peer-focus:text-lg">
                      Phone
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      className="peer mt-1 p-2 w-full outline-none border-b-2 border-black placeholder-transparent focus:border-blue-500"
                      placeholder="Your Subject"
                    />
                    <label htmlFor="subject" className="absolute left-0 top-0 text-lg text-black transition-all duration-150  peer-placeholder-shown:top-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-red-500 peer-focus:text-lg">
                      Subject
                    </label>
                  </div>
                  <div className="col-span-2 relative my-8">
                    <input
                      type="text"
                      id="message"
                      className="peer mt-1 p-2 w-full outline-none border-b-2 border-black placeholder-transparent focus:border-blue-500"
                      placeholder="Your Subject"
                    />
                    <label htmlFor="message" className="absolute left-0 top-0 text-lg text-black transition-all duration-150  peer-placeholder-shown:top-0 peer-placeholder-shown:text-black peer-placeholder-shown:text-lg peer-focus:-top-5 peer-focus:text-red-500 peer-focus:text-lg">
                      Message
                    </label>
                  </div>
                  <div>
                  </div>
                  <div className="flex items-end justify-end">
                  <button
                    type="submit"
                    className="relative px-4 py-3 text-black text-lg border rounded border-blue-200 font-bold 
             hover:-translate-y-1 transition-all duration-300 ease-in-out 
             hover:shadow-[inset_-7.5em_0_0_0_theme(colors.blue.700),inset_7.5em_0_0_0_theme(colors.blue.700)] 
             focus:shadow-[inset_-7.5em_0_0_0_theme(colors.blue.700),inset_7.5em_0_0_0_theme(colors.blue.700)] 
             hover:text-white 
             inline-block"
                  >
                    Send Message
                  </button>
                  </div>
                </div>
             </form>     
            </div>
            <div className="w-1/2 mt-16">
              <iframe
                src="https://www.google.com/maps?q=24.871416570262873,67.09184371090852&hl=en&z=15&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="eager"
                className=""
              />
              <div className="grid grid-cols-3 mt-10">
                <div>
                <div className="rounded-full bg-black px-2 py-2 w-fit">
                <MapPin color="white"/>
                </div>
                  <h1 className="font-bold text-xl">Address</h1>
                  <p className="text-lg">9th Mile Karsaz, Main Shahrah-e-Faisal, Karachi-75350, Pakistan</p>
                </div>
                <div>
                <div className="rounded-full bg-black px-2 py-2 w-fit">
                <Phone color="white"/>
                </div>
                  <h1 className="font-bold text-xl">Phone</h1>
                  <p className="text-lg">(+92) 021 111 597 200</p>
                </div>
                <div>
                <div className="rounded-full bg-black px-2 py-2 w-fit">
                <Mail color="white"/>
                </div>
                  <h1 className="font-bold text-xl">Email</h1>
                  <p className="text-lg">info@kwsc.gos.pk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}