import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Process = [
  {
    id: "01",
    title: "Water Source Assessment",
    subTitle:
      "Identify and assess water sources to ensure sustainable supply for Karachi's growing population.",
    icon: "/icon/search01.svg",
  },
  {
    id: "02",
    title: "Infrastructure Development",
    subTitle:
      "Build and maintain water treatment plants, distribution networks, and sewerage systems.",
    icon: "/icon/user-icon.png",
  },
  {
    id: "03",
    title: "Quality Control",
    subTitle:
      "Implement rigorous water quality testing and monitoring systems to ensure safe drinking water.",
    icon: "/icon/clipboar02.svg",
  },
  {
    id: "04",
    title: "Service Delivery",
    subTitle:
      "Provide reliable water supply and efficient sewerage services to all areas of Karachi.",
    icon: "/icon/medal-star.svg",
  },
];

const WorkFlow = () => {
  return (
    <section className="pt-24 bg-blue-700 text-white">
      <div className="max-w-[85%] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <Fade direction="down" triggerOnce duration={1000}>
            <div className="inline-flex items-center gap-2 bg-transparent text-white px-4 py-1 rounded-full shadow-md">
              <Image
                src="/icon/process-icon.svg"
                width={24}
                height={24}
                alt="Process Icon"
              />
              Our working process
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={1200}>
            <h2 className="text-4xl font-bold mt-4">
              Our Water Management Process
            </h2>
          </Fade>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <Fade direction="left" triggerOnce duration={600}>
          <div className="sticky space-y-8 pb-[200px]">
            {Process.map((process, index) => (
              <div
                key={index}
                className="bg-white text-gray-900 border border-blue-600 rounded-[20px] shadow-lg p-[40px_30px] max-w-[450px] min-h-[236px] sticky"
                style={{
                  top: `calc(var(--navbar-height) + ${index * 60}px)`,
                  zIndex: index + 1,
                }}
              >
                <div className="mb-5 relative flex justify-between items-center">
                  <Image
                    src={process.icon}
                    width={41}
                    height={41}
                    alt={process.title}
                  />
                  <div className="flex items-center justify-center  top-[30px] right-[30px] w-[48px] h-[48px] bg-[rgba(15,83,220,0.1)] text-[#0c111d] text-[24px] font-medium rounded-full">
                    {process.id}
                  </div>
                </div>
                <h4 className="text-2xl font-semibold">{process.title}</h4>
                <p className="text-gray-700 mt-3">{process.subTitle}</p>
              </div>
            ))}
          </div>
          </Fade>
          <div className="flex sticky top-[160px] mb-24">
            <Fade direction="right" triggerOnce duration={600}>
              <div className="relative w-full max-w-lg ml-auto">
                <Image
                  src="/illustration.png"
                  alt="Illustration"
                  width={600}
                  height={600}
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlow;
