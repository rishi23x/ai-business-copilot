"use client";

import { motion } from "framer-motion";
import DashboardCard from "./DashboardCard";

export default function DashboardSection() {
  return (
    <section className="relative py-28 px-6 bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-950/10" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-300 tracking-[0.3em] text-xs mb-4">
            AI COMMAND CENTER
          </p>

          <h2 className="text-5xl font-bold">
            Live Business Intelligence
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real-time system monitoring, predictive insights, and AI-driven operational decisions.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <DashboardCard
            title="Operational Efficiency"
            value="94.2%"
            trend="+3.1%"
          />

          <DashboardCard
            title="Active AI Signals"
            value="128"
            trend="+12"
          />

          <DashboardCard
            title="Risk Alerts"
            value="7"
            trend="-2"
          />

          <DashboardCard
            title="Revenue Flow"
            value="₹12.4L"
            trend="+8.4%"
          />

          <DashboardCard
            title="System Load"
            value="61%"
            trend="stable"
          />

          <DashboardCard
            title="Decision Latency"
            value="0.8s"
            trend="faster"
          />

        </div>
      </div>
    </section>
  );
}
