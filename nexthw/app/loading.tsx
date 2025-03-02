import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        <span className="ml-4 text-lg text-gray-700">Loading...</span>
      </div>
    </div>
  );
};

export default loading;
