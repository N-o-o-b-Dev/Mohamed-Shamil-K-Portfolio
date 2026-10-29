import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Car, 
  Palette, 
  Zap, 
  CheckCircle
} from 'lucide-react';

const products = [
  {
    title: "Driveway ERP",
    subtitle: "Full-Stack Car Dealership & Rental System",
    badge: "100% Vibe Coded — Zero Manual Code Written",
    stack: ["React.js", "Firebase", "Google Antigravity"],
    problem: "When I was helping out at my brother’s pre-owned car sales and rental showroom, every phone call was a headache. If a customer called asking for a car, we had to manually dig through records to check which cars were on the lot, which ones were in the workshop for maintenance, who still owed rental money, and where their ID proofs were stored.",
    solution: "I used AI \"vibe coding\" in Google Antigravity to build a custom Dealership ERP from scratch—without typing a single line of code by hand.",
    features: [
      {
        name: "Zero Double-Bookings",
        desc: "A smart conflict-resolution system blocks staff from booking the same vehicle on overlapping dates."
      },
      {
        name: "Complete Customer & Dealer Profiles",
        desc: "Stores full customer history—DOB, ID proof uploads, exact amount paid, pending balance, and payment mode (UPI/Cash/Bank)."
      },
      {
        name: "Vehicle Entry/Exit & Maintenance Logs",
        desc: "Tracks every car from the moment it enters the showroom to workshop repairs and final rental return."
      },
      {
        name: "One-Click PDF Billing & Owner Dashboard",
        desc: "Generates instant PDF invoices and shows a live dashboard of cars on rent, cars in the garage, high-maintenance vehicles, and total net profit."
      }
    ],
    icon: <Car className="w-5 h-5 text-emerald-400" />
  },
  {
    title: "Unieke App",
    subtitle: "Turning an Outdated Website into a Modern UI",
    badge: "AI-Powered UI/UX Overhaul",
    stack: ["Google Stitch AI", "Google Antigravity", "Figma"],
    problem: "The founder of Unieke approached me because their existing web UI looked dated and clunky, hurting user trust. At that point, I wasn't a traditional from-scratch UI designer.",
    solution: "Right around that time, Google dropped Stitch AI. I used structured prompt engineering inside Stitch AI to generate a clean, modern interface across 10+ core screens, then pulled those designs into Google Antigravity to tweak the spacing, responsiveness, and user flow. The client loved the transformation—and the entire UI overhaul was powered by AI.",
    features: [
      {
        name: "10+ Core Screens Re-Architected",
        desc: "Complete visual redesign from hero onboarding to product display and account views."
      },
      {
        name: "Prompt-Engineered Component Tokens",
        desc: "Leveraged precise Stitch AI prompts for consistent color palettes, typography, and card hierarchies."
      },
      {
        name: "Refined User Flow & Spacing",
        desc: "Polished responsiveness, micro-interactions, and mobile navigation inside Google Antigravity."
      },
      {
        name: "Instant Client Trust & Adoption",
        desc: "Turned a dated legacy interface into a polished consumer experience in record turnaround time."
      }
    ],
    icon: <Palette className="w-5 h-5 text-sky-400" />
  },
  {
    title: "High-Converting Client Landing Pages",
    subtitle: "Custom Fast-Loading React Pages (India & Oman)",
    badge: "Sub-Second Mobile Load Times",
    stack: ["React.js", "Tailwind CSS", "AI Coding Workflows"],
    problem: "Traditional WordPress templates are bloated with plugins, taking 4-6 seconds to load on mobile connections in India and the GCC. Slow speeds cause visitors to bounce before seeing the primary offer.",
    solution: "Built and launched 10+ custom, mobile-first landing pages for service and e-commerce clients across India and Oman. Unlike bloated WordPress templates, these React pages load fast, keep mobile ad traffic focused on a single call-to-action, and turn clicks into WhatsApp leads and sales.",
    features: [
      {
        name: "10+ Custom Pages Shipped",
        desc: "Engineered specifically for conversion optimization across Indian and GCC markets."
      },
      {
        name: "Lightning Fast Mobile Speeds",
        desc: "Lean React code bundles eliminating the latency of heavy page builders."
      },
      {
        name: "Laser-Focused Single-CTA Funnel",
        desc: "Removed distracting external links to channel all ad traffic to direct contact."
      },
      {
        name: "WhatsApp Lead & Sales Generation",
        desc: "Direct integration with pre-filled message triggers for fast consultation closing."
      }
    ],
    icon: <Zap className="w-5 h-5 text-amber-400" />
  }
];

const AiProducts = () => {
  return (
    <section id="ai-products" className="py-24 relative bg-zinc-950/60 border-t border-b border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Built Products &amp; &quot;Vibe Coding&quot; Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built with AI, Guided by Engineering: <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-amber-400">
              My &quot;Vibe Coding&quot; Projects
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            While my earlier engineering projects were created entirely by me with manual code, today I don&apos;t spend weeks writing boilerplate syntax anymore. For building client tools and web apps right now, I combine my engineering background in database architecture and OOP with AI &quot;vibe coding&quot; (<strong className="text-white">Google Antigravity, Cursor, Stitch AI, Claude</strong>) to ship working web tools with zero manual code at 10x speed.
          </p>
        </motion.div>

        {/* Cohesive Products List */}
        <div className="space-y-10">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card p-6 sm:p-9 border border-white/10 hover:border-white/20 transition-all"
            >
              {/* Product Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm font-medium">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.stack.map((item, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-mono font-medium px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid md:grid-cols-2 gap-4 mb-6 p-5 rounded-xl bg-black/40 border border-white/5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1.5">
                    The Real-World Problem
                  </span>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                    {product.problem}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1.5">
                    How I Solved It with AI
                  </span>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                    {product.solution}
                  </p>
                </div>
              </div>

              {/* Feature Grid (Clean 2x2 symmetrical layout) */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                  What It Does Today
                </span>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {product.features.map((feat, fIdx) => (
                    <div 
                      key={fIdx}
                      className="p-3.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2.5"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white text-xs sm:text-sm font-semibold mb-0.5">{feat.name}</h4>
                        <p className="text-zinc-400 text-xs leading-relaxed font-light">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiProducts;
