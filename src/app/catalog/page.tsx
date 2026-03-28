'use client';

import { useState } from 'react';

const categories = ['All', 'Home', 'Industrial', 'Educational', 'Agricultural'];

const robots = [
  { name: 'HomeBot Pro', category: 'Home', difficulty: 'Beginner', price: '$299', sensors: 8, desc: 'Smart home assistant with environmental monitoring, voice control, and patrol capabilities.' },
  { name: 'AgroSense 4x4', category: 'Agricultural', difficulty: 'Intermediate', price: '$1,499', sensors: 24, desc: 'Autonomous crop monitoring rover with soil, humidity, and multispectral sensors.' },
  { name: 'EduBot Starter', category: 'Educational', difficulty: 'Beginner', price: '$149', sensors: 6, desc: 'Perfect STEM kit for learning robotics. Programmable in Python and Blockly.' },
  { name: 'WeldMaster 6-Axis', category: 'Industrial', difficulty: 'Advanced', price: '$12,500', sensors: 32, desc: 'Industrial welding arm with thermal imaging, proximity, and force-torque sensors.' },
  { name: 'CleanSweep Ultra', category: 'Home', difficulty: 'Beginner', price: '$449', sensors: 12, desc: 'Advanced floor cleaning robot with LiDAR, cliff, and dirt-detection sensors.' },
  { name: 'GreenHouse Guardian', category: 'Agricultural', difficulty: 'Intermediate', price: '$899', sensors: 18, desc: 'Greenhouse monitoring system with climate, CO2, light, and irrigation sensors.' },
  { name: 'RoboArm EDU', category: 'Educational', difficulty: 'Intermediate', price: '$349', sensors: 10, desc: '5-DOF robotic arm for learning kinematics, pick-and-place, and computer vision.' },
  { name: 'PalletBot X1', category: 'Industrial', difficulty: 'Advanced', price: '$8,900', sensors: 28, desc: 'Autonomous pallet mover with 3D vision, weight sensors, and fleet coordination.' },
  { name: 'PetPal Companion', category: 'Home', difficulty: 'Beginner', price: '$199', sensors: 5, desc: 'Interactive pet companion robot with motion tracking and treat dispenser.' },
  { name: 'DroneMapper Pro', category: 'Agricultural', difficulty: 'Advanced', price: '$3,200', sensors: 20, desc: 'Aerial surveying drone with RTK GPS, multispectral camera, and wind sensors.' },
  { name: 'CodeBot Mini', category: 'Educational', difficulty: 'Beginner', price: '$79', sensors: 4, desc: 'Pocket-sized coding robot. Learn algorithms through physical movement puzzles.' },
  { name: 'Inspector Crawler', category: 'Industrial', difficulty: 'Intermediate', price: '$5,600', sensors: 22, desc: 'Pipe inspection crawler with ultrasonic thickness, gas detection, and HD camera.' },
];

const difficultyColor: Record<string, string> = {
  Beginner: 'bg-emerald/10 text-emerald',
  Intermediate: 'bg-amber/10 text-amber',
  Advanced: 'bg-red/10 text-red',
};

export default function CatalogPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? robots : robots.filter((r) => r.category === active);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Robot Catalog</h1>
      <p className="mt-2 text-slate-400">Browse robot kits by type — from home assistants to industrial arms.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active === cat
                ? 'bg-cyan text-background'
                : 'border border-slate-600 text-slate-400 hover:border-cyan hover:text-cyan'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((robot) => (
          <div
            key={robot.name}
            className="group rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan/50"
          >
            <div className="mb-4 h-36 rounded-lg bg-gradient-to-br from-cyan/20 via-blue-900/20 to-purple-900/10" />
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{robot.name}</h3>
              <span className="text-lg font-bold text-cyan">{robot.price}</span>
            </div>
            <p className="mb-3 text-sm text-slate-400">{robot.desc}</p>
            <div className="flex items-center gap-3">
              <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${difficultyColor[robot.difficulty]}`}>
                {robot.difficulty}
              </span>
              <span className="text-xs text-slate-500">{robot.sensors} sensors</span>
              <span className="text-xs text-slate-500">{robot.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
