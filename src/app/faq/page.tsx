'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How do I assemble my robot kit?',
    a: 'Every kit ships with illustrated step-by-step instructions and video tutorials. Most kits can be assembled in 1-3 hours with just a screwdriver. Our Builder page also has interactive assembly guides.',
  },
  {
    q: 'What programming languages are supported?',
    a: 'SensorGrid Hub supports Python, C/C++ (Arduino), MicroPython, and ROS2 (C++/Python). Our simulator includes a browser-based Python editor with syntax highlighting and auto-complete.',
  },
  {
    q: 'Which sensors are compatible?',
    a: 'We support 340+ sensor models across temperature, humidity, LiDAR, ultrasonic, IMU, gas, force-torque, GPS, camera, and more. Any I2C, SPI, or UART sensor can be integrated via our universal driver framework.',
  },
  {
    q: 'Is there a warranty on hardware?',
    a: 'All kits come with a 2-year manufacturer warranty covering defects. Sensors and actuators carry a 1-year warranty. Extended warranty plans are available for Enterprise customers.',
  },
  {
    q: 'How does anomaly detection work?',
    a: 'Our ML pipeline continuously monitors sensor data streams for statistical anomalies — sudden spikes, drift, flatlines, or correlation breaks. When detected, alerts are sent via email, SMS, or webhook within seconds.',
  },
  {
    q: 'Can I export my data?',
    a: 'Yes! Export in CSV, JSON, or Parquet format. Pro and Enterprise plans support automated scheduled exports and direct API access for integration with your data pipelines.',
  },
  {
    q: 'What shipping options are available?',
    a: 'We ship worldwide. Standard shipping (5-10 days) is free for orders over $200. Express (2-3 days) and overnight options are available at checkout. Enterprise bulk orders get dedicated logistics support.',
  },
  {
    q: 'Is the platform safe for educational use?',
    a: 'Absolutely. Our EduBot kits are designed for ages 12+ and comply with CPSIA safety standards. All components use low-voltage (5V/3.3V) systems. We provide teacher guides and classroom safety checklists.',
  },
  {
    q: 'Can I self-host SensorGrid Hub?',
    a: 'Enterprise customers can deploy SensorGrid Hub on-premises or in their own cloud. We provide Docker images, Helm charts, and deployment guides for Kubernetes clusters.',
  },
  {
    q: 'How do firmware updates work?',
    a: 'Firmware updates are delivered over-the-air (OTA) via WiFi or BLE. You can schedule updates for maintenance windows, roll them out gradually across your fleet, and roll back if needed.',
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Frequently Asked Questions</h1>
      <p className="mt-2 text-slate-400">Everything you need to know about SensorGrid Hub.</p>

      <div className="mt-10 space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="font-medium text-white pr-4">{faq.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-cyan transition-transform ${open === i ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="border-t border-slate-700 px-6 py-4 text-sm text-slate-400">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
