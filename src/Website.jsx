import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Warm earthy palette — neutral, refined, coastal
const C = {
  bg:       '#F8F5F0',       // warm linen
  bgDeep:   '#F0EBE3',       // slightly deeper linen
  card:     '#FFFFFF',
  dark:     '#1C1917',       // near-black warm
  text:     '#3D3530',       // warm dark brown
  muted:    '#9C8E84',       // warm taupe
  subtle:   '#C9BEB6',       // light warm grey
  border:   '#E8E2DA',       // warm border
  stone:    '#7A6E66',       // mid stone
  sand:     '#C4A882',       // warm sand / accent
  sandDark: '#A08860',       // deeper sand
  cream:    '#FBF9F6',       // near white warm
}

const AREAS = [
  'Twin Waters','Maroochydore','Kuluin','Forest Glen','Mons',
  'Buderim','Alexandra Headland','Mooloolaba','Mountain Creek','Minyama',
]

const SERVICES = [
  {
    name: 'Regular Clean',
    tag: 'Weekly · Fortnightly',
    desc: 'Your ongoing maintenance clean. We keep everything consistently fresh so you never have to think about it.',
    items: ['All rooms vacuumed & dusted','Bathrooms sanitised','Kitchen surfaces & sink','Floors mopped','Bins emptied'],
  },
  {
    name: 'Deep Clean',
    tag: 'Ideal first booking',
    desc: 'A thorough reset from top to bottom — perfect before starting a regular schedule or ahead of a special occasion.',
    items: ['Everything in a regular clean','Oven & microwave interior','Skirting boards & door frames','Window sills & tracks','Light switches & handles'],
  },
  {
    name: 'Spring Clean',
    tag: 'Seasonal · One-off',
    desc: 'When you want every corner attended to. We go deeper than a regular clean and leave nothing untouched.',
    items: ['Full deep clean scope','Inside cupboards & drawers','Blinds & ceiling fans','Behind & under furniture','Wall spot cleaning'],
  },
  {
    name: 'Move In / Out',
    tag: 'Bond · Handover',
    desc: 'Leave your old place immaculate or arrive to a clean start. We know exactly what property managers expect.',
    items: ['Full spring clean scope','All appliances inside','Walls & light fittings','Garage swept out','Bond-back focused'],
  },
]

const REVIEWS = [
  {
    name: 'Sarah M.',
    suburb: 'Maroochydore',
    text: 'Dust Bunnies have been cleaning our home for nearly a year and I genuinely can\'t imagine going back. The team is always on time, thorough, and lovely. Our oven has never looked so good.',
  },
  {
    name: 'James T.',
    suburb: 'Buderim',
    text: 'After trying three different companies I finally found one that actually delivers. They notice the small things — light switches, door handles, behind the taps. Really exceptional attention to detail.',
  },
  {
    name: 'Emma R.',
    suburb: 'Mooloolaba',
    text: 'Booked a move-out clean and got our full bond back without a single issue. The property manager actually commented on how good the oven was. I\'d recommend them to anyone.',
  },
  {
    name: 'Kylie B.',
    suburb: 'Mountain Creek',
    text: 'Fortnightly for six months now and the standard has never dropped. It\'s such a relief to come home on clean day — the whole house smells amazing every single time.',
  },
]

const FAQS = [
  { q: 'How do I get a quote?', a: 'Fill out our quick online form — it takes under two minutes. We\'ll send you a tailored quote, usually within a few hours during business days.' },
  { q: 'Do I need to be home?', a: 'Most of our clients aren\'t home during their clean. Many use a lockbox or leave a spare key. We\'re fully insured and trusted — your home is in safe hands.' },
  { q: 'What\'s included in a regular clean?', a: 'All rooms dusted and vacuumed or mopped, bathrooms and toilets scrubbed, kitchen benches and sink wiped down, and bins emptied. We tailor to your home on the first visit.' },
  { q: 'Do you bring your own products?', a: 'Yes — we bring everything. If you have preferences (eco products, a particular vacuum) just let us know and we\'ll accommodate where possible.' },
  { q: 'How much does a clean cost?', a: 'It depends on your home\'s size and the type of clean. Most regular cleans for a 3-bedroom home start from around $180–$220. Get a free quote for your exact address.' },
  { q: 'Can I change or pause my bookings?', a: 'Absolutely. We just ask for 48 hours\' notice so we can fill the slot. No lock-in contracts, ever.' },
]

// ─── Injected CSS ─────────────────────────────────────────────────────────────
const CSS = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { background: ${C.bg}; font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased; }
  a { text-decoration: none; }

  .db-nav-links { display: flex; align-items: center; gap: 32px; }
  .db-hamburger { display: none; }

  .db-hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .db-services-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background: ${C.border};
    border: 1px solid ${C.border};
    border-radius: 16px;
    overflow: hidden;
  }

  .db-service-card {
    background: ${C.card};
    padding: 32px 24px;
    transition: background 0.2s;
  }
  .db-service-card:hover { background: ${C.cream}; }

  .db-three-col {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .db-reviews-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .db-footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
    gap: 48px;
  }

  @media (max-width: 960px) {
    .db-nav-links { display: none; }
    .db-hamburger { display: block; }
    .db-hero-inner { grid-template-columns: 1fr; gap: 40px; padding: 0 24px; text-align: center; }
    .db-services-grid { grid-template-columns: repeat(2, 1fr); }
    .db-three-col { grid-template-columns: 1fr; gap: 24px; }
    .db-reviews-grid { grid-template-columns: 1fr; }
    .db-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  }

  @media (max-width: 560px) {
    .db-services-grid { grid-template-columns: 1fr; }
    .db-footer-grid { grid-template-columns: 1fr; }
  }
`

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ onQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Services', 'How it works', 'Reviews', 'Areas', 'FAQ']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(248,245,240,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 40px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: C.sand, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: 16 }}>🐰</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: C.dark, letterSpacing: -0.2 }}>Dust Bunnies</div>
            <div style={{ fontSize: 10, color: C.muted, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase' }}>Cleaning Co.</div>
          </div>
        </a>

        <div className="db-nav-links">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} style={{
              color: C.stone, fontSize: 14, fontWeight: 500,
              transition: 'color 0.15s',
            }}
              onMouseEnter={e => e.target.style.color = C.dark}
              onMouseLeave={e => e.target.style.color = C.stone}
            >{l}</a>
          ))}
          <button onClick={onQuote} style={{
            background: C.dark, color: C.cream,
            border: 'none', borderRadius: 8, padding: '9px 20px',
            fontWeight: 600, fontSize: 13, cursor: 'pointer',
            letterSpacing: 0.1,
            transition: 'background 0.15s',
          }}
            onMouseEnter={e => e.target.style.background = C.text}
            onMouseLeave={e => e.target.style.background = C.dark}
          >
            Get a quote
          </button>
        </div>

        <button className="db-hamburger" onClick={() => setOpen(o => !o)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: C.dark, fontSize: 20, padding: 4,
        }}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div style={{
          background: C.cream, borderTop: `1px solid ${C.border}`,
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '12px 0',
                color: C.text, fontSize: 15, fontWeight: 500,
                borderBottom: `1px solid ${C.border}`,
              }}>{l}</a>
          ))}
          <button onClick={() => { onQuote(); setOpen(false) }} style={{
            marginTop: 16, width: '100%', background: C.dark, color: C.cream,
            border: 'none', borderRadius: 8, padding: '13px',
            fontWeight: 600, fontSize: 15, cursor: 'pointer',
          }}>Get a quote</button>
        </div>
      )}
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onQuote }) {
  return (
    <section style={{
      background: C.bgDeep,
      paddingTop: 68,
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div className="db-hero-inner" style={{ width: '100%', padding: '80px 40px' }}>
        {/* Left — copy */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            border: `1px solid ${C.border}`, borderRadius: 100,
            padding: '5px 14px', marginBottom: 32,
            color: C.muted, fontSize: 12, fontWeight: 500, letterSpacing: 0.5,
          }}>
            Sunshine Coast, Queensland
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 5vw, 68px)',
            fontWeight: 800,
            color: C.dark,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 24,
          }}>
            A cleaner home.<br />
            <span style={{ color: C.sand }}>A lighter life.</span>
          </h1>

          <p style={{
            fontSize: 17, color: C.stone, lineHeight: 1.7,
            marginBottom: 40, maxWidth: 440,
          }}>
            Professional home cleaning for Sunshine Coast families who value their time.
            Consistent, careful, and always on time.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={onQuote} style={{
              background: C.dark, color: C.cream,
              border: 'none', borderRadius: 10, padding: '14px 28px',
              fontWeight: 600, fontSize: 15, cursor: 'pointer',
              transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.target.style.background = C.text}
              onMouseLeave={e => e.target.style.background = C.dark}
            >
              Get a free quote
            </button>
            <a href="#services" style={{
              background: 'transparent', color: C.text,
              border: `1px solid ${C.border}`, borderRadius: 10,
              padding: '14px 28px', fontWeight: 500, fontSize: 15,
              transition: 'border-color 0.15s',
            }}
              onMouseEnter={e => e.target.style.borderColor = C.subtle}
              onMouseLeave={e => e.target.style.borderColor = C.border}
            >
              Our services
            </a>
          </div>

          {/* Inline trust */}
          <div style={{ marginTop: 40, display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {['Fully insured', 'No lock-in contracts', 'Same team every visit'].map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.sand }} />
                <span style={{ fontSize: 13, color: C.muted, fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stat card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{
            background: C.card, borderRadius: 20,
            border: `1px solid ${C.border}`,
            padding: '32px',
            boxShadow: '0 4px 40px rgba(28,25,23,0.06)',
          }}>
            <div style={{ fontSize: 13, color: C.muted, fontWeight: 500, marginBottom: 24, letterSpacing: 0.3 }}>
              Trusted by Sunshine Coast families
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}>
              {[
                { n: '200+', l: 'Happy clients' },
                { n: '3 yrs', l: 'On the Coast' },
                { n: '5.0', l: 'Average rating' },
                { n: '100%', l: 'Satisfaction' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: C.dark, letterSpacing: -1 }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{
              borderTop: `1px solid ${C.border}`, paddingTop: 20,
              fontSize: 13, color: C.stone, lineHeight: 1.6,
              fontStyle: 'italic',
            }}>
              "I genuinely can't imagine going back to doing it ourselves." — Sarah M., Maroochydore
            </div>
          </div>

          <div style={{
            background: C.sand, borderRadius: 14,
            padding: '20px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ color: C.dark, fontWeight: 700, fontSize: 15 }}>Ready to get started?</div>
              <div style={{ color: 'rgba(28,25,23,0.6)', fontSize: 13, marginTop: 2 }}>Free quote, no commitment</div>
            </div>
            <button onClick={onQuote} style={{
              background: C.dark, color: C.cream, border: 'none',
              borderRadius: 8, padding: '10px 18px', fontWeight: 600,
              fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap',
            }}>
              Get a quote →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services({ onQuote }) {
  return (
    <section id="services" style={{ background: C.bg, padding: '100px 40px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            What we offer
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5, maxWidth: 520 }}>
            Every kind of clean, done properly
          </h2>
        </div>

        <div className="db-services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.name} className="db-service-card">
              <div style={{
                fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase',
                color: C.muted, marginBottom: 16,
              }}>{s.tag}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: C.dark, marginBottom: 12, letterSpacing: -0.3 }}>{s.name}</h3>
              <p style={{ fontSize: 13, color: C.stone, lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {s.items.map(item => (
                  <li key={item} style={{
                    fontSize: 12, color: C.stone, padding: '5px 0',
                    borderBottom: `1px solid ${C.border}`,
                    display: 'flex', alignItems: 'center', gap: 8,
                  }}>
                    <span style={{ color: C.sand, fontSize: 10 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <button onClick={onQuote} style={{
            background: 'transparent', color: C.dark,
            border: `1px solid ${C.border}`, borderRadius: 8,
            padding: '12px 28px', fontWeight: 500, fontSize: 14, cursor: 'pointer',
            transition: 'border-color 0.15s, background 0.15s',
          }}
            onMouseEnter={e => { e.target.style.background = C.card; e.target.style.borderColor = C.subtle }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.borderColor = C.border }}
          >
            Get a personalised quote for your home
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '01', title: 'Tell us about your home', body: 'Fill out our quick form — it takes under two minutes. Let us know your home size, the type of clean, and a few details about what matters to you.' },
    { n: '02', title: 'Receive your tailored quote', body: 'We\'ll send you a personalised quote, usually within a few hours. No hidden fees, no obligations. Pick a time that suits you.' },
    { n: '03', title: 'Come home to clean', body: 'Our team arrives on time, gets the job done, and leaves your home spotless. You don\'t need to lift a finger.' },
  ]

  return (
    <section id="how-it-works" style={{ background: C.card, padding: '100px 40px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            How it works
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5 }}>
            Simple from the start
          </h2>
        </div>

        <div className="db-three-col">
          {steps.map(s => (
            <div key={s.n}>
              <div style={{
                fontSize: 12, fontWeight: 700, color: C.sand,
                letterSpacing: 1.5, marginBottom: 20, fontVariantNumeric: 'tabular-nums',
              }}>{s.n}</div>
              <div style={{ width: 40, height: 1, background: C.border, marginBottom: 20 }} />
              <h3 style={{ fontSize: 18, fontWeight: 700, color: C.dark, letterSpacing: -0.3, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: C.stone, lineHeight: 1.7 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About strip ──────────────────────────────────────────────────────────────
function About() {
  const points = [
    { title: 'Locally owned', body: 'Born and raised on the Sunshine Coast. We\'re your neighbours — not a franchise or a call centre.' },
    { title: 'Fully insured', body: 'Public liability and contents insurance on every visit, so you can leave with complete peace of mind.' },
    { title: 'Consistent teams', body: 'We match you with the same cleaner (or small team) each time. They learn your home and your preferences.' },
    { title: 'Satisfaction guarantee', body: 'Not happy with something? Let us know and we\'ll return to fix it within 24 hours — no questions asked.' },
  ]

  return (
    <section style={{ background: C.bgDeep, padding: '100px 40px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
              Why Dust Bunnies
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 20 }}>
              More than just a clean house
            </h2>
            <p style={{ fontSize: 16, color: C.stone, lineHeight: 1.75, maxWidth: 400 }}>
              We built Dust Bunnies on the belief that a great cleaning service should feel effortless —
              reliable enough that you stop thinking about it, and good enough that you notice every time you come home.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {points.map(p => (
              <div key={p.title} style={{ paddingBottom: 32, borderBottom: `1px solid ${C.border}` }}>
                <div style={{ fontWeight: 700, fontSize: 15, color: C.dark, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontSize: 14, color: C.stone, lineHeight: 1.65 }}>{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
function Reviews() {
  return (
    <section id="reviews" style={{ background: C.bg, padding: '100px 40px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            Client reviews
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5 }}>
            What our clients say
          </h2>
        </div>
        <div className="db-reviews-grid">
          {REVIEWS.map(r => (
            <div key={r.name} style={{
              background: C.card, borderRadius: 16,
              border: `1px solid ${C.border}`,
              padding: '32px',
            }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: C.sand, fontSize: 14 }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: 15, color: C.text, lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: C.bgDeep, border: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 700, color: C.stone,
                }}>
                  {r.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: C.dark, fontSize: 14 }}>{r.name}</div>
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

// ─── Areas ────────────────────────────────────────────────────────────────────
function Areas() {
  return (
    <section id="areas" style={{ background: C.card, padding: '100px 40px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
              Where we work
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 16 }}>
              Across the Sunshine Coast
            </h2>
            <p style={{ fontSize: 15, color: C.stone, lineHeight: 1.7 }}>
              We service suburbs from Twin Waters to Minyama and everywhere in between.
              Not sure if we cover your area? Get a quote and we'll let you know.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {AREAS.map(area => (
              <span key={area} style={{
                background: C.bgDeep, color: C.text,
                border: `1px solid ${C.border}`, borderRadius: 8,
                padding: '8px 16px', fontSize: 13, fontWeight: 500,
              }}>{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: C.bg, padding: '100px 40px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ marginBottom: 52 }}>
          <div style={{ fontSize: 12, color: C.muted, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: C.dark, letterSpacing: -1.5 }}>
            Common questions
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ borderTop: `1px solid ${C.border}` }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '22px 0', textAlign: 'left', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, color: C.dark, fontSize: 15 }}>{faq.q}</span>
                <span style={{
                  color: C.muted, fontSize: 20, lineHeight: 1,
                  transform: open === i ? 'rotate(45deg)' : 'none',
                  transition: 'transform 0.2s', flexShrink: 0,
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ paddingBottom: 22, color: C.stone, fontSize: 14, lineHeight: 1.75 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${C.border}` }} />
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA({ onQuote }) {
  return (
    <section style={{
      background: C.dark, padding: '100px 40px', textAlign: 'center',
    }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 800, color: C.cream,
          letterSpacing: -2, lineHeight: 1.1, marginBottom: 20,
        }}>
          Ready for a home that feels effortless?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(251,249,246,0.6)', marginBottom: 40, lineHeight: 1.65 }}>
          Join hundreds of Sunshine Coast families who've made cleaning the last thing they think about.
        </p>
        <button onClick={onQuote} style={{
          background: C.sand, color: C.dark,
          border: 'none', borderRadius: 10, padding: '16px 36px',
          fontWeight: 700, fontSize: 16, cursor: 'pointer',
          transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.target.style.background = C.sandDark}
          onMouseLeave={e => e.target.style.background = C.sand}
        >
          Get a free quote
        </button>
        <div style={{ marginTop: 16, fontSize: 13, color: 'rgba(251,249,246,0.35)' }}>
          Free quote · No commitment · Reply within a few hours
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: '#141210', padding: '60px 40px 32px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="db-footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ fontSize: 18 }}>🐰</span>
              <span style={{ color: C.cream, fontWeight: 700, fontSize: 14 }}>Dust Bunnies Cleaning Co.</span>
            </div>
            <p style={{ color: 'rgba(251,249,246,0.45)', fontSize: 13, lineHeight: 1.7, maxWidth: 260 }}>
              Locally owned and operated on the Sunshine Coast. Professional home cleaning you can rely on.
            </p>
            <div style={{ marginTop: 16, color: 'rgba(251,249,246,0.25)', fontSize: 12 }}>ABN 38 682 974 761</div>
          </div>

          <div>
            <div style={{ color: 'rgba(251,249,246,0.35)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Services</div>
            {['Regular Clean', 'Deep Clean', 'Spring Clean', 'Move In / Out'].map(s => (
              <div key={s} style={{ color: 'rgba(251,249,246,0.55)', fontSize: 13, padding: '4px 0' }}>{s}</div>
            ))}
          </div>

          <div>
            <div style={{ color: 'rgba(251,249,246,0.35)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Areas</div>
            {AREAS.slice(0, 7).map(a => (
              <div key={a} style={{ color: 'rgba(251,249,246,0.55)', fontSize: 13, padding: '4px 0' }}>{a}</div>
            ))}
          </div>

          <div>
            <div style={{ color: 'rgba(251,249,246,0.35)', fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 16 }}>Contact</div>
            {[
              { text: '0484 264 458', href: 'tel:0484264458' },
              { text: 'dustbunzcleaning@gmail.com', href: 'mailto:dustbunzcleaning@gmail.com' },
              { text: 'Maroochydore, QLD 4558', href: null },
            ].map(c => (
              <div key={c.text} style={{ padding: '4px 0' }}>
                {c.href ? (
                  <a href={c.href} style={{ color: 'rgba(251,249,246,0.55)', fontSize: 13 }}
                    onMouseEnter={e => e.target.style.color = C.sand}
                    onMouseLeave={e => e.target.style.color = 'rgba(251,249,246,0.55)'}
                  >{c.text}</a>
                ) : (
                  <span style={{ color: 'rgba(251,249,246,0.55)', fontSize: 13 }}>{c.text}</span>
                )}
              </div>
            ))}
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              {[
                { label: 'Instagram', href: 'https://instagram.com/dustbunzcleaning' },
                { label: 'Facebook', href: 'https://facebook.com/dustbunniescleaningsc' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  color: 'rgba(251,249,246,0.45)', fontSize: 12,
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6,
                  padding: '5px 10px',
                  transition: 'color 0.15s, border-color 0.15s',
                }}
                  onMouseEnter={e => { e.target.style.color = C.cream; e.target.style.borderColor = 'rgba(255,255,255,0.25)' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(251,249,246,0.45)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 48, paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between',
          color: 'rgba(251,249,246,0.25)', fontSize: 12, flexWrap: 'wrap', gap: 8,
        }}>
          <span>© {new Date().getFullYear()} Dust Bunnies Cleaning Co.</span>
          <span>Sunshine Coast, Queensland</span>
        </div>
      </div>
    </footer>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function Website() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!document.getElementById('db-site-css')) {
      const el = document.createElement('style')
      el.id = 'db-site-css'
      el.textContent = CSS
      document.head.appendChild(el)
    }
    return () => document.getElementById('db-site-css')?.remove()
  }, [])

  const goToQuote = () => navigate('/form')

  return (
    <div>
      <Nav onQuote={goToQuote} />
      <Hero onQuote={goToQuote} />
      <Services onQuote={goToQuote} />
      <HowItWorks />
      <About />
      <Reviews />
      <Areas />
      <FAQ />
      <CTA onQuote={goToQuote} />
      <Footer />
    </div>
  )
}
