"use client";

import { motion } from "framer-motion";

export default function DashboardCard({ title, value, trend }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      className="
        relative
        p-6
        rounded-3xl
        bg-white/5
        border border-white/10
        backdrop-blur-2xl
        overflow-hidden
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-50" />

      <div className="relative z-10">
        <p className="text-xs text-gray-400 tracking-widest uppercase">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-3">
          {value}
        </h3>

        <p className="text-sm mt-2 text-cyan-300">
          {trend}
        </p>
      </div>
    </motion.div>
  );
}
