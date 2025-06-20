import React, { useState } from "react";

const Counter = ({ label, min = 0, max = 99 }) => {
  const [count, setCount] = useState(min);

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > min) setCount(count - 1);
  };

  return (
    <div className="flex items-center justify-between w-full mb-4">
      <div className="flex-1">
        <p className="font-medium text-gray-700">{label}</p>
        <p className="text-sm text-gray-500">(Age 18-99)</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="text-blue-500 border border-blue-500 rounded-full p-2 text-lg"
        >
          -
        </button>
        <span className="text-lg font-semibold">{count}</span>
        <button
          onClick={increment}
          className="text-blue-500 border border-blue-500 rounded-full p-2 text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

const Dropdown1 = () => {
  return (
    <div className="w-full max-w-md mx-auto p-5">
      <div className="space-y-4">
        {/* Adult Counter */}
        <Counter label="Adult (Age 18-99)" min={1} max={10} />
        
        {/* Youth Counter */}
        <Counter label="Youth (Age 17 and younger)" min={0} max={10} />
      </div>
    </div>
  );
};

export default Dropdown1;
