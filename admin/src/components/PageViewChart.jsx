import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PageViewChart = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("year"); // default to year

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`http://localhost:5000/bookings/monthly-stats?period=${filter}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, [filter]); // refetch when filter changes

  if (loading) return <div>Loading chart...</div>;
  if (error) return <div>Error: {error}</div>;

  // Determine xAxis key and yAxis domain if needed based on filter
  // For example, backend returns data with { name: "Jan", value: 10 } or { name: "Week 1", value: 5 }
  let xAxisLabel = "name";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 relative z-10 h-[440px]">
      <div className="flex justify-end mb-4">
        <select
          className="border border-[#f0582a] py-[5px] px-[5px] rounded-[4px] text-[#f0582a] ml-auto focus:outline-0"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="year">This Year</option>
          <option value="month">This Month</option>
          <option value="week">This Week</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={360}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPageView" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity={0.6} />
              <stop offset="100%" stopColor="#f97316" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <XAxis dataKey={xAxisLabel} />
          <YAxis domain={[0, "auto"]} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Bookings"
            stroke="#f97316"
            strokeWidth={5}
            fill="url(#colorPageView)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PageViewChart;
