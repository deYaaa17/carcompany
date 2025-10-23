import React from "react";

const SidePanel = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-end md:items-stretch items-end z-50">
      <div
        className="bg-white w-80 md:w-96 h-full md:h-full p-6 relative rounded-t-2xl md:rounded-none shadow-lg 
                   animate-slideInRight md:animate-slideInRight md:bottom-auto bottom-0"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default SidePanel;
