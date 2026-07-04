import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import LeadForm from '../../components/LeadForm';
import AnimatedSection from '../../components/AnimatedSection';
import heroImg  from '../../assets/images/hero-furniture.jpg';
import teamImg  from '../../assets/images/furniture-team.jpg';
import afterImg from '../../assets/images/furniture-after.jpg';

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function FurnitureRemoval() {
  useReveal();
  useEffect(() => {
    document.title = 'Furniture Removal | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Professional furniture removal in South Florida. We remove sofas, beds, tables, cabinets and more. Fast, affordable, same-day service.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroImg} label="Residential" title="Furniture Removal"
        subtitle="We remove sofas, chairs, tables, mattresses, cabinets and more — fast, professional, and affordable." />

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="service-detail-image reveal-left" style={{ height:400 }}>
              <img src={teamImg} alt="Furniture removal team" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
            <div className="reveal-right">
              <span className="service-tag">Residential</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Haul Away Any <span className="txt-yellow">Furniture</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-5)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Whether you're moving, redecorating, or simply clearing out, Junk Pro Service makes
                furniture removal effortless. Our crew arrives on time, lifts everything out, and
                leaves your space clean — no hassle, no hidden fees.
              </p>
              <ul className="service-benefits" style={{ marginBottom:'var(--space-7)' }}>
                {['Sofas & sectionals','Beds & mattresses','Dining sets & tables','Cabinets & dressers','Office furniture','Outdoor furniture'].map(b => (
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
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="reveal-left">
              <span className="label">How It Works</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-6)' }}>
                Simple as <span className="txt-yellow">1, 2, 3</span>
              </h2>
              {[
                ['01','Call or Book Online','Tell us what furniture you need removed and where you\'re located.'],
                ['02','We Arrive On Time','Our crew shows up at the scheduled time, ready to work.'],
                ['03','We Haul & Clean Up','We load everything and sweep the area before we leave.'],
              ].map(([num, title, desc]) => (
                <div key={num} style={{ display:'flex', gap:'var(--space-4)', marginBottom:'var(--space-5)', alignItems:'flex-start' }}>
                  <div style={{ width:44, height:44, borderRadius:'50%', background:'var(--yellow)', color:'var(--black)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:'var(--fs-sm)', flexShrink:0 }}>{num}</div>
                  <div>
                    <div style={{ fontWeight:700, color:'var(--white)', marginBottom:4 }}>{title}</div>
                    <div style={{ fontSize:'var(--fs-sm)', color:'var(--text-muted)' }}>{desc}</div>
                  </div>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop:'var(--space-4)' }}>Schedule Pickup</Link>
            </div>
            <div className="service-detail-image reveal-right" style={{ height:380 }}>
              <img src={afterImg} alt="Clean room after furniture removal" loading="lazy" />
              <div className="service-detail-image-overlay"/>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'start' }}>
            <div className="reveal-left">
              <span className="label">Free Estimate</span>
              <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-4)' }}>
                Ready to Clear <span className="txt-yellow">Your Space?</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }}/>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-6)' }}>
                Tell us what needs to go and we'll give you a fast, honest estimate. No obligation, no hidden fees.
              </p>
              <a href="tel:+17543272760" style={{ fontSize:'var(--fs-xl)', fontWeight:900, color:'var(--yellow)', fontFamily:'var(--font-heading)', display:'block', marginBottom:'var(--space-3)' }}>
                📞 +1 754-327-2760
              </a>
              <Link to="/services" style={{ color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>← Back to all services</Link>
            </div>
            <div className="reveal-right"><LeadForm preselected="Furniture Removal" /></div>
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Furniture Removal Made Easy" text="Same-day and next-day pickups available. Honest pricing. Professional crew."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call Now" />
    </main>
  );
}
