import { Link } from 'react-router-dom';

export default function CTASection({
  title = 'Ready to Clear the Clutter?',
  text  = 'Professional junk removal and property cleanup services are just one message away.',
  primaryLabel   = 'Get Free Estimate',
  primaryTo      = '/contact',
  secondaryLabel = null,
}) {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Take Action</span>
          <h2 id="cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-btn-group reveal delay-2">
          <Link to={primaryTo} className="btn btn-primary btn-xl btn-glow">
            {primaryLabel}
          </Link>
          {secondaryLabel && (
            <a href="tel:+17543272760" className="btn btn-outline btn-xl">
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
