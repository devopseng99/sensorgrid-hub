import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/catalog" className="hover:text-cyan">Robot Catalog</Link></li>
              <li><Link href="/builder" className="hover:text-cyan">Builder</Link></li>
              <li><Link href="/simulator" className="hover:text-cyan">Simulator</Link></li>
              <li><Link href="/dashboard" className="hover:text-cyan">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">Resources</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/blog" className="hover:text-cyan">Blog & Tutorials</Link></li>
              <li><Link href="/faq" className="hover:text-cyan">FAQ</Link></li>
              <li><Link href="/pricing" className="hover:text-cyan">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-cyan">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-cyan">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">Community</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-cyan">Discord</a></li>
              <li><a href="#" className="hover:text-cyan">GitHub</a></li>
              <li><a href="#" className="hover:text-cyan">Forum</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} SensorGrid Hub. Unified sensor data for robot fleets.
        </div>
      </div>
    </footer>
  );
}
