import Image from 'next/image';
import GrabOrderButton, { GrabLogo, grabLinkProps } from './components/GrabOrderButton';
import ScrollEffects from './components/ScrollEffects';
import ScrollReveal from './components/ScrollReveal';
import {
  ADD_ONS,
  BEST_SELLERS,
  BOTTLES,
  BOTTLE_SIZES,
  BRANCHES,
  CUP_SIZE_LABELS,
  JARS,
  MENU_FAMILIES,
  SITE_CONFIG,
  formatPrice,
} from '@/lib/data';

const HERO_DECO: { className: string; style: React.CSSProperties; glyph?: string }[] = [
  { className: 'deco-teardrop', style: { top: '56px', left: '6%', width: '18px', height: '18px', transform: 'rotate(-45deg)', opacity: 0.55 } },
  { className: 'deco-teardrop', style: { top: '22%', left: '14%', width: '12px', height: '12px', transform: 'rotate(-45deg)', opacity: 0.35 } },
  { className: 'deco-teardrop', style: { top: '12%', right: '9%', width: '22px', height: '22px', transform: 'rotate(-45deg)', opacity: 0.5 } },
  { className: 'deco-teardrop', style: { bottom: '16%', right: '16%', width: '14px', height: '14px', transform: 'rotate(-45deg)', opacity: 0.35 } },
  { className: 'deco-leaf', style: { top: '30%', left: '5%', width: '34px', height: '34px', transform: 'rotate(18deg)', opacity: 0.5 } },
  { className: 'deco-leaf', style: { bottom: '12%', left: '11%', width: '26px', height: '26px', transform: 'rotate(-32deg)', opacity: 0.45 } },
  { className: 'deco-leaf', style: { top: '40%', right: '5%', width: '30px', height: '30px', transform: 'rotate(140deg)', opacity: 0.4 } },
  { className: 'deco-dot', style: { top: '16%', left: '26%', width: '4px', height: '16px', transform: 'rotate(24deg)' } },
  { className: 'deco-dot', style: { top: '19%', left: '29%', width: '4px', height: '11px', transform: 'rotate(24deg)' } },
  { className: 'deco-dot', style: { bottom: '22%', right: '29%', width: '4px', height: '15px', transform: 'rotate(-22deg)', opacity: 0.28 } },
  { className: 'deco-heart', style: { top: '8%', left: '44%', fontSize: '30px', opacity: 0.35 }, glyph: '♥' },
  { className: 'deco-heart', style: { bottom: '9%', left: '38%', fontSize: '22px', opacity: 0.3 }, glyph: '♥' },
  { className: 'deco-circle', style: { bottom: '-70px', right: '-70px', width: '230px', height: '230px' } },
  { className: 'deco-circle', style: { bottom: '-40px', left: '-60px', width: '170px', height: '170px' } },
];

const PROMO_ITEMS = ['MADE FRESH', 'SERVED COLD', 'LOVED BY ALL', '30 FLAVORS', 'NO CONCENTRATES'];

// Hand-drawn raindrops that drift down the open sky of the Monsoon Sips banner.
// x/y are % of the banner, clear of its title and cups; a negative delay starts a drop mid-fall.
const RAIN_DROPS = [
  { x: 3, y: 4, size: 0.9, duration: 4.4, delay: -0.6 },
  { x: 10.5, y: 22, size: 0.75, duration: 3.8, delay: -2.4 },
  { x: 17, y: 2, size: 1, duration: 4.9, delay: -3.6 },
  { x: 24.5, y: 3, size: 0.7, duration: 4.6, delay: -1.5 },
  { x: 4, y: 46, size: 0.8, duration: 4.1, delay: -3.1 },
  { x: 80, y: 3, size: 0.85, duration: 4.6, delay: -2.9 },
  { x: 86, y: 30, size: 0.75, duration: 3.9, delay: -0.4 },
  { x: 92, y: 14, size: 1, duration: 4.3, delay: -1.9 },
  { x: 95, y: 48, size: 0.8, duration: 4.8, delay: -3.9 },
];

// Staggers a `[data-reveal]` element's entrance. The attribute's value picks the entrance style:
// empty rises, or "deal", "slide-left", "slide-right", "zoom" and "flip" (see globals.css).
const revealDelay = (ms: number) => ({ '--reveal-delay': `${ms}ms` }) as React.CSSProperties;

// Position of an item inside a revealing block, so its entrance cascades after the block's.
const cascade = (index: number) => ({ '--i': index }) as React.CSSProperties;

const rainDropStyle = ({ x, y, size, duration, delay }: (typeof RAIN_DROPS)[number]) =>
  ({
    left: `${x}%`,
    top: `${y}%`,
    '--drop-size': size,
    '--drop-duration': `${duration}s`,
    '--drop-delay': `${delay}s`,
  }) as React.CSSProperties;

export default function Home() {
  return (
    <div className="page">
      {/* Header */}
      <header>
        <a href="#top" className="logo-link">
          <Image
            src={SITE_CONFIG.logo}
            alt="Jack's Lemonade logo"
            width={46}
            height={46}
            className="logo-image"
            priority
          />
          <span className="brand-name">
            JACK'S<span className="brand-tagline">lemonade</span>
          </span>
        </a>
        <nav>
          <a href="#best-sellers">Best Sellers</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#branches">Find a Branch</a>
          <GrabOrderButton variant="nav" />
        </nav>
        <span className="scroll-progress" aria-hidden="true" />
      </header>

      {/* Hero Section */}
      <section id="top" className="hero">
        <div className="hero-deco">
          {HERO_DECO.map((deco, i) => (
            <div
              key={i}
              className={`deco-shape ${deco.className}`}
              style={{ ...deco.style, '--n': i } as React.CSSProperties}
            >
              {deco.glyph}
            </div>
          ))}
        </div>

        <div className="hero-content">
          <Image
            src={SITE_CONFIG.logo}
            alt="Jack's Lemonade — smiling Jack mascot badge"
            width={190}
            height={190}
            className="hero-logo"
            priority
          />
          <p className="hero-tagline">Squeeze the joy in every sip!</p>
          <h1 className="hero-title">
            THE ONLY{' '}
            <span className="fresh">
              fresh
              <svg className="fresh-squiggle" viewBox="0 0 100 7" aria-hidden="true">
                <path d="M2 4C12 1.6 22 1.6 32 3.5S52 5.4 62 3.5S82 1.6 98 3.2" pathLength={1} />
              </svg>
            </span>{' '}
            LEMONADE IN 30 FLAVORS
          </h1>
          <p className="hero-description">
            So refreshing, so healthy. Hand-squeezed daily and served ice-cold at
            malls across Metro Manila.
          </p>
          <div className="hero-ctas">
            <GrabOrderButton label="ORDER ON" />
            <a href="#branches" className="cta-secondary">
              FIND A BRANCH
            </a>
          </div>
          <a href="#menu" className="hero-menu-link">
            or see all 30 flavors
          </a>
        </div>
      </section>

      <div className="promo-bar">
        <p className="sr-only">{PROMO_ITEMS.join(', ')}</p>
        <div className="promo-track" aria-hidden="true">
          {Array.from({ length: 6 }, (_, copy) => (
            <span key={copy} className="promo-group">
              {PROMO_ITEMS.map((text) => (
                <span key={text} className="promo-item">
                  {text}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Best Sellers Section */}
      <section id="best-sellers" className="best-sellers">
        <div className="best-sellers-content">
          <div className="best-sellers-header" data-reveal>
            <span className="section-label">the whole family&apos;s favorites</span>
            <h2 className="best-sellers-title">MOST-LOVED BEST SELLERS</h2>
            <p className="best-sellers-subtitle">
              First time at the stand? Start with any of these ten.
            </p>
          </div>
          <ol className="best-sellers-grid">
            {BEST_SELLERS.map((item, i) => (
              <li
                key={item.slug}
                className="best-seller-card"
                data-reveal="deal"
                style={revealDelay((i % 5) * 70)}
              >
                <span className="best-seller-rank">
                  <span className="sr-only">Number </span>
                  {item.rank}
                </span>
                <span className="best-seller-photo-frame">
                  <Image
                    src={`/images/best-sellers/${item.slug}.png`}
                    alt={`${item.name} from Jack's Lemonade`}
                    width={962}
                    height={1634}
                    sizes="(max-width: 640px) 170px, (max-width: 1100px) 22vw, 200px"
                    className="best-seller-photo"
                  />
                </span>
                <h3 className="best-seller-name">{item.name}</h3>
                <div className="best-seller-prices">
                  {item.prices.map((price) => (
                    <div key={price.label} className="best-seller-price">
                      <span className="best-seller-size">{price.label}</span>
                      <span className="best-seller-value">{formatPrice(price.value)}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <div className="section-cta" data-reveal>
            <p className="section-cta-text">Craving one right now?</p>
            <GrabOrderButton />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <div className="about-text" data-reveal="slide-left">
            <span className="section-label">Hello from the stand</span>
            <h2 className="section-title">
              FRESH-SQUEEZED,
              <br />
              NEVER SHORTCUT.
            </h2>
            <p className="section-description">
              Jack&apos;s started as a little lemonade stand with one rule: squeeze it
              fresh, every single cup. Today that same rule fills 30 flavors — herbs
              from Mom Jenny, teas from Dad John, fruits from Sis Julia, sweets from
              Baby James — all made fresh, served cold, and loved by the whole
              family.
            </p>
            <div className="badge-group">
              <span className="badge">FRESH-SQUEEZED LEMONS</span>
              <span className="badge">30 FLAVORS</span>
              <span className="badge">FAMILY-SIZED SERVINGS</span>
            </div>
          </div>
          <div className="about-image" data-reveal="slide-right" style={revealDelay(120)}>
            <div className="about-orbit">
              <div className="image-circle-frame" />
              <Image
                src="/images/about-basil-tamarind.png"
                alt="Jack's basil rich tamarind lemonade with fresh basil and lemon"
                width={860}
                height={860}
                sizes="(max-width: 700px) 85vw, 380px"
                className="image-circle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal feature */}
      <section className="seasonal" aria-labelledby="seasonal-title">
        <div className="seasonal-content" data-reveal="zoom">
          <div className="seasonal-media">
            <Image
              src="/images/monsoon-sips.png"
              alt="Monsoon Sips featuring cucumber tamarind sugar-free lemonade, ginger tamarind lemonade, and basil tamarind lemonade"
              width={1942}
              height={809}
              sizes="(max-width: 1160px) calc(100vw - 40px), 1120px"
              className="seasonal-image"
            />
            <div className="rain" aria-hidden="true">
              {RAIN_DROPS.map((drop, i) => (
                <span key={i} className="rain-drop" style={rainDropStyle(drop)} />
              ))}
            </div>
          </div>
          <div className="seasonal-caption">
            <div>
              <span className="seasonal-kicker">rain or shine</span>
              <h2 id="seasonal-title">REFRESH ANYWAY.</h2>
              <p>Meet the bright, tangy tamarind trio made for monsoon days.</p>
            </div>
            <div className="seasonal-actions">
              <GrabOrderButton variant="seasonal" label="ORDER ON" />
              <a href="#menu" className="seasonal-cta seasonal-cta--secondary">
                EXPLORE THE FLAVORS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="menu-content">
          <div className="menu-header" data-reveal>
            <span className="section-label">One lemon, 30 ways</span>
            <h2 className="menu-title">THE FAMILY MENU</h2>
            <p className="menu-subtitle">
              Every cup comes in two family sizes, J1 and J2. Most flavors come HOT
              too.
            </p>
          </div>

          <div className="menu-board">
            {([0, 1] as const).map((column) => (
              <div key={column} className="menu-column">
                {MENU_FAMILIES.filter((fam) => fam.column === column).map((fam, i) => (
                  <article
                    key={fam.id}
                    className="menu-family"
                    data-reveal={column === 0 ? 'slide-left' : 'slide-right'}
                    style={revealDelay(column * 90 + i * 60)}
                  >
                    <div className="menu-family-header">
                      <div className="menu-family-title">
                        <span className="menu-family-sub">{fam.sub}</span>
                        <h3 className="menu-family-name">{fam.name}</h3>
                      </div>
                      <div className="menu-sizes" aria-hidden="true">
                        {fam.sizes.map((size) => (
                          <span key={size} className="menu-size">
                            {CUP_SIZE_LABELS[size]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <ul className="menu-items">
                      {fam.items.map((item, itemIndex) => (
                        <li key={item.name} className="menu-item" style={cascade(itemIndex)}>
                          <span className="menu-item-name">{item.name}</span>
                          <div className="menu-sizes">
                            {fam.sizes.map((size) => {
                              const price = item.prices[size];
                              return (
                                <span key={size} className="menu-price">
                                  <span className="sr-only">{CUP_SIZE_LABELS[size]} </span>
                                  {price === undefined ? '—' : formatPrice(price)}
                                </span>
                              );
                            })}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="treasures" data-reveal="zoom">
            <div className="treasures-header">
              <h3 className="treasures-title">TREASURES</h3>
              <span className="treasures-subtitle">add-ons for any cup</span>
            </div>
            <ul className="treasures-list">
              {ADD_ONS.map((addOn, i) => (
                <li key={addOn.name} className="treasure" style={cascade(i)}>
                  <span className="treasure-name">{addOn.name}</span>
                  <span className="treasure-price">{formatPrice(addOn.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Family Delights */}
          <div className="family-delights" data-reveal>
            <div className="delights-bottles">
              <div className="family-header">
                <h3 className="family-title">FAMILY DELIGHTS</h3>
                <span className="family-subtitle">bottles to go for the whole gang</span>
              </div>
              <div className="delights-table-wrap">
                <table className="delights-table">
                  <thead>
                    <tr>
                      <th scope="col">Bottle</th>
                      {BOTTLE_SIZES.map((size) => (
                        <th key={size.key} scope="col">
                          {size.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {BOTTLES.map((bottle, i) => (
                      <tr key={bottle.name} style={cascade(i)}>
                        <th scope="row">{bottle.name}</th>
                        {BOTTLE_SIZES.map((size) => {
                          const price = bottle.prices[size.key];
                          return (
                            <td key={size.key}>
                              {price === undefined ? '—' : formatPrice(price)}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="delights-jars">
              <div className="family-header">
                <h3 className="family-title">JARS</h3>
                <span className="family-subtitle">for home</span>
              </div>
              {JARS.map((jar, i) => (
                <div key={jar.name} className="jar-card" style={cascade(i)}>
                  <div className="jar-info">
                    <div className="bottle-name">{jar.name}</div>
                    <div className="bottle-size">{jar.size}</div>
                  </div>
                  <span className="jar-price">{formatPrice(jar.price)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery */}
          <div className="order-band" data-reveal="zoom">
            <div className="order-band-copy">
              <span className="order-band-kicker">can&apos;t make it to the mall?</span>
              <h3 className="order-band-title">GET JACK&apos;S DELIVERED</h3>
              <p className="order-band-text">
                Order your favorite cups and bottles for delivery on Grab.
              </p>
            </div>
            <GrabOrderButton />
          </div>

          <p className="menu-disclaimer">
            Prices and availability may vary by branch and on Grab.
          </p>
        </div>
      </section>

      {/* Branches Section */}
      <section id="branches" className="branches">
        <div className="branches-content">
          <div className="branches-header" data-reveal>
            <span className="section-label">We&apos;re around the corner</span>
            <h2 className="branches-title">FIND A BRANCH NEAR YOU</h2>
            <p className="branches-subtitle">
              Catch us in malls across Metro Manila — open with mall hours, squeezing
              all day.
            </p>
          </div>
          <div className="branches-grid">
            {BRANCHES.map((br, i) => (
              <article key={br.id} className="branch-card" data-reveal="flip" style={revealDelay(i * 70)}>
                <span className="branch-pin" />
                <span className="branch-mall">{br.mall}</span>
                <span className="branch-city">{br.city}</span>
                <span className="branch-note">{br.note}</span>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(br.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="branch-directions"
                  aria-label={`See directions to Jack's Lemonade at ${br.mall}`}
                >
                  See directions <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
          <p className="branches-note">
            Tap a branch for directions. Mall hours and availability can change.
          </p>
          <div className="section-cta" data-reveal>
            <p className="section-cta-text">Not near a branch?</p>
            <GrabOrderButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content" data-reveal>
          <Image
            src={SITE_CONFIG.logo}
            alt="Jack's Lemonade logo"
            width={104}
            height={104}
            className="footer-logo"
          />
          <p className="footer-tagline">Squeeze the joy in every sip!</p>
          <div className="footer-links">
            <a {...grabLinkProps()} className="social-link social-link--grab">
              Order on
              <GrabLogo />
            </a>
            <a
              href={SITE_CONFIG.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon">f</span>
              Jack&apos;s Lemonade
            </a>
            <a
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <span className="social-icon instagram" />
              @jackslemonadeph
            </a>
          </div>
          <p className="footer-description">
            The only fresh lemonade in 30 flavors that is so refreshing and healthy.
            Metro Manila, Philippines.
          </p>
          <p className="footer-copyright">© JACK&apos;S LEMONADE</p>
          <p className="footer-credit">Developed by JK Cuadra</p>
        </div>
      </footer>

      <ScrollReveal />
      <ScrollEffects />
    </div>
  );
}
