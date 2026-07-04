import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg from '../../assets/images/hero-commercial.jpg';
import teamImg from '../../assets/images/commercial-team.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Commercial() {
  useReveal();
  useEffect(() => {
    document.title = 'Commercial Junk Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Commercial junk removal in South Florida. Offices, retail, warehouses, and storage cleared with minimal disruption. Junk Pro Service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Commercial" title="Commercial Junk Removal"
        subtitle="Offices, retail stores, warehouses, and commercial spaces cleared with minimal disruption to your business." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="service-detail-image reveal-left" style={{ height:420 }}>
              <img src={teamImg} alt="Commercial building cleanup team" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
            <div className="reveal-right">
              <span className="service-tag">Commercial</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Business Junk, <span className="txt-yellow">Gone Fast</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                We understand businesses can't afford long downtime. Our team works
                efficiently and around your schedule — early morning, evenings, or weekends —
                to keep your operations running without disruption.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Office furniture & equipment','Retail store cleanouts','Storage unit cleanup','Warehouse debris removal','Restaurant equipment','Commercial renovations'].map(b => (
                  <li key={b} className="service-benefit-item"><span className="benefit-check">✓</span>{b}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary btn-lg">Get Free Estimate</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }}>
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Industries We Serve</span>
            <h2 style={{ color:'var(--white)' }}>Any Business, <span className="txt-yellow">Any Size</span></h2>
            <p>From single-office cleanouts to full commercial facility hauls.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {[
              { icon:'🏢', title:'Offices',       desc:'Furniture, equipment, and general office junk removed cleanly and quickly.' },
              { icon:'🛍️', title:'Retail Stores', desc:'Fixture removal, old inventory, and full store cleanouts handled with care.' },
              { icon:'🏭', title:'Warehouses',    desc:'Large-scale debris, pallets, and heavy equipment cleared efficiently.' },
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
                Keep Your Business <span className="txt-yellow">Clean</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Flexible scheduling around your business hours. Request a free quote today.
              </p>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', display:'block', marginBottom:'var(--space-4)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Commercial Junk Removal" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Commercial Cleanup, Done Right"
        text="Flexible scheduling, honest pricing, zero disruption to your business."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
