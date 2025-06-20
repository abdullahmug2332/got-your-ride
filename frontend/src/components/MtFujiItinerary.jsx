import { FaMapMarkerAlt, FaBus, FaUndo } from "react-icons/fa";
import React from "react";

const itinerary = [
  { title: "Mount Fuji", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Chureito Pagoda", time: "75 Minutes", icon: <FaBus /> },
  { title: "Lake Kawaguchiko", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Oshino Hakka", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Saiko Iyashi No Sato Nemba", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Oishi Park", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Fuji-Q Highland", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Mount Fuji", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
  { title: "Kitaguchi Hongu Fuji Sengen Jinja Shrine", time: "75 Minutes", icon: <FaMapMarkerAlt /> },
];

const ItineraryTimeline = () => {
  return (
    <div className="bg-white p-6 w-full max-w-xs mx-auto">
      <h2 className="text-orange-600 font-semibold text-lg mb-4">Mount Fuji</h2>

      {/* Top section - separate items */}
      <div className="relative mb-8">
        <div className="absolute -left-[5px] top-6 rounded-full w-6 h-6 bg-orange-500 flex items-center justify-center">
          <FaMapMarkerAlt className="text-white" />
        </div>
        <div className="ml-10">
          <p className="text-lg font-medium text-orange-600">Mount Fuji</p>
          <p className="text-xs text-gray-500 mt-1">75 Minutes</p>
        </div>
      </div>

      <div className="flex items-center gap-2 ml-10 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
        <p className="font-medium text-gray-700">Starting Location</p>
      </div>

      {/* Remaining itinerary */}
      <div className="relative">
        <div className="absolute left-5 top-20 rounded-xl bottom-0 w-1 bg-orange-500 z-0"></div>
        <ul className="space-y-6 z-10 relative">
          {itinerary.map((item, index) => (
            <li key={index} className="flex items-start gap-3 relative">
              {/* Dots between items */}
              <div className="absolute left-6 w-2 h-2 rounded-full bg-orange-500"></div>

              <div className="bg-white p-2 rounded-full text-orange-500">
                {item.icon}
              </div>

              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{item.title}</p>
                {item.time && <p className="text-xs text-gray-500 mt-1">{item.time}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItineraryTimeline;
