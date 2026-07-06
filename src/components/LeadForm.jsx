import { useState } from 'react';

const WEB3FORMS_KEY = 'd5fe78b6-152f-4cfa-a8a3-01f5723211af';

const SERVICES = [
  'Furniture Removal',
  'Appliance Removal',
  'Yard Waste Removal',
  'Construction Debris',
  'Property Cleanup',
  'Commercial Junk Removal',
  'Other',
];

const TYPES = ['Home', 'Rental Property', 'Business', 'Commercial Property', 'Other'];

export default function LeadForm({ preselected = '' }) {
  const [done,    setDone]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState('');

  const [form, setForm] = useState({
    name:         '',
    phone:        '',
    email:        '',
    service:      preselected || '',
    propertyType: '',
    address:      '',
    date:         '',
    message:      '',
  });

  const set = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key:    WEB3FORMS_KEY,
          subject:       `New Estimate Request — ${form.service || 'Junk Removal'}`,
          from_name:     'Junk Pro Service Website',
          name:          form.name,
          phone:         form.phone,
          email:         form.email || 'Not provided',
          service:       form.service || 'Not specified',
          property_type: form.propertyType || 'Not specified',
          address:       form.address || 'Not provided',
          preferred_date: form.date || 'Not specified',
          message:       form.message || 'No message',
          botcheck:      '',   // honeypot
        }),
      });

      const data = await res.json();

      if (data.success) {
        setDone(true);
      } else {
        setError('Something went wrong. Please call us at +1 754-327-2760.');
      }
    } catch {
      setError('Network error. Please call us at +1 754-327-2760.');
    } finally {
      setLoading(false);
    }
  };

  // Success state
  if (done) return (
    <div className="lead-form">
      <div className="form-success">
        <div className="success-icon">✅</div>
        <h3>Request Received!</h3>
        <p>Thank you! Junk Pro Service will contact you shortly with your free estimate.</p>
      </div>
    </div>
  );

  return (
    <form className="lead-form" onSubmit={submit} noValidate aria-label="Free estimate request">

      {/* Honeypot — hidden from users, catches bots */}
      <input type="checkbox" name="botcheck" style={{ display:'none' }} tabIndex={-1} autoComplete="off" />

      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="lf-name">Full Name *</label>
          <input
            id="lf-name" name="name" type="text"
            placeholder="Your full name"
            value={form.name} onChange={set}
            required autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lf-phone">Phone *</label>
          <input
            id="lf-phone" name="phone" type="tel"
            placeholder="+1 (754) 000-0000"
            value={form.phone} onChange={set}
            required autoComplete="tel"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="lf-email">Email</label>
        <input
          id="lf-email" name="email" type="email"
          placeholder="your@email.com"
          value={form.email} onChange={set}
          autoComplete="email"
        />
      </div>

      <div className="form-grid-2">
        <div className="form-group">
          <label htmlFor="lf-service">Service Needed *</label>
          <select id="lf-service" name="service" value={form.service} onChange={set} required>
            <option value="">Select service…</option>
            {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="lf-type">Property Type</label>
          <select id="lf-type" name="propertyType" value={form.propertyType} onChange={set}>
            <option value="">Select type…</option>
            {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="lf-address">Pickup Address</label>
        <input
          id="lf-address" name="address" type="text"
          placeholder="123 Main St, City, State"
          value={form.address} onChange={set}
          autoComplete="street-address"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lf-date">Preferred Date</label>
        <input
          id="lf-date" name="date" type="date"
          value={form.date} onChange={set}
          min={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="form-group">
        <label htmlFor="lf-msg">What needs to be removed?</label>
        <textarea
          id="lf-msg" name="message" rows={3}
          placeholder="Describe what needs to go…"
          value={form.message} onChange={set}
        />
      </div>

      {error && (
        <p style={{ color:'#cc0000', fontSize:'var(--fs-sm)', marginBottom:'var(--space-4)', fontWeight:600 }}>
          ⚠️ {error}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg btn-glow"
        style={{ width:'100%', justifyContent:'center' }}
        disabled={loading}
      >
        {loading ? 'Sending…' : 'Request Free Estimate →'}
      </button>
    </form>
  );
}
