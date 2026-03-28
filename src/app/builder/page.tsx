'use client';

import { useState } from 'react';

const bases = [
  { id: 'wheeled', name: 'Wheeled Chassis', price: 120 },
  { id: 'tracked', name: 'Tracked Platform', price: 180 },
  { id: 'legged', name: 'Quadruped Frame', price: 350 },
  { id: 'aerial', name: 'Drone Frame', price: 220 },
];

const sensorOptions = [
  { id: 'lidar', name: 'LiDAR Module', price: 89 },
  { id: 'camera', name: 'RGB-D Camera', price: 65 },
  { id: 'imu', name: 'IMU 9-Axis', price: 25 },
  { id: 'ultrasonic', name: 'Ultrasonic Array', price: 35 },
  { id: 'temp', name: 'Temp/Humidity', price: 12 },
  { id: 'gas', name: 'Gas Sensor', price: 45 },
  { id: 'force', name: 'Force-Torque', price: 120 },
  { id: 'gps', name: 'RTK GPS', price: 95 },
];

const actuators = [
  { id: 'servo', name: 'Servo Pack (x4)', price: 60 },
  { id: 'stepper', name: 'Stepper Motors (x2)', price: 85 },
  { id: 'gripper', name: 'Robotic Gripper', price: 150 },
  { id: 'propeller', name: 'Brushless Props (x4)', price: 110 },
];

const brains = [
  { id: 'arduino', name: 'Arduino Mega', price: 45 },
  { id: 'esp32', name: 'ESP32-S3', price: 15 },
  { id: 'rpi', name: 'Raspberry Pi 5', price: 80 },
  { id: 'jetson', name: 'Jetson Nano', price: 199 },
];

export default function BuilderPage() {
  const [base, setBase] = useState('wheeled');
  const [sensors, setSensors] = useState<string[]>(['imu']);
  const [actuator, setActuator] = useState('servo');
  const [brain, setBrain] = useState('rpi');

  const toggleSensor = (id: string) => {
    setSensors((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));
  };

  const baseItem = bases.find((b) => b.id === base)!;
  const sensorItems = sensorOptions.filter((s) => sensors.includes(s.id));
  const actuatorItem = actuators.find((a) => a.id === actuator)!;
  const brainItem = brains.find((b) => b.id === brain)!;
  const total = baseItem.price + sensorItems.reduce((s, i) => s + i.price, 0) + actuatorItem.price + brainItem.price;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Robot Builder</h1>
      <p className="mt-2 text-slate-400">Configure your custom robot — select components and generate a BOM.</p>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Base */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">1. Select Base</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {bases.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBase(b.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    base === b.id ? 'border-cyan bg-cyan/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="font-medium text-white">{b.name}</div>
                  <div className="text-sm text-cyan">${b.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Sensors */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">2. Add Sensors</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {sensorOptions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => toggleSensor(s.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    sensors.includes(s.id) ? 'border-cyan bg-cyan/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="font-medium text-white">{s.name}</div>
                  <div className="text-sm text-cyan">${s.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Actuators */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">3. Choose Actuators</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {actuators.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setActuator(a.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    actuator === a.id ? 'border-cyan bg-cyan/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="font-medium text-white">{a.name}</div>
                  <div className="text-sm text-cyan">${a.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Brain */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-white">4. Select Brain (MCU/SBC)</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {brains.map((b) => (
                <button
                  key={b.id}
                  onClick={() => setBrain(b.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    brain === b.id ? 'border-cyan bg-cyan/10' : 'border-slate-700 bg-slate-800/50 hover:border-slate-600'
                  }`}
                >
                  <div className="font-medium text-white">{b.name}</div>
                  <div className="text-sm text-cyan">${b.price}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar — Preview + BOM */}
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">3D Preview</h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-cyan/10 via-blue-900/20 to-purple-900/10 text-sm text-slate-500">
              [ 3D Preview Placeholder ]
            </div>
          </div>

          <div className="rounded-xl border border-slate-700 bg-slate-800/50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Bill of Materials</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-slate-300">
                <span>{baseItem.name}</span><span className="text-cyan">${baseItem.price}</span>
              </li>
              {sensorItems.map((s) => (
                <li key={s.id} className="flex justify-between text-slate-300">
                  <span>{s.name}</span><span className="text-cyan">${s.price}</span>
                </li>
              ))}
              <li className="flex justify-between text-slate-300">
                <span>{actuatorItem.name}</span><span className="text-cyan">${actuatorItem.price}</span>
              </li>
              <li className="flex justify-between text-slate-300">
                <span>{brainItem.name}</span><span className="text-cyan">${brainItem.price}</span>
              </li>
            </ul>
            <div className="mt-4 border-t border-slate-700 pt-4 flex justify-between text-lg font-bold">
              <span className="text-white">Total</span>
              <span className="text-cyan">${total}</span>
            </div>
            <button className="mt-4 w-full rounded-lg bg-cyan py-2.5 font-semibold text-background transition hover:bg-cyan-light">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
