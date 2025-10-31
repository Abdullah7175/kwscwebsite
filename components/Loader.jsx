"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="wrapper fixed inset-0 z-[60] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-8 border border-white/20">
            <img
              src="/kwsc logo.png"
              alt="KW&SC Logo"
              className="w-32 h-32 object-contain animate-pulse"
            />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Karachi Water & Sewerage Corporation</h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
