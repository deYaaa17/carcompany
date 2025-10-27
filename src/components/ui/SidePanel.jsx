// src/components/ui/SidePanel.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SidePanel({ onClose, children }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          isMobile ? "flex items-end justify-center" : "flex justify-end items-center"
        }`}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* ✅ Panel content */}
        <motion.div
          className={`bg-white shadow-lg relative p-6 ${
            isMobile
              ? "w-full rounded-t-2xl max-h-[80%] overflow-y-auto"
              : "w-80 h-full rounded-l-2xl"
          }`}
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          initial={isMobile ? { y: "100%" } : { x: "100%" }}
          animate={isMobile ? { y: 0 } : { x: 0 }}
          exit={isMobile ? { y: "100%" } : { x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Close button */}
          <button
            className="absolute top-3 right-4 text-gray-600 text-2xl font-bold"
            onClick={onClose}
          >
            ✖
          </button>

          <div className="mt-8">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SidePanel;
