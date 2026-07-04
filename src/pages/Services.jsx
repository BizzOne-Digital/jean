import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import AnimatedSection from '../components/AnimatedSection';
import EstimateModal from '../components/EstimateModal';
import heroServices  from '../assets/images/hero-services.jpg';
import imgFurniture  from '../assets/images/hero-furniture.jpg';
import imgAppliance  from '../assets/images/hero-appliance.jpg';
import imgYard       from '../assets/images/hero-yard.jpg';
import imgConstruct  from '../assets/images/hero-construction.jpg';
import imgProperty   from '../assets/images/hero-property.jpg';
import imgCommercial from '../assets/images/hero-commercial.jpg';

const HERO = heroServices;

const SERVICES = [
  {
    id: 'furniture', tag: 'Residential', icon: '🛋️',
    title: 'Furniture Removal',
    image: imgFurniture,
    desc: "We remove unwanted sofas, chairs, tables, mattresses, cabinets, and other household furniture quickly and professionally. No job is too big or too small.",
    benefits: ['Sofas & sectionals', 'Beds & mattresses', 'Dining sets & tables', 'Cabinets & dressers', 'Office furniture', 'Outdoor furniture'],
  },
  {
    id: 'appliance', tag: 'Residential', icon: '🏠',
    title: 'Appliance Removal',
    image: imgAppliance,
    desc: "We help remove old refrigerators, washers, dryers, stoves, and other unwanted appliances. We handle all the heavy lifting.",
    benefits: ['Refrigerators & freezers', 'Washers & dryers', 'Stoves & ovens', 'Dishwashers', 'Microwaves', 'HVAC units'],
  },
  {
    id: 'yard', tag: 'Outdoor', icon: '🌿',
    title: 'Yard Waste Removal',
    image: imgYard,
    desc: 'We remove branches, leaves, outdoor debris, and yard cleanup waste to help your outdoor space look clean and well-maintained again.',
    benefits: ['Tree branches & limbs', 'Leaves & grass clippings', 'Old fencing & lumber', 'Dirt & soil removal', 'Garden debris', 'Storm cleanup'],
  },
  {
    id: 'construction', tag: 'Construction', icon: '🔨',
    title: 'Construction Debris',
    image: imgConstruct,
    desc: 'We remove renovation debris, wood, drywall, materials, and cleanup waste for homeowners, contractors, and property managers.',
    benefits: ['Drywall & plaster', 'Wood & lumber', 'Tile & flooring', 'Metal scraps', 'Renovation materials', 'Post-construction cleanup'],
  },
  {
    id: 'property', tag: 'Cleanout', icon: '🔑',
    title: 'Property Cleanups',
    image: imgProperty,
    desc: 'We help with garage cleanouts, rental cleanups, move-out cleanups, estate cleanups, and general property junk removal.',
    benefits: ['Garage & basement cleanouts', 'Move-out cleanups', 'Estate cleanouts', 'Rental property turnover', 'Foreclosure cleanouts', 'Hoarding cleanup support'],
  },
  {
    id: 'commercial', tag: 'Commercial', icon: '🏢',
    title: 'Commercial Junk Removal',
    image: imgCommercial,
    desc: 'We provide cleanup support for small businesses, offices, storage areas, and commercial spaces with minimal disruption.',
    benefits: ['Office furniture & equipment', 'Retail store cleanouts', 'Storage unit cleanup', 'Warehouse debris removal', 'Restaurant equipment', 'Commercial renovations'],
  },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
      .forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Services() {
  useReveal();
  const [modalService, setModalService] = useState(null); // null = closed

  useEffect(() => {
    document.title = 'Services | Junk Pro Service — Junk Removal & Property Cleanup';
    const m = document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement('meta'), { name: 'description' });
    m.setAttribute('content', 'From furniture removal to full property cleanouts — Junk Pro Service offers comprehensive junk removal for homes, businesses, and property managers.');
    if (!m.parentNode) document.head.appendChild(m);
  }, []);

  return (
    <main className="main-content inner-page page-enter" id="main">

      {/* Modal */}
      {modalService && (
        <EstimateModal
          service={modalService}
          onClose={() => setModalService(null)}
        />
      )}

      <PageHero
        image={HERO}
        label="What We Do"
        title="Junk Removal & Cleanup Services"
        subtitle="From single-item pickups to full property cleanouts — we make junk removal simple."
      />

      {/* Services List */}
      <div style={{ background: 'var(--bg-body)' }}>
        {SERVICES.map((svc, idx) => (
          <AnimatedSection
            key={svc.id}
            className="service-detail-section"
            aria-labelledby={`svc-${svc.id}`}
          >
            <div className="container">
              <div className={`service-detail-grid${idx % 2 !== 0 ? ' reverse' : ''}`}>

                {/* Image */}
                <div className="service-detail-image reveal-left">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    onError={e => e.target.style.opacity = 0.15}
                  />
                  <div className="service-detail-image-overlay" />
                </div>

                {/* Content */}
                <div className="service-detail-content reveal-right">
                  <span className="service-tag">{svc.tag}</span>

                  <h2 id={`svc-${svc.id}`}>
                    <span aria-hidden="true">{svc.icon} </span>
                    {svc.title}
                  </h2>

                  <p>{svc.desc}</p>

                  <ul className="service-benefits" aria-label={`${svc.title} items`}>
                    {svc.benefits.map(b => (
                      <li key={b} className="service-benefit-item">
                        <span className="benefit-check" aria-hidden="true">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* ── DUAL BUTTONS ── */}
                  <div className="svc-btn-row">
                    <button
                      className="btn btn-primary"
                      onClick={() => setModalService(svc.title)}
                      aria-label={`Request estimate for ${svc.title}`}
                    >
                      Request Estimate
                    </button>
                    <Link
                      to={`/services/${svc.id}`}
                      className="btn btn-outline-yellow"
                      aria-label={`View details for ${svc.title}`}
                    >
                      View Detail
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Yellow CTA banner */}
      <AnimatedSection
        className="section-yellow section-pad"
        aria-labelledby="svc-cta-h"
      >
        <div className="container reveal" style={{ textAlign: 'center' }}>
          <h2 id="svc-cta-h" style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 900, marginBottom: 'var(--space-4)' }}>
            Not sure what service you need?
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.65)', maxWidth: 520, margin: '0 auto var(--space-8)', lineHeight: 1.8 }}>
            Send us a message and we'll help you choose the right cleanup option. No pressure — just honest advice.
          </p>
          <div className="cta-btn-group">
            <Link to="/contact" className="btn btn-dark btn-lg">Send Us a Message</Link>
            <a href="tel:+17543272760" className="btn btn-outline-yellow btn-lg">
              Call +1 754-327-2760
            </a>
          </div>
        </div>
      </AnimatedSection>

      <CTASection
        title="Ready to Book Your Junk Removal?"
        text="Fast, reliable service with honest pricing. Contact Junk Pro Service today."
        primaryLabel="Book Junk Removal"
        primaryTo="/contact"
        secondaryLabel="Call Now"
      />
    </main>
  );
}
