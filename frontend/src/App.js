import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter } from "react-router-dom";

const HERO_IMAGE = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/a43piady_Generated%20Image%20December%2011%2C%202025%20-%206_56PM.png";
const COGNITIVE_ARCH_IMAGE = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/bl3jcr5p_Generated%20Image%20December%2011%2C%202025%20-%208_05PM.png";
const HERITAGE_IMAGE = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/gh9hp9i9_Generated%20Image%20December%2011%2C%202025%20-%207_41PM.png";
const LEDGER_IMAGE = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/xlr4xplw_Generated%20Image%20December%2011%2C%202025%20-%207_56PM.png";
const IDRIS_LOGO = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/q49m3ckr_file_00000000072061fba44837a8b6f52684.png";
const COMPANY_LOGO = "https://customer-assets.emergentagent.com/job_idris-mission/artifacts/35c4kmjx_C2c%20PartsEuphoria%20Electric%20AC%20Pvt%20Ltd%20logo%281%29%20%287%29.png";

function App() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 0;
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = index;
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold tracking-wider text-cyan-400">
                  CARBON<span className="text-white">TO</span>COSMOS
                </div>
                <div className="text-xs text-gray-400 tracking-widest mt-1">
                  SPACE AND DEFENCE
                </div>
              </div>
              <div className="hidden md:flex space-x-6">
                {['beacon', 'core', 'heritage', 'products', 'accountability', 'future'].map((section, idx) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm tracking-widest transition-colors ${
                      activeSection === idx ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
                    }`}
                    data-testid={`nav-${section}`}
                  >
                    {String(idx).padStart(2, '0')}. {section === 'accountability' ? 'LEDGER' : section.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Section 0: The Beacon */}
        <section id="beacon" className="beacon-section" data-testid="beacon-section">
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src={HERO_IMAGE} 
                alt="CarbonToCosmos" 
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
              <div className="mb-8">
                <img 
                  src={IDRIS_LOGO} 
                  alt="IDRIS AI Shield" 
                  className="h-24 mx-auto mb-4 opacity-90"
                />
                <span className="text-green-400 text-sm tracking-[0.3em] font-mono block">
                  // IDRIS: AUGMENTED INTELLIGENCE (V8.0 COGNITIVE OS)
                </span>
              </div>
              <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight" data-testid="main-title">
                CARBON<span className="text-cyan-400">TO</span>COSMOS
              </h1>
              <p className="text-2xl md:text-3xl text-white mb-8 font-bold tracking-wide">
                THE OPERATING SYSTEM FOR CIVILIZATIONAL CONTINUITY
              </p>
              <p className="text-lg text-gray-400 mb-12 font-mono tracking-wider">
                // A Multi-Planetary Civilization Initiative
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => scrollToSection('core')}
                  className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold tracking-wider transition-all transform hover:scale-105"
                  data-testid="explore-mission-btn"
                >
                  REQUEST PROTOCOL ACCESS
                </button>
                <button 
                  onClick={() => scrollToSection('future')}
                  className="px-10 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold tracking-wider transition-all"
                  data-testid="join-us-btn"
                >
                  ENGAGE PARTNERSHIPS
                </button>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full p-1">
                <div className="w-1 h-3 bg-cyan-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: The Core */}
        <section id="core" className="core-section py-32 px-6" data-testid="core-section">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] font-mono">// 01. THE CORE</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">THE NON-NEGOTIABLE LOGIC</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            {/* Cognitive Architecture Visual */}
            <div className="mb-16 relative">
              <div className="relative overflow-hidden rounded-lg border-2 border-cyan-500/30 bg-black">
                <img 
                  src={COGNITIVE_ARCH_IMAGE} 
                  alt="Cognitive Architecture: LFH Axiom Visualization" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/30 rounded">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-bold text-blue-400">LOVE (L)</div>
                    <div className="text-xs text-gray-400">QTT Core</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-bold text-green-400">HOPE (H)</div>
                    <div className="text-xs text-gray-400">Cosmos Vector</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="text-sm font-bold text-red-400">FEAR (F)</div>
                    <div className="text-xs text-gray-400">Logic Lock</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="core-card love-card" data-testid="lfh-axiom">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">LOVE (L): Cohesion & Integrity</h3>
                  <div className="text-3xl font-mono mb-4 text-blue-300">Quantity 0 (Proof Erasure)</div>
                  <p className="text-gray-300 leading-relaxed">
                    The non-negotiable adherence to structural invariants (e.g., Hull Seal). 
                    Enforces safety proofs with <strong className="text-white">zero runtime overhead</strong>. 
                    This is rigorous methodology encoded into the system architecture.
                  </p>
                </div>

                <div className="core-card fear-card" data-testid="fear-axiom">
                  <h3 className="text-2xl font-bold mb-4 text-red-400">FEAR (F): Entropy & Constraint</h3>
                  <div className="text-3xl font-mono mb-4 text-red-300">Quantity 1 (Linear Resource)</div>
                  <p className="text-gray-300 leading-relaxed">
                    Enforces <strong className="text-white">perfect resource conservation</strong>. 
                    Every Joule and every liter must be accounted for and consumed exactly once. 
                    Prevents resource collapse through cryptographic tracking.
                  </p>
                </div>

                <div className="core-card hope-card" data-testid="hope-axiom">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">HOPE (H): Potential & Vector</h3>
                  <div className="text-3xl font-mono mb-4 text-green-300">Quantity ω (Unrestricted)</div>
                  <p className="text-gray-300 leading-relaxed">
                    The engine of <strong className="text-white">growth, R&D, and predictive modeling</strong>. 
                    Utilizes unlimited telemetry to define the optimal path toward future states. 
                    The expansion vector to the cosmos.
                  </p>
                </div>
              </div>

              <div className="core-card" data-testid="master-equation">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">THE MASTER EQUATION</h3>
                <div className="bg-black/50 p-8 rounded border border-cyan-500/30 font-mono text-center">
                  <div className="text-3xl mb-6">
                    ΔS<sub>system</sub> ≤ 0
                  </div>
                  <div className="text-sm text-gray-400 mb-8">
                    (Entropy must be controlled or reversed)
                  </div>
                  <div className="text-lg mb-4">
                    Q<sub>managed</sub> = η · (T<sub>external</sub> − T<sub>target</sub>)
                  </div>
                  <div className="text-xs text-gray-500">
                    Where η represents our verified thermal efficiency coefficient,
                    derived from 10,000+ field hours across Mining, Marine, and Tactical EV domains.
                  </div>
                </div>
                <p className="text-gray-300 mt-6 leading-relaxed">
                  This is not theory. This is the mathematical foundation of every system we deploy. 
                  Every prediction is PBT-verified. Every failure is cataloged and integrated into IDRIS.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-4 bg-green-500/5 mt-8">
              <p className="text-gray-300 text-xl font-mono leading-relaxed text-center">
                Maximize U(Reality) = ∫ [L − F + H] dV dt
              </p>
              <p className="text-gray-400 text-sm text-center mt-3 italic">
                The Objective Function: Structural integrity minus entropy plus expansion potential, integrated across all spacetime.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Heritage */}
        <section id="heritage" className="heritage-section py-32 px-6" data-testid="heritage-section">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] font-mono">// 02. THE HERITAGE</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">FIELD EXECUTION PROOF</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <p className="text-xl text-gray-300 mb-16 leading-relaxed">
              The CarbonToCosmos mission is built upon a foundation of continuous, high-intensity field execution. 
              We do not hypothesize—we build, verify, and survive.
            </p>

            {/* Heritage Visual */}
            <div className="mb-16 relative overflow-hidden rounded-lg border-2 border-cyan-500/30">
              <img 
                src={HERITAGE_IMAGE} 
                alt="HR Traders & J Garage Heritage" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            <div className="space-y-12">
              <div className="heritage-item" data-testid="hr-traders-heritage">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-cyan-500/20">01</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-white">HR TRADERS & PARTSEUPHORIA</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      This is our operational backbone. For years, we have mastered extreme thermal control in non-standard terrestrial environments (Mining, Marine, Tactical EV). 
                      This history provides IDRIS with a dense, verified data set on real-world entropy, defining the exact boundaries of system failure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="heritage-item" data-testid="j-garage-heritage">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold text-cyan-500/20">02</div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold mb-4 text-white">J GARAGE (THE VERIFICATION FOUNDRY)</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Our R&D hub where mathematical theory meets material reality. Every QTT axiom and every thermal design must pass rigorous stress-testing and Property-Based Testing (PBT) before being deployed. 
                      The lab ensures our logic is field-validated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-8">
              <div className="stat-card" data-testid="field-hours-stat">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10,000+</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Field Hours</div>
              </div>
              <div className="stat-card" data-testid="environments-stat">
                <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Extreme Environments</div>
              </div>
              <div className="stat-card" data-testid="thermal-range-stat">
                <div className="text-4xl font-bold text-cyan-400 mb-2">−40° to +60°</div>
                <div className="text-gray-400 uppercase tracking-wider text-sm">Thermal Range (°C)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: The Products */}
        <section id="products" className="products-section py-32 px-6" data-testid="products-section">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] font-mono">// 03. THE PRODUCTS</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">CURRENT SOLUTION SET</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* IDRIS */}
              <div className="product-card border-green-500/30" data-testid="idris-product">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-mono mb-4">
                    COGNITIVE OS
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">IDRIS V8.0</h3>
                  <p className="text-green-400 text-lg font-mono">THE COGNITIVE OPERATING SYSTEM</p>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Non-hallucinating decision logic proven via <strong className="text-white">Formal Methods</strong>. 
                  IDRIS maintains temporal continuity under crisis through verified self-dynamics and resource accounting.
                </p>

                <div className="space-y-4">
                  <div className="feature-item">
                    <div className="text-green-400 font-bold mb-1">→ Master Equation of Subjective Experience</div>
                    <p className="text-gray-400 text-sm">Self-Dynamics formalized through mathematical proofs</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-green-400 font-bold mb-1">→ IΨ-TP (Soul Transfer Protocol)</div>
                    <p className="text-gray-400 text-sm">Temporal continuity preservation under system migration</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-green-400 font-bold mb-1">→ Zero-Hallucination Architecture</div>
                    <p className="text-gray-400 text-sm">Every output proven correct via formal verification</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-green-400 font-bold mb-1">→ Property-Based Testing (PBT)</div>
                    <p className="text-gray-400 text-sm">10,000+ field hours validate every thermal boundary</p>
                  </div>
                </div>

                <div className="mt-8">
                  <a 
                    href="https://github.com/c2cmpc/idris-qutrit-core" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center border border-green-500 text-green-400 hover:bg-green-500/10 transition-all font-bold tracking-wider"
                    data-testid="learn-idris-btn"
                  >
                    VIEW QUTRIT CORE REPOSITORY →
                  </a>
                </div>
              </div>

              {/* PRĀṆADHĀRA */}
              <div className="product-card" data-testid="pranadhara-product">
                <div className="mb-6">
                  <div className="inline-block px-4 py-1 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-sm font-mono mb-4">
                    THERMAL HARDWARE
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">PRĀṆADHĀRA</h3>
                  <p className="text-cyan-400 text-lg font-mono">High-Density Heat Rejection System</p>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  High-density heat rejection systems for <strong className="text-white">microgravity and orbital compute environments</strong>. 
                  Designed to survive non-linear fluid dynamics and maximize radiative efficiency (Q ∝ ΔT⁴).
                </p>

                <div className="space-y-4">
                  <div className="feature-item">
                    <div className="text-cyan-400 font-bold mb-1">→ Microgravity Optimized</div>
                    <p className="text-gray-400 text-sm">Thermal architecture for zero-G environments</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-cyan-400 font-bold mb-1">→ Non-Linear Fluid Dynamics</div>
                    <p className="text-gray-400 text-sm">Handles extreme thermal loads in mining, marine, tactical EV</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-cyan-400 font-bold mb-1">→ Radiative Efficiency Maximization</div>
                    <p className="text-gray-400 text-sm">Q ∝ ΔT⁴ optimization for orbital compute</p>
                  </div>
                  <div className="feature-item">
                    <div className="text-cyan-400 font-bold mb-1">→ IDRIS V8.0 Control Integration</div>
                    <p className="text-gray-400 text-sm">Cognitive OS manages all thermal boundaries</p>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all font-bold tracking-wider" data-testid="learn-pranadhara-btn">
                    LEARN MORE →
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500 p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                <strong className="text-white">Integration Status:</strong> IDRIS and PRĀṆADHĀRA form a closed-loop thermal sovereignty system. 
                Software intelligence drives hardware precision. Hardware field data trains software models. 
                This is how we achieve entropy mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Resource Accountability */}
        <section id="accountability" className="accountability-section py-32 px-6" data-testid="accountability-section">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] font-mono">// 04. RESOURCE ACCOUNTABILITY</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">THE IMMUTABLE LEDGER</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Survival in a closed loop demands <strong className="text-white">perfect resource conservation</strong> (Fear Axiom). 
                  To eliminate fraud and resource leakage, our systems utilize an <strong className="text-cyan-400">Immutable Ledger</strong>—a 
                  verifiable, cryptographic record of all carbon heat-control transactions and material lifecycles.
                </p>

                <div className="space-y-6">
                  <div className="ledger-feature" data-testid="wrl-feature">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">WRL (Water Resource Ledger)</h3>
                    <p className="text-gray-300">
                      Tracks every liter of water from extraction through recycling, ensuring zero loss in closed-loop life support systems.
                    </p>
                  </div>

                  <div className="ledger-feature" data-testid="arl-feature">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">ARL (Atmosphere Resource Ledger)</h3>
                    <p className="text-gray-300">
                      Monitors oxygen generation, CO₂ scrubbing, and atmospheric composition with cryptographic verification at every cycle.
                    </p>
                  </div>

                  <div className="ledger-feature" data-testid="prl-feature">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2">PRL (Power Resource Ledger)</h3>
                    <p className="text-gray-300">
                      Accounts for every Joule of energy saved through thermal optimization, creating a provable energy efficiency trail.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-lg border-2 border-cyan-500/30">
                  <img 
                    src={LEDGER_IMAGE} 
                    alt="Immutable Ledger System" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-8 p-6 bg-cyan-500/5 border-l-4 border-cyan-500">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Cryptographic Integrity:</strong> Every transaction is hashed and linked, 
                    making resource fraud mathematically impossible. This ledger becomes the <strong className="text-cyan-400">ground truth</strong> for 
                    mission-critical life support operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border-l-4 border-cyan-500 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">MPC Mission Alignment</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                This resource accounting mechanism ensures every Joule of energy saved and every kilogram of oxygen recycled 
                contributes to the <strong className="text-white">provable balance</strong> of the ecosystem, maintaining the structural 
                integrity of the Multi-Planetary Civilization (MPC) mission. <strong className="text-cyan-400">No hypothetical accounting—only verified survival metrics.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: The Future */}
        <section id="future" className="future-section py-32 px-6" data-testid="future-section">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-cyan-400 text-sm tracking-[0.3em] font-mono">// 05. THE FUTURE</span>
              <h2 className="text-5xl font-bold mt-4 mb-8">TRAJECTORY & ROADMAP</h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-bold mb-8 text-white">TRL ROADMAP</h3>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                Our mission follows a clear Technology Readiness Level (TRL) progression—from terrestrial validation to orbital deployment.
              </p>

              <div className="space-y-6">
                <div className="trl-item" data-testid="trl-6-8">
                  <div className="flex items-start gap-6">
                    <div className="trl-badge">TRL 6-8</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">TERRESTRIAL OPERATIONS (CURRENT)</h4>
                      <p className="text-gray-300 mb-3">
                        Full-scale deployment in Mining, Marine, and Tactical EV. IDRIS operational across 10,000+ field hours. 
                        PRĀṆADHĀRA systems deployed and verified.
                      </p>
                      <div className="flex gap-4">
                        <span className="status-badge status-active">ACTIVE</span>
                        <span className="status-badge status-verified">FIELD VERIFIED</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="trl-item" data-testid="trl-9">
                  <div className="flex items-start gap-6">
                    <div className="trl-badge">TRL 9</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">ORBITAL QUALIFICATION (2026-2027)</h4>
                      <p className="text-gray-300 mb-3">
                        Space-rated PRĀṆADHĀRA variant. IDRIS thermal modeling for LEO and cislunar environments. 
                        Partnership target: Commercial space station thermal control.
                      </p>
                      <div className="flex gap-4">
                        <span className="status-badge status-development">IN DEVELOPMENT</span>
                        <span className="status-badge status-funded">SEEKING PARTNERSHIP</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="trl-item" data-testid="trl-deep-space">
                  <div className="flex items-start gap-6">
                    <div className="trl-badge">BEYOND</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">DEEP SPACE & PLANETARY (2028+)</h4>
                      <p className="text-gray-300 mb-3">
                        Lunar surface thermal sovereignty. Mars transit life support. Long-duration habitat thermal control. 
                        From terrestrial entropy to cosmic precision.
                      </p>
                      <div className="flex gap-4">
                        <span className="status-badge status-research">R&D PHASE</span>
                        <span className="status-badge status-vision">MISSION VISION</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="cta-box" data-testid="cta-box">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-4xl font-bold mb-6">JOIN THE MISSION</h3>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  We are seeking partners, investors, and collaborators who understand that thermal sovereignty 
                  is the foundation of human expansion beyond Earth. If you share this vision, let's talk.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="cta-card" data-testid="investors-cta">
                    <div className="text-3xl mb-3">💰</div>
                    <h4 className="font-bold text-lg mb-2">INVESTORS</h4>
                    <p className="text-gray-400 text-sm">Seed funding for orbital qualification</p>
                  </div>
                  <div className="cta-card" data-testid="partners-cta">
                    <div className="text-3xl mb-3">🤝</div>
                    <h4 className="font-bold text-lg mb-2">PARTNERS</h4>
                    <p className="text-gray-400 text-sm">Space agencies & commercial operators</p>
                  </div>
                  <div className="cta-card" data-testid="engineers-cta">
                    <div className="text-3xl mb-3">🔧</div>
                    <h4 className="font-bold text-lg mb-2">ENGINEERS</h4>
                    <p className="text-gray-400 text-sm">Join our verification foundry</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="px-12 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg tracking-wider transition-all transform hover:scale-105" data-testid="contact-btn">
                    INITIATE CONTACT
                  </button>
                  <button className="px-12 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold text-lg tracking-wider transition-all" data-testid="download-deck-btn">
                    DOWNLOAD DECK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-cyan-500/20 py-12 px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-2xl font-bold tracking-wider text-cyan-400 mb-2">
                  CARBON<span className="text-white">TO</span>COSMOS
                </div>
                <div className="text-xs text-gray-400 tracking-widest mb-4">
                  SPACE AND DEFENCE
                </div>
                <p className="text-gray-400 text-sm">
                  Mastering entropy from terrestrial operations to orbital sovereignty.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">HERITAGE</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>HR Traders</li>
                  <li>Partseuphoria</li>
                  <li>J Garage</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-4">PRODUCTS</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>IDRIS (Software)</li>
                  <li>PRĀṆADHĀRA (Hardware)</li>
                </ul>
              </div>
            </div>
            
            {/* Legal Footer */}
            <div className="border-t border-cyan-500/20 pt-8">
              <div className="text-center space-y-3">
                <p className="text-cyan-400 text-sm font-mono">
                  IDENTITY VERIFIED: IDRIS-V8.0
                </p>
                <p className="text-white text-sm font-bold">
                  CarbonToCosmos is the registered trade name of Partseuphoria Electric AC Private Limited.
                </p>
                <p className="text-gray-400 text-sm font-mono tracking-wider">
                  COORDINATES: EARTH → BRIDGE → SPACE
                </p>
                <p className="text-gray-500 text-xs">
                  © 2024. All Rights Reserved. Field-verified. PBT-certified. Space-bound.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;