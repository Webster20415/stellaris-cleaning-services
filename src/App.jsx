import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Input,
  Accordion,
  AccordionItem,
} from "@heroui/react";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clientEmail, setClientEmail] = useState("");

  const categories = [
    "All",
    "Residential Deep Clean",
    "Commercial & Offices",
    "Post-Event Cleanup",
    "Villa & Heritage Care",
  ];

  const services = [
    {
      id: 1,
      title: "Heritage Villa & Estate Deep Sanitation",
      category: "Villa & Heritage Care",
      date: "Turnaround",
      time: "1-Day Complete Service",
      venue: "Servicing Panaji, Margao & Coastal Goa",
      price: "₹4,500",
      rating: "4.98",
      tag: "Eco-Friendly Solvents",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
      desc: "Comprehensive restoration and eco-friendly deep cleaning for Portuguese heritage homes, tiled roofs, and sprawling Goan estates.",
    },
    {
      id: 2,
      title: "Commercial Office & Tech Hub Sanitation",
      category: "Commercial & Offices",
      date: "Schedule",
      time: "Flexible Night Shift",
      venue: "Margao Municipal & Tech Parks",
      price: "₹8,000",
      rating: "4.94",
      tag: "HEPA Air Filtered",
      image:
        "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?q=80&w=800&auto=format&fit=crop",
      desc: "High-grade desk disinfection, IT server room dust management, workstation glass polish, and corporate floor buffing.",
    },
    {
      id: 3,
      title: "Post-Event & Auditorium Rapid Cleanup",
      category: "Post-Event Cleanup",
      date: "Express Crew",
      time: "4-Hour Turnover",
      venue: "Ravindra Bhavan & Event Arenas",
      price: "₹6,200",
      rating: "4.97",
      tag: "Rapid Clearance",
      image:
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=800&auto=format&fit=crop",
      desc: "Rapid post-concert waste disposal, stage floor sanitization, seating row restoration, and venue turnover for major productions.",
    },
    {
      id: 4,
      title: "Luxury Apartment & Penthouse Reset",
      category: "Residential Deep Clean",
      date: "Est. Duration",
      time: "5 Hours Complete Reset",
      venue: "Available Across South & North Goa",
      price: "₹3,200",
      rating: "4.91",
      tag: "100% Non-Toxic",
      image:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop",
      desc: "Kitchen degreasing, bathroom steam sterilization, glass balcony crystal shine, and mattress allergen extraction.",
    },
  ];

  const filteredServices = services.filter((srv) => {
    const matchesCategory =
      activeCategory === "All" || srv.category === activeCategory;
    const matchesSearch =
      srv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (clientEmail) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white antialiased">
      {/* Immersive Background Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]"></div>
      </div>

      {/* 1. Header Navigation */}
      <Navbar
        isBordered
        className="bg-slate-900/70 backdrop-blur-xl border-slate-800/80 sticky top-0 z-50 shadow-lg"
      >
        <NavbarBrand className="gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-400 flex items-center justify-center font-black text-slate-950 shadow-lg shadow-emerald-500/30">
            C
          </div>
          <div>
            <p className="font-extrabold text-white tracking-wider text-base">
              STELLARIS <span className="text-emerald-400 font-light">ECO-CLEAN</span>
            </p>
            <p className="text-[10px] text-slate-400 tracking-widest uppercase font-semibold">
              Goa Sanitation Hub
            </p>
          </div>
        </NavbarBrand>

        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <a
              href="#services"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Services
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#features"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Why Choose Us
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#hq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors"
            >
              Margao Desk
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#faq"
              className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-emerald-400 transition-colors"
            >
              FAQ
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              as="a"
              href="#hq"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 border-none text-xs px-5 rounded-xl transition-all"
            >
              Book Inspection
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* 2. Hero Section */}
      <header className="relative z-10 pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <Chip
          variant="flat"
          className="mb-6 bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-semibold px-4 py-1.5 shadow-sm text-xs rounded-full"
        >
          🌿 100% Eco-Certified & Non-Toxic • Margao, Goa
        </Chip>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15]">
          Pristine spaces, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            restored with care.
          </span>
        </h1>
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          From residential villa deep cleans to commercial tech hub sanitation and post-event auditorium resets, our Margao crew delivers spotless results.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto bg-slate-900/90 p-2.5 rounded-2xl border border-slate-800 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl flex flex-col sm:flex-row gap-2">
          <div className="flex items-center gap-3 flex-grow px-3">
            <svg
              className="w-5 h-5 text-emerald-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input
              placeholder="Search villa care, office sanitation, or Goan service..."
              value={searchQuery}
              onValueChange={setSearchQuery}
              variant="flat"
              classNames={{
                inputWrapper:
                  "bg-transparent border-none text-white shadow-none focus:outline-none",
                input: "text-white placeholder:text-slate-500",
              }}
            />
          </div>
          <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-slate-950 font-black px-7 rounded-xl shadow-md transition-all">
            Find Service
          </Button>
        </div>
      </header>

      {/* 3. Filter Categories & Services Grid */}
      <section id="services" className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <Chip
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`cursor-pointer transition-all duration-300 px-4 py-2 text-xs font-semibold rounded-xl ${
                activeCategory === cat
                  ? "bg-emerald-500 text-slate-950 font-black shadow-lg shadow-emerald-500/30 scale-105 border-transparent"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 shadow-sm"
              }`}
            >
              {cat}
            </Chip>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <Card
              key={srv.id}
              className="bg-slate-900/60 border border-slate-800/80 shadow-xl hover:shadow-2xl hover:border-emerald-500/50 hover:-translate-y-1 transition-all duration-300 group rounded-3xl overflow-hidden backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <Chip
                    size="sm"
                    className="bg-slate-950/80 text-emerald-300 font-bold backdrop-blur-md border border-slate-700/80 shadow-sm"
                  >
                    {srv.tag}
                  </Chip>
                </div>
                <div className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-full text-xs text-amber-400 font-bold shadow-md border border-slate-800">
                  ★ {srv.rating}
                </div>
              </div>

              <CardBody className="p-7">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                  {srv.category}
                </span>
                <h3 className="text-xl font-extrabold text-white group-hover:text-emerald-300 transition-colors mb-3 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {srv.desc}
                </p>

                <div className="space-y-2.5 text-xs text-slate-300 bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-emerald-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      <strong className="text-white">Coverage Area:</strong> {srv.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 text-emerald-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      <strong className="text-white">{srv.date}:</strong> {srv.time}
                    </span>
                  </div>
                </div>
              </CardBody>

              <CardFooter className="px-7 pb-7 pt-0 flex justify-between items-center">
                <div>
                  <span className="text-[11px] text-slate-500 block font-medium uppercase tracking-wider">
                    Package Pricing
                  </span>
                  <span className="text-2xl font-black text-emerald-400">
                    {srv.price}
                  </span>
                </div>
                <Button
                  size="sm"
                  className="bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 font-extrabold px-5 py-2 rounded-xl transition-all shadow-md"
                >
                  Book Service
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-slate-500 bg-slate-900/60 rounded-3xl border border-slate-800 shadow-sm">
            No service found matching "{searchQuery}". Try searching for Margao or select "All".
          </div>
        )}
      </section>

      {/* 4. Features Section */}
      <section id="features" className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Chip
            size="sm"
            className="mb-3 bg-emerald-950 text-emerald-300 font-bold border border-emerald-800"
          >
            Guaranteed Quality
          </Chip>
          <h2 className="text-3xl font-black text-white mb-3">
            Why Choose Stellaris Eco-Clean
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Industrial-grade cleaning equipment combined with biodegradable, eco-certified solutions for Goan homes and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black mb-5 text-xl border border-emerald-500/20">
              01
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              100% Non-Toxic Solvents
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Safe for children, pets, and heritage Goan woodwork. Zero harsh chemical fumes left behind.
            </p>
          </div>
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-black mb-5 text-xl border border-teal-500/20">
              02
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              Background-Verified Crew
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              All technicians are trained, background-checked, and operated directly out of our Margao hub.
            </p>
          </div>
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 shadow-lg hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-black mb-5 text-xl border border-cyan-500/20">
              03
            </div>
            <h4 className="font-extrabold text-white text-lg mb-2">
              Rapid Post-Event Clearance
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Specialized rapid response teams equipped to reset event halls, wedding lawns, and auditoriums within hours.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Headquarters & Interactive Map Section */}
      <section id="hq" className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <Chip
                  size="sm"
                  className="bg-emerald-950 text-emerald-300 mb-4 border border-emerald-800 font-bold"
                >
                  Margao Operations Desk
                </Chip>
                <h3 className="text-3xl font-black text-white mb-3">
                  Schedule an Inspection
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Visit our South Goa office or reach our dispatch desk directly for customized estate deep cleaning or post-event quotes.
                </p>

                <div className="space-y-5 text-sm text-slate-300 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        HQ Address
                      </span>
                      <span className="font-semibold text-slate-200">
                        4th Floor, City Centre, Municipal Garden Square,
                        Margao, Goa 403601
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 border border-teal-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        Direct Service Line
                      </span>
                      <span className="text-emerald-400 font-mono font-bold text-base">
                        +91 (0832) 271-9988
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block uppercase font-bold tracking-wider">
                        Dispatch Email
                      </span>
                      <span className="font-semibold text-slate-200">
                        clean@stellarisecoclean.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polished Inquiry Form */}
              <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800">
                <h4 className="font-extrabold text-white text-sm mb-1">
                  Request Free Quote
                </h4>
                <p className="text-xs text-slate-400 mb-4">
                  We will send available slot details to your email.
                </p>

                {formSubmitted ? (
                  <div className="bg-emerald-500/10 border border-emerald-500/30 p-3.5 rounded-xl text-center text-emerald-300 text-xs font-bold">
                    ✓ Quote request sent! Our Margao team will contact{" "}
                    <strong>{clientEmail}</strong>.
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter work email..."
                      value={clientEmail}
                      onValueChange={setClientEmail}
                      isRequired
                      size="sm"
                      classNames={{
                        inputWrapper:
                          "bg-slate-900 border-slate-800 text-white shadow-inner h-11",
                        input: "text-white placeholder:text-slate-500 text-sm",
                      }}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-slate-950 font-black h-11 rounded-xl shadow-md transition-all text-sm"
                    >
                      Submit Inspection Request
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Embedded Google Map */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-800 relative min-h-[400px] bg-slate-950 flex flex-col shadow-inner">
              <div className="bg-slate-900 px-5 py-3.5 text-white flex justify-between items-center text-xs font-medium border-b border-slate-800">
                <span className="font-semibold flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>{" "}
                  Margao Office Live GPS
                </span>
                <span className="text-slate-400">
                  15.2736° N, 73.9581° E
                </span>
              </div>
              <iframe
                title="Stellaris Eco-Clean Margao Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.42398273641!2d73.95551937512845!3d15.273600984166205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb3e1f2b60001%3A0x8e8eb43e4cfcf30!2sMargao%2C%20Goa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full flex-grow border-0 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions Section */}
      <section id="faq" className="relative z-10 max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm">
            Everything you need to know about our Goan eco-cleaning services.
          </p>
        </div>

        <Accordion variant="splitted" className="gap-3">
          <AccordionItem
            key="1"
            aria-label="Eco Solvents"
            title="Are your cleaning solvents safe for delicate Goan heritage woodwork and tiles?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            Yes! All products used by Stellaris Eco-Clean are 100% non-toxic, eco-certified, and specifically formulated for antique Goan furniture, terracotta tiles, and high-end marble.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Post Event"
            title="How fast can a crew clear a post-event venue like Ravindra Bhavan?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            Our rapid post-event team can dispatch up to 8 technicians immediately following a gala or production, completely resetting auditorium seating, stage floors, and trash within 4 hours.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Service Area"
            title="Which areas in Goa are covered by your Margao dispatch desk?"
            className="bg-slate-900/80 border border-slate-800 text-slate-200 shadow-sm rounded-2xl"
            classNames={{
              title: "text-white font-bold text-base",
              content: "text-slate-400 text-sm leading-relaxed pb-4",
            }}
          >
            We service all of South Goa (Margao, Raia, Loutolim, Colva, Benaulim, Ponda) as well as commercial hubs across Panaji and Vasco.
          </AccordionItem>
        </Accordion>
      </section>

      {/* 7. Footer */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950 py-10 px-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © 2026 Stellaris Eco-Clean Inc. Global Operations Hub: Margao, Goa,
            India.
          </p>
          <div className="flex gap-6 text-slate-400 font-semibold">
            <a href="#hq" className="hover:text-emerald-400 transition-colors">
              Margao Desk
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}