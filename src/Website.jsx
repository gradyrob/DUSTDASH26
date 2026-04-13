import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// ─── Palette ──────────────────────────────────────────────────────────────────
const C = {
  bg:     '#F9F7F3',
  white:  '#FFFFFF',
  dark:   '#1A1714',
  text:   '#2E2B28',
  muted:  '#8C857D',
  subtle: '#C2B9AF',
  border: '#E6E0D8',
  sand:   '#BFA882',
  sandLt: '#D4C4A8',
  warm:   '#F2EDE5',
}

// ─── Global CSS ───────────────────────────────────────────────────────────────
// Playfair Display loaded for display headings only
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${C.bg};
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${C.text};
  }

  .db-serif { font-family: 'Playfair Display', Georgia, serif; }

  /* Nav */
  .db-nav-links { display: flex; align-items: center; gap: 36px; }
  .db-hamburger { display: none !important; }

  /* Hero */
  .db-hero-text { max-width: 780px; }

  /* Services */
  .db-service-row {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    gap: 0;
    padding: 36px 0;
    border-top: 1px solid ${C.border};
    align-items: start;
  }
  .db-service-row:last-child { border-bottom: 1px solid ${C.border}; }

  /* Reviews */
  .db-reviews-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }

  /* Footer grid */
  .db-footer-cols {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 48px;
  }

  /* FAQ */
  .db-faq-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: start;
  }

  /* Areas */
  .db-areas-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }

  @media (max-width: 900px) {
    .db-nav-links { display: none !important; }
    .db-hamburger { display: block !important; }
    .db-service-row { grid-template-columns: 1fr; gap: 12px; }
    .db-reviews-grid { grid-template-columns: 1fr; gap: 32px; }
    .db-footer-cols { grid-template-columns: 1fr; gap: 32px; }
    .db-faq-row { grid-template-columns: 1fr; gap: 32px; }
    .db-areas-inner { grid-template-columns: 1fr; gap: 32px; }
  }
`

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav({ onQuote }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(249,247,243,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 48px',
          height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span className="db-serif" style={{
              fontSize: 18, fontWeight: 700, color: C.dark,
              letterSpacing: -0.3,
            }}>Dust Bunnies</span>
          </a>

          <div className="db-nav-links">
            {['Services', 'Reviews', 'Areas', 'FAQ'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{
                color: C.muted, fontSize: 13, fontWeight: 500,
                textDecoration: 'none', letterSpacing: 0.2,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = C.dark}
                onMouseLeave={e => e.target.style.color = C.muted}
              >{l}</a>
            ))}
            <button onClick={onQuote} style={{
              background: C.dark, color: C.bg,
              border: 'none', borderRadius: 6,
              padding: '9px 22px', fontWeight: 500, fontSize: 13,
              cursor: 'pointer', letterSpacing: 0.2,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.8'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >Get a quote</button>
          </div>

          <button className="db-hamburger" onClick={() => setOpen(o => !o)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: C.dark, fontSize: 18, padding: 4, lineHeight: 1,
          }}>{open ? '✕' : '☰'}</button>
        </div>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
          background: C.white, borderBottom: `1px solid ${C.border}`,
          padding: '24px 48px 32px',
        }}>
          {['Services', 'Reviews', 'Areas', 'FAQ'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '14px 0',
                borderBottom: `1px solid ${C.border}`,
                color: C.text, fontSize: 16, fontWeight: 500,
                textDecoration: 'none',
              }}>{l}</a>
          ))}
          <button onClick={() => { onQuote(); setOpen(false) }} style={{
            marginTop: 20, width: '100%',
            background: C.dark, color: C.bg,
            border: 'none', borderRadius: 6, padding: '14px',
            fontWeight: 500, fontSize: 15, cursor: 'pointer',
          }}>Get a free quote</button>
        </div>
      )}
    </>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onQuote }) {
  return (
    <section style={{
      minHeight: '100vh',
      background: C.bg,
      display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '0 48px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top-right wash */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '55%', height: '100%',
        background: `linear-gradient(135deg, transparent 30%, ${C.warm} 100%)`,
        pointerEvents: 'none',
      }} />

      {/* Location tag — top left */}
      <div style={{
        position: 'absolute', top: 100, left: 48,
        fontSize: 12, color: C.muted, fontWeight: 500,
        letterSpacing: 2, textTransform: 'uppercase',
      }}>
        Sunshine Coast, QLD
      </div>

      {/* Small decorative rule */}
      <div style={{
        position: 'absolute', top: 118, left: 48,
        width: 32, height: 1, background: C.sandLt, marginTop: 8,
      }} />

      <div style={{ maxWidth: 1200, width: '100%', position: 'relative' }}>
        <h1 className="db-serif" style={{
          fontSize: 'clamp(52px, 8vw, 110px)',
          fontWeight: 700,
          color: C.dark,
          lineHeight: 1.0,
          letterSpacing: -3,
          marginBottom: 40,
          maxWidth: 900,
        }}>
          Your home,<br />
          <em style={{ fontStyle: 'italic', color: C.sand }}>effortlessly</em><br />
          clean.
        </h1>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <p style={{
            fontSize: 17, color: C.muted, lineHeight: 1.75,
            maxWidth: 380, fontWeight: 400,
          }}>
            Professional home cleaning for Sunshine Coast families.
            Reliable, thorough, and always on time — so you can focus on everything else.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
            <button onClick={onQuote} style={{
              background: C.dark, color: C.bg,
              border: 'none', borderRadius: 6,
              padding: '16px 36px', fontWeight: 500, fontSize: 15,
              cursor: 'pointer', letterSpacing: 0.2,
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.target.style.opacity = '0.75'}
              onMouseLeave={e => e.target.style.opacity = '1'}
            >Get a free quote</button>
            <span style={{ fontSize: 12, color: C.subtle }}>No commitment · Reply within a few hours</span>
          </div>
        </div>

        {/* Thin divider line */}
        <div style={{ height: 1, background: C.border, marginTop: 64 }} />
        <div style={{ display: 'flex', gap: 48, paddingTop: 24, flexWrap: 'wrap' }}>
          {['200+ happy clients', 'Fully insured', 'Same team every visit', 'No lock-in contracts'].map(t => (
            <span key={t} style={{ fontSize: 12, color: C.muted, fontWeight: 500, letterSpacing: 0.3 }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name: 'Regular Clean',
    freq: 'Weekly or fortnightly',
    desc: 'Your ongoing maintenance clean. We keep your home consistently fresh — dusted, vacuumed, bathrooms scrubbed, floors mopped — so you never have to think about it.',
    note: 'Most popular',
  },
  {
    name: 'Deep Clean',
    freq: 'One-off or first visit',
    desc: 'A thorough top-to-bottom clean that goes well beyond the surface. Includes skirting boards, window sills, oven interior, and all the details that are easy to miss.',
    note: 'Recommended to start',
  },
  {
    name: 'Spring Clean',
    freq: 'Seasonal refresh',
    desc: 'When you want every corner attended to. Inside cupboards, behind furniture, blinds and fans, wall spot cleaning — a true reset for your home.',
    note: null,
  },
  {
    name: 'Move In / Out',
    freq: 'Bond & handover cleans',
    desc: 'Leave your old place spotless or arrive to a fresh start. We know exactly what property managers look for and focus on the details that matter for bond return.',
    note: null,
  },
]

function Services({ onQuote }) {
  return (
    <section id="services" style={{ background: C.white, padding: '100px 48px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64, flexWrap: 'wrap', gap: 24 }}>
          <h2 className="db-serif" style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: C.dark, letterSpacing: -1.5, lineHeight: 1.1,
          }}>
            What we offer
          </h2>
          <p style={{ fontSize: 14, color: C.muted, maxWidth: 320, lineHeight: 1.7 }}>
            Every service is carried out by the same trusted team, with the same care and attention — every single visit.
          </p>
        </div>

        {SERVICES.map((s, i) => (
          <div key={s.name} className="db-service-row">
            <div>
              <div style={{ fontSize: 12, color: C.muted, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 500 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              {s.note && (
                <div style={{
                  marginTop: 12,
                  display: 'inline-block',
                  fontSize: 10, fontWeight: 600, letterSpacing: 1,
                  textTransform: 'uppercase', color: C.sand,
                  border: `1px solid ${C.sandLt}`, borderRadius: 4,
                  padding: '3px 8px',
                }}>{s.note}</div>
              )}
            </div>
            <div style={{ paddingRight: 40 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: C.dark, marginBottom: 6, letterSpacing: -0.5 }}>{s.name}</h3>
              <div style={{ fontSize: 12, color: C.muted, fontWeight: 500, letterSpacing: 0.3 }}>{s.freq}</div>
            </div>
            <div>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8 }}>{s.desc}</p>
            </div>
          </div>
        ))}

        <div style={{ marginTop: 48 }}>
          <button onClick={onQuote} style={{
            background: 'transparent', color: C.dark,
            border: `1px solid ${C.border}`, borderRadius: 6,
            padding: '12px 28px', fontWeight: 500, fontSize: 13,
            cursor: 'pointer', letterSpacing: 0.2,
            transition: 'border-color 0.2s',
          }}
            onMouseEnter={e => e.target.style.borderColor = C.dark}
            onMouseLeave={e => e.target.style.borderColor = C.border}
          >
            Get a personalised quote →
          </button>
        </div>
      </div>
    </section>
  )
}

// ─── Pull quote / brand statement ─────────────────────────────────────────────
function Statement() {
  return (
    <section style={{
      background: C.dark, padding: '120px 48px',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p className="db-serif" style={{
          fontSize: 'clamp(26px, 4vw, 48px)',
          fontWeight: 400, fontStyle: 'italic',
          color: C.bg, lineHeight: 1.4, letterSpacing: -0.5,
        }}>
          "We started Dust Bunnies because we believed the Sunshine Coast deserved a cleaning service
          that actually cared — about your home, your time, and the small details that make the difference."
        </p>
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 32, height: 1, background: C.sand }} />
          <span style={{ fontSize: 12, color: C.subtle, fontWeight: 500, letterSpacing: 1.5, textTransform: 'uppercase' }}>
            Dust Bunnies Cleaning Co. · Sunshine Coast
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Reviews ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: 'Sarah M.', suburb: 'Maroochydore', text: 'Dust Bunnies have been cleaning our home for nearly a year and I genuinely can\'t imagine going back. The team is always on time, thorough, and the care they put in is obvious every single visit.' },
  { name: 'James T.', suburb: 'Buderim', text: 'After trying three different companies I finally found one that actually delivers. They notice the small things — light switches, door handles, behind the taps. Exceptional attention to detail.' },
  { name: 'Emma R.', suburb: 'Mooloolaba', text: 'Booked a move-out clean and got our full bond back without a single issue. The property manager actually commented on how good the oven was. I\'d recommend them without hesitation.' },
  { name: 'Kylie B.', suburb: 'Mountain Creek', text: 'Fortnightly for six months and the standard has never dropped once. It\'s such a relief to come home on clean day — the whole house just feels different.' },
]

function Reviews() {
  return (
    <section id="reviews" style={{ background: C.bg, padding: '100px 48px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontSize: 12, color: C.muted, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            Client reviews
          </div>
          <h2 className="db-serif" style={{
            fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
            color: C.dark, letterSpacing: -1.5,
          }}>
            What our clients say
          </h2>
        </div>

        <div className="db-reviews-grid">
          {REVIEWS.map(r => (
            <div key={r.name} style={{ paddingBottom: 48, borderBottom: `1px solid ${C.border}` }}>
              <div style={{ display: 'flex', gap: 1, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: C.sand, fontSize: 13 }}>★</span>
                ))}
              </div>
              <p style={{
                fontSize: 15, color: C.text, lineHeight: 1.8,
                marginBottom: 24,
              }}>
                "{r.text}"
              </p>
              <div style={{ fontSize: 13, color: C.muted }}>
                <span style={{ fontWeight: 600, color: C.dark }}>{r.name}</span>
                {' '}· {r.suburb}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Areas ────────────────────────────────────────────────────────────────────
const AREAS = ['Twin Waters','Maroochydore','Kuluin','Forest Glen','Mons','Buderim','Alexandra Headland','Mooloolaba','Mountain Creek','Minyama']

function Areas() {
  return (
    <section id="areas" style={{ background: C.white, padding: '100px 48px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="db-areas-inner">
          <div>
            <div style={{ fontSize: 12, color: C.muted, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              Where we work
            </div>
            <h2 className="db-serif" style={{
              fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700,
              color: C.dark, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 24,
            }}>
              Across the<br />Sunshine Coast
            </h2>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8, maxWidth: 340 }}>
              We service the Sunshine Coast from Twin Waters to Minyama.
              Not sure if we cover your suburb? Get in touch and we'll let you know.
            </p>
          </div>
          <div>
            {AREAS.map((area, i) => (
              <div key={area} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 0',
                borderBottom: i < AREAS.length - 1 ? `1px solid ${C.border}` : 'none',
              }}>
                <span style={{ fontSize: 15, color: C.text, fontWeight: 400 }}>{area}</span>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.sandLt }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  { q: 'How do I get a quote?', a: 'Fill out our quick online form — it takes under two minutes. We\'ll send you a tailored quote, usually within a few hours on business days.' },
  { q: 'Do I need to be home?', a: 'Most of our clients aren\'t home during their clean. Many use a lockbox or leave a spare key. We\'re fully insured and trusted — your home is in safe hands.' },
  { q: 'What\'s included in a regular clean?', a: 'All rooms dusted and vacuumed or mopped, bathrooms and toilets scrubbed, kitchen surfaces and sink cleaned, and bins emptied. We tailor to your home on the first visit.' },
  { q: 'Do you bring your own products?', a: 'Yes — we bring everything we need. If you have preferences (eco-friendly products, specific requests) just let us know.' },
  { q: 'How much does a clean cost?', a: 'It depends on your home\'s size and the service. Most regular cleans for a 3-bedroom home start from around $180–$220. Get a free quote for your exact address.' },
  { q: 'Can I change or cancel my booking?', a: 'Absolutely. We ask for 48 hours\' notice to reschedule or cancel. No lock-in contracts — ever.' },
]

function FAQ({ onQuote }) {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ background: C.bg, padding: '100px 48px', borderTop: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="db-faq-row">
          <div style={{ position: 'sticky', top: 100 }}>
            <div style={{ fontSize: 12, color: C.muted, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
              FAQ
            </div>
            <h2 className="db-serif" style={{
              fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 700,
              color: C.dark, letterSpacing: -1.5, lineHeight: 1.1, marginBottom: 24,
            }}>
              Common<br />questions
            </h2>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.8, marginBottom: 32 }}>
              Can't find what you're looking for? Send us a message and we'll get back to you.
            </p>
            <button onClick={onQuote} style={{
              background: 'transparent', color: C.dark,
              border: `1px solid ${C.border}`, borderRadius: 6,
              padding: '11px 24px', fontWeight: 500, fontSize: 13,
              cursor: 'pointer', letterSpacing: 0.2,
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => e.target.style.borderColor = C.dark}
              onMouseLeave={e => e.target.style.borderColor = C.border}
            >Get in touch →</button>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ borderTop: `1px solid ${C.border}` }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{
                  width: '100%', background: 'none', border: 'none',
                  padding: '22px 0', textAlign: 'left', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                }}>
                  <span style={{ fontWeight: 500, color: C.dark, fontSize: 15 }}>{faq.q}</span>
                  <span style={{
                    color: C.subtle, fontSize: 20, lineHeight: 1, flexShrink: 0,
                    transform: open === i ? 'rotate(45deg)' : 'none',
                    transition: 'transform 0.2s',
                  }}>+</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 22, fontSize: 14, color: C.muted, lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: `1px solid ${C.border}` }} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA({ onQuote }) {
  return (
    <section style={{
      background: C.warm, padding: '120px 48px',
      borderTop: `1px solid ${C.border}`,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 48 }}>
        <h2 className="db-serif" style={{
          fontSize: 'clamp(36px, 5vw, 68px)', fontWeight: 700,
          color: C.dark, letterSpacing: -2, lineHeight: 1.05,
          maxWidth: 580,
        }}>
          Ready for a home<br />that feels effortless?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <button onClick={onQuote} style={{
            background: C.dark, color: C.bg,
            border: 'none', borderRadius: 6,
            padding: '16px 40px', fontWeight: 500, fontSize: 15,
            cursor: 'pointer', letterSpacing: 0.2,
            transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.target.style.opacity = '0.75'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >Get a free quote</button>
          <span style={{ fontSize: 12, color: C.muted }}>
            Free · No commitment · Reply within a few hours
          </span>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: C.dark, padding: '72px 48px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="db-footer-cols">
          <div>
            <span className="db-serif" style={{ fontSize: 20, fontWeight: 700, color: C.bg, display: 'block', marginBottom: 16, letterSpacing: -0.3 }}>
              Dust Bunnies
            </span>
            <p style={{ fontSize: 13, color: 'rgba(249,247,243,0.45)', lineHeight: 1.75, maxWidth: 280, marginBottom: 20 }}>
              Locally owned home cleaning for Sunshine Coast families. Professional, reliable, and detail-obsessed.
            </p>
            <div style={{ fontSize: 11, color: 'rgba(249,247,243,0.25)', letterSpacing: 0.3 }}>ABN 38 682 974 761</div>
          </div>

          <div>
            <div style={{ fontSize: 11, color: 'rgba(249,247,243,0.3)', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>Contact</div>
            {[
              { t: '0484 264 458', h: 'tel:0484264458' },
              { t: 'dustbunzcleaning@gmail.com', h: 'mailto:dustbunzcleaning@gmail.com' },
              { t: 'Maroochydore, QLD', h: null },
            ].map(c => (
              <div key={c.t} style={{ marginBottom: 10 }}>
                {c.h
                  ? <a href={c.h} style={{ color: 'rgba(249,247,243,0.55)', fontSize: 13, textDecoration: 'none' }}
                      onMouseEnter={e => e.target.style.color = C.bg}
                      onMouseLeave={e => e.target.style.color = 'rgba(249,247,243,0.55)'}
                    >{c.t}</a>
                  : <span style={{ color: 'rgba(249,247,243,0.55)', fontSize: 13 }}>{c.t}</span>
                }
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 11, color: 'rgba(249,247,243,0.3)', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 20 }}>Follow</div>
            {[
              { l: 'Instagram', h: 'https://instagram.com/dustbunzcleaning' },
              { l: 'Facebook', h: 'https://facebook.com/dustbunniescleaningsc' },
            ].map(s => (
              <div key={s.l} style={{ marginBottom: 10 }}>
                <a href={s.h} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(249,247,243,0.55)', fontSize: 13, textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = C.bg}
                  onMouseLeave={e => e.target.style.color = 'rgba(249,247,243,0.55)'}
                >{s.l}</a>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          marginTop: 56, paddingTop: 24, borderTop: '1px solid rgba(249,247,243,0.08)',
          display: 'flex', justifyContent: 'space-between',
          fontSize: 11, color: 'rgba(249,247,243,0.2)', flexWrap: 'wrap', gap: 8,
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
      <Statement />
      <Reviews />
      <Areas />
      <FAQ onQuote={goToQuote} />
      <CTA onQuote={goToQuote} />
      <Footer />
    </div>
  )
}
