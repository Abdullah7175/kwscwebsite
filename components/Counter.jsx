import React from "react";
import Count from "./ui/Count";

const counter_data = [
  {
    id: 1,
    title: "Water Connections",
    number: 1.2,
  },
  {
    id: 2,
    title: "Sewerage Connections",
    number: 0.8,
  },
  {
    id: 3,
    title: "Years of Service",
    number: 22,
  },
  {
    id: 4,
    title: "Water Treatment Plants",
    number: 12,
  },
];

const Counter = ({}) => {
  return (
    <>
      <div className="my-36 max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {counter_data.map((item, i) => (
            <div key={i} className="text-center">
              <div className="flex flex-col items-center">
                <div
                  className="text-8xl stroke"
                >
                  <div className="animate-count inline-block">
                    <Count number={item.number} add_style={true} />
                  </div>
                  {(i === 0 || i === 1) && <span className="text-8xl stroke">M</span>}
                </div>
                <p
                  className="text-3xl font-thin relative before:rounded-full before:bg-blue-100 before:h-14 before:w-14 before:absolute before:-top-2 before:-left-5 before:-z-10"              
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Counter;
