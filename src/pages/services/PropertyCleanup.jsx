import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg from '../../assets/images/hero-property.jpg';
import afterImg from '../../assets/images/property-after.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function PropertyCleanup() {
  useReveal();
  useEffect(() => {
    document.title = 'Property Cleanups | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Full property cleanouts in South Florida. Garage cleanouts, move-out cleanups, estate cleanouts, foreclosure cleanouts. Junk Pro Service handles it all.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Cleanout" title="Property Cleanups"
        subtitle="Garage cleanouts, move-outs, estate cleanups — total property clearing done right." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="reveal-left">
              <span className="service-tag">Cleanout</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Total Property <span className="txt-yellow">Cleared Out</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                From overstuffed garages to full estate cleanouts, Junk Pro Service clears
                any property quickly and professionally. We handle the entire process —
                you just unlock the door.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Garage & basement cleanouts','Move-out & move-in cleanups','Estate cleanouts','Rental property turnover','Foreclosure cleanouts','Hoarding cleanup support'].map(b => (
                  <li key={b} className="service-benefit-item"><span className="benefit-check">✓</span>{b}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Estimate</Link>
            </div>
            <div className="service-detail-image reveal-right" style={{ height:420 }}>
              <img src={afterImg} alt="Clean property after full cleanout" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Cleanout Types</span>
            <h2 style={{ color:'var(--white)' }}>Every Property <span className="txt-yellow">We Cover</span></h2>
            <p>Residential, rental, estate, or commercial — we clean it all out.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {[
              { icon:'🏡', title:'Home Cleanouts',   desc:'Whole-home, garage, basement, or attic — fully cleared in one visit.' },
              { icon:'🔑', title:'Rental Turnover',  desc:'Fast move-out cleanups between tenants to get your unit market-ready.' },
              { icon:'⚖️', title:'Estate Cleanouts', desc:'Compassionate, respectful clearing of estates after loss or downsizing.' },
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
                Ready to <span className="txt-yellow">Clear Out?</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', display:'block', marginBottom:'var(--space-4)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Property Cleanup" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Property Cleanouts Done Right"
        text="Full-service cleanouts with honest pricing. Call us or book online."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
