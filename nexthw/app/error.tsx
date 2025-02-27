"use client";
import React from "react";

interface IProps {
  error: Error;
  reset: () => void;
}
const error = ({ error, reset }: IProps) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-10 text-center w-full max-w-md">
        <h1 className="text-4xl font-semibold text-red-600 mb-4">
          Something Went Wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-6">Oops! {error.message}</p>
        <p className="text-md text-gray-500 mb-6">
          Please try to reset the page or check back later. If the issue
          persists, feel free to contact support.
        </p>
        <button
          onClick={reset}
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors transform hover:scale-105"
        >
          Reset The Page
        </button>
      </div>
    </div>
  );
};

export default error;
