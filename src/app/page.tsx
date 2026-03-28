import Link from "next/link";

const stats = [
  { label: "Active Robots", value: "12,400+" },
  { label: "Sensor Models", value: "340+" },
  { label: "Data Points/sec", value: "2.1M" },
  { label: "Uptime", value: "99.97%" },
];

const features = [
  {
    title: "Sensor Dashboard",
    desc: "Real-time telemetry from every sensor in your fleet. Unified view with customizable panels.",
    icon: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7z",
  },
  {
    title: "Anomaly Alerts",
    desc: "ML-powered anomaly detection flags deviations before they become failures. Instant notifications.",
    icon: "M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z",
  },
  {
    title: "Data Export",
    desc: "Export sensor data in CSV, JSON, or Parquet. Schedule automated reports for compliance.",
    icon: "M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5v-2z",
  },
  {
    title: "Device Registry",
    desc: "Manage your entire robot fleet. Track firmware, location, health status, and maintenance history.",
    icon: "M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z",
  },
];

const builds = [
  { name: "AgriBot Fleet", robots: 48, sensors: 312, status: "Active" },
  { name: "Warehouse Patrol", robots: 24, sensors: 168, status: "Active" },
  { name: "Lab Assistant v3", robots: 6, sensors: 54, status: "Testing" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 via-background to-blue-900/20" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #06B6D4 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-4 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1 text-xs font-medium text-cyan">
              IoT Sensor Platform for Robotics
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Unified Sensor Data{" "}
              <span className="bg-gradient-to-r from-cyan to-cyan-light bg-clip-text text-transparent">
                for Robot Fleets
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-400">
              Monitor, analyze, and act on sensor data across your entire robot
              fleet. Anomaly detection, real-time alerts, and powerful data
              exports — all in one hub.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-lg bg-cyan px-6 py-3 font-semibold text-background transition hover:bg-cyan-light"
              >
                Start Building
              </Link>
              <Link
                href="/catalog"
                className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-300 transition hover:border-cyan hover:text-cyan"
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-700 bg-slate-800/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-cyan">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">
          Core Capabilities
        </h2>
        <p className="mb-12 text-center text-slate-400">
          Everything you need to manage sensor data at scale
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan/50 hover:bg-slate-800"
            >
              <div className="mb-4 inline-flex rounded-lg bg-cyan/10 p-3">
                <svg className="h-6 w-6 text-cyan" fill="currentColor" viewBox="0 0 24 24">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
              <p className="text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Builds */}
      <section className="border-t border-slate-700 bg-slate-800/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Featured Deployments
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {builds.map((b) => (
              <div
                key={b.name}
                className="rounded-xl border border-slate-700 bg-slate-800/60 p-6"
              >
                <div className="mb-4 h-32 rounded-lg bg-gradient-to-br from-cyan/20 to-blue-900/30" />
                <h3 className="text-lg font-semibold text-white">{b.name}</h3>
                <div className="mt-2 flex gap-4 text-sm text-slate-400">
                  <span>{b.robots} robots</span>
                  <span>{b.sensors} sensors</span>
                </div>
                <span
                  className={`mt-3 inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    b.status === "Active"
                      ? "bg-emerald/10 text-emerald"
                      : "bg-amber/10 text-amber"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-cyan/10 to-blue-900/20 border border-cyan/20 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold text-white">
            Ready to connect your fleet?
          </h2>
          <p className="mt-4 text-slate-400">
            Get started in minutes. No credit card required.
          </p>
          <Link
            href="/pricing"
            className="mt-8 inline-block rounded-lg bg-cyan px-8 py-3 font-semibold text-background transition hover:bg-cyan-light"
          >
            View Plans
          </Link>
        </div>
      </section>
    </div>
  );
}
