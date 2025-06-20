// App.jsx
import React from "react";
import { FaCar } from "react-icons/fa";
// 1) Dummy data array matching your example

export default function ItineraryTimeline({dummyItems}) {
    console.log(dummyItems)
    return (
      <ul className="relative md:ml-12">
         <h2 className="font-bold text-2xl mb-5">Itinerary</h2>
        {dummyItems.map((item, idx) => {
          const isLast = idx === dummyItems.length - 1;
          const isColoredDot = item.type === "in-activity";
  
          return (
            <li key={idx} className="relative pb-8 pl-8">
              
              {!isLast && (
                <div
                  className={`absolute top-0 bottom-0 border-r-2 ${
                    item.subitems
                      ? "border-dashed -left-[1px]"
                      : "border-solid border-r-8 -left-[4px]"
                  } border-[#f1582b]`}
                />
              )}
  
              {/* — dot + icon */}
              <div
                className={`absolute -left-4 top-0 w-8 h-8 flex items-center justify-center rounded-full ${
                  isColoredDot
                    ? "bg-[#f1582b]"
                    : "bg-white border-2 border-[#f1582b]"
                }`}
              >
               
                {React.cloneElement(<FaCar/>, {
                  className: `${isColoredDot ? "text-white" : "text-[#f1582b]"} w-4 h-4`
                })}
              </div>
  
              {/* — main info */}
              <div className="flex flex-col gap-1">
                <h3 className={`text-sm font-semibold ${
                    item.type === "in-transit" ? "text-[#f1582b]" : "text-gray-900"
                  }`}>
                  {item.title}
                </h3>
                {item.subtitle && <p className="text-xs text-gray-500">{item.subtitle}</p>}
                {item.duration && <p className="text-xs text-gray-500">{item.duration}</p>}
                {item.meta && <p className="text-xs text-gray-400">{item.meta}</p>}
              </div>
  
              {/* — nested sub‑items */}
              {item.subitems && (
                <ul className="mt-4 pl-8">
                  {item.subitems.map((sub, j) => (
                    <li key={j} className="relative mb-6 pl-6">
                      <div className="absolute -left-6 top-0 w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded-full">
                        {/* always orange on white bg here */}
                        {React.cloneElement(sub.icon, {
                          className: "text-[#f1582b] w-3 h-3"
                        })}
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="text-sm font-medium">{sub.title}</h4>
                        <p className="text-xs text-gray-500">{sub.subtitle}</p>
                        {sub.meta && <p className="text-xs text-gray-400">{sub.meta}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    );
  }