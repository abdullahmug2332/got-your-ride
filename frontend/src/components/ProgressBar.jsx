// App.jsx
import React from "react";
import Star from "./Star";

const reviewData = [
  { rating: 5.0, count: 28000 },
  { rating: 4.0, count:  7000 },
  { rating: 3.0, count:  1000 },
  { rating: 2.0, count:  500 },
  { rating: 1.0, count:  100 },
  // no lower‑star entries, so they simply don’t show
];

export default function ProgressBar() {
  const totalReviews = reviewData.reduce((sum, { count }) => sum + count, 0);
  const averageRating = "4.8"; // now matches the data

  return (
    <div className="w-4/5 px-4 mx-auto">
      <h1 className="font-bold text-2xl mb-5">Customer Reviews</h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12">
        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center w-full md:w-2/12">
          <h1 className="font-extrabold text-3xl md:text-4xl">
            {averageRating}
          </h1>
          <Star rating={parseFloat(averageRating)} />
          <p className="text-sm text-gray-500">
            {(totalReviews / 1000).toFixed(0)}K Ratings
          </p>
        </div>

        <div className="hidden md:block w-px h-40 bg-gray-300"></div>

        {/* Breakdown Bars */}
        <div className="w-full flex flex-col gap-3">
          {reviewData.map(({ rating, count }) => {
            const percent = (count / totalReviews) * 100;
            return (
              <div key={rating} className="flex items-center gap-3">
                <div className="flex-1 bg-gray-300 rounded-lg h-3 overflow-hidden">
                  <div
                    className="bg-[#f1582b] h-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className="flex-shrink-0 text-right min-w-[90px]">
                  <span className="font-bold text-sm mr-2">
                    {rating.toFixed(1)}
                  </span>
                  <span className="text-xs text-gray-600">
                    {(count / 1000).toFixed(0)}K Reviews
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
