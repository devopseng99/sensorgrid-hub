'use client';

import { useState } from 'react';

const sidebarItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'telemetry', label: 'Telemetry' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'firmware', label: 'Firmware' },
  { id: 'maintenance', label: 'Maintenance' },
];

const fleetStats = [
  { label: 'Active Robots', value: '47', change: '+3', up: true },
  { label: 'Sensors Online', value: '312', change: '+12', up: true },
  { label: 'Alerts Today', value: '8', change: '-2', up: false },
  { label: 'Data Ingested', value: '1.2 TB', change: '+180 GB', up: true },
];

const robots = [
  { name: 'AGR-001', type: 'AgroSense', status: 'Online', battery: 87, firmware: 'v3.2.1', sensors: 24, lastSeen: '2s ago' },
  { name: 'WRH-014', type: 'PalletBot', status: 'Online', battery: 62, firmware: 'v2.8.0', sensors: 28, lastSeen: '5s ago' },
  { name: 'HOM-003', type: 'HomeBot', status: 'Online', battery: 94, firmware: 'v4.1.0', sensors: 8, lastSeen: '1s ago' },
  { name: 'EDU-007', type: 'EduBot', status: 'Charging', battery: 23, firmware: 'v1.5.2', sensors: 6, lastSeen: '3m ago' },
  { name: 'INS-002', type: 'Inspector', status: 'Offline', battery: 0, firmware: 'v2.1.4', sensors: 22, lastSeen: '2h ago' },
  { name: 'AGR-009', type: 'DroneMapper', status: 'Online', battery: 71, firmware: 'v3.0.0', sensors: 20, lastSeen: '8s ago' },
];

const alerts = [
  { time: '14:23', robot: 'WRH-014', message: 'Motor temperature exceeds threshold (62°C)', severity: 'warning' },
  { time: '14:18', robot: 'AGR-001', message: 'Soil moisture sensor calibration drift detected', severity: 'info' },
  { time: '13:55', robot: 'INS-002', message: 'Connection lost — last heartbeat 2h ago', severity: 'critical' },
  { time: '13:42', robot: 'HOM-003', message: 'Firmware update v4.1.0 installed successfully', severity: 'info' },
  { time: '12:30', robot: 'EDU-007', message: 'Battery below 25% — auto-docking initiated', severity: 'warning' },
];

const maintenance = [
  { robot: 'WRH-014', task: 'Motor bearing replacement', due: 'Mar 30', priority: 'High' },
  { robot: 'AGR-001', task: 'LiDAR lens cleaning', due: 'Apr 2', priority: 'Medium' },
  { robot: 'INS-002', task: 'Full diagnostic + battery swap', due: 'Apr 5', priority: 'High' },
  { robot: 'HOM-003', task: 'Sensor recalibration', due: 'Apr 10', priority: 'Low' },
];

const statusColor: Record<string, string> = {
  Online: 'text-emerald',
  Charging: 'text-amber',
  Offline: 'text-red',
};

const severityColor: Record<string, string> = {
  critical: 'border-red/50 bg-red/5 text-red',
  warning: 'border-amber/50 bg-amber/5 text-amber',
  info: 'border-cyan/50 bg-cyan/5 text-cyan',
};

const priorityColor: Record<string, string> = {
  High: 'text-red',
  Medium: 'text-amber',
  Low: 'text-emerald',
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      {/* Sidebar */}
      <aside className="hidden w-56 shrink-0 border-r border-slate-700 bg-slate-800/30 p-4 lg:block">
        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Fleet Control</h3>
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full rounded-md px-3 py-2 text-left text-sm transition ${
                activeTab === item.id ? 'bg-cyan/10 text-cyan font-medium' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-white">Fleet Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">Real-time monitoring and management for your robot fleet.</p>

        {/* Stats */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fleetStats.map((s) => (
            <div key={s.label} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className={`text-xs font-medium ${s.up ? 'text-emerald' : 'text-red'}`}>{s.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Robot List */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Active Robots</h2>
          <div className="overflow-x-auto rounded-lg border border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-800/70 text-left text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Battery</th>
                  <th className="px-4 py-3">Firmware</th>
                  <th className="px-4 py-3">Sensors</th>
                  <th className="px-4 py-3">Last Seen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {robots.map((r) => (
                  <tr key={r.name} className="hover:bg-slate-800/30">
                    <td className="px-4 py-3 font-mono font-medium text-white">{r.name}</td>
                    <td className="px-4 py-3 text-slate-400">{r.type}</td>
                    <td className="px-4 py-3">
                      <span className={`font-medium ${statusColor[r.status]}`}>{r.status}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 rounded-full bg-slate-700">
                          <div
                            className={`h-1.5 rounded-full ${r.battery > 50 ? 'bg-emerald' : r.battery > 20 ? 'bg-amber' : 'bg-red'}`}
                            style={{ width: `${r.battery}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-400">{r.battery}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-400">{r.firmware}</td>
                    <td className="px-4 py-3 text-slate-400">{r.sensors}</td>
                    <td className="px-4 py-3 text-xs text-slate-500">{r.lastSeen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Recent Alerts</h2>
          <div className="space-y-2">
            {alerts.map((a, i) => (
              <div key={i} className={`rounded-lg border px-4 py-3 ${severityColor[a.severity]}`}>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-mono text-xs opacity-60">{a.time}</span>
                  <span className="font-semibold">{a.robot}</span>
                  <span className="opacity-80">{a.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-semibold text-white">Maintenance Schedule</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {maintenance.map((m, i) => (
              <div key={i} className="rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-medium text-white">{m.robot}</span>
                  <span className={`text-xs font-medium ${priorityColor[m.priority]}`}>{m.priority}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{m.task}</p>
                <p className="mt-1 text-xs text-slate-500">Due: {m.due}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
