import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg   from '../../assets/images/hero-construction.jpg';
import cleanupImg from '../../assets/images/construction-cleanup.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function ConstructionDebris() {
  useReveal();
  useEffect(() => {
    document.title = 'Construction Debris Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Construction debris removal in South Florida. Drywall, wood, tile, renovation waste hauled away fast. Junk Pro Service serves homeowners and contractors.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Construction" title="Construction Debris Removal"
        subtitle="Renovation waste, drywall, wood, tile, and materials cleared fast for homeowners and contractors." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="service-detail-image reveal-left" style={{ height:420 }}>
              <img src={cleanupImg} alt="Construction site cleanup" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
            <div className="reveal-right">
              <span className="service-tag">Construction</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Post-Renovation <span className="txt-yellow">Cleared Fast</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Renovations leave a mess. We specialize in cleaning up after construction and
                remodeling projects — quickly, safely, and without disrupting your timeline.
                We serve homeowners, general contractors, and property managers.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Drywall & plaster','Wood & lumber','Tile & flooring','Metal scraps','Roofing materials','Post-construction sweep'].map(b => (
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
            <span className="label">Who We Help</span>
            <h2 style={{ color:'var(--white)' }}>Built for <span className="txt-yellow">Builders & Owners</span></h2>
            <p>We work alongside homeowners, contractors, and property managers.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {[
              { icon:'🏠', title:'Homeowners',     desc:'Post-renovation cleanouts so you can enjoy your new space immediately.' },
              { icon:'🔨', title:'Contractors',    desc:'We keep your job site clean during and after every project.' },
              { icon:'🔑', title:'Prop. Managers', desc:'Fast debris removal between tenants or during renovations.' },
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
                Get Your Site <span className="txt-yellow">Cleared Today</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', display:'block', marginBottom:'var(--space-4)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Construction Debris" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Construction Debris? We Handle It."
        text="Fast, professional debris removal for any size project."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
