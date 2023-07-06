import React from 'react';

export default function ResultAnalysisLayout() {
  return (
    <div className="grid gap-4 mt-2">
      {/* Allround Stats */}
      <div class="relative w-64 h-64 bg-gray-200 rounded-md">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
          {/* Use JavaScript to change the text value of this element */}
          <span id="number" class="text-blue-500">
            100
          </span>
        </div>
      </div>

      {/* BarGraph */}
    </div>
  );
}
