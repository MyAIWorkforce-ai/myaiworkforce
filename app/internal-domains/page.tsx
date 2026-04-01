import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domain Portfolio — Internal | MyAIWorkforce.ai',
  description: 'Internal domain portfolio overview with estimated sale values.',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
}

type Domain = {
  name: string
  valueLow: number
  valueHigh: number
  category: 'AI/Tech' | 'Trade/Local' | 'Personal/Family' | 'Other'
  buyerType: string
  status: 'list' | 'skip' | 'review'
  notes: string
}

const domains: Domain[] = [
  // Sorted by valueHigh desc
  {
    name: 'virtualassistant.com.au',
    valueLow: 15000,
    valueHigh: 25000,
    category: 'AI/Tech',
    buyerType: 'AI/VA platform companies, agencies',
    status: 'list',
    notes: 'Premium — generic keyword + .com.au. High demand.',
  },
  {
    name: 'aivirtualreceptionist.ai',
    valueLow: 4000,
    valueHigh: 7000,
    category: 'AI/Tech',
    buyerType: 'AI receptionist startups, SaaS companies',
    status: 'list',
    notes: '.ai extension + AI niche = premium combo.',
  },
  {
    name: 'ai-virtualassistant.ai',
    valueLow: 3500,
    valueHigh: 6000,
    category: 'AI/Tech',
    buyerType: 'AI assistant companies, SaaS',
    status: 'list',
    notes: 'Strong .ai domain for AI VA market.',
  },
  {
    name: 'lawyerassistant.com.au',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'Legal tech companies, law firms',
    status: 'list',
    notes: 'High commercial value — legal niche.',
  },
  {
    name: 'aivirtualreceptionist.com.au',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'AI receptionist companies, agencies',
    status: 'list',
    notes: 'Strong keyword combination + .com.au.',
  },
  {
    name: 'ai-virtualassistant.com',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'Global AI assistant companies',
    status: 'list',
    notes: 'Global .com with strong AI keyword.',
  },
  {
    name: 'ai-virtualassistant.com.au',
    valueLow: 2500,
    valueHigh: 4000,
    category: 'AI/Tech',
    buyerType: 'Australian AI assistant companies',
    status: 'list',
    notes: 'AU-specific AI assistant domain.',
  },
  {
    name: 'buildingaustralia.com.au',
    valueLow: 2000,
    valueHigh: 4000,
    category: 'Trade/Local',
    buyerType: 'Construction portals, builder associations',
    status: 'list',
    notes: 'Premium generic — broad industry appeal.',
  },
  {
    name: 'tradieassistant.ai',
    valueLow: 2000,
    valueHigh: 3500,
    category: 'AI/Tech',
    buyerType: 'Tradie tech startups, AI platforms',
    status: 'list',
    notes: 'AU-specific AI niche — growing market.',
  },
  {
    name: 'virtualcalendar.ai',
    valueLow: 2000,
    valueHigh: 3500,
    category: 'AI/Tech',
    buyerType: 'AI scheduling/calendar app companies',
    status: 'list',
    notes: 'AI + calendar = strong SaaS domain.',
  },
  {
    name: 'morningtonpeninsulatrades.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Trade/Local',
    buyerType: 'Local trade directories, builders',
    status: 'list',
    notes: 'Location-specific trade domain.',
  },
  {
    name: 'premiumpropertiesaustralia.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, property portals',
    status: 'list',
    notes: 'Premium real estate keyword.',
  },
  {
    name: 'psychologistassistant.com.au',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'Mental health tech, psych practices',
    status: 'list',
    notes: 'High-value healthcare niche.',
  },
  {
    name: 'tailoredva.ai',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, AI assistant platforms',
    status: 'list',
    notes: 'Brandable .ai domain.',
  },
  {
    name: 'customva.ai',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, AI assistant platforms',
    status: 'list',
    notes: 'Short, brandable .ai VA domain.',
  },
  {
    name: 'virtualcalendar.com.au',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'Scheduling software companies, SaaS',
    status: 'list',
    notes: 'AU calendar domain — good SaaS target.',
  },
  {
    name: 'chiropractorassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Chiro practices, health tech',
    status: 'list',
    notes: 'Healthcare niche with commercial value.',
  },
  {
    name: 'consultantassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Consulting firms, AI tool companies',
    status: 'list',
    notes: 'Broad professional services appeal.',
  },
  {
    name: 'virtualtaxi.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Rideshare/transport startups',
    status: 'review',
    notes: 'Interesting transport domain.',
  },
  {
    name: 'personaltrainerassistant.com.au',
    valueLow: 1000,
    valueHigh: 1800,
    category: 'AI/Tech',
    buyerType: 'Fitness tech, PT booking platforms',
    status: 'list',
    notes: 'Growing fitness tech market.',
  },
  {
    name: 'carpentermorningtonpeninsula.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    status: 'list',
    notes: 'Location + trade keyword combo.',
  },
  {
    name: 'plumbermorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local plumbers, trade directories',
    status: 'list',
    notes: 'Location + trade keyword combo.',
  },
  {
    name: 'concretermorningtonpeninsula.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local concreters, trade directories',
    status: 'list',
    notes: 'Niche location + trade domain.',
  },
  {
    name: 'customva.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, outsourcing companies',
    status: 'list',
    notes: 'AU VA market domain.',
  },
  {
    name: 'mechanicassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Auto tech, mechanic booking platforms',
    status: 'list',
    notes: 'Auto industry AI niche.',
  },
  {
    name: 'myotherapistassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Myotherapy practices, health tech',
    status: 'list',
    notes: 'Niche health domain.',
  },
  {
    name: 'osteoassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Osteo practices, health tech',
    status: 'list',
    notes: 'Healthcare niche with commercial value.',
  },
  {
    name: 'ptassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Personal trainers, fitness platforms',
    status: 'list',
    notes: 'Short, memorable PT domain.',
  },
  {
    name: 'virtualdriver.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Transport/logistics startups',
    status: 'review',
    notes: 'Interesting for autonomous vehicle era.',
  },
  {
    name: 'virtualcar.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Auto tech, car subscription services',
    status: 'review',
    notes: 'Potential for car subscription/EV market.',
  },
  {
    name: 'beautytherapistassistant.com.au',
    valueLow: 700,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Beauty industry tech, booking platforms',
    status: 'list',
    notes: 'Niche but growing beauty tech market.',
  },
  {
    name: 'clouddiary.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Other',
    buyerType: 'Productivity apps, SaaS companies',
    status: 'list',
    notes: 'Clean brandable domain.',
  },
  {
    name: 'cloudcalendar.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Other',
    buyerType: 'SaaS calendar companies',
    status: 'list',
    notes: 'Cloud calendar — SaaS appeal.',
  },
  {
    name: 'mptrades.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Mornington Peninsula tradespeople',
    status: 'list',
    notes: 'Short form of morningtonpeninsulatrades.',
  },
  {
    name: 'primebuildingprojects.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Construction companies, builders',
    status: 'list',
    notes: 'Builder branding domain.',
  },
  {
    name: 'primebuildinggroup.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Construction companies, builders',
    status: 'list',
    notes: 'Builder group branding domain.',
  },
  {
    name: 'memyselfi.ai',
    valueLow: 500,
    valueHigh: 1000,
    category: 'AI/Tech',
    buyerType: 'Personal AI app companies',
    status: 'review',
    notes: 'Brandable .ai — currently in use for your project.',
  },
  {
    name: 'carpenterz.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Carpentry platforms, trade directories',
    status: 'list',
    notes: 'Short, memorable trade domain.',
  },
  {
    name: 'healthydesserts.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Food bloggers, health food brands',
    status: 'list',
    notes: 'Food niche — growing healthy eating market.',
  },
  {
    name: 'builtbybanks.com.au',
    valueLow: 200,
    valueHigh: 400,
    category: 'Personal/Family',
    buyerType: 'Personal brand (Banks family)',
    status: 'review',
    notes: 'Personal brand domain — review before selling.',
  },
  {
    name: 'broker4.com',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Finance/brokerage companies',
    status: 'list',
    notes: 'Short numeric domain — finance niche.',
  },
  {
    name: 'memyselfi.io',
    valueLow: 300,
    valueHigh: 600,
    category: 'AI/Tech',
    buyerType: 'Tech startups',
    status: 'review',
    notes: 'Lower value .io variant. Check if still needed.',
  },
  {
    name: 'tobybanks.com',
    valueLow: 150,
    valueHigh: 300,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Your personal domain — review before selling.',
  },
  {
    name: 'juliabanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'tobiasbanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'cohenbanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'cohenbanks.com',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'florencebanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'noahatkins.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    status: 'review',
    notes: 'Family name — review before listing.',
  },
]

// Sort by valueHigh descending (already sorted above, but ensure it)
const sortedDomains = [...domains].sort((a, b) => b.valueHigh - a.valueHigh)

const totalLow = domains.reduce((sum, d) => sum + d.valueLow, 0)
const totalHigh = domains.reduce((sum, d) => sum + d.valueHigh, 0)

const formatCurrency = (n: number) =>
  '$' + n.toLocaleString('en-AU')

const categoryColors: Record<Domain['category'], string> = {
  'AI/Tech': 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  'Trade/Local': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  'Personal/Family': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  'Other': 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
}

const categoryCounts = {
  'AI/Tech': domains.filter(d => d.category === 'AI/Tech').length,
  'Trade/Local': domains.filter(d => d.category === 'Trade/Local').length,
  'Personal/Family': domains.filter(d => d.category === 'Personal/Family').length,
  'Other': domains.filter(d => d.category === 'Other').length,
}

const categoryValues = {
  'AI/Tech': domains.filter(d => d.category === 'AI/Tech').reduce((s, d) => s + d.valueHigh, 0),
  'Trade/Local': domains.filter(d => d.category === 'Trade/Local').reduce((s, d) => s + d.valueHigh, 0),
  'Personal/Family': domains.filter(d => d.category === 'Personal/Family').reduce((s, d) => s + d.valueHigh, 0),
  'Other': domains.filter(d => d.category === 'Other').reduce((s, d) => s + d.valueHigh, 0),
}

export default function InternalDomainsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
              🔒 Internal — Private
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Domain Portfolio
          </h1>
          <p className="text-gray-400 text-lg">
            All domains with estimated sale values. Review and tell Monty which ones to put a for-sale landing page on.
          </p>
        </div>

        {/* Total Portfolio Value */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-yellow-400/70 uppercase tracking-wider font-semibold mb-1">Total Portfolio Estimated Value</p>
              <p className="text-4xl font-bold text-yellow-400">
                {formatCurrency(totalLow)} – {formatCurrency(totalHigh)}
              </p>
              <p className="text-gray-400 text-sm mt-1">{domains.length} domains (excl. cheapwebsite.com.au — in use)</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {(Object.keys(categoryCounts) as Domain['category'][]).map(cat => (
                <div key={cat} className="bg-gray-900/60 rounded-xl p-3 border border-gray-800">
                  <p className="text-gray-400 text-xs mb-1">{cat}</p>
                  <p className="text-white font-semibold">{categoryCounts[cat]} domains</p>
                  <p className="text-gray-400 text-xs">up to {formatCurrency(categoryValues[cat])}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Domain Table */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800 bg-gray-900/80">
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">#</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Domain</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Est. Value (AUD)</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Category</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Potential Buyers</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Status</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {sortedDomains.map((domain, i) => (
                  <tr
                    key={domain.name}
                    className={`border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors ${
                      i % 2 === 0 ? 'bg-transparent' : 'bg-gray-900/20'
                    }`}
                  >
                    <td className="px-4 py-3 text-gray-600 text-xs">{i + 1}</td>
                    <td className="px-4 py-3">
                      <span className="font-mono text-white font-medium text-sm">{domain.name}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-green-400 font-semibold">
                        {formatCurrency(domain.valueLow)} – {formatCurrency(domain.valueHigh)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[domain.category]}`}>
                        {domain.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs max-w-[200px]">{domain.buyerType}</td>
                    <td className="px-4 py-3">
                      {domain.status === 'list' && (
                        <span className="text-green-400 text-sm">✅ List for sale</span>
                      )}
                      {domain.status === 'skip' && (
                        <span className="text-red-400 text-sm">❌ Skip</span>
                      )}
                      {domain.status === 'review' && (
                        <span className="text-yellow-400 text-sm">⚠️ Review</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs max-w-[220px]">{domain.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Skipped domain */}
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4 mb-8 flex items-center gap-3">
          <span className="text-2xl">⏭️</span>
          <div>
            <p className="text-gray-300 font-medium">cheapwebsite.com.au</p>
            <p className="text-gray-500 text-sm">Skipped — currently in use</p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6 mb-8">
          <h2 className="text-white font-semibold mb-3 flex items-center gap-2">
            <span>💬</span> How to use this page
          </h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• Review the table above — domains are sorted by estimated value (highest first)</li>
            <li>• Decide which ones you want a for-sale landing page on</li>
            <li>• Tell Monty: <span className="text-white font-mono bg-gray-800 px-2 py-0.5 rounded">"List X, Y, Z for sale"</span> or <span className="text-white font-mono bg-gray-800 px-2 py-0.5 rounded">"List all AI/Tech domains"</span></li>
            <li>• Monty will set up redirects / landing pages accordingly</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-900/30 border border-gray-700/30 rounded-xl p-5 text-center">
          <p className="text-gray-500 text-sm">
            These are estimated values based on domain length, keyword commercial value, TLD, and current market. 
            Actual sale prices may vary. Domains marked as personal names (Banks family) should be reviewed before listing.
          </p>
        </div>
      </div>
    </div>
  )
}
