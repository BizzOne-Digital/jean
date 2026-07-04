import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import heroAbout   from '../assets/images/hero-about.jpg';
import storyImg    from '../assets/images/furniture-team.jpg';

const DIFF = [
  { icon:'🏆', title:'Professional Service',      desc:'Trained crew that treats your property with complete respect every visit.' },
  { icon:'💰', title:'Honest Pricing',             desc:'Upfront estimates. No hidden fees. No surprises when the job is done.' },
  { icon:'📅', title:'Easy Scheduling',            desc:'Book online or by phone. Same-day and next-day appointments available.' },
  { icon:'🏠', title:'Respect for Your Property',  desc:'We protect your floors, walls, and surroundings during every removal.' },
  { icon:'♻️', title:'Cleanup-Focused',            desc:'We do the heavy lifting and leave your space clean and ready to use.' },
  { icon:'📍', title:'Local & Reliable',           desc:'Your neighbors. Familiar with the area and committed to the community.' },
];

const WHO = [
  { icon:'🏡', title:'Homeowners',        desc:'Reclaim your garage, basement, or yard. We make home cleanups effortless.' },
  { icon:'🔑', title:'Property Managers', desc:'Fast, reliable cleanouts for tenant move-outs and property turnovers.' },
  { icon:'💼', title:'Small Businesses',  desc:'Keep your workspace clean with dependable, scheduled junk removal support.' },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();
  useEffect(() => {
    document.title = 'About Us | Junk Pro Service';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Learn about Junk Pro Service — our mission, story, and commitment to honest pricing, fast service, and customer satisfaction.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={heroAbout} label="Our Story" title="About Junk Pro Service"
        subtitle="Reliable junk removal built around honest pricing, fast service, and customer satisfaction." />

      {/* Story */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="story-h">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-12)', alignItems:'center' }}>
            <div className="service-detail-image reveal-left" style={{ height:420 }}>
              <img src={storyImg} alt="Junk Pro Service team at work" loading="lazy" />
              <div className="service-detail-image-overlay" />
            </div>
            <div className="reveal-right">
              <span className="label">Our Story</span>
              <h2 id="story-h" style={{ fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-5)' }}>
                Built on Trust &amp;<br /><span className="txt-yellow">Hard Work</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-6)' }} />
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-5)' }}>
                Junk Pro Service provides fast, reliable, and affordable junk removal for homes,
                businesses, and property managers. We remove unwanted items including furniture,
                appliances, yard waste, construction debris, and more.
              </p>
              <p style={{ color:'var(--text-muted)', lineHeight:1.9 }}>
                Founded with a simple promise — to make cleanups easy, honest, and stress-free —
                we have served hundreds of satisfied customers across South Florida.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }} aria-labelledby="mission-h">
        <div className="container">
          <div style={{ maxWidth:760, margin:'0 auto', textAlign:'center' }} className="reveal">
            <span className="label">Our Purpose</span>
            <h2 id="mission-h" style={{ fontSize:'clamp(1.8rem,3.5vw,3rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-6)' }}>
              Our <span className="txt-yellow">Mission</span>
            </h2>
            <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, margin:'0 auto var(--space-8)' }} />
            <p style={{ fontSize:'var(--fs-lg)', color:'var(--text-muted)', lineHeight:1.9 }}>
              Our mission is to make cleanups easy with professional service, honest pricing,
              and customer satisfaction every time. Every homeowner, property manager, and
              business deserves a fast, reliable, and affordable cleanup solution they can trust.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* What Makes Us Different */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="diff-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Our Edge</span>
            <h2 id="diff-h">What Makes Us <span className="txt-yellow">Different</span></h2>
            <p>We do more than haul junk. We deliver a complete, professional experience.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {DIFF.map((d,i) => (
              <div key={d.title} className={`why-card reveal delay-${(i%3)+1}`}>
                <div className="why-card-icon" aria-hidden="true">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Who We Help */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }} aria-labelledby="who-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Who We Serve</span>
            <h2 id="who-h">Who We Help</h2>
            <p>From residential to commercial — our services are built for everyone.</p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'var(--space-5)' }}>
            {WHO.map((w,i) => (
              <div key={w.title} className={`audience-card reveal delay-${i+1}`}>
                <span className="audience-icon" aria-hidden="true">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <CTASection title="Let's Make Your Cleanup Easy"
        text="Ready to get started? Our team is standing by to give you a fast, honest estimate."
        primaryLabel="Get Free Estimate" primaryTo="/contact" secondaryLabel="Call +1 754-327-2760" />
    </main>
  );
}
