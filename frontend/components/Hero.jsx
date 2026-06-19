"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import GlassCard from "./GlassCard";

const AIOrb = dynamic(() => import("./AIOrb"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-black to-black" />

      {/* Glow Orbs */}
      <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[120px] bottom-[-200px] right-[-200px]" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.3em] text-cyan-300 mb-6"
        >
          AI BUSINESS OPERATING SYSTEM
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold max-w-4xl leading-tight"
        >
          The Intelligence Layer
          <br />
          For Real-World Businesses
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg"
        >
          Connect operations, data, and decision systems into one unified AI control layer for industries.
        </motion.p>

        {/* 3D ORB (UNCHANGED) */}
        <div className="mt-12 w-[520px] h-[520px]">
          <AIOrb />
        </div>

        {/* Glass Metrics */}
        <div className="mt-12 flex gap-5 flex-wrap justify-center">
          <GlassCard title="System Efficiency" value="94%" />
          <GlassCard title="Active Signals" value="128" />
          <GlassCard title="AI Decisions" value="Realtime" />
        </div>

        {/* CTA */}
        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-lg hover:scale-105 transition">
            Enter Dashboard
          </button>

          <button className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition">
            View Architecture
          </button>
        </div>

      </div>
    </section>
  );
}
