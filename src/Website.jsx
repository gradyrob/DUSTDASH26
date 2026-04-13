import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const C = {
  green:   '#5B7F62',
  darkGreen: '#1E2F24',
  gold:    '#C8A765',
  cream:   '#F3F1EA',
  card:    '#FFFCF6',
  text:    '#1a2e1f',
  muted:   '#6b7c6e',
  border:  '#e2ddd4',
  white:   '#ffffff',
}

const AREAS = [
  'Twin Waters','Maroochydore','Kuluin','Forest Glen','Mons',
  'Buderim','Alexandra Headland','Mooloolaba','Mountain Creek','Minyama',
]

const SERVICES = [
  {
    icon: '🧹',
    name: 'Regular Clean',
    tag: 'Weekly or Fortnightly',
    desc: 'Keep your home consistently fresh. Our maintenance cleans cover all the key areas so you can enjoy a clean home without lifting a finger.',
    items: ['All rooms dusted & vacuumed','Bathrooms scrubbed','Kitchen benches & sink','Mopping hard floors','Bins emptied'],
  },
  {
    icon: '✨',
    name: 'Deep Clean',
    tag: 'Perfect first booking',
    desc: 'A thorough top-to-bottom clean that goes beyond the surface. Ideal for new clients or before a special occasion.',
    items: ['Everything in a regular clean','Inside oven & microwave','Skirting boards & door frames','Window sills & tracks','Light switches & handles'],
  },
  {
    icon: '🌿',
    name: 'Spring Clean',
    tag: 'Seasonal refresh',
    desc: 'Reset your home from top to bottom. Great for bringing a neglected space back to life or preparing for a new season.',
    items: ['Full deep clean included','Inside cupboards & drawers','Blinds & ceiling fans','Behind & under furniture','Wall spot cleaning'],
  },
  {
    icon: '📦',
    name: 'Move In / Out',
    tag: 'Bond & handover cleans',
    desc: 'Leave your old home spotless or arrive to a fresh start. We know exactly what property managers look for.',
    items: ['Full spring clean scope','Inside all appliances','Walls & light fittings','Garage sweep-out','Bond-back focused'],
  },
]

const STEPS = [
  { num: '01', icon: '📋', title: 'Get a free quote', desc: 'Fill out our quick online form — takes under 2 minutes. We\'ll send you a tailored quote with no obligation.' },
  { num: '02', icon: '🗓️', title: 'Pick your time', desc: 'Choose a day and time that suits you. We work around your schedule, not the other way around.' },
  { num: '03', icon: '🏠', title: 'Come home to clean', desc: 'Our team shows up on time and gets to work. You come home to a sparkling, fresh-smelling house.' },
]

const WHYUS = [
  { icon: '📍', title: 'Locally owned', desc: 'Born and bred on the Sunshine Coast. We\'re your neighbours, not a franchise.' },
  { icon: '🛡️', title: 'Fully insured', desc: 'Public liability and contents insurance, so you\'re covered every single visit.' },
  { icon: '👥', title: 'Same team every time', desc: 'We match you with a consistent team who learns your home and preferences.' },
  { icon: '🌱', title: 'Eco-friendly options', desc: 'Ask about our plant-based product range — tough on grime, gentle on your family.' },
  { icon: '⭐', title: '100% satisfaction', desc: 'Not happy with something? Let us know and we\'ll fix it within 24 hours, no questions asked.' },
  { icon: '🔒', title: 'Trusted & vetted', desc: 'All cleaners are police-checked, reference-checked, and trained in-house.' },
]

const REVIEWS = [
  {
    name: 'Sarah M.',
    suburb: 'Maroochydore',
    stars: 5,
    text: 'Dust Bunnies have been cleaning our home for nearly a year now and I genuinely can\'t imagine going back to doing it ourselves. The team is always on time, thorough, and lovely. Our oven has never looked so good.',
  },
  {
    name: 'James T.',
    suburb: 'Buderim',
    stars: 5,
    text: 'After trying three different cleaning companies I finally found one that actually delivers. They notice the small things — light switches, door handles, behind the taps. Really exceptional attention to detail.',
  },
  {
    name: 'Emma R.',
    suburb: 'Mooloolaba',
    stars: 5,
    text: 'Booked a move-out clean for our rental and got our full bond back without a single issue. The property manager actually commented on how good the oven was. Highly recommend for end-of-lease.',
  },
  {
    name: 'Kylie B.',
    suburb: 'Mountain Creek',
    stars: 5,
    text: 'Friendly, professional and reliable. They\'ve been coming fortnightly for 6 months and the standard has never dropped. It\'s such a relief to come home on clean day — the whole house smells amazing.',
  },
]

const FAQS = [
  {
    q: 'How do I get a quote?',
    a: 'Click the "Get a Free Quote" button above and fill out our quick form — it takes less than 2 minutes. We\'ll send you a personalised quote, usually within a few hours during business hours.',
  },
  {
    q: 'Do I need to be home during the clean?',
    a: 'Not at all. Most of our clients aren\'t home when we clean. Many leave a spare key or use a lockbox. We\'re fully insured and trusted — your home is in safe hands.',
  },
  {
    q: 'What\'s included in a regular clean?',
    a: 'All rooms are dusted, vacuumed or mopped, bathrooms and toilets scrubbed, kitchen benches, sink and stovetop wiped down, and bins emptied. We tailor the scope to your home on the first visit.',
  },
  {
    q: 'Do you bring your own products and equipment?',
    a: 'Yes — we bring everything we need. If you have specific preferences (e.g. eco-friendly products or a particular vacuum), just let us know and we\'ll accommodate where possible.',
  },
  {
    q: 'How much does a clean cost?',
    a: 'Pricing depends on your home\'s size and the type of clean. We offer honest, no-surprise quotes. Most regular cleans for a 3-bedroom home start from around $180–$220. Get a free quote for your exact address.',
  },
  {
    q: 'Can I change or pause my bookings?',
    a: 'Yes. Life happens — we get it. We just ask for 48 hours\' notice to reschedule or pause, so we can fill that slot. There are no lock-in contracts.',
  },
]

function StarRating({ count = 5 }) {
  return (
    <span style={{ color: C.gold, fontSize: 15, letterSpacing: 1 }}>
      {'★'.repeat(count)}
    </span>
  )
}

function NavBar({ onQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Areas', href: '#areas' },
    { label: 'FAQ', href: '#faq' },
  ]

  const linkStyle = {
    color: scrolled ? C.darkGreen : C.white,
    textDecoration: 'none',
    fontSize: 14,
    fontWeight: 500,
    transition: 'opacity 0.15s',
    opacity: 0.9,
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? C.white : 'transparent',
      boxShadow: scrolled ? '0 2px 16px rgba(30,47,36,0.10)' : 'none',
      transition: 'background 0.3s, box-shadow 0.3s',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 22 }}>🐰</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: 16, color: scrolled ? C.darkGreen : C.white, lineHeight: 1.1 }}>
              Dust Bunnies
            </div>
            <div style={{ fontSize: 10, color: scrolled ? C.green : 'rgba(255,255,255,0.75)', fontWeight: 500, letterSpacing: 1, textTransform: 'uppercase' }}>
              Cleaning Co.
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="db-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href} style={linkStyle}
              onMouseEnter={e => e.target.style.opacity = 1}
              onMouseLeave={e => e.target.style.opacity = 0.9}
            >{l.label}</a>
          ))}
          <button onClick={onQuote} style={{
            background: C.gold, color: C.darkGreen,
            border: 'none', borderRadius: 8, padding: '9px 20px',
            fontWeight: 700, fontSize: 14, cursor: 'pointer',
            transition: 'transform 0.15s, opacity 0.15s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.9'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Get a Free Quote
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="db-mobile-menu-btn"
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: scrolled ? C.darkGreen : C.white, fontSize: 22, padding: 4,
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: C.white, borderTop: `1px solid ${C.border}`,
          padding: '12px 24px 20px',
        }}>
          {navLinks.map(l => (
            <a key={l.label} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{ display: 'block', padding: '10px 0', color: C.darkGreen, textDecoration: 'none', fontWeight: 500, borderBottom: `1px solid ${C.border}` }}
            >{l.label}</a>
          ))}
          <button onClick={() => { onQuote(); setMenuOpen(false) }} style={{
            marginTop: 16, width: '100%', background: C.gold, color: C.darkGreen,
            border: 'none', borderRadius: 8, padding: '12px', fontWeight: 700, fontSize: 15, cursor: 'pointer',
          }}>
            Get a Free Quote
          </button>
        </div>
      )}
    </nav>
  )
}

function Hero({ onQuote }) {
  return (
    <section style={{
      minHeight: '100vh',
      background: `linear-gradient(145deg, ${C.darkGreen} 0%, #2d5038 45%, #3a6647 100%)`,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', padding: '100px 24px 80px',
      textAlign: 'center',
    }}>
      {/* Background texture circles */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'rgba(255,255,255,0.03)', top: -150, right: -150, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(200,167,101,0.08)', bottom: -100, left: -100, pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', maxWidth: 720 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'rgba(200,167,101,0.18)', border: '1px solid rgba(200,167,101,0.35)',
          borderRadius: 100, padding: '5px 14px', marginBottom: 28,
        }}>
          <span style={{ fontSize: 13 }}>📍</span>
          <span style={{ color: C.gold, fontSize: 12, fontWeight: 600, letterSpacing: 0.5 }}>
            Sunshine Coast, Queensland
          </span>
        </div>

        <h1 style={{
          color: C.white, fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: 800, lineHeight: 1.1, marginBottom: 20, letterSpacing: -1,
        }}>
          Sunshine Coast's most<br />
          <span style={{ color: C.gold }}>trusted home cleaners</span>
        </h1>

        <p style={{
          color: 'rgba(255,255,255,0.75)', fontSize: 'clamp(16px, 2vw, 19px)',
          lineHeight: 1.6, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px',
        }}>
          Professional, reliable, and detail-obsessed. Get a tailored quote in minutes
          and come home to a sparkling house every time.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={onQuote} style={{
            background: C.gold, color: C.darkGreen, border: 'none',
            borderRadius: 10, padding: '16px 32px', fontWeight: 700, fontSize: 17,
            cursor: 'pointer', boxShadow: '0 4px 20px rgba(200,167,101,0.4)',
            transition: 'transform 0.15s, box-shadow 0.15s',
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 28px rgba(200,167,101,0.5)' }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 20px rgba(200,167,101,0.4)' }}
          >
            Get a Free Quote →
          </button>
          <a href="#services" style={{
            background: 'rgba(255,255,255,0.1)', color: C.white,
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10,
            padding: '16px 32px', fontWeight: 600, fontSize: 17,
            textDecoration: 'none', transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            See services
          </a>
        </div>

        {/* Social proof strip */}
        <div style={{
          marginTop: 56, display: 'flex', gap: 32, justifyContent: 'center',
          flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 32,
        }}>
          {[
            { num: '200+', label: 'Happy clients' },
            { num: '5★', label: 'Average rating' },
            { num: '3 yrs', label: 'On the Coast' },
            { num: '100%', label: 'Satisfaction guaranteed' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: C.gold, fontWeight: 800, fontSize: 22 }}>{s.num}</div>
              <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustBar() {
  const items = [
    { icon: '🛡️', text: 'Fully insured' },
    { icon: '✅', text: 'Police-checked team' },
    { icon: '🔁', text: 'No lock-in contracts' },
    { icon: '💬', text: '48hr cancellation policy' },
    { icon: '🌱', text: 'Eco-friendly options' },
  ]
  return (
    <div style={{ background: C.darkGreen, padding: '14px 24px', overflowX: 'auto' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', gap: 36, justifyContent: 'center', flexWrap: 'wrap',
      }}>
        {items.map(i => (
          <div key={i.text} style={{ display: 'flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap' }}>
            <span style={{ fontSize: 15 }}>{i.icon}</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13, fontWeight: 500 }}>{i.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ServicesSection({ onQuote }) {
  return (
    <section id="services" style={{ background: C.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: C.green, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            What we offer
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.darkGreen, letterSpacing: -0.5, marginBottom: 14 }}>
            Services built around your home
          </h2>
          <p style={{ color: C.muted, fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
            Whether you want a weekly refresh or a one-off deep clean, we've got you covered.
          </p>
        </div>

        <div className="db-services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.name} style={{
              background: C.card, borderRadius: 16,
              border: `1px solid ${C.border}`,
              padding: '28px 24px', display: 'flex', flexDirection: 'column',
              boxShadow: '0 2px 12px rgba(30,47,36,0.06)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,47,36,0.12)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(30,47,36,0.06)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
              <div style={{
                display: 'inline-block', background: `${C.green}18`, color: C.green,
                fontSize: 11, fontWeight: 600, letterSpacing: 0.5, borderRadius: 100,
                padding: '3px 10px', marginBottom: 10, width: 'fit-content',
              }}>{s.tag}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.darkGreen, marginBottom: 8 }}>{s.name}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.6, marginBottom: 16, flexGrow: 1 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                {s.items.map(item => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, color: C.text, fontSize: 13, padding: '4px 0' }}>
                    <span style={{ color: C.green, fontWeight: 700, fontSize: 15 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={onQuote} style={{
                background: 'transparent', color: C.green, border: `1.5px solid ${C.green}`,
                borderRadius: 8, padding: '10px 16px', fontWeight: 600, fontSize: 13,
                cursor: 'pointer', transition: 'background 0.15s, color 0.15s',
              }}
                onMouseEnter={e => { e.target.style.background = C.green; e.target.style.color = C.white }}
                onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = C.green }}
              >
                Get a quote →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section id="how-it-works" style={{ background: C.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: C.green, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            Simple process
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.darkGreen, letterSpacing: -0.5 }}>
            Getting started is easy
          </h2>
        </div>
        <div className="db-steps-grid">
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', padding: '0 16px', position: 'relative' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: `linear-gradient(135deg, ${C.darkGreen}, ${C.green})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px', fontSize: 28,
                boxShadow: '0 4px 16px rgba(30,47,36,0.2)',
              }}>
                {step.icon}
              </div>
              <div style={{ color: C.gold, fontWeight: 700, fontSize: 12, letterSpacing: 1, marginBottom: 6 }}>
                STEP {step.num}
              </div>
              <h3 style={{ fontSize: 19, fontWeight: 700, color: C.darkGreen, marginBottom: 10 }}>{step.title}</h3>
              <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section style={{ background: C.darkGreen, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: C.gold, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            Why Dust Bunnies
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.white, letterSpacing: -0.5 }}>
            More than just a clean house
          </h2>
        </div>
        <div className="db-why-grid">
          {WHYUS.map(w => (
            <div key={w.title} style={{
              background: 'rgba(255,255,255,0.06)', borderRadius: 14,
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '24px 20px',
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
              <h3 style={{ color: C.white, fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{w.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.65, margin: 0 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" style={{ background: C.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: C.green, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            Client reviews
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.darkGreen, letterSpacing: -0.5, marginBottom: 8 }}>
            Don't just take our word for it
          </h2>
          <p style={{ color: C.muted, fontSize: 16 }}>Real feedback from real Sunshine Coast homeowners.</p>
        </div>
        <div className="db-reviews-grid">
          {REVIEWS.map((r, i) => (
            <div key={r.name} style={{
              background: C.card, borderRadius: 16,
              border: `1px solid ${C.border}`,
              padding: '28px 24px',
              boxShadow: '0 2px 12px rgba(30,47,36,0.05)',
            }}>
              <StarRating count={r.stars} />
              <p style={{ color: C.text, fontSize: 14, lineHeight: 1.7, margin: '14px 0 20px', fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${C.green}, ${C.darkGreen})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.white, fontWeight: 700, fontSize: 15,
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: C.darkGreen, fontSize: 14 }}>{r.name}</div>
                  <div style={{ color: C.muted, fontSize: 12 }}>{r.suburb}, Sunshine Coast</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Areas() {
  return (
    <section id="areas" style={{ background: C.white, padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ color: C.green, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
          Where we operate
        </div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.darkGreen, letterSpacing: -0.5, marginBottom: 14 }}>
          Servicing across the Sunshine Coast
        </h2>
        <p style={{ color: C.muted, fontSize: 16, marginBottom: 40 }}>
          Not sure if we cover your area? Get a quote and we'll let you know.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {AREAS.map(area => (
            <span key={area} style={{
              background: `${C.green}12`, color: C.darkGreen,
              border: `1px solid ${C.green}30`, borderRadius: 100,
              padding: '8px 18px', fontSize: 14, fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ color: C.green, fontSize: 12 }}>📍</span>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: C.cream, padding: '80px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ color: C.green, fontWeight: 600, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 10 }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.darkGreen, letterSpacing: -0.5 }}>
            Common questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: C.card, borderRadius: 12,
              border: `1px solid ${open === i ? C.green : C.border}`,
              overflow: 'hidden', transition: 'border-color 0.2s',
            }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '18px 20px', textAlign: 'left', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
                }}
              >
                <span style={{ fontWeight: 600, color: C.darkGreen, fontSize: 15 }}>{faq.q}</span>
                <span style={{
                  color: C.green, fontSize: 18, fontWeight: 700,
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s', flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 20px 18px', color: C.muted, fontSize: 14, lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABanner({ onQuote }) {
  return (
    <section style={{
      background: `linear-gradient(135deg, ${C.darkGreen} 0%, #2d5038 100%)`,
      padding: '80px 24px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🏠</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: C.white, letterSpacing: -0.5, marginBottom: 14 }}>
          Ready for a spotless home?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 17, marginBottom: 36 }}>
          Join hundreds of happy Sunshine Coast families. Get your free, no-obligation quote today.
        </p>
        <button onClick={onQuote} style={{
          background: C.gold, color: C.darkGreen, border: 'none',
          borderRadius: 10, padding: '16px 40px', fontWeight: 700, fontSize: 18,
          cursor: 'pointer', boxShadow: '0 4px 20px rgba(200,167,101,0.4)',
          transition: 'transform 0.15s',
        }}
          onMouseEnter={e => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
        >
          Get a Free Quote →
        </button>
        <div style={{ marginTop: 20, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
          No commitment · Takes 2 minutes · Reply within a few hours
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ background: '#111c14', padding: '48px 24px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="db-footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontSize: 20 }}>🐰</span>
              <span style={{ color: C.white, fontWeight: 700, fontSize: 16 }}>Dust Bunnies Cleaning Co.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.65, margin: '0 0 16px' }}>
              Locally owned and operated on the Sunshine Coast. Professional home cleaning you can rely on.
            </p>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12 }}>ABN: 38 682 974 761</div>
          </div>

          {/* Services */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Services</div>
            {['Regular Clean', 'Deep Clean', 'Spring Clean', 'Move In / Out'].map(s => (
              <div key={s} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, padding: '4px 0' }}>{s}</div>
            ))}
          </div>

          {/* Areas */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Service Areas</div>
            {AREAS.slice(0, 6).map(a => (
              <div key={a} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, padding: '4px 0' }}>{a}</div>
            ))}
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, marginTop: 4 }}>+ more areas</div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 14 }}>Contact</div>
            {[
              { icon: '📞', text: '0484 264 458', href: 'tel:0484264458' },
              { icon: '✉️', text: 'dustbunzcleaning@gmail.com', href: 'mailto:dustbunzcleaning@gmail.com' },
              { icon: '📍', text: 'Maroochydore, QLD 4558', href: null },
            ].map(c => (
              <div key={c.text} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '5px 0' }}>
                <span style={{ fontSize: 13, marginTop: 1 }}>{c.icon}</span>
                {c.href ? (
                  <a href={c.href} style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = C.gold}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
                  >{c.text}</a>
                ) : (
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{c.text}</span>
                )}
              </div>
            ))}
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              {[
                { label: 'FB', href: 'https://facebook.com/dustbunniescleaningsc' },
                { label: 'IG', href: 'https://instagram.com/dustbunzcleaning' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)',
                  borderRadius: 8, padding: '6px 12px', fontSize: 12, fontWeight: 600,
                  textDecoration: 'none', transition: 'background 0.15s',
                }}
                  onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
                  onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 40, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 8,
        }}>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            © {new Date().getFullYear()} Dust Bunnies Cleaning Co. All rights reserved.
          </div>
          <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
            Sunshine Coast, Queensland
          </div>
        </div>
      </div>
    </footer>
  )
}

// Responsive CSS injected once
const CSS = `
  .db-desktop-nav { display: flex !important; }
  .db-mobile-menu-btn { display: none !important; }
  .db-services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .db-steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  .db-why-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .db-reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .db-footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 40px;
  }
  @media (max-width: 900px) {
    .db-desktop-nav { display: none !important; }
    .db-mobile-menu-btn { display: block !important; }
    .db-services-grid { grid-template-columns: repeat(2, 1fr); }
    .db-steps-grid { grid-template-columns: 1fr; gap: 40px; }
    .db-why-grid { grid-template-columns: repeat(2, 1fr); }
    .db-reviews-grid { grid-template-columns: 1fr; }
    .db-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  }
  @media (max-width: 560px) {
    .db-services-grid { grid-template-columns: 1fr; }
    .db-why-grid { grid-template-columns: 1fr; }
    .db-footer-grid { grid-template-columns: 1fr; }
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
`

export default function Website() {
  const navigate = useNavigate()

  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'db-website-styles'
    style.textContent = CSS
    if (!document.getElementById('db-website-styles')) {
      document.head.appendChild(style)
    }
    return () => {
      const el = document.getElementById('db-website-styles')
      if (el) el.remove()
    }
  }, [])

  const goToQuote = () => navigate('/form')

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <NavBar onQuote={goToQuote} />
      <Hero onQuote={goToQuote} />
      <TrustBar />
      <ServicesSection onQuote={goToQuote} />
      <HowItWorks />
      <WhyUs />
      <Reviews />
      <Areas />
      <FAQ />
      <CTABanner onQuote={goToQuote} />
      <Footer />
    </div>
  )
}
