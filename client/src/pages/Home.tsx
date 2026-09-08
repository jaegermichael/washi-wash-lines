/**
 * T-post design: ground-mounted washing lines, honest site photography, and purposeful red signals lead every section.
 * The WhatsApp number is intentionally configurable below because it was not supplied in the brand brief.
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Menu,
  MoveRight,
  Plus,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "000000000000";
const WHATSAPP_MESSAGE =
  "Hi Washi Wash Lines, I'd like to order a washing line. Can you help me choose the right package?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const assets = {
  hero: "/images/tpost-garden.jpg",
  logo: "/images/logo.jpeg",
  laundry: "/images/tpost-laundry.jpg",
  single: "/images/tpost-single.jpg",
  longLine: "/images/tpost-long-line.jpg",
  field: "/images/tpost-field.jpg",
  pavedYard: "/images/tpost-paved-yard.jpg",
  multiWhite: "/images/tpost-multi-white.jpg",
  brickWall: "/images/tpost-brick-wall.jpg",
  greyWall: "/images/tpost-grey-wall.jpg",
  wallInstall: "/images/tpost-wall-install.jpg",
  backyard: "/images/tpost-backyard.jpg",
  materials: "/images/tpost-materials.jpg",
  rotaryFolded: "/images/rotary-folded.jpg",
  rotarySky: "/images/rotary-sky.jpg",
  mark: "/images/mark.png",
};

const faqData = [
  {
    question: "How does a Washi T-post washing line work?",
    answer:
      "Our lines are heavy-gauge steel T-posts installed in the ground and tensioned with high-strength wire, giving you permanent, weather-resistant drying space in your yard — nothing to fold, nothing to store.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Choose a 6 m fixed line with 18 m of hanging space, a 12 m fixed line with 36 m of hanging space, or a rotating washing line with 3 m arms and seven high-strength lines.",
  },
  {
    question: "How much weight can it hold?",
    answer:
      "Load guidance depends on the selected Washi option and installation surface. The team will share the applicable product information before you order.",
  },
  {
    question: "Can it be installed in my yard?",
    answer:
      "Yes. T-posts are cemented into the ground on lawns, paving, along boundary walls and in open yards. Share your space and a photograph with the Washi team to start the conversation.",
  },
  {
    question: "Do you offer installation or delivery?",
    answer:
      "Yes. Materials and installation are included with every package at no extra charge. Contact the Washi team to confirm availability in your area.",
  },
];

const planningOptions = [
  {
    id: "compact",
    title: "Compact space",
    label: "SMALL YARD / COURTYARD",
    response: "The 6 m fixed line gives you 18 m of hanging space across three lines and includes free installation for $119.",
  },
  {
    id: "everyday",
    title: "Everyday laundry",
    label: "HOME / PATIO",
    response: "The 12 m fixed line gives you 36 m of hanging space across three lines and includes free installation for $179.",
  },
  {
    id: "larger",
    title: "Larger routine",
    label: "FAMILY HOME",
    response: "The $219 rotating washing line has 3 m arms and seven high-strength lines for generous, space-saving drying.",
  },
];

const services = [
  {
    label: "01",
    title: "6 m fixed line",
    price: "$119",
    summary: "18 m hanging space",
    image: assets.single,
    alt: "Compact black Washi T-post washing line installed in a garden",
    features: [
      "2 × 63 mm heavy-gauge poles",
      "18 m of 3.15 mm galvanised clothesline wire",
      "3 clothesline tighteners",
      "2 supporters",
      "Cement, river sand and ¾ stones",
    ],
  },
  {
    label: "02",
    title: "12 m fixed line",
    price: "$179",
    summary: "36 m hanging space",
    image: assets.longLine,
    alt: "A long run of Washi T-posts with tensioned lines along a boundary wall",
    features: [
      "3 heavy-gauge poles",
      "3 lines, each 12 m long",
      "36 m of total hanging space",
      "Materials supplied",
    ],
  },
  {
    label: "03",
    title: "Rotating washing line",
    price: "$219",
    summary: "7 high-strength lines",
    image: assets.rotarySky,
    alt: "Black Washi rotating washing line with arms spread against a blue sky",
    features: [
      "3 m arms",
      "7 high-strength lines",
      "Space-saving design",
      "Designed to dry clothes faster",
      "Materials supplied",
    ],
  },
];

function scrollToId(id: string, reducedMotion: boolean | null) {
  const target = document.getElementById(id);
  if (!target) return;
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY - 76,
    behavior: reducedMotion ? "auto" : "smooth",
  });
}

function WashiLogo() {
  return (
    <a className="brand" href="#top" aria-label="Washi Wash Lines home">
      <img className="brand__logo" src={assets.logo} alt="Washi Wash Lines" />
    </a>
  );
}

export default function Home() {
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparison, setComparison] = useState(53);
  const [selectedSpace, setSelectedSpace] = useState("everyday");
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 26);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const currentPlan = planningOptions.find((option) => option.id === selectedSpace) ?? planningOptions[1];
  const selectedService = services[productIndex];

  return (
    <main id="top" className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="site-nav__inner">
          <WashiLogo />
          <nav className="desktop-links" aria-label="Primary navigation">
            <button onClick={() => scrollToId("products", reducedMotion)}>Products</button>
            <button onClick={() => scrollToId("how-it-works", reducedMotion)}>How it works</button>
            <button onClick={() => scrollToId("gallery", reducedMotion)}>Gallery</button>
            <button onClick={() => scrollToId("faq", reducedMotion)}>FAQ</button>
          </nav>
          <div className="site-nav__actions">
            <a className="nav-order" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Order now <ArrowUpRight size={15} strokeWidth={2.5} />
            </a>
            <button className="menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {["Products", "How it works", "Gallery", "FAQ"].map((item) => {
              const id = item === "How it works" ? "how-it-works" : item.toLowerCase();
              return (
                <button key={item} onClick={() => { setMenuOpen(false); scrollToId(id, reducedMotion); }}>
                  {item}<ArrowDownRight size={19} />
                </button>
              );
            })}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowUpRight size={19} /></a>
          </motion.nav>
        )}
      </header>

      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__photo" aria-hidden="true">
          <img src={assets.hero} alt="" />
          <div className="hero__scrim" />
          <div className="hero__mechanic-line" />
        </div>
        <div className="hero__inner">
          <motion.p
            className="mechanic-label mechanic-label--light"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            GROUND-MOUNTED / T-POST / MADE FOR HOME
          </motion.p>
          <motion.h1
            id="hero-heading"
            initial={reducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
          >
            Laundry space.<br /><em>Without wasting space.</em>
          </motion.h1>
          <motion.div
            className="hero__bottom"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.36, ease: [0.23, 1, 0.32, 1] }}
          >
            <p>Premium T-post washing lines for homes that need serious drying space — installed once, built to last.</p>
            <div className="hero__actions">
              <button className="button button--red" onClick={() => scrollToId("products", reducedMotion)}>
                View wash lines <MoveRight size={18} />
              </button>
              <a className="button button--ghost" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Order on WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
        <button className="hero__scroll" onClick={() => scrollToId("proof", reducedMotion)} aria-label="Scroll to product benefits">
          <span>See how it works</span><ArrowDownRight size={18} />
        </button>
      </section>

      <section id="proof" className="proof-strip" aria-label="Washi product benefits">
        <div className="proof-strip__lead">
          <p className="mechanic-label">BUILT FOR EVERYDAY LIFE</p>
          <span className="proof-strip__line" />
        </div>
        <div className="proof-item"><span>01</span><div><strong>Heavy-gauge steel</strong><p>Painted T-posts cemented into the ground for years of use.</p></div></div>
        <div className="proof-item"><span>02</span><div><strong>Durable</strong><p>High-strength tensioned wire, built for everyday laundry.</p></div></div>
        <div className="proof-item"><span>03</span><div><strong>Easy to use</strong><p>Walk out. Hang your clothes. Done.</p></div></div>
      </section>

      <section className="space-problem" aria-labelledby="space-heading">
        <div className="section-intro section-intro--problem">
          <p className="mechanic-label">THE INSTALL TEST</p>
          <h2 id="space-heading">From bare yard to full drying power.</h2>
          <p>We supply the posts, wire, cement and labour. Slide to see what a Washi installation looks like on the day.</p>
        </div>
        <div className="comparison" aria-label="Interactive comparison between an unserved yard and a finished Washi installation">
          <div className="comparison__after">
            <img src={assets.laundry} alt="A Washi T-post washing line with towels drying across the lines" />
            <div className="comparison__caption comparison__caption--after"><span>AFTER</span><p>Installed. Tensioned. Ready for laundry.</p></div>
          </div>
          <div className="comparison__before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }} aria-hidden="true">
            <div className="traditional-scene">
              <img className="traditional-scene__photo" src={assets.materials} alt="" />
              <div className="comparison__caption comparison__caption--before"><span>BEFORE</span><p>Posts, wire and cement — delivered to your yard.</p></div>
            </div>
          </div>
          <div className="comparison__handle" style={{ left: `${comparison}%` }} aria-hidden="true"><span>↔</span></div>
          <input
            className="comparison__range"
            type="range"
            min="4"
            max="96"
            value={comparison}
            onChange={(event) => setComparison(Number(event.target.value))}
            aria-label="Move to compare traditional and Washi washing lines"
          />
        </div>
      </section>

      <section id="products" className="product-section" aria-labelledby="product-heading">
        <div className="product-section__head">
          <div>
            <p className="mechanic-label mechanic-label--light">FIX, SUPPLY &amp; INSTALL</p>
            <h2 id="product-heading">Choose your line.<br />We’ll install it free.</h2>
          </div>
          <p>Complete washing-line packages with materials supplied and free installation included.</p>
        </div>
        <div className="product-rail">
          {services.map((service, index) => (
            <button
              className={`product-panel ${productIndex === index ? "product-panel--active" : ""}`}
              key={service.label}
              onClick={() => setProductIndex(index)}
              aria-pressed={productIndex === index}
            >
              <img src={service.image} alt={service.alt} />
              <span className="product-panel__overlay" />
              <span className="product-panel__index">{service.label} / {service.summary}</span>
              <span className="product-panel__title">{service.title}<small>{service.price}</small></span>
              <span className="product-panel__arrow"><ArrowUpRight size={20} /></span>
            </button>
          ))}
        </div>
        <div className="service-details" aria-live="polite">
          <div className="service-details__intro">
            <span>{selectedService.label}</span>
            <div><p>{selectedService.title}</p><strong>{selectedService.price}</strong></div>
            <small>FIX &amp; SUPPLY</small>
          </div>
          <ul>
            {selectedService.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}
            <li><Check size={15} />Free installation included</li>
          </ul>
          <a className="button button--red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Order this line <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="space-planner" aria-labelledby="planner-heading">
        <div className="space-planner__photo">
          <img src={assets.pavedYard} alt="Washi T-posts installed along a paved backyard courtyard" />
          <span className="planner-photo__seam" aria-hidden="true" />
          <span className="planner-photo__label">WALL FIT / MOUNTING</span>
        </div>
        <div className="space-planner__content">
          <p className="mechanic-label">SPACE PLANNER</p>
          <h2 id="planner-heading">How much washing space do you need?</h2>
          <div className="space-selector" role="radiogroup" aria-label="Select your type of laundry space">
            {planningOptions.map((option) => (
              <button
                key={option.id}
                className={selectedSpace === option.id ? "space-selector__option space-selector__option--active" : "space-selector__option"}
                onClick={() => setSelectedSpace(option.id)}
                role="radio"
                aria-checked={selectedSpace === option.id}
              >
                <span>{option.title}</span><small>{option.label}</small>
              </button>
            ))}
          </div>
          <div className="planner-response" aria-live="polite">
            <span className="planner-response__tick"><Check size={16} /></span>
            <p>{currentPlan.response}</p>
          </div>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Start a WhatsApp enquiry <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section id="how-it-works" className="operation" aria-labelledby="operation-heading">
        <div className="operation__heading">
          <p className="mechanic-label mechanic-label--light">HOW IT WORKS</p>
          <h2 id="operation-heading">Choose.<br />Install.<br /><span>Dry.</span></h2>
        </div>
        <div className="operation__steps">
          <article><img src={assets.materials} alt="Washi T-posts, wire and cement laid out before installation" /><span>01</span><h3>Choose</h3><p>Pick the package that fits your yard and laundry routine.</p></article>
          <article><img src={assets.wallInstall} alt="Washi T-posts being cemented into the ground during installation" /><span>02</span><h3>Install</h3><p>We dig, cement the posts and tension the wire — at no extra charge.</p></article>
          <article><img src={assets.laundry} alt="Towels hanging on an installed Washi washing line" /><span>03</span><h3>Dry</h3><p>Sun-dried laundry every day, with drying space to spare.</p></article>
        </div>
      </section>

      <section className="benefits" aria-labelledby="benefits-heading">
        <div className="benefits__visual"><img src={assets.brickWall} alt="Black Washi T-posts installed along a brick boundary wall" /><span className="detail-marker detail-marker--one">01 <b>Heavy-gauge T-post</b></span><span className="detail-marker detail-marker--two">02 <b>Tensioned wire</b></span></div>
        <div className="benefits__content">
          <p className="mechanic-label">WHY WASHI</p>
          <h2 id="benefits-heading">Built around a<br />simple daily routine.</h2>
          <div className="benefit-list">
            {["Serious drying space", "Weather-resistant steel", "Cemented for stability", "No clutter, ever"].map((benefit, index) => (
              <div className="benefit-list__item" key={benefit}><span>0{index + 1}</span><p>{benefit}</p><Plus size={18} /></div>
            ))}
          </div>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to the Washi team <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section className="installation" aria-labelledby="installation-heading">
        <div className="installation__copy">
          <p className="mechanic-label mechanic-label--light">THE NEXT STEP</p>
          <h2 id="installation-heading">Materials supplied.<br />Installation is free.</h2>
          <p>Choose your washing line package and we’ll supply the materials and install it for you at no extra charge.</p>
          <a className="button button--red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Book free installation <ArrowUpRight size={18} /></a>
        </div>
        <div className="installation__process">
          {["Measure", "Mount", "Use"].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}
        </div>
      </section>

      <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
        <div className="gallery__top">
          <div><p className="mechanic-label">BUILT FOR REAL HOMES</p><h2 id="gallery-heading">Space looks better<br />when it works harder.</h2></div>
          <p>Real installations for real yards — lawns, courtyards, patios and spaces along boundary walls.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-grid__main"><img src={assets.greyWall} alt="A full run of Washi T-post washing lines installed along a grey boundary wall" /><figcaption>INSTALLED / BOUNDARY WALL</figcaption></figure>
          <figure className="gallery-grid__top"><img src={assets.rotaryFolded} alt="A Washi rotating washing line with arms folded between wash days" /><figcaption>ROTARY / ARMS FOLDED</figcaption></figure>
          <div className="gallery-grid__statement"><span>ALWAYS READY <b>TO DRY.</b></span><i /></div>
          <figure className="gallery-grid__detail"><img src={assets.multiWhite} alt="A set of galvanised Washi T-posts installed across a paved courtyard" /><figcaption>GALVANISED / COURTYARD</figcaption></figure>
        </div>
      </section>

      <section id="faq" className="faq" aria-labelledby="faq-heading">
        <div className="faq__intro"><p className="mechanic-label mechanic-label--light">FAQ</p><h2 id="faq-heading">Straight answers.<br />Useful next steps.</h2><p>Where product availability or local service detail is required, we keep the answer honest and direct you to the Washi team.</p></div>
        <Accordion type="single" collapsible className="faq__list">
          {faqData.map((item, index) => (
            <AccordionItem value={`faq-${index}`} key={item.question}>
              <AccordionTrigger><span>0{index + 1}</span>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="final-cta" aria-labelledby="cta-heading">
        <img src={assets.hero} alt="" aria-hidden="true" />
        <div className="final-cta__overlay" />
        <div className="final-cta__content"><p className="mechanic-label mechanic-label--light">MAKE SPACE FOR BETTER LAUNDRY</p><h2 id="cta-heading">Ready to upgrade<br />your washing line?</h2><p>Tell us what you need and we’ll help you choose the right Washi.</p><a className="button button--red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Order on WhatsApp <ArrowUpRight size={18} /></a></div>
      </section>

      <footer className="footer">
        <div className="footer__top"><WashiLogo /><p>Your devoted washline supplier.</p><a className="footer__whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={17} /></a></div>
        <div className="footer__links"><a href="#products">Products</a><a href="#how-it-works">How it works</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><span>© {new Date().getFullYear()} Washi Wash Lines</span></div>
        <p className="footer__note">Website contact link uses a configurable WhatsApp placeholder. Replace <code>WHATSAPP_NUMBER</code> in the site source before launch.</p>
      </footer>

      <a className="mobile-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>Order on WhatsApp</span><ArrowUpRight size={19} /></a>
    </main>
  );
}
