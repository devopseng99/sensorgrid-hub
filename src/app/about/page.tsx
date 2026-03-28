const team = [
  { name: 'Dr. Maya Chen', role: 'CEO & Co-founder', bio: 'Former robotics lead at NASA JPL. 15+ years in autonomous systems.' },
  { name: 'Alex Petrov', role: 'CTO', bio: 'Built distributed sensor networks for CERN. Expert in edge computing.' },
  { name: 'Priya Sharma', role: 'VP Engineering', bio: 'Scaled IoT platforms at Siemens to 1M+ devices. ROS core contributor.' },
  { name: 'James Okafor', role: 'Head of ML', bio: 'PhD in anomaly detection. Previously built predictive maintenance at Tesla.' },
  { name: 'Lin Wei', role: 'Lead Firmware Engineer', bio: 'Embedded systems veteran. Arduino library maintainer. 200+ PRs to ROS2.' },
  { name: 'Sarah Mitchell', role: 'Head of Design', bio: 'UX for complex systems. Previously designed SpaceX mission control interfaces.' },
];

const partners = [
  'ROS (Robot Operating System)',
  'Arduino',
  'Raspberry Pi Foundation',
  'NVIDIA Jetson',
  'STMicroelectronics',
  'Open Robotics',
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      {/* Hero */}
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-white">About SensorGrid Hub</h1>
        <p className="mt-4 text-lg text-slate-400">
          We believe every robot builder — from hobbyists to industrial engineers — deserves
          professional-grade sensor infrastructure. Our mission is to make sensor data collection,
          analysis, and anomaly detection accessible to everyone building the future of robotics.
        </p>
      </div>

      {/* Mission */}
      <section className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-8">
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="mt-3 text-slate-400">
            Democratize robot fleet management by providing an open, unified platform for sensor data.
            We handle the infrastructure so you can focus on building smarter machines.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Open protocols, no vendor lock-in
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Edge-first architecture for real-time response
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Privacy-respecting data handling
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-8">
          <h2 className="text-2xl font-bold text-white">R&D Lab</h2>
          <p className="mt-3 text-slate-400">
            Our research lab in San Francisco houses 200+ robots across 12 categories.
            We test every sensor integration in real-world conditions before release.
          </p>
          <div className="mt-6 h-40 rounded-lg bg-gradient-to-br from-cyan/15 via-blue-900/20 to-purple-900/10 flex items-center justify-center text-sm text-slate-500">
            [ R&D Lab Photo ]
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mt-16">
        <h2 className="mb-8 text-3xl font-bold text-white">Engineering Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
              <div className="mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-cyan/30 to-blue-600/30" />
              <h3 className="font-semibold text-white">{t.name}</h3>
              <p className="text-sm text-cyan">{t.role}</p>
              <p className="mt-2 text-sm text-slate-400">{t.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-bold text-white">Partnerships</h2>
        <p className="mb-6 text-slate-400">
          We work with the leading open-source and hardware communities to ensure broad compatibility.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p) => (
            <div key={p} className="flex items-center gap-3 rounded-lg border border-slate-700 bg-slate-800/50 px-5 py-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan/20 to-blue-600/20" />
              <span className="font-medium text-slate-300">{p}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source */}
      <section className="mt-16 rounded-2xl border border-cyan/20 bg-gradient-to-r from-cyan/5 to-transparent p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-white">Open-Source Commitment</h2>
        <p className="mt-3 text-slate-400">
          Our core sensor protocol, device drivers, and ROS2 integration packages are fully open-source
          under the Apache 2.0 license. We believe open ecosystems build better robots.
        </p>
        <div className="mt-4 flex gap-4">
          <span className="rounded-full bg-slate-800 px-4 py-1.5 text-sm text-cyan">1,200+ GitHub Stars</span>
          <span className="rounded-full bg-slate-800 px-4 py-1.5 text-sm text-cyan">340+ Contributors</span>
        </div>
      </section>
    </div>
  );
}
