import React, { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Quote Estimator State
  const [serviceType, setServiceType] = useState("villa");
  const [areaSize, setAreaSize] = useState(1500);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const categories = ["All", "Residential Villas", "Commercial & Office", "Post-Event Deep Clean", "Upholstery & Sanitization"];

  const services = [
    {
      id: 1,
      title: "Luxury Goan Villa Deep Sanitation",
      category: "Residential Villas",
      duration: "1 Day Service",
      price: "₹4,500 onwards",
      rating: "5.0",
      tag: "Signature Service",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
      desc: "Hospital-grade sanitization, marble floor diamond polishing, anti-humidity mold treatment, and complete upholstery steam cleaning for ancestral and modern villas.",
    },
    {
      id: 2,
      title: "Commercial Office & Workspace Maintenance",
      category: "Commercial & Office",
      duration: "Contract / Weekly",
      price: "₹12,000 / mo",
      rating: "4.95",
      tag: "Corporate",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      desc: "Dust-free server room care, ergonomic workstation sanitization, glass facade cleaning, and air duct purification for offices across Margao and Panaji.",
    },
    {
      id: 3,
      title: "Post-Event Gala & Estate Clean-Up",
      category: "Post-Event Deep Clean",
      duration: "Immediate Response",
      price: "₹8,500 onwards",
      rating: "4.98",
      tag: "Rapid Dispatch",
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop",
      desc: "Rapid response waste clearing, stain removal from antique flooring, kitchen sanitization, and trash disposal after private beach weddings or estate parties.",
    },
    {
      id: 4,
      title: "Upholstery, Mattress & Carpet Steam Care",
      category: "Upholstery & Sanitization",
      duration: "3-4 Hours",
      price: "₹2,200",
      rating: "4.92",
      tag: "Eco-Certified",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop",
      desc: "Deep thermal extraction eliminating 99.9% of dust mites, allergens, and salt-air moisture residue from high-end leather sofas and Persian rugs.",
    },
  ];

  const filteredServices = services.filter((srv) => {
    const matchesCat = activeCategory === "All" || srv.category === activeCategory;
    const matchesSearch = srv.title.toLowerCase().includes(searchQuery.toLowerCase()) || srv.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Calculate dynamic estimate
  const calculateEstimate = () => {
    let rate = serviceType === "villa" ? 3.5 : serviceType === "commercial" ? 4.5 : 2.5;
    return "₹ " + (areaSize * rate).toLocaleString("en-IN");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Background Gold Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-zinc-700/10 rounded-full blur-[140px]"></div>
      </div>

      {/* Navigation Header */}
      <nav className="bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50 px-6 py-4 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage("home")}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 flex items-center justify-center font-black text-zinc-950 shadow-lg shadow-amber-500/20 text-lg">
            S
          </div>
          <div>
            <p className="font-extrabold tracking-widest text-sm text-white uppercase">
              STELLARIS <span className="text-amber-400 font-light">ECO-CLEAN</span>
            </p>
            <p className="text-[9px] text-zinc-400 tracking-wider uppercase font-semibold">
              Guirim HQ & Margao Dispatch Desk
            </p>
          </div>
        </div>

        {/* Multi-Page Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider">
          <button 
            onClick={() => setCurrentPage("home")} 
            className={`transition-colors ${currentPage === "home" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-zinc-400 hover:text-white"}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage("services")} 
            className={`transition-colors ${currentPage === "services" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-zinc-400 hover:text-white"}`}
          >
            Services & Pricing
          </button>
          <button 
            onClick={() => setCurrentPage("emergency")} 
            className={`transition-colors ${currentPage === "emergency" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-zinc-400 hover:text-white"}`}
          >
            Emergency Dispatch
          </button>
          <button 
            onClick={() => setCurrentPage("about")} 
            className={`transition-colors ${currentPage === "about" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-zinc-400 hover:text-white"}`}
          >
            About Us
          </button>
          <button 
            onClick={() => setCurrentPage("contact")} 
            className={`transition-colors ${currentPage === "contact" ? "text-amber-400 border-b-2 border-amber-400 pb-1" : "text-zinc-400 hover:text-white"}`}
          >
            Margao Desk
          </button>
        </div>

        <div>
          <button 
            onClick={() => setCurrentPage("emergency")}
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 font-black text-xs uppercase px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:opacity-95 transition-all"
          >
            Book Squad
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT ROUTER */}
      <main className="relative z-10">

        {/* ================= PAGE 1: HOME ================= */}
        {currentPage === "home" && (
          <div>
            {/* Hero Section */}
            <header className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
              <span className="inline-block mb-6 bg-zinc-900 text-amber-300 border border-amber-500/30 font-semibold px-4 py-1.5 shadow-sm text-xs rounded-full tracking-wider">
                ✨ Goa's Premier Luxury Eco-Sanitation & Deep Cleaning Hub
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                Immaculate standards, <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600 bg-clip-text text-transparent">
                  crafted for elite Goan estates.
                </span>
              </h1>
              <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Hospital-grade sterilization, non-toxic organic cleaning agents, and specialized white-glove care for luxury villas, commercial HQs, and high-end events.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => setCurrentPage("services")}
                  className="bg-amber-400 text-zinc-950 font-black px-8 py-3.5 rounded-xl shadow-lg hover:bg-amber-300 transition-all text-sm uppercase tracking-wider"
                >
                  Explore Services & Pricing
                </button>
                <button 
                  onClick={() => setCurrentPage("contact")}
                  className="bg-zinc-900 border border-zinc-700 text-zinc-200 font-bold px-8 py-3.5 rounded-xl hover:bg-zinc-800 transition-all text-sm uppercase tracking-wider"
                >
                  Visit Margao Hub
                </button>
              </div>
            </header>

            {/* Live Instant Quote Calculator Section */}
            <section className="max-w-4xl mx-auto px-6 py-12">
              <div className="bg-zinc-900/90 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
                <div className="text-center mb-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Interactive Tool</span>
                  <h3 className="text-2xl font-black text-white">Instant Service Price Estimator</h3>
                  <p className="text-zinc-400 text-xs mt-1">Calculate estimated deep cleaning costs instantly in INR (₹).</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-zinc-300 mb-2">Select Service Category</label>
                      <select 
                        value={serviceType} 
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500"
                      >
                        <option value="villa">Luxury Villa Deep Sanitation</option>
                        <option value="commercial">Commercial Office Maintenance</option>
                        <option value="upholstery">Upholstery & Carpet Steam Care</option>
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold uppercase text-zinc-300 mb-2">
                        <span>Area Size (Sq. Ft.)</span>
                        <span className="text-amber-400">{areaSize} Sq. Ft.</span>
                      </div>
                      <input 
                        type="range" 
                        min="500" 
                        max="8000" 
                        step="100"
                        value={areaSize}
                        onChange={(e) => setAreaSize(Number(e.target.value))}
                        className="w-full accent-amber-400 bg-zinc-800 h-2 rounded-lg cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center flex flex-col justify-center">
                    <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold block mb-1">Estimated Quotation</span>
                    <div className="text-4xl font-black text-amber-400 mb-4">{calculateEstimate()}</div>
                    <button 
                      onClick={() => setCurrentPage("emergency")}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider shadow-md hover:opacity-90 transition-all"
                    >
                      Book With This Estimate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ================= PAGE 2: SERVICES & PRICING ================= */}
        {currentPage === "services" && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-2">Professional Menu</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Eco-Clean Service Portfolio</h2>
              <p className="text-zinc-400 text-sm">Filter through our specialized sanitization packages tailored for Goa.</p>
            </div>

            {/* Search and Filters */}
            <div className="mb-10 space-y-6">
              <div className="max-w-xl mx-auto">
                <input 
                  type="text"
                  placeholder="Search cleaning packages, villas, or upholstery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-amber-500 shadow-xl"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                      activeCategory === cat
                        ? "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20 scale-105"
                        : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredServices.map((srv) => (
                <div key={srv.id} className="bg-zinc-900/80 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-300 p-6">
                  <div>
                    <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-zinc-950/80 backdrop-blur-md text-amber-300 font-bold px-3 py-1 rounded-full text-xs border border-zinc-700">
                          {srv.tag}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-zinc-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-400 font-bold border border-zinc-800">
                        ★ {srv.rating}
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block mb-1">{srv.category}</span>
                    <h3 className="text-xl font-extrabold text-white mb-2">{srv.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex justify-between items-center mt-auto">
                    <div>
                      <span className="text-[10px] text-zinc-500 block uppercase font-bold tracking-wider">Starting Rate</span>
                      <span className="text-xl font-black text-amber-400">{srv.price}</span>
                    </div>
                    <button 
                      onClick={() => setCurrentPage("emergency")}
                      className="bg-zinc-800 hover:bg-amber-400 hover:text-zinc-950 text-zinc-200 font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-all"
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= PAGE 3: EMERGENCY DISPATCH ================= */}
        {currentPage === "emergency" && (
          <div className="max-w-2xl mx-auto px-6 py-16">
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-3xl shadow-2xl">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Fast Response</span>
                <h2 className="text-3xl font-black text-white">Emergency Cleaning Dispatch</h2>
                <p className="text-zinc-400 text-xs mt-1">Our South Goa squad responds within 60 minutes for urgent estate cleanups.</p>
              </div>

              {formSubmitted ? (
                <div className="bg-amber-500/10 border border-amber-500/30 p-6 rounded-2xl text-center text-amber-300 text-sm font-bold">
                  ✓ Dispatch request confirmed! Our Margao supervisor will contact <strong>{clientEmail}</strong> immediately.
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); if(clientEmail) setFormSubmitted(true); }} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">Your Full Name</label>
                    <input type="text" placeholder="Enter name..." required className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">Email Address</label>
                    <input type="email" placeholder="Enter email..." value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-zinc-300 mb-1">Goa Location / Property</label>
                    <input type="text" placeholder="e.g., Loutolim Villa, Benaulim Resort..." required className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-xl p-3.5 text-sm focus:outline-none focus:border-amber-500" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all mt-4">
                    Dispatch Cleaning Squad Now
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* ================= PAGE 4: ABOUT US ================= */}
        {currentPage === "about" && (
          <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">Corporate Profile</span>
              <h2 className="text-3xl font-black text-white">About Stellaris Eco-Clean</h2>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Stellaris Eco-Clean is an elite environmental sanitation and deep cleaning division engineered to serve premium residential villas, luxury hotels, and commercial establishments across Goa. 
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Operating under strict non-toxic ecological standards, our squads utilize hospital-grade equipment, HEPA filtration systems, and biodegradable solutions to protect antique Goan architecture and modern interiors alike.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-zinc-800">
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-center">
                  <div className="text-2xl font-black text-amber-400 mb-1">100%</div>
                  <div className="text-xs text-zinc-400 uppercase font-bold">Eco-Certified</div>
                </div>
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-center">
                  <div className="text-2xl font-black text-amber-400 mb-1">60 Min</div>
                  <div className="text-xs text-zinc-400 uppercase font-bold">Emergency Dispatch</div>
                </div>
                <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 text-center">
                  <div className="text-2xl font-black text-amber-400 mb-1">5★</div>
                  <div className="text-xs text-zinc-400 uppercase font-bold">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= PAGE 5: MARGAO DESK (CONTACT) ================= */}
        {currentPage === "contact" && (
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-12 rounded-3xl shadow-2xl grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block mb-1">Operational Desk</span>
                  <h3 className="text-3xl font-black text-white mb-3">Margao Dispatch HQ</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    Visit our South Goa operations desk or contact our emergency dispatch hotline for immediate scheduling.
                  </p>

                  <div className="space-y-4 text-sm text-zinc-300">
                    <div className="flex items-start gap-3">
                      <span className="text-amber-400 font-bold">📍</span>
                      <span>4th Floor, City Centre, Municipal Garden Square, Margao, Goa 403601</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold">📞</span>
                      <span className="font-mono text-amber-400 font-bold">+91 (0832) 271-8899</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 font-bold">✉️</span>
                      <span>dispatch@stellarisecoclean.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 min-h-[350px] bg-zinc-950 flex flex-col">
                <div className="bg-zinc-900 px-4 py-3 text-xs font-bold text-zinc-300 border-b border-zinc-800 flex justify-between items-center">
                  <span>Margao Office Live GPS</span>
                  <span className="text-emerald-400 font-mono">● LIVE</span>
                </div>
                <iframe
                  title="Margao Office Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.42398273641!2d73.95551937512845!3d15.273600984166205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e1f2b60001%3A0x8e8eb43e4cfcf30!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full flex-grow border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-500 min-h-[300px]"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 px-6 text-center text-xs text-zinc-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 Stellaris Eco-Clean Inc. Guirim HQ & Margao Operations Hub, Goa.</p>
          <div className="flex gap-6 text-zinc-400 font-bold uppercase tracking-wider">
            <button onClick={() => setCurrentPage("contact")} className="hover:text-amber-400">Margao Desk</button>
            <button onClick={() => setCurrentPage("services")} className="hover:text-amber-400">Pricing</button>
            <button onClick={() => setCurrentPage("about")} className="hover:text-amber-400">About</button>
          </div>
        </div>
      </footer>
    </div>
  );
}