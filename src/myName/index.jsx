import React from "react";

export default function MyName() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center min-h-screen bg-zinc-800">
      <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            My name is Umar
          </h5>
          <p className="text-gray-700 text-base mb-4">
            I am learning Development from Sir Arslan.
          </p>
        </div>
      </div>
    </div>
  );
}
