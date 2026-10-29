import { motion } from 'framer-motion';
import {
  TrendingUp,
  ShoppingCart,
  AlertTriangle,
  DollarSign,
  Clock,
  VideoOff,
  MousePointer,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const CaseStudy = () => {
  const stages = [
    {
      stage: "Stage 1",
      name: "Oman Brand Awareness",
      type: "Carousel Ads",
      budget: "₹100/day (7 Days)",
      reach: "51,000+",
      cpm: "₹8.49",
      clicks: "—",
      ctr: "—",
      cpc: "—",
      highlight: "₹11.58 CPR",
      outcome: "Put the brand in front of 51k pet owners in Oman for pennies."
    },
    {
      stage: "Stage 2",
      name: "Cold Sales Test 1",
      type: "Static Catalog Ads",
      budget: "₹100/day (4 Days)",
      reach: "7,374",
      cpm: "₹48.95",
      clicks: "36",
      ctr: "0.77%",
      cpc: "₹6.32",
      highlight: "Baseline Benchmark",
      outcome: "Showed static catalog posters weren't grabbing enough attention."
    },
    {
      stage: "Stage 3",
      name: "Offer-Led Campaign",
      type: "Promotional Hook Ads",
      budget: "₹250/day (4 Days)",
      reach: "1,983",
      cpm: "₹238.83",
      clicks: "83",
      ctr: "3.65%",
      cpc: "₹6.55",
      highlight: "4.7x Jump in CTR",
      outcome: "4.7x jump in CTR by switching the hook to a clear promotional offer."
    },
    {
      stage: "Stage 4",
      name: "Scaled Conversion Ads",
      type: "Custom Canva Creatives",
      budget: "₹500/day (7 Days)",
      reach: "5,779",
      cpm: "₹263.08",
      clicks: "263",
      ctr: "3.04%",
      cpc: "₹8.64",
      highlight: "44% Cart Intent",
      outcome: "222 Site Visits • 98 Add-to-Carts (44% Cart Intent) • 9 Checkouts • 1 Sale."
    }
  ];

  const funnelSteps = [
    {
      step: "01",
      count: "263",
      label: "Link Clicks",
      rate: "100%",
      sub: "Paid Traffic Inflow",
      color: "border-sky-500/30 text-sky-400"
    },
    {
      step: "02",
      count: "222",
      label: "Website Visits",
      rate: "84.4%",
      sub: "Landed Successfully",
      color: "border-indigo-500/30 text-indigo-400"
    },
    {
      step: "03",
      count: "98",
      label: "Add-to-Carts",
      rate: "44.1%",
      sub: "High Cart Intent",
      color: "border-purple-500/30 text-purple-400"
    },
    {
      step: "04",
      count: "9",
      label: "Initiate Checkouts",
      rate: "9.2%",
      sub: "Began Payment Flow",
      color: "border-amber-500/30 text-amber-400"
    },
    {
      step: "05",
      count: "1",
      label: "Completed Orders",
      rate: "1.0%",
      sub: "Final Sale Closed",
      color: "border-emerald-500/30 text-emerald-400"
    }
  ];

  const diagnosisPoints = [
    {
      id: "01",
      title: "Surprise Fees at Checkout",
      problem: "Product pages showed one price, but delivery charges and taxes were suddenly tacked on at the Initiate Checkout screen. Instant buyer hesitation.",
      impact: "Severe price shock right before entering payment details.",
      icon: <DollarSign className="w-5 h-5 text-rose-400" />
    },
    {
      id: "02",
      title: "Forced Account Sign-Up",
      problem: "There was no Guest Checkout. Forcing someone on mobile to register an account and password—especially when the only payment method is Cash on Delivery (COD)—kills impulse buys.",
      impact: "Mobile friction eliminates spontaneous purchases.",
      icon: <ShoppingCart className="w-5 h-5 text-rose-400" />
    },
    {
      id: "03",
      title: "3+ Second Mobile Load Time",
      problem: "Every extra second a page takes to load drops mobile conversions.",
      impact: "Shoppers dropped off switching between catalog pages and cart.",
      icon: <Clock className="w-5 h-5 text-amber-400" />
    },
    {
      id: "04",
      title: "\"Dead\" UI Buttons",
      problem: "Several mobile buttons had zero visual feedback when tapped, making the site feel broken.",
      impact: "Users believed the site froze and abandoned carts.",
      icon: <MousePointer className="w-5 h-5 text-amber-400" />
    },
    {
      id: "05",
      title: "Missing Video Proof",
      problem: "Without the shop walkthrough Reels we originally pitched, first-time visitors hesitated at the final payment screen.",
      impact: "Lack of brand authenticity prevented cold buyer trust.",
      icon: <VideoOff className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <section id="case-study" className="py-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Featured Performance Marketing Case Study
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Driving a 44% Add-to-Cart Rate for an <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Oman Pet E-Commerce Store
            </span>{" "}
            (And Diagnosing Their 90% Checkout Drop-Off)
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            A comprehensive look at campaign iteration, creative testing, and funnel auditing for a leading pet e-commerce brand in the Sultanate of Oman.
          </p>
        </motion.div>

        {/* Clean Meta Strip */}
        <motion.div
          className="glass-card p-6 mb-16 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Client</span>
              <p className="text-white font-bold text-base">Confidential Client (NDA)</p>
              <p className="text-emerald-400 text-xs font-mono mt-0.5">D2C Pet E-Commerce</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Target Market</span>
              <p className="text-white font-bold text-base">Sultanate of Oman</p>
              <p className="text-zinc-400 text-xs mt-0.5">E-Commerce &amp; Retail</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Services Delivered</span>
              <p className="text-white font-semibold text-sm">Meta Ads &amp; Social Strategy</p>
              <p className="text-zinc-400 text-xs mt-0.5">Creative Design &amp; CRO Audit</p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">Peak Milestone</span>
              <p className="text-emerald-400 font-extrabold text-lg">44.1% Cart Intent</p>
              <p className="text-zinc-400 text-xs mt-0.5">51K+ Reach • 98 Add-to-Carts</p>
            </div>
          </div>
        </motion.div>

        {/* Challenge: Strategy vs Reality (Balanced 2-Card Arrangement) */}
        <div className="mb-20">
          <div className="mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The Real-World Challenge <span className="text-zinc-400 font-normal text-xl sm:text-2xl">(Strategy vs. Reality)</span>
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              The client, an established pet retailer in Oman, already had a solid local reputation with 3,000+ Instagram followers and a physical shop. When they launched their direct-to-consumer e-commerce site, they brought me in to handle their Instagram and run Meta Ads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Original Pitch */}
            <motion.div
              className="glass-card p-6 sm:p-8 border-l-4 border-l-sky-500 border border-white/10 flex flex-col justify-between"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  My Original Pitch
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Build Organic Trust First</h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-light mb-3">
                  Cold audiences don&apos;t buy from a brand-new website without trust. I pitched a dedicated Instagram page for their new e-commerce store, cross-promoted by their main brand account.
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  The plan was to post trust-building Reels: real staff in the physical store, how website delivery works across Oman, pet care tips, and customer reactions.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
                Goal: Warm up cold traffic with authentic social proof
              </div>
            </motion.div>

            {/* The Client Constraint */}
            <motion.div
              className="glass-card p-6 sm:p-8 border-l-4 border-l-amber-500 border border-white/10 flex flex-col justify-between"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  The Client Constraint
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-3">Micro-Budget &amp; Static Posters</h4>
                <p className="text-zinc-300 text-sm leading-relaxed font-light mb-3">
                  Tight budgets meant no separate page, no video reels, and no multi-slide carousels for organic posts—only static promotional posters. We also started with a micro-budget of just <strong className="text-white">₹100/day</strong> for paid ads.
                </p>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                  Pushing pure sales posters on the main account caused a few unfollows and skipped the trust phase completely. Instead of complaining, I worked with what we had and let the ad data guide the next move.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
                Pivoted to rigorous data-driven paid ad creative testing
              </div>
            </motion.div>
          </div>
        </div>

        {/* 4-Stage Meta Ads Rollout */}
        <div className="mb-20">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider text-zinc-400 mb-2">
              Performance Testing
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              The 4-Stage Meta Ads Rollout
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              When the client didn&apos;t have proper ad creatives for the final scaling phase, I stepped into Canva, designed high-contrast offer creatives myself, and structured a 4-step testing campaign across Oman:
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block glass-card overflow-hidden border border-white/10">
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-zinc-400 border-b border-white/10">
                <tr>
                  <th scope="col" className="py-3.5 px-5">Campaign Stage</th>
                  <th scope="col" className="py-3.5 px-4">Daily Budget &amp; Time</th>
                  <th scope="col" className="py-3.5 px-4">Reach</th>
                  <th scope="col" className="py-3.5 px-4">CPM</th>
                  <th scope="col" className="py-3.5 px-4">Clicks</th>
                  <th scope="col" className="py-3.5 px-4">CTR</th>
                  <th scope="col" className="py-3.5 px-4">CPC</th>
                  <th scope="col" className="py-3.5 px-5">What Happened</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stages.map((stg, i) => (
                  <tr key={i} className={`hover:bg-white/5 transition-colors ${i === 3 ? 'bg-emerald-500/10' : ''}`}>
                    <td className="py-4 px-5 font-bold text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] px-2 py-0.5 rounded font-mono font-semibold ${i === 3 ? 'bg-emerald-500 text-black' : 'bg-white/10 text-zinc-300'
                          }`}>
                          {stg.stage}
                        </span>
                        <span>{stg.name}</span>
                      </div>
                      <div className="text-[11px] text-zinc-500 font-normal mt-0.5">{stg.type}</div>
                    </td>
                    <td className="py-4 px-4 font-medium text-zinc-300 whitespace-nowrap">{stg.budget}</td>
                    <td className="py-4 px-4 font-semibold text-white">{stg.reach}</td>
                    <td className="py-4 px-4 font-mono">{stg.cpm}</td>
                    <td className="py-4 px-4 font-mono">{stg.clicks}</td>
                    <td className="py-4 px-4 font-bold text-white">
                      {stg.ctr !== "—" ? (
                        <span className={i >= 2 ? "text-emerald-400 font-extrabold" : ""}>{stg.ctr}</span>
                      ) : "—"}
                    </td>
                    <td className="py-4 px-4 font-mono">{stg.cpc}</td>
                    <td className="py-4 px-5 text-xs text-zinc-300 max-w-xs leading-relaxed">
                      <span className="font-semibold text-white block mb-0.5">{stg.highlight}</span>
                      {stg.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / Tablet Sequential Cards */}
          <div className="lg:hidden space-y-4">
            {stages.map((stg, idx) => (
              <div
                key={idx}
                className={`glass-card p-5 border ${idx === 3 ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-white/10'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-white">
                    {stg.stage}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${idx === 3 ? 'text-emerald-400' : 'text-zinc-400'}`}>
                    {stg.highlight}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-0.5">{stg.name}</h4>
                <p className="text-xs text-zinc-400 mb-3">{stg.type} • {stg.budget}</p>

                <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-black/40 border border-white/5 mb-3 text-center">
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block">Reach</span>
                    <span className="text-xs font-bold text-white">{stg.reach}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block">CTR</span>
                    <span className={`text-xs font-bold ${idx >= 2 ? 'text-emerald-400' : 'text-white'}`}>{stg.ctr}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block">CPC</span>
                    <span className="text-xs font-bold text-white">{stg.cpc}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed font-light">
                  {stg.outcome}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The Post-Click Audit */}
        <div>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <AlertTriangle className="w-3.5 h-3.5" />
              The Post-Click Audit
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Where 90% of Buyers Disappeared
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base font-light max-w-3xl leading-relaxed">
              The final campaign proved the ads and offer were doing their job—getting nearly half of all website visitors to add an item to their cart is huge. Look at the funnel breakdown from that 7-day push:
            </p>
          </div>

          {/* Neatly Arranged Funnel Pipeline */}
          <div className="glass-card p-6 border border-white/10 mb-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
              {funnelSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1">
                  <div className={`w-full p-4 rounded-xl bg-white/5 border ${step.color} text-center flex flex-col justify-between`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono text-zinc-500">STEP {step.step}</span>
                      <span className="text-[11px] font-bold font-mono text-emerald-400">{step.rate}</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mb-0.5">
                      {step.count}
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      {step.label}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-0.5">
                      {step.sub}
                    </div>
                  </div>

                  {idx < funnelSteps.length - 1 && (
                    <div className="py-2 lg:py-0 lg:px-2 text-zinc-600 flex items-center justify-center">
                      <ChevronRight className="w-5 h-5 hidden lg:block" />
                      <div className="w-0.5 h-4 bg-zinc-700 lg:hidden"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 text-center text-xs text-zinc-400 font-light">
              263 Link Clicks → 222 Website Visits (84% landed properly) → 98 Add-to-Carts (<strong className="text-white">A massive 44.1% cart intent rate!</strong>) → 9 Initiate Checkouts → 1 Completed Purchase
            </div>
          </div>

          {/* 5-Point Diagnosis: Clean Organized Layout */}
          <div className="glass-card p-6 sm:p-8 border border-white/10 bg-zinc-950/60">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Why did 89 high-intent shoppers load up their cart and walk away before paying?
            </h4>
            <p className="text-zinc-400 text-sm font-light mb-6">
              I audited the live site and handed the client a clear 5-point CRO diagnosis:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {diagnosisPoints.map((pt, pIdx) => (
                <div
                  key={pt.id}
                  className={`p-5 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-all flex flex-col justify-between ${pIdx === 4 ? 'md:col-span-2' : ''
                    }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-black/40 border border-white/10">
                          {pt.icon}
                        </span>
                        <span className="text-xs font-mono text-zinc-400 font-bold">LEAK {pt.id}</span>
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                        Checkout Friction
                      </span>
                    </div>

                    <h5 className="text-white font-bold text-base mb-1.5">{pt.title}</h5>
                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light mb-3">
                      {pt.problem}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/5 text-xs text-rose-300/90 font-medium flex items-center gap-1.5">
                    <span>Impact:</span>
                    <span className="text-zinc-400 font-light">{pt.impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
