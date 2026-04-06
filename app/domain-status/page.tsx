export default function DomainStatusPage() {
  const vercelDomains = [
  {
    "domain": "accountantadmin.com.au",
    "price": 1497
  },
  {
    "domain": "accountantassistant.com.au",
    "price": 1997
  },
  {
    "domain": "accountantbayside.com",
    "price": 1497
  },
  {
    "domain": "accountantbayside.com.au",
    "price": 1497
  },
  {
    "domain": "accountantbrighton.com.au",
    "price": 1497
  },
  {
    "domain": "accountantfremantle.com.au",
    "price": 1497
  },
  {
    "domain": "accountantmornington.com.au",
    "price": 1497
  },
  {
    "domain": "accountantmteliza.com.au",
    "price": 1497
  },
  {
    "domain": "accountantreception.com.au",
    "price": 1497
  },
  {
    "domain": "accountantsurfersparadise.com.au",
    "price": 1497
  },
  {
    "domain": "ai-virtualassistant.ai",
    "price": 2997
  },
  {
    "domain": "ai-virtualassistant.com",
    "price": 2997
  },
  {
    "domain": "ai-virtualassistant.com.au",
    "price": 2997
  },
  {
    "domain": "aivirtualreceptionist.ai",
    "price": 2997
  },
  {
    "domain": "aivirtualreceptionist.com.au",
    "price": 2997
  },
  {
    "domain": "beautyassistant.com.au",
    "price": 1997
  },
  {
    "domain": "beautytherapistassistant.com.au",
    "price": 1997
  },
  {
    "domain": "bellevuehillrealesate.com.au",
    "price": 1497
  },
  {
    "domain": "bondihomes.com",
    "price": 2497
  },
  {
    "domain": "botoxbrisbane.com.au",
    "price": 1497
  },
  {
    "domain": "brandan.com.au",
    "price": 1497
  },
  {
    "domain": "brunswickst.com.au",
    "price": 1497
  },
  {
    "domain": "builderbayside.com",
    "price": 2497
  },
  {
    "domain": "builderbeaumaris.com",
    "price": 1497
  },
  {
    "domain": "builderbendigo.com",
    "price": 1497
  },
  {
    "domain": "builderbentleigh.com",
    "price": 1497
  },
  {
    "domain": "builderbentleigh.com.au",
    "price": 1497
  },
  {
    "domain": "builderbondi.com",
    "price": 2997
  },
  {
    "domain": "builderbondi.com.au",
    "price": 4947
  },
  {
    "domain": "builderdandenong.com.au",
    "price": 1497
  },
  {
    "domain": "builderdarwin.com",
    "price": 2497
  },
  {
    "domain": "builderdromana.com.au",
    "price": 1497
  },
  {
    "domain": "builderelwood.com",
    "price": 1497
  },
  {
    "domain": "builderflinders.com.au",
    "price": 1497
  },
  {
    "domain": "builderfrankston.com.au",
    "price": 1497
  },
  {
    "domain": "buildermarthacove.com.au",
    "price": 1497
  },
  {
    "domain": "buildermordialloc.com",
    "price": 1497
  },
  {
    "domain": "buildermornington.com.au",
    "price": 1497
  },
  {
    "domain": "buildermorningtonpeninsula.com",
    "price": 1497
  },
  {
    "domain": "buildermteliza.com.au",
    "price": 1497
  },
  {
    "domain": "buildermtmartha.com.au",
    "price": 1497
  },
  {
    "domain": "builderportsea.com.au",
    "price": 1497
  },
  {
    "domain": "builderrosebud.com.au",
    "price": 1497
  },
  {
    "domain": "builderrye.com.au",
    "price": 1497
  },
  {
    "domain": "buildersmorningtonpeninsula.com",
    "price": 1497
  },
  {
    "domain": "buildersorrento.com.au",
    "price": 1497
  },
  {
    "domain": "buildertoorak.com.au",
    "price": 2997
  },
  {
    "domain": "buildingaustralia.com.au",
    "price": 1497
  },
  {
    "domain": "carpenterbayside.com",
    "price": 1247
  },
  {
    "domain": "carpenterbayside.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterbeaumaris.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterbondi.com",
    "price": 1247
  },
  {
    "domain": "carpenterbondi.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterbrighton.com.au",
    "price": 1247
  },
  {
    "domain": "carpentercairns.com",
    "price": 1247
  },
  {
    "domain": "carpentercanberra.com",
    "price": 1247
  },
  {
    "domain": "carpenterdandenong.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterdarwin.com",
    "price": 1247
  },
  {
    "domain": "carpenterelwood.com",
    "price": 1247
  },
  {
    "domain": "carpenterelwood.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterhampton.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterhighett.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterlangwarrin.com",
    "price": 1247
  },
  {
    "domain": "carpenterlangwarrin.com.au",
    "price": 1247
  },
  {
    "domain": "carpentermentone.com",
    "price": 1247
  },
  {
    "domain": "carpentermentone.com.au",
    "price": 1247
  },
  {
    "domain": "carpentermorningtonpeninsula.com",
    "price": 1247
  },
  {
    "domain": "carpentermorningtonpeninsula.com.au",
    "price": 1247
  },
  {
    "domain": "carpentersheparton.com.au",
    "price": 1247
  },
  {
    "domain": "carpentersmorningtonpeninsula.com",
    "price": 1247
  },
  {
    "domain": "carpentersomerville.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterspringvale.com",
    "price": 1247
  },
  {
    "domain": "carpenterspringvale.com.au",
    "price": 1247
  },
  {
    "domain": "carpenterstkilda.com",
    "price": 1247
  },
  {
    "domain": "carpentersurfersparadise.com.au",
    "price": 1247
  },
  {
    "domain": "carpentertoorak.com.au",
    "price": 1247
  },
  {
    "domain": "carpertermordialloc.com.au",
    "price": 1497
  },
  {
    "domain": "cartrades.com.au",
    "price": 1497
  },
  {
    "domain": "centennialparkhomes.com.au",
    "price": 1997
  },
  {
    "domain": "charityaustralia.com.au",
    "price": 1497
  },
  {
    "domain": "cheapwebsite.com.au",
    "price": 4997
  },
  {
    "domain": "chiroassistant.com.au",
    "price": 1997
  },
  {
    "domain": "chiropractorassistant.com.au",
    "price": 1997
  },
  {
    "domain": "cloudcalendar.com.au",
    "price": 1497
  },
  {
    "domain": "clouddiary.com.au",
    "price": 1497
  },
  {
    "domain": "concretermorningtonpeninsula.com.au",
    "price": 1497
  },
  {
    "domain": "consultantassistant.com.au",
    "price": 1997
  },
  {
    "domain": "cremornepointhomes.com.au",
    "price": 1997
  },
  {
    "domain": "customva.ai",
    "price": 1997
  },
  {
    "domain": "customva.com.au",
    "price": 1497
  },
  {
    "domain": "dalkeithhomes.com.au",
    "price": 1997
  },
  {
    "domain": "dalkeithrelestate.com.au",
    "price": 1497
  },
  {
    "domain": "darlingharbourhomes.com.au",
    "price": 1997
  },
  {
    "domain": "darlingharbourrealestate.com",
    "price": 1997
  },
  {
    "domain": "darlingharbourrealestate.com.au",
    "price": 1997
  },
  {
    "domain": "darlingpointhomes.com.au",
    "price": 1997
  },
  {
    "domain": "darlingpointrealestate.com",
    "price": 1997
  },
  {
    "domain": "decksnpergolas.com.au",
    "price": 1497
  },
  {
    "domain": "dentistassistant.com.au",
    "price": 2997
  },
  {
    "domain": "doctorassistant.com.au",
    "price": 2997
  },
  {
    "domain": "doublebayhomes.com.au",
    "price": 1997
  },
  {
    "domain": "doverheightshomes.com.au",
    "price": 1997
  },
  {
    "domain": "dromana.com.au",
    "price": 7497
  },
  {
    "domain": "eaglebayhomes.com.au",
    "price": 1997
  },
  {
    "domain": "erotica.com.au",
    "price": 6997
  },
  {
    "domain": "findtradesman.com.au",
    "price": 4997
  },
  {
    "domain": "fitzroyst.com.au",
    "price": 2497
  },
  {
    "domain": "hairdresserassistant.com.au",
    "price": 1997
  },
  {
    "domain": "healthydesserts.com.au",
    "price": 1497
  },
  {
    "domain": "horney.com.au",
    "price": 1497
  },
  {
    "domain": "ifuck.com.au",
    "price": 1497
  },
  {
    "domain": "kooyonghomes.com.au",
    "price": 1997
  },
  {
    "domain": "lavenderbayhomes.com.au",
    "price": 1997
  },
  {
    "domain": "lawyerassistant.com.au",
    "price": 3997
  },
  {
    "domain": "linleypointhomes.com.au",
    "price": 1997
  },
  {
    "domain": "longuevillehomes.com.au",
    "price": 1997
  },
  {
    "domain": "lovedating.com.au",
    "price": 1497
  },
  {
    "domain": "massageassistant.com.au",
    "price": 1997
  },
  {
    "domain": "mechanicassistant.com.au",
    "price": 1997
  },
  {
    "domain": "memyselfi.ai",
    "price": 4997
  },
  {
    "domain": "morningtonpeninsulatrades.com.au",
    "price": 1497
  },
  {
    "domain": "morningtonwineries.com.au",
    "price": 2997
  },
  {
    "domain": "mptrades.com.au",
    "price": 1497
  },
  {
    "domain": "myoassistant.com.au",
    "price": 1997
  },
  {
    "domain": "myotherapistassistant.com.au",
    "price": 1997
  },
  {
    "domain": "nakedgirls.com.au",
    "price": 5997
  },
  {
    "domain": "orangegrovehomes.com.au",
    "price": 1997
  },
  {
    "domain": "osteoassistant.com.au",
    "price": 1997
  },
  {
    "domain": "peppermintgrovehomes.com.au",
    "price": 1997
  },
  {
    "domain": "personaltrainerassistant.com.au",
    "price": 1997
  },
  {
    "domain": "phillipislandrealestate.com.au",
    "price": 1997
  },
  {
    "domain": "physioadmin.com.au",
    "price": 1497
  },
  {
    "domain": "physioassistant.com.au",
    "price": 1997
  },
  {
    "domain": "physioreception.com.au",
    "price": 1497
  },
  {
    "domain": "pizzabondi.com",
    "price": 1997
  },
  {
    "domain": "pizzabrighton.com.au",
    "price": 1997
  },
  {
    "domain": "pizzacarlton.com",
    "price": 1997
  },
  {
    "domain": "pizzadarwin.com.au",
    "price": 1997
  },
  {
    "domain": "pizzadromana.com",
    "price": 1997
  },
  {
    "domain": "pizzadromana.com.au",
    "price": 1997
  },
  {
    "domain": "pizzageelong.com.au",
    "price": 1997
  },
  {
    "domain": "pizzalygon.com",
    "price": 1997
  },
  {
    "domain": "pizzastkilda.com",
    "price": 1997
  },
  {
    "domain": "pizzastkilda.com.au",
    "price": 1997
  },
  {
    "domain": "pizzasurfersparadise.com",
    "price": 1997
  },
  {
    "domain": "pizzasurfersparadise.com.au",
    "price": 1997
  },
  {
    "domain": "plumbermorningtonpeninsula.com",
    "price": 1247
  },
  {
    "domain": "podiatristassistant.com.au",
    "price": 1997
  },
  {
    "domain": "pointpiperhomes.com.au",
    "price": 1997
  },
  {
    "domain": "portseahomes.com",
    "price": 1997
  },
  {
    "domain": "premiumpropertiesaustralia.com.au",
    "price": 2497
  },
  {
    "domain": "primebuildinggroup.com.au",
    "price": 1497
  },
  {
    "domain": "primebuildingprojects.com.au",
    "price": 1497
  },
  {
    "domain": "psychassistant.com.au",
    "price": 1997
  },
  {
    "domain": "psychologistassistant.com.au",
    "price": 1997
  },
  {
    "domain": "psychologistfrankston.com.au",
    "price": 1497
  },
  {
    "domain": "psychologistmornington.com.au",
    "price": 1497
  },
  {
    "domain": "psychologistmorningtonpeninsula.com.au",
    "price": 1497
  },
  {
    "domain": "psychreception.com.au",
    "price": 1497
  },
  {
    "domain": "ptassistant.com.au",
    "price": 1997
  },
  {
    "domain": "pysioadmin.com.au",
    "price": 1497
  },
  {
    "domain": "realestateparkdale.com.au",
    "price": 1997
  },
  {
    "domain": "rosebudrealestate.com.au",
    "price": 1997
  },
  {
    "domain": "sales.net.au",
    "price": 14997
  },
  {
    "domain": "showerscreensperth.com.au",
    "price": 1497
  },
  {
    "domain": "stupidshit.com.au",
    "price": 1497
  },
  {
    "domain": "swanst.com.au",
    "price": 1497
  },
  {
    "domain": "tailoredva.ai",
    "price": 1997
  },
  {
    "domain": "tamaramahomes.com.au",
    "price": 1997
  },
  {
    "domain": "thehealthguide.com.au",
    "price": 1497
  },
  {
    "domain": "tradieassistant.ai",
    "price": 2997
  },
  {
    "domain": "virtualbooking.com.au",
    "price": 1497
  },
  {
    "domain": "virtualcalendar.ai",
    "price": 1997
  },
  {
    "domain": "virtualcalendar.com.au",
    "price": 1497
  },
  {
    "domain": "virtualcar.com.au",
    "price": 1497
  },
  {
    "domain": "virtualdiary.com.au",
    "price": 1497
  },
  {
    "domain": "virtualdriver.com.au",
    "price": 1497
  },
  {
    "domain": "virtualtaxi.com.au",
    "price": 1497
  },
  {
    "domain": "watsonsbayhomes.com.au",
    "price": 1997
  },
  {
    "domain": "woolwichhomes.com.au",
    "price": 1997
  }
]
  const syrahostDomains = [
  "broker4.com",
  "carpenterblairgowrie.com.au",
  "carpenterdromana.com",
  "carpenterdromana.com.au",
  "carpenterflinders.com.au",
  "carpenterfrankston.com.au",
  "carpentermccrae.com.au",
  "carpentermornington.com.au",
  "carpentermteliza.com.au",
  "carpentermtmartha.com.au",
  "carpenterportsea.com.au",
  "carpenterredhill.com.au",
  "carpenterrosebud.com.au",
  "carpenterrye.com.au",
  "carpentersafteybeach.com.au",
  "carpentersorrento.com.au",
  "carpenterz.com.au",
  "electriciancranbourne.com",
  "electriciandromana.com",
  "electricianflinders.com",
  "electricianflinders.com.au",
  "electricianfrankston.com",
  "electricianmarthacove.com",
  "electricianmarthacove.com.au",
  "electricianmccrae.com",
  "electricianmccrae.com.au",
  "electricianmentone.com",
  "electricianmornington.com",
  "electricianmteliza.com",
  "electricianmteliza.com.au",
  "electricianmtmartha.com",
  "electricianportsea.com",
  "electricianportsea.com.au",
  "electricianrosebud.com",
  "electricianrye.com",
  "electriciansmorningtonpeninsula.com",
  "electriciansomerville.com",
  "electriciansorrento.com",
  "florencebanks.com.au",
  "virtualsolutions.com.au"
]
  const otherDomains: Record<string,string> = {
  "builtbybanks.com.au": "ns1.secureparkme.com",
  "cohenbanks.com": "ns1.crazydomains.com",
  "cohenbanks.com.au": "ns2.crazydomains.com",
  "electricianmorningtonpeninsula.com": "expiryparkpage1.crazydomains.com",
  "juliabanks.com.au": "expiryparkpage1.crazydomains.com",
  "memyselfi.io": "ns1.secureparkme.com",
  "noahatkins.com.au": "expiryparkpage1.crazydomains.com",
  "tobiasbanks.com.au": "expiryparkpage1.crazydomains.com",
  "tobybanks.com": "ns3.secureparkme.com",
  "virtualassistant.com.au": "ns1.secureparkme.com"
}

  return (
    <div style={{fontFamily:'sans-serif', maxWidth:'1100px', margin:'0 auto', padding:'2rem'}}>
      <h1 style={{fontSize:'2rem', fontWeight:'bold', marginBottom:'0.5rem'}}>🌐 Domain Status Dashboard</h1>
      <p style={{color:'#666', marginBottom:'2rem'}}>All 230 domains — nameserver status and buy prices.</p>

      <div style={{display:'flex', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap'}}>
        <div style={{background:'#d1fae5', borderRadius:'12px', padding:'1rem 1.5rem', flex:1, minWidth:'180px'}}>
          <div style={{fontSize:'2rem', fontWeight:'bold', color:'#065f46'}}>{vercelDomains.length}</div>
          <div style={{color:'#065f46', fontWeight:500}}>✅ On Vercel (deployed)</div>
        </div>
        <div style={{background:'#fee2e2', borderRadius:'12px', padding:'1rem 1.5rem', flex:1, minWidth:'180px'}}>
          <div style={{fontSize:'2rem', fontWeight:'bold', color:'#991b1b'}}>{syrahostDomains.length}</div>
          <div style={{color:'#991b1b', fontWeight:500}}>🔒 Syrahost (existing sites)</div>
        </div>
        <div style={{background:'#fef3c7', borderRadius:'12px', padding:'1rem 1.5rem', flex:1, minWidth:'180px'}}>
          <div style={{fontSize:'2rem', fontWeight:'bold', color:'#92400e'}}>{Object.keys(otherDomains).length}</div>
          <div style={{color:'#92400e', fontWeight:500}}>⚡ Other NS</div>
        </div>
      </div>

      <h2 style={{fontSize:'1.4rem', fontWeight:'bold', marginBottom:'0.5rem', color:'#065f46'}}>✅ Deployed to Vercel ({vercelDomains.length} domains)</h2>
      <p style={{color:'#666', marginBottom:'1rem', fontSize:'0.9rem'}}>Nameservers updated → pages deployed → waiting on DNS propagation</p>
      <table style={{width:'100%', borderCollapse:'collapse', marginBottom:'3rem', fontSize:'0.88rem'}}>
        <thead>
          <tr style={{background:'#f3f4f6'}}>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Domain</th>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Buy Price (AUD)</th>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Rent/mo</th>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Rent+SEO/mo</th>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Open</th>
          </tr>
        </thead>
        <tbody>
          {vercelDomains.map((d: {domain:string, price:number}) => (
            <tr key={d.domain} style={{borderBottom:'1px solid #f3f4f6'}}>
              <td style={{padding:'8px 12px', fontWeight:500}}>{d.domain}</td>
              <td style={{padding:'8px 12px', fontWeight:700, color:'#065f46'}}>${d.price.toLocaleString()}</td>
              <td style={{padding:'8px 12px', color:'#555'}}>$147</td>
              <td style={{padding:'8px 12px', color:'#555'}}>$247</td>
              <td style={{padding:'8px 12px'}}>
                <a href={`https://${d.domain}`} target="_blank" rel="noopener" style={{background:'#2563eb', color:'white', padding:'3px 10px', borderRadius:'6px', fontSize:'0.8rem', textDecoration:'none'}}>↗</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{fontSize:'1.4rem', fontWeight:'bold', marginBottom:'0.5rem', color:'#991b1b'}}>🔒 Existing Sites — Left Untouched ({syrahostDomains.length})</h2>
      <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem', marginBottom:'3rem'}}>
        {syrahostDomains.map((d: string) => (
          <span key={d} style={{background:'#fee2e2', color:'#991b1b', padding:'4px 10px', borderRadius:'20px', fontSize:'0.85rem'}}>{d}</span>
        ))}
      </div>

      <h2 style={{fontSize:'1.4rem', fontWeight:'bold', marginBottom:'0.5rem', color:'#92400e'}}>⚡ Other Nameservers ({Object.keys(otherDomains).length})</h2>
      <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.88rem', marginBottom:'2rem'}}>
        <thead>
          <tr style={{background:'#f3f4f6'}}>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Domain</th>
            <th style={{padding:'10px 12px', textAlign:'left', borderBottom:'2px solid #e5e7eb'}}>Current NS</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(otherDomains).map(([domain, ns]) => (
            <tr key={domain} style={{borderBottom:'1px solid #f3f4f6'}}>
              <td style={{padding:'8px 12px', fontWeight:500}}>{domain}</td>
              <td style={{padding:'8px 12px', color:'#666', fontSize:'0.85rem'}}>{ns as string}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{padding:'1rem', background:'#f3f4f6', borderRadius:'8px', fontSize:'0.85rem', color:'#555'}}>
        <strong>Stripe payment links:</strong>{' '}
        <a href="https://buy.stripe.com/7sY6oJ1psefr4FN2rj3F607" style={{color:'#2563eb'}}>Rent $147/mo</a>{' | '}
        <a href="https://buy.stripe.com/6oU6oJece0oBfkrgi93F608" style={{color:'#2563eb'}}>Rent+SEO $247/mo</a>
      </div>
    </div>
  )
}
