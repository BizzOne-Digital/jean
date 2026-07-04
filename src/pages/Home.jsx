import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import LeadForm from '../components/LeadForm';
import AnimatedSection from '../components/AnimatedSection';

import imgFurniture    from '../assets/images/hero-furniture.jpg';
import imgAppliance    from '../assets/images/hero-appliance.jpg';
import imgYard         from '../assets/images/hero-yard.jpg';
import imgConstruction from '../assets/images/hero-construction.jpg';
import imgProperty     from '../assets/images/hero-property.jpg';
import imgCommercial   from '../assets/images/hero-commercial.jpg';
import imgBefore       from '../assets/images/before-junk.jpg';
import imgAfter        from '../assets/images/after-clean.jpg';

const SERVICES = [
  { image: imgFurniture,    icon:'🛋️', title:'Furniture Removal',       to:'/services/furniture',    description:'Sofas, chairs, tables, mattresses, cabinets — gone fast and professionally.' },
  { image: imgAppliance,    icon:'🏠', title:'Appliance Removal',        to:'/services/appliance',    description:'Old fridges, washers, dryers, and stoves removed safely and efficiently.' },
  { image: imgYard,         icon:'🌿', title:'Yard Waste Removal',       to:'/services/yard',         description:'Branches, leaves, and outdoor debris cleared so your yard shines again.' },
  { image: imgConstruction, icon:'🔨', title:'Construction Debris',      to:'/services/construction', description:'Renovation waste, wood, and drywall hauled away fast for any project.' },
  { image: imgProperty,     icon:'🔑', title:'Property Cleanups',        to:'/services/property',     description:'Garage cleanouts, move-outs, estate sales — total property clearing.' },
  { image: imgCommercial,   icon:'🏢', title:'Commercial Junk Removal',  to:'/services/commercial',   description:'Offices, storage areas, and commercial spaces cleared with minimal disruption.' },
];

const AUDIENCES = [
  { icon:'🏡', title:'Homeowners',       desc:'Reclaim your garage, basement, or yard. We make home cleanups fast and stress-free.' },
  { icon:'🔑', title:'Property Managers',desc:'Fast cleanouts between tenants. Trusted by landlords across South Florida.' },
  { icon:'💼', title:'Small Businesses', desc:'Keep your commercial space clean and organized with reliable junk removal.' },
];

const MARQUEE = ['Furniture Removal','Appliance Removal','Yard Waste','Construction Debris','Property Cleanouts','Commercial Cleanup','Same-Day Service'];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.reveal-fade')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useReveal();

  useEffect(() => {
    document.title = 'Junk Pro Service | Local Junk Removal & Property Cleanup Experts';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name:'description' });
    m.setAttribute('content','Fast, reliable, and affordable junk removal for homeowners, property managers, and small businesses. Contact Junk Pro Service for professional cleanup help.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content page-enter" id="main">

      {/* ── HERO ── */}
      <Hero />

      {/* ── MARQUEE TICKER ── */}
      <div className="marquee-track" aria-hidden="true">
        <div className="marquee-inner">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="stats-bar" aria-label="Business highlights">
        <div className="container">
          <div className="stats-grid">
            {[['500+','Jobs Completed'],['5 ★','Customer Rating'],['Same Day','Available'],['100%','Satisfaction']].map(([v,l], i) => (
              <div key={l} className={`stat-item reveal delay-${i+1}`}>
                <h3>{v}</h3>
                <p>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO / TRUST ── */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="intro-heading">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-16)', alignItems:'center' }}>
            <div className="reveal-left">
              <span className="label" style={{ color:'var(--yellow)' }}>Who We Are</span>
              <h2 id="intro-heading" style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, color:'var(--white)', marginTop:'var(--space-3)', marginBottom:'var(--space-5)', letterSpacing:'-0.5px' }}>
                Cleanups Made<br /><span className="txt-yellow">Simple</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }} aria-hidden="true" />
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-6)' }}>
                Junk Pro Service helps homeowners, property managers, and small businesses remove
                unwanted items quickly and professionally. From furniture and appliances to yard
                waste and construction debris, we make the process simple from start to finish.
              </p>
              <Link to="/about" className="btn btn-outline-yellow">Learn About Us →</Link>
            </div>
            {/* Right side — feature list */}
            <div className="reveal-right" style={{ display:'flex', flexDirection:'column', gap:'var(--space-4)' }}>
              {[
                ['⚡','Fast Response','We respond within hours and offer same-day service.'],
                ['💰','Honest Pricing','Upfront estimates. No hidden fees. Ever.'],
                ['♻️','Eco-Responsible','We donate and recycle whenever possible.'],
                ['📍','Locally Trusted','South Florida based and community focused.'],
              ].map(([icon, title, desc]) => (
                <div key={title} style={{ display:'flex', gap:'var(--space-4)', alignItems:'flex-start',
                  background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:'var(--radius-xl)',
                  padding:'var(--space-5) var(--space-6)', transition:'border-color 0.25s ease' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,193,7,0.3)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <span style={{ fontSize:'1.4rem', flexShrink:0 }} aria-hidden="true">{icon}</span>
                  <div>
                    <div style={{ fontWeight:700, color:'var(--white)', marginBottom:4 }}>{title}</div>
                    <div style={{ fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── SERVICES ── */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }} aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">What We Do</span>
            <h2 id="services-heading">Our Services</h2>
            <p>From single-item pickups to full property cleanouts — we handle it all.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} {...s} className={`delay-${(i%3)+1}`} />
            ))}
          </div>
          <div style={{ textAlign:'center', marginTop:'var(--space-10)' }} className="reveal">
            <Link to="/services" className="btn btn-primary btn-lg">View All Services →</Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ── BEFORE / AFTER DRAMATIC SPLIT ── */}
      <section style={{ background:'var(--black)', padding:'var(--space-24) 0', overflow:'hidden' }} aria-labelledby="ba-heading">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:4, borderRadius:'var(--radius-2xl)', overflow:'hidden', minHeight:420 }}>
            <div className="reveal-left" style={{ position:'relative', overflow:'hidden' }}>
              <img src={imgBefore}
                alt="Cluttered property before junk removal" loading="lazy"
                style={{ width:'100%', height:'100%', objectFit:'cover', filter:'grayscale(30%)' }}/>
              <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.35)' }} />
              <div style={{ position:'absolute', top:'var(--space-4)', left:'var(--space-4)', background:'var(--yellow)', color:'var(--black)', fontWeight:900, fontSize:'var(--fs-xs)', letterSpacing:3, textTransform:'uppercase', padding:'5px 14px', borderRadius:100 }}>
                Before
              </div>
            </div>
            <div className="reveal-right" style={{ position:'relative', overflow:'hidden' }}>
              <img src={imgAfter}
                alt="Clean property after junk removal" loading="lazy"
                style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.15)' }} />
              <div style={{ position:'absolute', top:'var(--space-4)', right:'var(--space-4)', background:'var(--yellow)', color:'var(--black)', fontWeight:900, fontSize:'var(--fs-xs)', letterSpacing:3, textTransform:'uppercase', padding:'5px 14px', borderRadius:100 }}>
                After
              </div>
            </div>
          </div>
          <div className="reveal" style={{ textAlign:'center', marginTop:'var(--space-10)' }}>
            <span className="label" id="ba-heading">The Transformation</span>
            <h2 style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'var(--white)', marginTop:'var(--space-3)', marginBottom:'var(--space-4)' }}>
              From Cluttered to <span className="txt-yellow">Spotless</span>
            </h2>
            <p style={{ color:'var(--text-muted)', maxWidth:520, margin:'0 auto var(--space-8)' }}>
              We help you reclaim your property without the stress. One call and our crew handles everything.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Book Your Cleanup</Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <ProcessSection />

      {/* ── LEAD GEN ── */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="lead-heading">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-16)', alignItems:'start' }}>
            <div className="reveal-left">
              <span className="label">Free Estimate</span>
              <h2 id="lead-heading" style={{ fontSize:'clamp(2rem,4vw,3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-5)', letterSpacing:'-0.5px' }}>
                Need Junk Gone <span className="txt-yellow">Fast?</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }} aria-hidden="true" />
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-8)' }}>
                Tell us what needs to be removed and we'll get back to you with a fast, honest estimate.
                No obligation. No hidden fees.
              </p>
              <a href="tel:+17543272760" style={{ display:'flex', alignItems:'center', gap:'var(--space-3)',
                fontSize:'clamp(1.3rem,2.5vw,1.8rem)', fontWeight:900, color:'var(--yellow)', fontFamily:'var(--font-heading)',
                marginBottom:'var(--space-4)', textDecoration:'none' }}
                aria-label="Call Junk Pro Service">
                📞 +1 754-327-2760
              </a>
              <p style={{ fontSize:'var(--fs-sm)', color:'var(--text-faint)' }}>Or fill out the form — we'll reach you fast.</p>
            </div>
            <div className="reveal-right">
              <LeadForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── AUDIENCES ── */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }} aria-labelledby="audience-heading">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Who We Serve</span>
            <h2 id="audience-heading">Built for Everyone</h2>
            <p>Whether you're a homeowner, landlord, or business owner — we've got you.</p>
          </div>
          <div className="grid-3">
            {AUDIENCES.map((a, i) => (
              <div key={a.title} className={`audience-card reveal delay-${i+1}`}>
                <span className="audience-icon" aria-hidden="true">{a.icon}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
                <Link to="/contact" className="btn btn-outline-yellow btn-sm" style={{ marginTop:'var(--space-6)' }}>
                  Get Started →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── FINAL CTA ── */}
      <CTASection
        title="Ready to Clear the Clutter?"
        text="Professional junk removal and property cleanup services are just one message away."
        primaryLabel="Contact Junk Pro Service"
        primaryTo="/contact"
        secondaryLabel="Call Us Now"
      />
    </main>
  );
}
