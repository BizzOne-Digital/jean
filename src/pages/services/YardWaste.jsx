import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg from '../../assets/images/hero-yard.jpg';
import cleanImg from '../../assets/images/yard-clean.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function YardWaste() {
  useReveal();
  useEffect(() => {
    document.title = 'Yard Waste Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Yard waste removal in South Florida. Branches, leaves, garden debris, storm cleanup. Fast and affordable by Junk Pro Service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Outdoor" title="Yard Waste Removal"
        subtitle="Branches, leaves, garden debris, and storm cleanup — we clear your outdoor space fast." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="reveal-left">
              <span className="service-tag">Outdoor</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Restore Your <span className="txt-yellow">Outdoor Space</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Whether it's after a storm, a big landscaping project, or years of buildup —
                Junk Pro Service clears all types of yard waste quickly and thoroughly. We haul
                it all away so you don't have to make multiple trips.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Tree branches & limbs','Leaves & grass clippings','Old fencing & lumber','Dirt & soil removal','Garden debris & mulch','Storm damage cleanup'].map(b => (
                  <li key={b} className="service-benefit-item"><span className="benefit-check">✓</span>{b}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Estimate</Link>
            </div>
            <div className="service-detail-image reveal-right" style={{ height:420 }}>
              <img src={cleanImg} alt="Clean yard after waste removal" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="label">We Also Handle</span>
            <h2 style={{ color:'var(--white)' }}>Storm &amp; <span className="txt-yellow">Emergency Cleanup</span></h2>
            <p>After heavy storms, we move fast to help you restore your property.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {[
              { icon:'🌪️', title:'Storm Debris',    desc:'Fallen trees, branches, and scattered debris cleared quickly after storms.' },
              { icon:'🌿', title:'Overgrown Yards', desc:'Years of buildup, dead plants, and overgrown hedges removed in one visit.' },
              { icon:'🏡', title:'Property Prep',   desc:'Yard cleared before landscaping, selling, or new outdoor projects.' },
            ].map((c, i) => (
              <div key={c.title} className={`why-card reveal delay-${i+1}`}>
                <div className="why-card-icon">{c.icon}</div>
                <h3>{c.title}</h3><p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'start' }}>
            <div className="reveal-left">
              <span className="label">Free Estimate</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Clear Your Yard <span className="txt-yellow">Today</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', display:'block', marginBottom:'var(--space-4)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Yard Waste Removal" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Your Yard Deserves a Fresh Start"
        text="Fast yard waste removal with honest pricing. Call or book online today."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
