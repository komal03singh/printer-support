import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      {/* Printer Illustration */}
      <div className="relative w-100 h-60">
        <img
          src="/error.png"
          alt="Not Found"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </div>

      {/* Text Section */}
      <h2 className="text-4xl font-bold mt-2">Page Not Found</h2>
      <p className="text-center max-w-md mt-3 text-gray-600">
        Looks like the page you&apos;re trying to print doesn&apos;t exist.  
        You can try again after some time 😅
      </p>

      {/* Back Home Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-black/80 hover:bg-[#080880] text-white rounded-full shadow-md transition-all duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

