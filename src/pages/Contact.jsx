import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import LeadForm from '../components/LeadForm';
import AnimatedSection from '../components/AnimatedSection';

import heroContact from '../assets/images/hero-contact.jpg';

const HERO = heroContact;

const CONTACT = [
  { icon:'📞', label:'Phone',   value:'+1 754-327-2760',          desc:'Call or text anytime',         href:'tel:+17543272760' },
  { icon:'✉️', label:'Email',   value:'handymanseryicesg@mail.com', desc:'We reply within hours',       href:'mailto:handymanseryicesg@mail.com' },
  { icon:'👍', label:'Facebook',value:'Junk Pro Service',           desc:'Follow us for updates',       href:'https://facebook.com' },
  { icon:'🌐', label:'Website', value:'junkproservice.com',         desc:'Our live website',            href:'https://junkproservice.com' },
];

const AREAS = ['Miami','Fort Lauderdale','Broward County','Miami-Dade','Hollywood','Pembroke Pines','Miramar','Coral Springs'];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }});
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Contact() {
  useReveal();
  useEffect(() => {
    document.title = 'Contact | Junk Pro Service — Get a Free Estimate';
    const m = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'),{name:'description'});
    m.setAttribute('content','Contact Junk Pro Service for fast, affordable junk removal. Call +1 754-327-2760 or fill out our free estimate form.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">
      <PageHero image={HERO} label="Get In Touch" title="Contact Junk Pro Service"
        subtitle="Need junk removed? Send us a message and we'll get back to you fast with a free estimate." />

      {/* Main contact section */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-body)' }} aria-labelledby="contact-h">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-16)', alignItems:'start' }}>

            {/* Info */}
            <div className="reveal-left">
              <span className="label">Reach Us</span>
              <h2 id="contact-h" style={{ fontSize:'clamp(1.8rem,3.5vw,2.8rem)', fontWeight:900, color:'var(--white)', margin:'var(--space-3) 0 var(--space-5)' }}>
                We're Ready to <span className="txt-yellow">Help</span>
              </h2>
              <div style={{ width:48, height:3, background:'var(--yellow)', borderRadius:2, marginBottom:'var(--space-8)' }} />
              <p style={{ color:'var(--text-muted)', lineHeight:1.9, marginBottom:'var(--space-8)' }}>
                Whether you have one item or a full property to clear out, we're here to help.
                Reach out by phone, email, or fill out the form and we'll get back to you fast.
              </p>

              <div style={{ display:'flex', flexDirection:'column', gap:'var(--space-3)' }}>
                {CONTACT.map(c => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-card" aria-label={`${c.label}: ${c.value}`}>
                    <span className="contact-card-icon-wrap" aria-hidden="true">{c.icon}</span>
                    <div>
                      <span className="contact-card-label">{c.label}</span>
                      <span className="contact-card-value">{c.value}</span>
                      <span className="contact-card-desc">{c.desc}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Big phone CTA */}
              <a href="tel:+17543272760" style={{
                display:'block', marginTop:'var(--space-8)',
                background:'var(--yellow)', borderRadius:'var(--radius-xl)',
                padding:'var(--space-6) var(--space-8)', textAlign:'center', textDecoration:'none'
              }} aria-label="Call Junk Pro Service">
                <p style={{ fontSize:'var(--fs-xs)', fontWeight:700, letterSpacing:3, textTransform:'uppercase', color:'rgba(0,0,0,0.5)', marginBottom:4 }}>
                  ⚡ Need a Fast Cleanup?
                </p>
                <p style={{ fontSize:'clamp(1.4rem,3vw,2rem)', fontWeight:900, fontFamily:'var(--font-heading)', color:'var(--black)', letterSpacing:-0.5 }}>
                  +1 754-327-2760
                </p>
                <p style={{ fontSize:'var(--fs-xs)', color:'rgba(0,0,0,0.5)', marginTop:4 }}>
                  Same-day service available
                </p>
              </a>
            </div>

            {/* Form */}
            <div className="reveal-right">
              <p style={{ fontWeight:700, color:'var(--white)', marginBottom:'var(--space-5)', fontSize:'var(--fs-lg)' }}>
                Request Your Free Estimate
              </p>
              <LeadForm />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Service Areas */}
      <AnimatedSection className="section-pad" style={{ background:'var(--bg-section)' }} aria-labelledby="areas-h">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Service Areas</span>
            <h2 id="areas-h">We Come to You</h2>
            <p>Proudly serving South Florida homeowners, property managers, and businesses.</p>
          </div>
          <div className="grid-4" style={{ gap:'var(--space-3)' }}>
            {AREAS.map((a, i) => (
              <div key={a} className={`area-tag reveal delay-${(i%4)+1}`}>📍 {a}</div>
            ))}
          </div>
          <p style={{ textAlign:'center', marginTop:'var(--space-6)', color:'var(--text-muted)', fontSize:'var(--fs-sm)' }}>
            Don't see your area?{' '}
            <a href="tel:+17543272760" style={{ color:'var(--yellow)', fontWeight:700 }}>Call us</a>
            {' '}— we may still be able to help.
          </p>
        </div>
      </AnimatedSection>
    </main>
  );
}
