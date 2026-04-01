'use client'

import { useState, useEffect } from 'react'

type DomainStatus = 'list' | 'skip' | 'review'

type Domain = {
  name: string
  valueLow: number
  valueHigh: number
  category: 'AI/Tech' | 'Trade/Local' | 'Personal/Family' | 'Other'
  buyerType: string
  defaultStatus: DomainStatus
  notes: string
  hidden?: boolean
}

const domains: Domain[] = [
  // ── PREMIUM GENERICS ──────────────────────────────────────────────────────
  {
    name: 'virtualassistant.com.au',
    valueLow: 15000,
    valueHigh: 25000,
    category: 'AI/Tech',
    buyerType: 'AI/VA platform companies, agencies',
    defaultStatus: 'list',
    notes: 'Premium — generic keyword + .com.au. High demand.',
  },
  {
    name: 'sales.net.au',
    valueLow: 8000,
    valueHigh: 20000,
    category: 'Other',
    buyerType: 'SaaS companies, sales platforms, CRM vendors',
    defaultStatus: 'list',
    notes: 'Premium generic .net.au — exceptional keyword value.',
  },
  {
    name: 'dromana.com.au',
    valueLow: 5000,
    valueHigh: 15000,
    category: 'Other',
    buyerType: 'Local councils, tourism boards, portals',
    defaultStatus: 'list',
    notes: 'Premium suburb/town name — exact match .com.au.',
  },
  // ── AI / TECH ─────────────────────────────────────────────────────────────
  {
    name: 'aivirtualreceptionist.ai',
    valueLow: 4000,
    valueHigh: 7000,
    category: 'AI/Tech',
    buyerType: 'AI receptionist startups, SaaS companies',
    defaultStatus: 'list',
    notes: '.ai extension + AI niche = premium combo.',
  },
  {
    name: 'ai-virtualassistant.ai',
    valueLow: 3500,
    valueHigh: 6000,
    category: 'AI/Tech',
    buyerType: 'AI assistant companies, SaaS',
    defaultStatus: 'list',
    notes: 'Strong .ai domain for AI VA market.',
  },
  {
    name: 'aivirtualreceptionist.com.au',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'AI receptionist companies, agencies',
    defaultStatus: 'list',
    notes: 'Strong keyword combination + .com.au.',
  },
  {
    name: 'ai-virtualassistant.com',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'Global AI assistant companies',
    defaultStatus: 'list',
    notes: 'Global .com with strong AI keyword.',
  },
  {
    name: 'lawyerassistant.com.au',
    valueLow: 3000,
    valueHigh: 5000,
    category: 'AI/Tech',
    buyerType: 'Legal tech companies, law firms',
    defaultStatus: 'list',
    notes: 'High commercial value — legal niche.',
  },
  {
    name: 'ai-virtualassistant.com.au',
    valueLow: 2500,
    valueHigh: 4000,
    category: 'AI/Tech',
    buyerType: 'Australian AI assistant companies',
    defaultStatus: 'list',
    notes: 'AU-specific AI assistant domain.',
  },
  {
    name: 'tradieassistant.ai',
    valueLow: 2000,
    valueHigh: 3500,
    category: 'AI/Tech',
    buyerType: 'Tradie tech startups, AI platforms',
    defaultStatus: 'list',
    notes: 'AU-specific AI niche — growing market.',
  },
  {
    name: 'virtualcalendar.ai',
    valueLow: 2000,
    valueHigh: 3500,
    category: 'AI/Tech',
    buyerType: 'AI scheduling/calendar app companies',
    defaultStatus: 'list',
    notes: 'AI + calendar = strong SaaS domain.',
  },
  {
    name: 'psychologistassistant.com.au',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'Mental health tech, psych practices',
    defaultStatus: 'list',
    notes: 'High-value healthcare niche.',
  },
  {
    name: 'tailoredva.ai',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, AI assistant platforms',
    defaultStatus: 'list',
    notes: 'Brandable .ai domain.',
  },
  {
    name: 'customva.ai',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, AI assistant platforms',
    defaultStatus: 'list',
    notes: 'Short, brandable .ai VA domain.',
  },
  {
    name: 'virtualcalendar.com.au',
    valueLow: 1500,
    valueHigh: 2500,
    category: 'AI/Tech',
    buyerType: 'Scheduling software companies, SaaS',
    defaultStatus: 'list',
    notes: 'AU calendar domain — good SaaS target.',
  },
  {
    name: 'virtualsolutions.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Tech/consulting companies, agencies',
    defaultStatus: 'list',
    notes: 'Broad generic — appealing to many buyers.',
  },
  {
    name: 'physioassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Physio practices, health tech platforms',
    defaultStatus: 'list',
    notes: 'Healthcare AI niche — growing demand.',
  },
  {
    name: 'dentistassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Dental practices, health tech',
    defaultStatus: 'list',
    notes: 'Dental niche with strong commercial value.',
  },
  {
    name: 'doctorassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Medical practices, health tech',
    defaultStatus: 'list',
    notes: 'High-value healthcare niche.',
  },
  {
    name: 'chiropractorassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Chiro practices, health tech',
    defaultStatus: 'list',
    notes: 'Healthcare niche with commercial value.',
  },
  {
    name: 'consultantassistant.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'AI/Tech',
    buyerType: 'Consulting firms, AI tool companies',
    defaultStatus: 'list',
    notes: 'Broad professional services appeal.',
  },
  {
    name: 'personaltrainerassistant.com.au',
    valueLow: 1000,
    valueHigh: 1800,
    category: 'AI/Tech',
    buyerType: 'Fitness tech, PT booking platforms',
    defaultStatus: 'list',
    notes: 'Growing fitness tech market.',
  },
  {
    name: 'virtualbooking.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Booking/scheduling SaaS companies',
    defaultStatus: 'list',
    notes: 'Strong keyword for booking tech niche.',
  },
  {
    name: 'customva.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'VA agencies, outsourcing companies',
    defaultStatus: 'list',
    notes: 'AU VA market domain.',
  },
  {
    name: 'mechanicassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Auto tech, mechanic booking platforms',
    defaultStatus: 'list',
    notes: 'Auto industry AI niche.',
  },
  {
    name: 'myotherapistassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Myotherapy practices, health tech',
    defaultStatus: 'list',
    notes: 'Niche health domain.',
  },
  {
    name: 'osteoassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Osteo practices, health tech',
    defaultStatus: 'list',
    notes: 'Healthcare niche with commercial value.',
  },
  {
    name: 'ptassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Personal trainers, fitness platforms',
    defaultStatus: 'list',
    notes: 'Short, memorable PT domain.',
  },
  {
    name: 'myoassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Myotherapy practices, health tech',
    defaultStatus: 'list',
    notes: 'Short form myotherapy assistant domain.',
  },
  {
    name: 'podiatristassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Podiatry practices, health tech',
    defaultStatus: 'list',
    notes: 'Healthcare niche domain.',
  },
  {
    name: 'beautyassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Beauty industry tech, salons',
    defaultStatus: 'list',
    notes: 'Beauty industry AI niche.',
  },
  {
    name: 'chiroassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Chiro practices, health tech',
    defaultStatus: 'list',
    notes: 'Short-form chiro assistant domain.',
  },
  {
    name: 'physioadmin.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Physio practices, health admin tech',
    defaultStatus: 'list',
    notes: 'Healthcare admin niche.',
  },
  {
    name: 'physioreception.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Physio practices, reception AI',
    defaultStatus: 'list',
    notes: 'Strong keyword — AI reception for physio.',
  },
  {
    name: 'psychreception.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Psychology practices, AI reception',
    defaultStatus: 'list',
    notes: 'AI reception for psychology niche.',
  },
  {
    name: 'psychassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Psychology practices, health tech',
    defaultStatus: 'list',
    notes: 'Short-form psych assistant domain.',
  },
  {
    name: 'accountantreception.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Accounting firms, AI reception tech',
    defaultStatus: 'list',
    notes: 'AI reception for accounting niche.',
  },
  {
    name: 'accountantassistant.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'AI/Tech',
    buyerType: 'Accounting firms, fintech companies',
    defaultStatus: 'list',
    notes: 'Strong commercial keyword combination.',
  },
  {
    name: 'massageassistant.com.au',
    valueLow: 700,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Massage therapy booking platforms',
    defaultStatus: 'list',
    notes: 'Wellness niche AI assistant domain.',
  },
  {
    name: 'beautytherapistassistant.com.au',
    valueLow: 700,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Beauty industry tech, booking platforms',
    defaultStatus: 'list',
    notes: 'Niche but growing beauty tech market.',
  },
  {
    name: 'hairdresserassistant.com.au',
    valueLow: 700,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Salon tech, booking platforms',
    defaultStatus: 'list',
    notes: 'Salon/beauty AI niche domain.',
  },
  {
    name: 'accountantadmin.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Accounting admin tech, fintech',
    defaultStatus: 'list',
    notes: 'Admin AI for accounting niche.',
  },
  {
    name: 'clouddiary.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Productivity apps, SaaS companies',
    defaultStatus: 'list',
    notes: 'Clean brandable domain.',
  },
  {
    name: 'cloudcalendar.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'SaaS calendar companies',
    defaultStatus: 'list',
    notes: 'Cloud calendar — SaaS appeal.',
  },
  {
    name: 'virtualdiary.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'AI/Tech',
    buyerType: 'Productivity/scheduling apps',
    defaultStatus: 'list',
    notes: 'Brandable virtual diary domain.',
  },
  {
    name: 'pysioadmin.com.au',
    valueLow: 300,
    valueHigh: 600,
    category: 'AI/Tech',
    buyerType: 'Physio practices (typo variant)',
    defaultStatus: 'review',
    notes: 'Typo version of physioadmin — low value but may attract type-in traffic.',
  },
  // ── ADULT DOMAINS ─────────────────────────────────────────────────────────
  {
    name: 'erotica.com.au',
    valueLow: 6000,
    valueHigh: 12000,
    category: 'Other',
    buyerType: 'Adult content platforms, publishers',
    defaultStatus: 'list',
    notes: 'Premium adult domain — high demand. Generic keyword.',
  },
  {
    name: 'nakedgirls.com.au',
    valueLow: 4000,
    valueHigh: 10000,
    category: 'Other',
    buyerType: 'Adult content platforms',
    defaultStatus: 'list',
    notes: 'Premium adult domain — high demand niche.',
  },
  {
    name: 'ifuck.com.au',
    valueLow: 2000,
    valueHigh: 6000,
    category: 'Other',
    buyerType: 'Adult content platforms',
    defaultStatus: 'review',
    notes: 'Adult content — verify before listing.',
  },
  {
    name: 'lovedating.com.au',
    valueLow: 2000,
    valueHigh: 5000,
    category: 'Other',
    buyerType: 'Dating apps, relationship platforms',
    defaultStatus: 'review',
    notes: 'Adult content — verify before listing.',
  },
  {
    name: 'horney.com.au',
    valueLow: 1500,
    valueHigh: 4000,
    category: 'Other',
    buyerType: 'Adult content platforms',
    defaultStatus: 'review',
    notes: 'Adult content — verify before listing.',
  },
  {
    name: 'stupidshit.com.au',
    valueLow: 300,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Humour/entertainment brands',
    defaultStatus: 'review',
    notes: 'Adult/novelty content — verify before listing.',
  },
  // ── REAL ESTATE / HOMES ───────────────────────────────────────────────────
  {
    name: 'darlingpointrealestate.com',
    valueLow: 2000,
    valueHigh: 4000,
    category: 'Other',
    buyerType: 'Real estate agencies, property portals',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + real estate keyword.',
  },
  {
    name: 'doublebayhomes.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, luxury property',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes keyword.',
  },
  {
    name: 'darlingpointhomes.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, luxury property',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes keyword.',
  },
  {
    name: 'pointpiperhomes.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, luxury property',
    defaultStatus: 'list',
    notes: 'Ultra-premium Sydney suburb domain.',
  },
  {
    name: 'darlingharbourrealestate.com',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, developers',
    defaultStatus: 'list',
    notes: 'Premium Sydney location + real estate.',
  },
  {
    name: 'darlingharbourrealestate.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, developers',
    defaultStatus: 'list',
    notes: 'Premium Sydney location + real estate .com.au.',
  },
  {
    name: 'premiumpropertiesaustralia.com.au',
    valueLow: 1500,
    valueHigh: 3000,
    category: 'Other',
    buyerType: 'Real estate agencies, property portals',
    defaultStatus: 'list',
    notes: 'Premium real estate keyword.',
  },
  {
    name: 'linleypointhomes.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Real estate agencies, Sydney North Shore',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb homes domain.',
  },
  {
    name: 'watsonsbayhomes.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Real estate agencies, luxury property',
    defaultStatus: 'list',
    notes: 'Prestigious Sydney suburb + homes.',
  },
  {
    name: 'dalkeithhomes.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Perth luxury real estate agencies',
    defaultStatus: 'list',
    notes: 'Ultra-premium Perth suburb + homes.',
  },
  {
    name: 'dalkeithrelestate.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Perth luxury real estate agencies',
    defaultStatus: 'list',
    notes: 'Premium Perth suburb real estate domain.',
  },
  {
    name: 'bellevuehillrealesate.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Sydney luxury real estate agencies',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb — typo variant still valuable.',
  },
  {
    name: 'bondihomes.com',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Real estate agencies, rental platforms',
    defaultStatus: 'list',
    notes: 'Premium Bondi + homes — iconic suburb.',
  },
  {
    name: 'portseahomes.com',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Luxury real estate agencies, Mornington Peninsula',
    defaultStatus: 'list',
    notes: 'Premium Portsea + homes — exclusive suburb.',
  },
  {
    name: 'darlingharbourhomes.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Real estate agencies, developers',
    defaultStatus: 'list',
    notes: 'Premium Sydney location + homes.',
  },
  {
    name: 'phillipislandrealestate.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Local real estate agencies',
    defaultStatus: 'list',
    notes: 'Popular tourist/holiday location + real estate.',
  },
  {
    name: 'lavenderbayhomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney North Shore real estate',
    defaultStatus: 'list',
    notes: 'Prestigious Sydney suburb + homes.',
  },
  {
    name: 'cremornepointhomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney North Shore real estate',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes.',
  },
  {
    name: 'eaglebayhomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'WA luxury real estate agencies',
    defaultStatus: 'list',
    notes: 'Premium WA coastal suburb + homes.',
  },
  {
    name: 'peppermintgrovehomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Perth luxury real estate agencies',
    defaultStatus: 'list',
    notes: 'Ultra-premium Perth suburb + homes.',
  },
  {
    name: 'longuevillehomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney North Shore real estate',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes.',
  },
  {
    name: 'kooyonghomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Melbourne luxury real estate',
    defaultStatus: 'list',
    notes: 'Premium Melbourne suburb + homes.',
  },
  {
    name: 'doverheightshomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney Eastern Suburbs real estate',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes.',
  },
  {
    name: 'tamaramahomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney North Shore real estate',
    defaultStatus: 'list',
    notes: 'Prestigious Sydney suburb + homes.',
  },
  {
    name: 'woolwichhomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney inner west real estate',
    defaultStatus: 'list',
    notes: 'Premium Sydney suburb + homes.',
  },
  {
    name: 'centennialparkhomes.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Sydney Eastern Suburbs real estate',
    defaultStatus: 'list',
    notes: 'Prestigious Sydney location + homes.',
  },
  {
    name: 'orangegrovehomes.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Other',
    buyerType: 'Perth real estate agencies',
    defaultStatus: 'list',
    notes: 'Perth suburb + homes domain.',
  },
  {
    name: 'buildermordialloc.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Builders, Mordialloc trades',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpentersheparton.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Shepparton trades',
    defaultStatus: 'list',
    notes: 'Regional city + trade keyword.',
  },
  {
    name: 'carpentermorningtonpeninsula.com',
    valueLow: 700,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mornington Peninsula',
    defaultStatus: 'list',
    notes: 'Location + trade keyword (.com variant).',
  },
  {
    name: 'rosebudrealestate.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Other',
    buyerType: 'Local real estate agencies, Mornington Peninsula',
    defaultStatus: 'list',
    notes: 'Location + real estate keyword.',
  },
  {
    name: 'realestateparkdale.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Other',
    buyerType: 'Bayside real estate agencies',
    defaultStatus: 'list',
    notes: 'Local real estate domain.',
  },
  // ── TRADE / LOCAL ─────────────────────────────────────────────────────────
  {
    name: 'buildingaustralia.com.au',
    valueLow: 2000,
    valueHigh: 4000,
    category: 'Trade/Local',
    buyerType: 'Construction portals, builder associations',
    defaultStatus: 'list',
    notes: 'Premium generic — broad industry appeal.',
  },
  {
    name: 'morningtonpeninsulatrades.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Trade/Local',
    buyerType: 'Local trade directories, builders',
    defaultStatus: 'list',
    notes: 'Location-specific trade domain.',
  },
  {
    name: 'findtradesman.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Tradie directories, booking platforms',
    defaultStatus: 'list',
    notes: 'Generic keyword domain for tradie marketplace.',
  },
  {
    name: 'morningtonwineries.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Tourism boards, wine tour operators',
    defaultStatus: 'list',
    notes: 'Popular tourist area + wineries keyword.',
  },
  {
    name: 'psychologistmorningtonpeninsula.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Trade/Local',
    buyerType: 'Psychology practices, health directories',
    defaultStatus: 'list',
    notes: 'Healthcare + location keyword combo.',
  },
  {
    name: 'psychologistmornington.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Psychology practices, health directories',
    defaultStatus: 'list',
    notes: 'Healthcare + location domain.',
  },
  {
    name: 'psychologistfrankston.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Psychology practices, health directories',
    defaultStatus: 'list',
    notes: 'Healthcare + location domain.',
  },
  {
    name: 'carpentertoorak.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Carpenters, luxury renovation companies',
    defaultStatus: 'list',
    notes: 'Premium Melbourne suburb — double value bonus.',
  },
  {
    name: 'carpenterbrighton.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Carpenters, home renovation companies',
    defaultStatus: 'list',
    notes: 'Premium Melbourne suburb — double value bonus.',
  },
  {
    name: 'carpenterbondi.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Carpenters, home renovation companies',
    defaultStatus: 'list',
    notes: 'Premium Bondi suburb — double value bonus.',
  },
  {
    name: 'carpenterbondi.com',
    valueLow: 700,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Carpenters, home renovation companies',
    defaultStatus: 'list',
    notes: 'Bondi suburb — premium location.',
  },
  {
    name: 'builderbondi.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, home renovation companies',
    defaultStatus: 'list',
    notes: 'Premium Bondi suburb — double value bonus.',
  },
  {
    name: 'builderbondi.com',
    valueLow: 700,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Builders, home renovation companies',
    defaultStatus: 'list',
    notes: 'Bondi suburb — premium location.',
  },
  {
    name: 'buildertoorak.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, luxury home renovation companies',
    defaultStatus: 'list',
    notes: 'Premium Melbourne suburb — double value bonus.',
  },
  {
    name: 'buildersorrento.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, Mornington Peninsula renovators',
    defaultStatus: 'list',
    notes: 'Premium Sorrento suburb — double value bonus.',
  },
  {
    name: 'builderportsea.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, luxury home renovators',
    defaultStatus: 'list',
    notes: 'Premium Portsea suburb — double value bonus.',
  },
  {
    name: 'carpentersorrento.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mornington Peninsula renovators',
    defaultStatus: 'list',
    notes: 'Premium Sorrento suburb — double value bonus.',
  },
  {
    name: 'carpenterportsea.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Carpenters, luxury home renovators',
    defaultStatus: 'list',
    notes: 'Premium Portsea suburb — double value bonus.',
  },
  {
    name: 'electriciansorrento.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington Peninsula trades',
    defaultStatus: 'list',
    notes: 'Premium Sorrento suburb — double value bonus.',
  },
  {
    name: 'electricianportsea.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Electricians, luxury area trades',
    defaultStatus: 'list',
    notes: 'Premium Portsea suburb — double value bonus.',
  },
  {
    name: 'electricianportsea.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Electricians, luxury area trades',
    defaultStatus: 'list',
    notes: 'Premium Portsea + .com.au — double value bonus.',
  },
  {
    name: 'carpentermorningtonpeninsula.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword combo.',
  },
  {
    name: 'carpentersmorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Plural form location + trade domain.',
  },
  {
    name: 'plumbermorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local plumbers, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword combo.',
  },
  {
    name: 'concretermorningtonpeninsula.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Local concreters, trade directories',
    defaultStatus: 'list',
    notes: 'Niche location + trade domain.',
  },
  {
    name: 'buildersmorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, Mornington Peninsula directory',
    defaultStatus: 'list',
    notes: 'Plural form builder + location domain.',
  },
  {
    name: 'buildermorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Builders, Mornington Peninsula directory',
    defaultStatus: 'list',
    notes: 'Builder + location keyword combo.',
  },
  {
    name: 'electriciansmorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington Peninsula trades',
    defaultStatus: 'list',
    notes: 'Plural form electrician + location domain.',
  },
  {
    name: 'electricianmorningtonpeninsula.com',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington Peninsula trades',
    defaultStatus: 'list',
    notes: 'Electrician + location keyword combo.',
  },
  {
    name: 'showerscreensperth.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Home improvement companies, Perth trades',
    defaultStatus: 'list',
    notes: 'Trade niche + city combo.',
  },
  {
    name: 'botoxbrisbane.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Trade/Local',
    buyerType: 'Medical aesthetic clinics, Brisbane',
    defaultStatus: 'list',
    notes: 'High-value medical aesthetics + city.',
  },
  {
    name: 'carpenterredhill.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpentersomerville.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterflinders.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterhighett.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterhampton.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterbeaumaris.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterelwood.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterelwood.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpentermentone.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne bayside suburb + trade keyword.',
  },
  {
    name: 'carpentermentone.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne bayside suburb + trade keyword.',
  },
  {
    name: 'carpenterlangwarrin.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterlangwarrin.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterspringvale.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterspringvale.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterdandenong.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Local carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'carpenterdarwin.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Darwin carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'City + trade keyword combo.',
  },
  {
    name: 'carpentercanberra.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Canberra carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'Capital city + trade keyword.',
  },
  {
    name: 'carpentercairns.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Cairns carpenters, trade directories',
    defaultStatus: 'list',
    notes: 'City + trade keyword combo.',
  },
  {
    name: 'carpenterstkilda.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, St Kilda trades',
    defaultStatus: 'list',
    notes: 'Popular Melbourne suburb + trade.',
  },
  {
    name: 'carpentersurfersparadise.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Gold Coast trades',
    defaultStatus: 'list',
    notes: 'Popular tourist suburb + trade.',
  },
  {
    name: 'carpenterfrankston.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Frankston trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpentermteliza.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mt Eliza trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpentermornington.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mornington trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpentermtmartha.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mt Martha trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterdromana.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Dromana trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterdromana.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Dromana trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpentermccrae.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, McCrae trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterrosebud.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Rosebud trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterrye.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Rye trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderflinders.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Flinders trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderfrankston.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Frankston trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'buildermteliza.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Mt Eliza trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'buildermornington.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Mornington trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'buildermtmartha.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Mt Martha trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'buildermarthacove.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Martha Cove trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderdromana.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Dromana trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderrosebud.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Rosebud trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderrye.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Rye trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderbayside.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Melbourne Bayside area',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterbayside.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Melbourne Bayside area',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpenterbayside.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Melbourne Bayside area',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'builderbeaumaris.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Beaumaris trades',
    defaultStatus: 'list',
    notes: 'Melbourne bayside suburb + trade.',
  },
  {
    name: 'builderbentleigh.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Bentleigh trades',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'builderbentleigh.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Bentleigh trades',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'builderelwood.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Builders, Elwood trades',
    defaultStatus: 'list',
    notes: 'Melbourne suburb + trade keyword.',
  },
  {
    name: 'builderdandenong.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Builders, Dandenong trades',
    defaultStatus: 'list',
    notes: 'Melbourne outer suburb + trade.',
  },
  {
    name: 'builderdarwin.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Builders, Darwin trades',
    defaultStatus: 'list',
    notes: 'City + trade keyword combo.',
  },
  {
    name: 'builderbendigo.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Builders, Bendigo trades',
    defaultStatus: 'list',
    notes: 'Regional city + trade keyword.',
  },
  {
    name: 'electricianmarthacove.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington Peninsula trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmarthacove.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington Peninsula trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electriciansomerville.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Somerville trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmentone.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mentone trades',
    defaultStatus: 'list',
    notes: 'Melbourne bayside suburb + trade.',
  },
  {
    name: 'electriciancranbourne.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Cranbourne trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianflinders.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Flinders trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianflinders.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Flinders trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianfrankston.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Frankston trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmteliza.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mt Eliza trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmteliza.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mt Eliza trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmornington.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mornington trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmtmartha.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Mt Martha trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electriciandromana.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Dromana trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmccrae.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, McCrae trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianmccrae.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, McCrae trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianrosebud.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Rosebud trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'electricianrye.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Electricians, Rye trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'mptrades.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Mornington Peninsula tradespeople',
    defaultStatus: 'list',
    notes: 'Short form of morningtonpeninsulatrades.',
  },
  {
    name: 'primebuildingprojects.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Construction companies, builders',
    defaultStatus: 'list',
    notes: 'Builder branding domain.',
  },
  {
    name: 'primebuildinggroup.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Construction companies, builders',
    defaultStatus: 'list',
    notes: 'Builder group branding domain.',
  },
  {
    name: 'carpenterz.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Carpentry platforms, trade directories',
    defaultStatus: 'list',
    notes: 'Short, memorable trade domain.',
  },
  {
    name: 'carpentersafteybeach.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Safety Beach trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword (typo variant of Safety Beach).',
  },
  {
    name: 'carpenterblairgowrie.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Blairgowrie trades',
    defaultStatus: 'list',
    notes: 'Location + trade keyword.',
  },
  {
    name: 'carpertermordialloc.com.au',
    valueLow: 300,
    valueHigh: 600,
    category: 'Trade/Local',
    buyerType: 'Carpenters, Mordialloc trades',
    defaultStatus: 'list',
    notes: 'Typo variant — may still attract searches.',
  },
  {
    name: 'decksnpergolas.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Deck/pergola builders, home improvement',
    defaultStatus: 'list',
    notes: 'Trade keyword domain for outdoor builds.',
  },
  {
    name: 'cartrades.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Trade/Local',
    buyerType: 'Car trades, auto industry',
    defaultStatus: 'list',
    notes: 'Auto trades domain.',
  },
  {
    name: 'accountantmornington.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Mornington Peninsula',
    defaultStatus: 'list',
    notes: 'Profession + location domain.',
  },
  {
    name: 'accountantmteliza.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Mt Eliza',
    defaultStatus: 'list',
    notes: 'Profession + location domain.',
  },
  {
    name: 'accountantbayside.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Bayside Melbourne',
    defaultStatus: 'list',
    notes: 'Profession + location domain.',
  },
  {
    name: 'accountantbayside.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Bayside area',
    defaultStatus: 'list',
    notes: 'Profession + location domain.',
  },
  {
    name: 'accountantfremantle.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Fremantle',
    defaultStatus: 'list',
    notes: 'Profession + popular city domain.',
  },
  {
    name: 'accountantbrighton.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Brighton Melbourne',
    defaultStatus: 'list',
    notes: 'Premium suburb + profession domain.',
  },
  {
    name: 'accountantsurfersparadise.com.au',
    valueLow: 600,
    valueHigh: 1200,
    category: 'Trade/Local',
    buyerType: 'Accounting firms, Surfers Paradise',
    defaultStatus: 'list',
    notes: 'Tourist hub + profession domain.',
  },
  // ── PIZZA / FOOD ──────────────────────────────────────────────────────────
  {
    name: 'pizzabrighton.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Other',
    buyerType: 'Pizza restaurants, delivery platforms',
    defaultStatus: 'list',
    notes: 'Premium Brighton suburb + food — bonus value.',
  },
  {
    name: 'pizzabondi.com',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Other',
    buyerType: 'Pizza restaurants, delivery platforms',
    defaultStatus: 'list',
    notes: 'Premium Bondi suburb + pizza — iconic location.',
  },
  {
    name: 'pizzalygon.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, Melbourne city',
    defaultStatus: 'list',
    notes: 'Lygon Street is famous for Italian food — niche appeal.',
  },
  {
    name: 'pizzacarlton.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, Carlton/Melbourne',
    defaultStatus: 'list',
    notes: 'Carlton is Melbourne\'s Italian dining hub.',
  },
  {
    name: 'pizzastkilda.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, St Kilda',
    defaultStatus: 'list',
    notes: 'Popular Melbourne suburb + food.',
  },
  {
    name: 'pizzastkilda.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, St Kilda',
    defaultStatus: 'list',
    notes: 'Popular Melbourne suburb + food.',
  },
  {
    name: 'pizzasurfersparadise.com',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, Gold Coast',
    defaultStatus: 'list',
    notes: 'Tourist hub + pizza.',
  },
  {
    name: 'pizzasurfersparadise.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Pizza restaurants, Gold Coast',
    defaultStatus: 'list',
    notes: 'Tourist hub + pizza.',
  },
  {
    name: 'pizzageelong.com.au',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Pizza restaurants, Geelong',
    defaultStatus: 'list',
    notes: 'City + pizza keyword.',
  },
  {
    name: 'pizzadromana.com',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Pizza restaurants, Dromana',
    defaultStatus: 'list',
    notes: 'Location + pizza keyword.',
  },
  {
    name: 'pizzadromana.com.au',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Pizza restaurants, Dromana',
    defaultStatus: 'list',
    notes: 'Location + pizza keyword.',
  },
  {
    name: 'pizzadarwin.com.au',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Pizza restaurants, Darwin',
    defaultStatus: 'list',
    notes: 'City + pizza keyword.',
  },
  {
    name: 'healthydesserts.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Food bloggers, health food brands',
    defaultStatus: 'list',
    notes: 'Food niche — growing healthy eating market.',
  },
  // ── OTHER / BRANDABLE ─────────────────────────────────────────────────────
  {
    name: 'charityaustralia.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Non-profit organisations, charity portals',
    defaultStatus: 'list',
    notes: 'Strong generic keyword for charity sector.',
  },
  {
    name: 'thehealthguide.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Other',
    buyerType: 'Health media, wellness brands',
    defaultStatus: 'list',
    notes: 'Brandable health guide domain.',
  },
  {
    name: 'virtualtaxi.com.au',
    valueLow: 1000,
    valueHigh: 2000,
    category: 'Other',
    buyerType: 'Rideshare/transport startups',
    defaultStatus: 'review',
    notes: 'Interesting transport domain.',
  },
  {
    name: 'virtualdriver.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Transport/logistics startups',
    defaultStatus: 'review',
    notes: 'Interesting for autonomous vehicle era.',
  },
  {
    name: 'virtualcar.com.au',
    valueLow: 800,
    valueHigh: 1500,
    category: 'Other',
    buyerType: 'Auto tech, car subscription services',
    defaultStatus: 'review',
    notes: 'Potential for car subscription/EV market.',
  },
  {
    name: 'broker4.com',
    valueLow: 300,
    valueHigh: 600,
    category: 'Other',
    buyerType: 'Finance/brokerage companies',
    defaultStatus: 'list',
    notes: 'Short numeric domain — finance niche.',
  },
  {
    name: 'swanst.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Local businesses on Swan Street',
    defaultStatus: 'list',
    notes: 'Short street name domain — brandable.',
  },
  {
    name: 'fitzroyst.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Local businesses, Melbourne inner north',
    defaultStatus: 'list',
    notes: 'Fitzroy Street/area — Melbourne niche.',
  },
  {
    name: 'brunswickst.com.au',
    valueLow: 400,
    valueHigh: 800,
    category: 'Other',
    buyerType: 'Local businesses on Brunswick Street',
    defaultStatus: 'list',
    notes: 'Popular Melbourne street — brandable.',
  },
  // ── PERSONAL / FAMILY ─────────────────────────────────────────────────────
  {
    name: 'builtbybanks.com.au',
    valueLow: 200,
    valueHigh: 400,
    category: 'Personal/Family',
    buyerType: 'Personal brand (Banks family)',
    defaultStatus: 'review',
    notes: 'Personal brand domain — review before selling.',
  },
  {
    name: 'brandan.com.au',
    valueLow: 150,
    valueHigh: 300,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'review',
    notes: 'Personal name — review before listing.',
  },
  {
    name: 'tobybanks.com',
    valueLow: 150,
    valueHigh: 300,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Your personal domain — review before selling.',
  },
  {
    name: 'juliabanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'tobiasbanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'cohenbanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'cohenbanks.com',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'florencebanks.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  {
    name: 'noahatkins.com.au',
    valueLow: 100,
    valueHigh: 200,
    category: 'Personal/Family',
    buyerType: 'Personal name domain',
    defaultStatus: 'skip',
    notes: 'Family name — review before listing.',
  },
  // ── MEMYSELFI ─────────────────────────────────────────────────────────────
  {
    name: 'memyselfi.ai',
    valueLow: 500,
    valueHigh: 1000,
    category: 'AI/Tech',
    buyerType: 'Personal AI app companies',
    defaultStatus: 'review',
    notes: 'Brandable .ai — currently in use for your project.',
  },
  {
    name: 'memyselfi.io',
    valueLow: 300,
    valueHigh: 600,
    category: 'AI/Tech',
    buyerType: 'Tech startups',
    defaultStatus: 'review',
    notes: 'Lower value .io variant. Check if still needed.',
  },
  // ── HIDDEN / IN USE ───────────────────────────────────────────────────────
  {
    name: 'cheapwebsite.com.au',
    valueLow: 500,
    valueHigh: 1000,
    category: 'Other',
    buyerType: 'Web design companies',
    defaultStatus: 'skip',
    notes: 'Currently in use — do not list.',
    hidden: true,
  },
  // ── DUPLICATE at end of JSON ──────────────────────────────────────────────
  // carpentermorningtonpeninsula.com appears twice in source data
  // (also listed above as .com.au) — deduplicated here
]

// Filter out hidden domains for display
const visibleDomains = domains.filter(d => !d.hidden)

const sortedDomains = [...visibleDomains].sort((a, b) => b.valueHigh - a.valueHigh)

const totalLow = visibleDomains.reduce((sum, d) => sum + d.valueLow, 0)
const totalHigh = visibleDomains.reduce((sum, d) => sum + d.valueHigh, 0)

const formatCurrency = (n: number) => '$' + n.toLocaleString('en-AU')

const categoryColors: Record<Domain['category'], string> = {
  'AI/Tech': 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
  'Trade/Local': 'bg-orange-500/20 text-orange-300 border border-orange-500/30',
  'Personal/Family': 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  'Other': 'bg-gray-500/20 text-gray-300 border border-gray-500/30',
}

const categoryCounts = {
  'AI/Tech': visibleDomains.filter(d => d.category === 'AI/Tech').length,
  'Trade/Local': visibleDomains.filter(d => d.category === 'Trade/Local').length,
  'Personal/Family': visibleDomains.filter(d => d.category === 'Personal/Family').length,
  'Other': visibleDomains.filter(d => d.category === 'Other').length,
}

const categoryValues = {
  'AI/Tech': visibleDomains.filter(d => d.category === 'AI/Tech').reduce((s, d) => s + d.valueHigh, 0),
  'Trade/Local': visibleDomains.filter(d => d.category === 'Trade/Local').reduce((s, d) => s + d.valueHigh, 0),
  'Personal/Family': visibleDomains.filter(d => d.category === 'Personal/Family').reduce((s, d) => s + d.valueHigh, 0),
  'Other': visibleDomains.filter(d => d.category === 'Other').reduce((s, d) => s + d.valueHigh, 0),
}

const STORAGE_KEY = 'domain-portfolio-selections'

function buildDefaults(): Record<string, DomainStatus> {
  const defaults: Record<string, DomainStatus> = {}
  for (const d of visibleDomains) {
    defaults[d.name] = d.defaultStatus
  }
  return defaults
}

export default function InternalDomainsPage() {
  const [selections, setSelections] = useState<Record<string, DomainStatus>>(buildDefaults)
  const [hydrated, setHydrated] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [copied, setCopied] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        setSelections(prev => ({ ...prev, ...parsed }))
      }
    } catch (_) {}
    setHydrated(true)
  }, [])

  // Save to localStorage whenever selections change (after hydration)
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(selections))
    } catch (_) {}
  }, [selections, hydrated])

  const setStatus = (name: string, status: DomainStatus) => {
    setSelections(prev => ({ ...prev, [name]: status }))
  }

  const resetToDefaults = () => {
    setSelections(buildDefaults())
  }

  const listedDomains = sortedDomains.filter(d => selections[d.name] === 'list')
  const skippedCount = sortedDomains.filter(d => selections[d.name] === 'skip').length
  const reviewCount = sortedDomains.filter(d => selections[d.name] === 'review').length

  const selectedValueLow = listedDomains.reduce((s, d) => s + d.valueLow, 0)
  const selectedValueHigh = listedDomains.reduce((s, d) => s + d.valueHigh, 0)

  const confirmMessage = `✅ Domain Selection — ${listedDomains.length} domains selected for landing pages:\n\n${listedDomains.map((d, i) => `${i + 1}. ${d.name}`).join('\n')}\n\nEstimated value: ${formatCurrency(selectedValueLow)} – ${formatCurrency(selectedValueHigh)}\n\n${skippedCount} skipped, ${reviewCount} under review.`

  const handleConfirm = async () => {
    try {
      await navigator.clipboard.writeText(confirmMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (_) {}
    setShowModal(true)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl">
              <h2 className="text-white text-xl font-bold mb-2">✅ Selection Saved!</h2>
              <p className="text-gray-400 text-sm mb-4">
                {copied ? '📋 Copied to clipboard! Paste it in Discord for Monty.' : 'Send this to Monty on Discord:'}
              </p>
              <pre className="bg-gray-800 rounded-xl p-4 text-sm text-green-300 whitespace-pre-wrap font-mono overflow-y-auto max-h-80">
                {confirmMessage}
              </pre>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(confirmMessage)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 3000)
                    } catch (_) {}
                  }}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition-colors"
                >
                  {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

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
            Toggle each domain to mark it for listing or skip it. Your choices are saved automatically.
          </p>
        </div>

        {/* Live Summary + Confirm */}
        <div className="bg-gray-900/70 border border-gray-700 rounded-2xl p-5 mb-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex flex-wrap gap-4 flex-1">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-3xl font-bold text-green-400">{listedDomains.length}</span>
              <div>
                <p className="text-green-300 font-semibold text-sm">Selected for listing</p>
                <p className="text-green-400/70 text-xs">{formatCurrency(selectedValueLow)} – {formatCurrency(selectedValueHigh)}</p>
              </div>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
              <span className="text-3xl font-bold text-red-400">{skippedCount}</span>
              <div>
                <p className="text-red-300 font-semibold text-sm">Skipped</p>
                <p className="text-red-400/70 text-xs">won&apos;t get landing page</p>
              </div>
            </div>
            {reviewCount > 0 && (
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-3xl font-bold text-amber-400">{reviewCount}</span>
                <div>
                  <p className="text-amber-300 font-semibold text-sm">Under review</p>
                  <p className="text-amber-400/70 text-xs">decide later</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <button
              onClick={handleConfirm}
              className="bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-green-900/30 whitespace-nowrap"
            >
              ✅ Confirm Selection
            </button>
            <button
              onClick={resetToDefaults}
              className="text-gray-500 hover:text-gray-300 text-xs underline transition-colors text-center"
            >
              Reset to defaults
            </button>
          </div>
        </div>

        {/* Total Portfolio Value */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-400/5 border border-yellow-500/20 rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm text-yellow-400/70 uppercase tracking-wider font-semibold mb-1">Total Portfolio Estimated Value</p>
              <p className="text-4xl font-bold text-yellow-400">
                {formatCurrency(totalLow)} – {formatCurrency(totalHigh)}
              </p>
              <p className="text-gray-400 text-sm mt-1">{visibleDomains.length} domains (excl. cheapwebsite.com.au — in use)</p>
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
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold">Notes</th>
                  <th className="text-left px-4 py-3 text-gray-400 font-semibold min-w-[200px]">Your Decision</th>
                </tr>
              </thead>
              <tbody>
                {sortedDomains.map((domain, i) => {
                  const status = hydrated ? selections[domain.name] : domain.defaultStatus
                  const isListed = status === 'list'
                  const isSkipped = status === 'skip'
                  const isReview = status === 'review'
                  return (
                    <tr
                      key={domain.name}
                      className={`border-b border-gray-800/50 transition-colors ${
                        isSkipped ? 'opacity-50' : 'hover:bg-gray-800/30'
                      } ${i % 2 === 0 ? 'bg-transparent' : 'bg-gray-900/20'}`}
                    >
                      <td className="px-4 py-3 text-gray-600 text-xs">{i + 1}</td>
                      <td className="px-4 py-3">
                        <span className={`font-mono font-medium text-sm ${isSkipped ? 'line-through text-gray-500' : 'text-white'}`}>
                          {domain.name}
                        </span>
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
                      <td className="px-4 py-3 text-gray-400 text-xs max-w-[180px]">{domain.buyerType}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs max-w-[200px]">{domain.notes}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2 flex-wrap">
                          <button
                            onClick={() => setStatus(domain.name, 'list')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isListed
                                ? 'bg-green-500 text-white shadow-md shadow-green-900/40 scale-105'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            ✅ List It
                          </button>
                          <button
                            onClick={() => setStatus(domain.name, 'review')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isReview
                                ? 'bg-amber-500 text-white shadow-md shadow-amber-900/40 scale-105'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            ⚠️ Review
                          </button>
                          <button
                            onClick={() => setStatus(domain.name, 'skip')}
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                              isSkipped
                                ? 'bg-red-600 text-white shadow-md shadow-red-900/40 scale-105'
                                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                            }`}
                          >
                            ❌ Skip
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Confirm Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-gray-900/50 border border-gray-700 rounded-2xl p-5">
          <div>
            <p className="text-white font-semibold">{listedDomains.length} domains ready for landing pages</p>
            <p className="text-gray-400 text-sm">Estimated: {formatCurrency(selectedValueLow)} – {formatCurrency(selectedValueHigh)}</p>
          </div>
          <button
            onClick={handleConfirm}
            className="bg-green-600 hover:bg-green-500 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-green-900/30 whitespace-nowrap"
          >
            ✅ Confirm Selection
          </button>
        </div>

        {/* Skipped domain note */}
        <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4 mb-8 flex items-center gap-3">
          <span className="text-2xl">⏭️</span>
          <div>
            <p className="text-gray-300 font-medium">cheapwebsite.com.au</p>
            <p className="text-gray-500 text-sm">Skipped — currently in use</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-900/30 border border-gray-700/30 rounded-xl p-5 text-center">
          <p className="text-gray-500 text-sm">
            These are estimated values based on domain length, keyword commercial value, TLD, and current market.
            Actual sale prices may vary. Domains marked as personal names (Banks family) default to Skip — change if needed.
            Adult domains default to Review — verify content suitability before listing.
            Your selections are saved in your browser automatically.
          </p>
        </div>

      </div>
    </div>
  )
}
