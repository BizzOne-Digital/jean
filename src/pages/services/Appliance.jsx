import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg from '../../assets/images/hero-appliance.jpg';
import teamImg from '../../assets/images/appliance-team.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function ApplianceRemoval() {
  useReveal();
  useEffect(() => {
    document.title = 'Appliance Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Safe appliance removal in South Florida. Refrigerators, washers, dryers, stoves and more. Junk Pro Service hauls it all.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Residential" title="Appliance Removal"
        subtitle="Old refrigerators, washers, dryers, stoves — we remove any appliance safely and on schedule." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="service-detail-image reveal-left" style={{ height:400 }}>
              <img src={teamImg} alt="Appliance removal" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
            <div className="reveal-right">
              <span className="service-tag">Residential</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Heavy Lifting? <span className="txt-yellow">We've Got It.</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Old appliances are heavy, awkward, and hard to dispose of properly. We handle the
                entire removal process — disconnecting, hauling out, and responsible disposal.
                No scratched floors, no stress.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Refrigerators & freezers','Washers & dryers','Stoves & ovens','Dishwashers','Microwaves','HVAC units & water heaters'].map(b => (
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
            <span className="label">Why Choose Us</span>
            <h2 style={{ color:'var(--white)' }}>Appliance Removal <span className="txt-yellow">Done Right</span></h2>
            <p>Professional, safe, and eco-responsible appliance hauling.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {[
              { icon:'🔒', title:'Safe Disconnection', desc:'We safely disconnect appliances from electrical, gas, or water before moving.' },
              { icon:'♻️', title:'Eco-Responsible',    desc:'We recycle and donate working appliances whenever possible.' },
              { icon:'⚡', title:'Fast & Efficient',   desc:'One crew, one trip. We get in, get it done, and get out.' },
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
                Book Your <span className="txt-yellow">Appliance Pickup</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', display:'block', marginBottom:'var(--space-4)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Appliance Removal" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Appliance Removal Made Easy" text="Professional crew, honest pricing, same-day service available."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
