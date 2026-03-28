'use client';

import { useState } from 'react';

const environments = ['Warehouse', 'Outdoor Field', 'Kitchen', 'Factory Floor', 'Mars Surface'];

const defaultCode = `# SensorGrid Robot Controller
import sensorgrid as sg

robot = sg.Robot("my-bot-01")
robot.connect()

# Read all sensors
readings = robot.sensors.read_all()
print(f"Temperature: {readings.temp}°C")
print(f"Humidity: {readings.humidity}%")
print(f"Distance: {readings.lidar.front}m")

# Move forward if path is clear
if readings.lidar.front > 0.5:
    robot.move(speed=0.3, direction="forward")
else:
    robot.stop()
    robot.alert("Obstacle detected!")
`;

const sensorReadouts = [
  { label: 'Temperature', value: '23.4°C', status: 'normal' },
  { label: 'Humidity', value: '61%', status: 'normal' },
  { label: 'LiDAR Front', value: '2.34m', status: 'normal' },
  { label: 'LiDAR Left', value: '0.82m', status: 'warning' },
  { label: 'LiDAR Right', value: '1.56m', status: 'normal' },
  { label: 'IMU Accel X', value: '0.02g', status: 'normal' },
  { label: 'IMU Accel Y', value: '-0.01g', status: 'normal' },
  { label: 'Battery', value: '78%', status: 'normal' },
  { label: 'Motor Temp', value: '42°C', status: 'warning' },
  { label: 'Gas (CO2)', value: '412 ppm', status: 'normal' },
];

const statusColor: Record<string, string> = {
  normal: 'text-emerald',
  warning: 'text-amber',
  critical: 'text-red',
};

export default function SimulatorPage() {
  const [env, setEnv] = useState('Warehouse');
  const [code, setCode] = useState(defaultCode);
  const [running, setRunning] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Robot Simulator</h1>
      <p className="mt-2 text-slate-400">Code, test, and visualize robot behavior in a virtual sandbox.</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="text-sm text-slate-400">Environment:</span>
        {environments.map((e) => (
          <button
            key={e}
            onClick={() => setEnv(e)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              env === e ? 'bg-cyan text-background' : 'border border-slate-600 text-slate-400 hover:border-cyan hover:text-cyan'
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Code Editor */}
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden">
          <div className="flex items-center justify-between border-b border-slate-700 px-4 py-2">
            <span className="text-sm font-medium text-slate-300">controller.py</span>
            <button
              onClick={() => setRunning(!running)}
              className={`rounded-md px-4 py-1 text-xs font-semibold transition ${
                running ? 'bg-red text-white' : 'bg-emerald text-white'
              }`}
            >
              {running ? 'Stop' : 'Run'}
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 bg-background p-4 font-mono text-sm text-emerald leading-relaxed resize-none focus:outline-none"
            spellCheck={false}
          />
        </div>

        {/* Environment Preview */}
        <div className="rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden">
          <div className="border-b border-slate-700 px-4 py-2">
            <span className="text-sm font-medium text-slate-300">Virtual Environment — {env}</span>
          </div>
          <div className="flex h-80 items-center justify-center bg-gradient-to-br from-slate-800 via-background to-cyan/5">
            <div className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-gradient-to-br from-cyan/30 to-blue-600/30 flex items-center justify-center">
                <svg className="h-10 w-10 text-cyan" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 004.5 8.25v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <p className="text-sm text-slate-500">{running ? 'Simulation running...' : 'Click Run to start simulation'}</p>
              {running && (
                <div className="mt-2 flex items-center justify-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald animate-pulse" />
                  <span className="text-xs text-emerald">Active</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sensor Readouts */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-white">Sensor Readouts</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sensorReadouts.map((s) => (
            <div key={s.label} className="rounded-lg border border-slate-700 bg-slate-800/50 p-3">
              <div className="text-xs text-slate-500">{s.label}</div>
              <div className={`mt-1 text-lg font-mono font-bold ${statusColor[s.status]}`}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
