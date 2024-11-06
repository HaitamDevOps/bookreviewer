import React from 'react';

const ReviewStars = ({ score = "NA" }) => {
  const maxStars = 5;
  
  // Handle NA case
  if (score === "NA") {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: maxStars }, (_, index) => (
          <svg key={index} className="w-5 h-5 text-blue-100" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </svg>
        ))}
        <span className="ml-2 text-xs text-gray-400 opacity-60">UNDEFINED</span>
      </div>
    );
  }

  const roundedScore = Math.round(score * 2) / 2; // Round to nearest 0.5
  
  const renderStar = (index) => {
    if (roundedScore >= index + 1) {
      // Full star
      return (
        <svg key={index} className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    } else if (roundedScore >= index + 0.5) {
      // Half star
      return (
        <svg key={index} className="w-5 h-5" viewBox="0 0 24 24">
          <defs>
            <linearGradient id={`half-fill-${index}`}>
              <stop offset="50%" className="text-yellow-400" stopColor="currentColor" />
              <stop offset="50%" className="text-gray-300" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            fill={`url(#half-fill-${index})`}
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
          />
        </svg>
      );
    } else {
      // Empty star
      return (
        <svg key={index} className="w-5 h-5 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
      );
    }
  };

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }, (_, index) => renderStar(index))}
      {/* <span className="ml-2 text-xs text-gray-400 opacity-60">
        {roundedScore.toFixed(1)}
      </span> */}
    </div>
  );
};

export default ReviewStars;