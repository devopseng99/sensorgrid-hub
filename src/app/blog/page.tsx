const posts = [
  {
    category: 'Tutorial',
    title: 'Building Your First Sensor Network with ESP32',
    excerpt: 'Step-by-step guide to connecting 8 sensors to an ESP32 and streaming data to SensorGrid Hub.',
    date: 'Mar 25, 2026',
    readTime: '12 min',
  },
  {
    category: 'Showcase',
    title: 'How FarmTech Co. Monitors 200 Acres with 48 AgriSense Bots',
    excerpt: 'Case study: real-time soil moisture, pest detection, and automated irrigation across a commercial farm.',
    date: 'Mar 22, 2026',
    readTime: '8 min',
  },
  {
    category: 'Firmware',
    title: 'Firmware v3.2.1 Changelog — Faster LiDAR Processing',
    excerpt: 'New LiDAR driver reduces latency by 40%. Plus: improved BLE mesh stability and new gas sensor support.',
    date: 'Mar 20, 2026',
    readTime: '4 min',
  },
  {
    category: 'News',
    title: 'SensorGrid Hub Partners with Arduino for Edu-Robotics Push',
    excerpt: 'New educational partnership brings plug-and-play sensor kits to 500+ schools worldwide.',
    date: 'Mar 18, 2026',
    readTime: '5 min',
  },
  {
    category: 'Tutorial',
    title: 'Anomaly Detection 101: Catching Sensor Drift Before Failure',
    excerpt: 'Learn how our ML pipeline identifies sensor calibration drift and predicts maintenance windows.',
    date: 'Mar 15, 2026',
    readTime: '15 min',
  },
  {
    category: 'Showcase',
    title: 'Warehouse Automation: PalletBot Fleet Reduces Downtime by 60%',
    excerpt: 'How a logistics company used SensorGrid to predict motor failures and optimize fleet routing.',
    date: 'Mar 12, 2026',
    readTime: '10 min',
  },
  {
    category: 'Tutorial',
    title: 'Exporting Sensor Data to Parquet for ML Pipelines',
    excerpt: 'Automate data exports from SensorGrid Hub directly into your Jupyter/Spark workflows.',
    date: 'Mar 10, 2026',
    readTime: '7 min',
  },
  {
    category: 'Firmware',
    title: 'Firmware v3.1.0 — Jetson Nano Support & New IMU Driver',
    excerpt: 'Full Jetson Nano integration, 9-axis IMU support, and reduced power consumption in sleep mode.',
    date: 'Mar 5, 2026',
    readTime: '3 min',
  },
  {
    category: 'News',
    title: 'ROS2 Humble Integration Now Generally Available',
    excerpt: 'Our ROS2 packages are now stable. Publish and subscribe to sensor topics natively.',
    date: 'Mar 1, 2026',
    readTime: '4 min',
  },
];

const categoryColor: Record<string, string> = {
  Tutorial: 'bg-cyan/10 text-cyan',
  Showcase: 'bg-emerald/10 text-emerald',
  Firmware: 'bg-amber/10 text-amber',
  News: 'bg-purple-500/10 text-purple-400',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold text-white">Blog & Tutorials</h1>
      <p className="mt-2 text-slate-400">
        Build guides, project showcases, firmware updates, and robotics news.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <article
            key={i}
            className="group rounded-xl border border-slate-700 bg-slate-800/50 p-6 transition hover:border-cyan/50"
          >
            <div className="mb-4 h-36 rounded-lg bg-gradient-to-br from-cyan/10 via-blue-900/15 to-slate-800" />
            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${categoryColor[post.category]}`}>
              {post.category}
            </span>
            <h2 className="mt-3 text-lg font-semibold text-white group-hover:text-cyan transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400 line-clamp-2">{post.excerpt}</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span>{post.date}</span>
              <span>&middot;</span>
              <span>{post.readTime} read</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
