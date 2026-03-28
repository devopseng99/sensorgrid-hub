import Link from 'next/link';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: '/mo',
    desc: 'Perfect for hobbyists and small projects.',
    features: [
      'Up to 5 robots',
      '50 sensors',
      '7-day data retention',
      'Email alerts',
      'CSV export',
      'Community support',
    ],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$149',
    period: '/mo',
    desc: 'For growing fleets and serious builders.',
    features: [
      'Up to 50 robots',
      '500 sensors',
      '90-day data retention',
      'SMS + Webhook alerts',
      'CSV, JSON, Parquet export',
      'Anomaly detection (ML)',
      'Priority support',
      'Custom dashboards',
    ],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large-scale industrial deployments.',
    features: [
      'Unlimited robots',
      'Unlimited sensors',
      'Unlimited retention',
      'All alert channels',
      'All export formats + API',
      'Advanced ML models',
      'Dedicated support engineer',
      'On-prem deployment option',
      'SLA guarantee (99.99%)',
      'SSO / SAML',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const bundles = [
  { name: 'Sensor Starter Pack', items: '8 mixed sensors + breakout board', price: '$89' },
  { name: 'Industrial Sensor Kit', items: '24 sensors + DIN-rail hub', price: '$449' },
  { name: 'Agricultural Pack', items: '16 soil/climate sensors + weatherproof enclosure', price: '$329' },
  { name: 'Education Bundle (10-pack)', items: '10x EduBot kits + curriculum license', price: '$1,290' },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Plans & Pricing</h1>
        <p className="mt-2 text-slate-400">Scale from prototype to production. Cancel anytime.</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-8 ${
              tier.highlight
                ? 'border-cyan bg-gradient-to-b from-cyan/5 to-transparent'
                : 'border-slate-700 bg-slate-800/30'
            }`}
          >
            {tier.highlight && (
              <div className="mb-4 inline-block rounded-full bg-cyan/10 px-3 py-0.5 text-xs font-semibold text-cyan">
                Most Popular
              </div>
            )}
            <h2 className="text-2xl font-bold text-white">{tier.name}</h2>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold text-cyan">{tier.price}</span>
              <span className="text-slate-500">{tier.period}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{tier.desc}</p>
            <ul className="mt-6 space-y-2">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className={`mt-8 block rounded-lg py-2.5 text-center font-semibold transition ${
                tier.highlight
                  ? 'bg-cyan text-background hover:bg-cyan-light'
                  : 'border border-slate-600 text-slate-300 hover:border-cyan hover:text-cyan'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* Bundles */}
      <div className="mt-20">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">Component Bundles</h2>
        <p className="mb-8 text-center text-slate-400">Pre-configured sensor packs at bulk pricing.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bundles.map((b) => (
            <div key={b.name} className="rounded-xl border border-slate-700 bg-slate-800/50 p-5">
              <div className="mb-3 h-20 rounded-lg bg-gradient-to-br from-cyan/10 to-blue-900/20" />
              <h3 className="font-semibold text-white">{b.name}</h3>
              <p className="mt-1 text-xs text-slate-400">{b.items}</p>
              <div className="mt-3 text-xl font-bold text-cyan">{b.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Firmware subscription */}
      <div className="mt-16 rounded-2xl border border-slate-700 bg-gradient-to-r from-cyan/5 to-transparent p-8 text-center sm:p-12">
        <h3 className="text-2xl font-bold text-white">Firmware Update Subscription</h3>
        <p className="mt-2 text-slate-400">
          Keep your fleet current with OTA firmware updates, security patches, and new sensor drivers.
        </p>
        <div className="mt-4 text-3xl font-bold text-cyan">
          $9<span className="text-base font-normal text-slate-500">/robot/mo</span>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-lg bg-cyan px-6 py-2.5 font-semibold text-background transition hover:bg-cyan-light"
        >
          Subscribe Now
        </Link>
      </div>
    </div>
  );
}
