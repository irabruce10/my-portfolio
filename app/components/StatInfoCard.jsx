import React from 'react';

export const StatInfoCard = ({ count, label }) => {
  return (
    <div>
      StatInfoCard
      <div className="flex items-center gap-4">
        <span className="text-4xl font-bold text-gray-800">{count}</span>
        <span className="text-sm font-medium text-gray-500">{label}</span>
      </div>
    </div>
  );
};
