/**
 * Folding Mechanics design: product function, structural linework, and purposeful red signals lead every section.
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
  "Hi Washi Wash Lines, I'd like to order a foldable washing line. Can you help me choose the right size?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const assets = {
  hero: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/FhNgbslLdUJcDFWw.jpg",
  logo: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/hhltIxTgsQPJFTLk.jpeg",
  comparison: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/TtPWYYHDRlIdlRdj.jpg",
  folded: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/qTTJCbnHDKPmXjUg.jpg",
  hinge: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/KNKAxEmnqUvRsHil.jpg",
  balcony: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/ilDEMjnRRnniuUuL.jpg",
  open: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/aMBwqJYnXbHvWUcU.jpg",
  hang: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/HQmnpxQSKqmSruuy.jpg",
  fold: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/IhJKGDuoahdSixKG.jpg",
  mount: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/jYOouZoNbDvudbKE.jpg",
  mark: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663439519739/ztDdrwyIEaawWHLd.png",
};

const faqData = [
  {
    question: "How does a foldable washing line work?",
    answer:
      "Washi lines are designed to open out when you need drying space and fold back against the wall when you are finished. Ask us about the current options for your space.",
  },
  {
    question: "What sizes are available?",
    answer:
      "Available sizes are confirmed directly with the Washi team. Send a WhatsApp message with a photo or a quick description of your wall and outdoor area.",
  },
  {
    question: "How much weight can it hold?",
    answer:
      "Load guidance depends on the selected Washi option and installation surface. The team will share the applicable product information before you order.",
  },
  {
    question: "Can it be installed on my wall?",
    answer:
      "Wall suitability needs to be confirmed for the specific site. Share your wall type and a photograph with the Washi team to start the conversation.",
  },
  {
    question: "Do you offer installation or delivery?",
    answer:
      "Please contact Washi directly to confirm the current installation guidance, delivery options, and areas served. These details are not assumed on this website.",
  },
];

const planningOptions = [
  {
    id: "compact",
    title: "Compact space",
    label: "BALCONY / SMALL PATIO",
    response: "Tell us about your available wall and we’ll help you consider the right Washi option.",
  },
  {
    id: "everyday",
    title: "Everyday laundry",
    label: "HOME / PATIO",
    response: "Share how often you wash and your available wall space, then we’ll help you choose a suitable option.",
  },
  {
    id: "larger",
    title: "Larger routine",
    label: "FAMILY HOME",
    response: "Tell us about your household routine and the space you want to keep clear. We’ll guide the next step.",
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
  const productPanels = [
    { label: "01", title: "Find your fit", image: assets.folded, alt: "Folded black Washi washing line mounted neatly to a wall" },
    { label: "02", title: "Built for the wall", image: assets.hinge, alt: "Close-up view of a black foldable washing line wall bracket" },
    { label: "03", title: "Keep the view", image: assets.balcony, alt: "Foldable washing line extended across a compact balcony" },
  ];

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
            WALL-MOUNTED / FOLDABLE / MADE FOR HOME
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
            <p>Premium foldable washing lines for homes that need drying space, not permanent clutter.</p>
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
        <div className="proof-item"><span>01</span><div><strong>Space saving</strong><p>Folds neatly against the wall when you’re finished.</p></div></div>
        <div className="proof-item"><span>02</span><div><strong>Durable</strong><p>Designed for reliable, everyday use.</p></div></div>
        <div className="proof-item"><span>03</span><div><strong>Easy to use</strong><p>Open it. Hang your clothes. Fold it away.</p></div></div>
      </section>

      <section className="space-problem" aria-labelledby="space-heading">
        <div className="section-intro section-intro--problem">
          <p className="mechanic-label">THE SPACE TEST</p>
          <h2 id="space-heading">Your washing line shouldn’t take over your yard.</h2>
          <p>Traditional washing lines consume outdoor space. Washi gives you the drying space you need, then gets out of the way.</p>
        </div>
        <div className="comparison" aria-label="Interactive comparison between a traditional washing line and Washi">
          <div className="comparison__after">
            <img src={assets.folded} alt="A folded Washi washing line keeping a wall clean and uncluttered" />
            <div className="comparison__caption comparison__caption--after"><span>WASHI</span><p>Foldable. Practical. Space efficient.</p></div>
          </div>
          <div className="comparison__before" style={{ clipPath: `inset(0 ${100 - comparison}% 0 0)` }} aria-hidden="true">
            <div className="traditional-scene">
              <img className="traditional-scene__photo" src={assets.comparison} alt="" />
              <div className="comparison__caption comparison__caption--before"><span>TRADITIONAL</span><p>Permanent. Bulky. Takes up space.</p></div>
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
            <p className="mechanic-label mechanic-label--light">CHOOSE YOUR WASHI</p>
            <h2 id="product-heading">Choose the space.<br />We’ll help with the line.</h2>
          </div>
          <p>Current product specifications, dimensions and pricing are confirmed directly with the Washi team.</p>
        </div>
        <div className="product-rail">
          {productPanels.map((panel, index) => (
            <button
              className={`product-panel ${productIndex === index ? "product-panel--active" : ""}`}
              key={panel.label}
              onClick={() => setProductIndex(index)}
              aria-pressed={productIndex === index}
            >
              <img src={panel.image} alt={panel.alt} />
              <span className="product-panel__overlay" />
              <span className="product-panel__index">{panel.label}</span>
              <span className="product-panel__title">{panel.title}</span>
              <span className="product-panel__arrow"><ArrowUpRight size={20} /></span>
            </button>
          ))}
        </div>
        <div className="product-disclosure">
          <span className="product-disclosure__rule" />
          <p><strong>Product information in progress.</strong> No unverified sizes, dimensions, capacity or pricing are shown here. Tell us about your space and the team will recommend an available Washi option.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Ask about available wash lines <ArrowUpRight size={17} /></a>
        </div>
      </section>

      <section className="space-planner" aria-labelledby="planner-heading">
        <div className="space-planner__photo">
          <img src={assets.mount} alt="A fold-down washing line being mounted to an exterior wall" />
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
          <h2 id="operation-heading">Open.<br />Dry.<br /><span>Fold.</span></h2>
        </div>
        <div className="operation__steps">
          <article><img src={assets.open} alt="Wall-mounted washing line opened and ready to use" /><span>01</span><h3>Open</h3><p>Fold the washing line down into position.</p></article>
          <article><img src={assets.hang} alt="Laundry hanging on a wall-mounted foldable drying rack" /><span>02</span><h3>Hang</h3><p>Use the drying space without sacrificing your home’s order.</p></article>
          <article><img src={assets.fold} alt="Foldable washing line shown in its compact wall-mounted form" /><span>03</span><h3>Fold away</h3><p>When you’re finished, fold it neatly back against the wall.</p></article>
        </div>
      </section>

      <section className="benefits" aria-labelledby="benefits-heading">
        <div className="benefits__visual"><img src={assets.hinge} alt="Detailed view of Washi’s durable black steel folding mechanism" /><span className="detail-marker detail-marker--one">01 <b>Secure wall mount</b></span><span className="detail-marker detail-marker--two">02 <b>Folding joint</b></span></div>
        <div className="benefits__content">
          <p className="mechanic-label">WHY WASHI</p>
          <h2 id="benefits-heading">Built around a<br />simple daily routine.</h2>
          <div className="benefit-list">
            {["More space", "Less clutter", "Made for daily use", "A cleaner look"].map((benefit, index) => (
              <div className="benefit-list__item" key={benefit}><span>0{index + 1}</span><p>{benefit}</p><Plus size={18} /></div>
            ))}
          </div>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Talk to the Washi team <ArrowUpRight size={18} /></a>
        </div>
      </section>

      <section className="installation" aria-labelledby="installation-heading">
        <div className="installation__copy">
          <p className="mechanic-label mechanic-label--light">THE NEXT STEP</p>
          <h2 id="installation-heading">Bring us your wall.<br />We’ll start from there.</h2>
          <p>Share your outdoor space with Washi. The team can confirm the available product information and guide you through the right next step.</p>
          <a className="button button--red" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Ask about installation <ArrowUpRight size={18} /></a>
        </div>
        <div className="installation__process">
          {["Measure", "Mount", "Use"].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}
        </div>
      </section>

      <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
        <div className="gallery__top">
          <div><p className="mechanic-label">BUILT FOR REAL HOMES</p><h2 id="gallery-heading">Space looks better<br />when it works harder.</h2></div>
          <p>Product-focused imagery for homes, patios, balconies and compact outdoor spaces.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-grid__main"><img src={assets.balcony} alt="Washi foldable washing line fully extended across a modern balcony" /><figcaption>EXTENDED / BALCONY</figcaption></figure>
          <figure className="gallery-grid__top"><img src={assets.folded} alt="Washi line folded flat to a modern exterior wall" /><figcaption>FOLDED / WALL</figcaption></figure>
          <div className="gallery-grid__statement"><span>KEEP THE <b>VIEW.</b></span><i /></div>
          <figure className="gallery-grid__detail"><img src={assets.hinge} alt="Black Washi folding line hinge in close-up" /><figcaption>DETAIL / MECHANISM</figcaption></figure>
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
        <div className="footer__top"><WashiLogo /><p>Your devoted foldable washline supplier.</p><a className="footer__whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer">WhatsApp us <ArrowUpRight size={17} /></a></div>
        <div className="footer__links"><a href="#products">Products</a><a href="#how-it-works">How it works</a><a href="#gallery">Gallery</a><a href="#faq">FAQ</a><span>© {new Date().getFullYear()} Washi Wash Lines</span></div>
        <p className="footer__note">Website contact link uses a configurable WhatsApp placeholder. Replace <code>WHATSAPP_NUMBER</code> in the site source before launch.</p>
      </footer>

      <a className="mobile-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span>Order on WhatsApp</span><ArrowUpRight size={19} /></a>
    </main>
  );
}
