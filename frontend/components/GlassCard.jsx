"use client";

import { motion } from "framer-motion";

export default function GlassCard({ title, value }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -6
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18
      }}
      className="
        relative
        w-48
        p-6
        rounded-3xl
        text-white
        overflow-hidden
        border border-white/10
        backdrop-blur-2xl
        bg-white/5
      "
    >
      {/* Glow Layer */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        opacity-60
      " />

      {/* Hover Glow Burst */}
      <div className="
        absolute
        inset-0
        opacity-0
        hover:opacity-100
        transition
        duration-300
        bg-cyan-400/10
        blur-2xl
      " />

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs tracking-widest text-gray-400 uppercase">
          {title}
        </p>

        <h2 className="text-3xl font-bold mt-3 tracking-tight">
          {value}
        </h2>
      </div>
    </motion.div>
  );
}
