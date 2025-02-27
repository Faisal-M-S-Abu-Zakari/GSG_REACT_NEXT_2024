import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-10 text-center w-full max-w-md">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Oops! Task Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          The task you're looking for could not be found. It might have been
          removed or never existed.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default notfound;
