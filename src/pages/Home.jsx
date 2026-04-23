import { useState, useEffect, useRef } from "react";

const foodItems = [
  { emoji: "🍕", name: "Margherita Pizza", delay: "0s" },
  { emoji: "🍜", name: "Ramen Bowl", delay: "0.3s" },
  { emoji: "🥘", name: "Paella", delay: "0.6s" },
  { emoji: "🍣", name: "Sushi Platter", delay: "0.9s" },
  { emoji: "🥗", name: "Caesar Salad", delay: "1.2s" },
  { emoji: "🍔", name: "Smash Burger", delay: "1.5s" },
];

const dishes = [
  { name: "Truffle Risotto", category: "Italian", price: "680", rating: "4.9", time: "25 min", emoji: "🍚" },
  { name: "Lamb Biryani", category: "Indian", price: "520", rating: "4.8", time: "35 min", emoji: "🍛" },
  { name: "Dragon Roll", category: "Japanese", price: "750", rating: "4.9", time: "20 min", emoji: "🍣" },
  { name: "Smash Burger", category: "American", price: "480", rating: "4.7", time: "15 min", emoji: "🍔" },
  { name: "Thai Green Curry", category: "Thai", price: "420", rating: "4.8", time: "25 min", emoji: "🍲" },
  { name: "Margherita Pizza", category: "Italian", price: "560", rating: "4.6", time: "20 min", emoji: "🍕" },
  { name: "Pad Thai", category: "Thai", price: "390", rating: "4.7", time: "20 min", emoji: "🍜" },
  { name: "Beef Tacos", category: "Mexican", price: "440", rating: "4.9", time: "15 min", emoji: "🌮" },
];

const stats = [
  { value: 48200, label: "Happy Visitors", suffix: "+" },
  { value: 320, label: "Dishes Served Daily", suffix: "+" },
  { value: 15, label: "Master Chefs", suffix: "" },
  { value: 98, label: "Satisfaction Rate", suffix: "%" },
];

function useCountUp(target, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, suffix, animate }) {
  const count = useCountUp(value, 2000, animate);
  return (
    <div
      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,200,100,0.3)", borderRadius: 20, padding: "2rem 1.5rem", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,180,50,0.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ fontSize: "3rem", fontWeight: 700, color: "#FFB830", fontFamily: "'Playfair Display', serif", lineHeight: 1.1 }}>
        {animate ? count.toLocaleString() : 0}{suffix}
      </div>
      <div style={{ color: "rgba(255,255,255,0.7)", marginTop: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
        {label}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", background: "#0f0a00", color: "#fff", margin: 0, padding: 0, overflowX: "hidden" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg)} 33%{transform:translateY(-18px) rotate(3deg)} 66%{transform:translateY(-8px) rotate(-2deg)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        .dish-row:hover{background:rgba(255,180,50,0.08)!important;transform:translateX(6px)}
        .nav-btn:hover{color:#FFB830!important}
        .cta-btn:hover{background:#FFB830!important;color:#0f0a00!important;transform:translateY(-3px);box-shadow:0 12px 30px rgba(255,184,48,0.4)!important}
        ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-track{background:#0f0a00} ::-webkit-scrollbar-thumb{background:#FFB830;border-radius:2px}
      `}</style>

      {/* SECTION 1 — HERO */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "radial-gradient(ellipse at 60% 40%, #3a1800 0%, #1a0800 40%, #0f0a00 100%)", padding: "6rem 2rem 3rem", position: "relative", overflow: "hidden" }}>
        {foodItems.map((f, i) => (
          <div key={i} style={{ position: "absolute", fontSize: `${2 + (i % 3)}rem`, opacity: 0.1, animation: `float ${3 + i * 0.5}s ease-in-out infinite`, animationDelay: f.delay, top: `${10 + (i * 15) % 70}%`, left: `${5 + (i * 17) % 88}%`, pointerEvents: "none", filter: "blur(1px)" }}>
            {f.emoji}
          </div>
        ))}

        <div style={{ display: "flex", gap: "1.2rem", marginBottom: "3rem", justifyContent: "center", flexWrap: "wrap" }}>
          {foodItems.map((f, i) => (
            <div key={i}
              style={{ animation: `float ${2.5 + i * 0.4}s ease-in-out infinite, fadeUp 0.8s ease ${i * 0.15}s both`, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,184,48,0.2)", borderRadius: 20, padding: "1.2rem", textAlign: "center", width: 100, cursor: "default", transition: "border-color 0.3s, background 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFB830"; e.currentTarget.style.background = "rgba(255,184,48,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,184,48,0.2)"; e.currentTarget.style.background = "rgba(255,255,255,0.05)"; }}
            >
              <div style={{ fontSize: "2.8rem", marginBottom: "0.4rem" }}>{f.emoji}</div>
              <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>{f.name}</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", animation: "fadeUp 1s ease 0.8s both" }}>
          <div style={{ fontSize: "0.8rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#FFB830", marginBottom: "1rem" }}>
            ✦ Where Every Bite Tells a Story ✦
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.1, margin: "0 0 1.5rem", background: "linear-gradient(135deg, #FFD580, #FFB830, #FF7A00)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 4s linear infinite" }}>
            Flavour<br /><em>Awaits You</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
            A curated dining experience where global cuisines meet artisan craft. Fresh ingredients, bold flavours, unforgettable memories.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button className="cta-btn" onClick={() => scrollTo("dishes")} style={{ background: "transparent", border: "2px solid #FFB830", color: "#FFB830", padding: "0.9rem 2.5rem", borderRadius: 50, cursor: "pointer", fontSize: "0.9rem", letterSpacing: "0.08em", fontFamily: "'Lato', sans-serif", transition: "all 0.3s", fontWeight: 700 }}>
              Explore Menu
            </button>
            <button className="cta-btn" onClick={() => scrollTo("create")} style={{ background: "#FFB830", border: "2px solid #FFB830", color: "#0f0a00", padding: "0.9rem 2.5rem", borderRadius: 50, cursor: "pointer", fontSize: "0.9rem", letterSpacing: "0.08em", fontFamily: "'Lato', sans-serif", transition: "all 0.3s", fontWeight: 700 }}>
              Book a Table
            </button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", animation: "float 3s ease-in-out infinite" }}>
          <div style={{ width: 2, height: 40, background: "linear-gradient(to bottom, #FFB830, transparent)", margin: "0 auto" }} />
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB830", margin: "0 auto" }} />
        </div>
      </section>

      {/* SECTION 2 — DISHES */}
      <section id="dishes" style={{ minHeight: "100vh", padding: "6rem 2rem", background: "linear-gradient(180deg, #0f0a00 0%, #130c00 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.78rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB830" }}>Our Specialities</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", margin: "0.5rem 0 0" }}>Signature <em>Dishes</em></h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {dishes.map((dish, i) => (
              <div key={i} className="dish-row" style={{ display: "flex", alignItems: "center", gap: "1.2rem", padding: "1.1rem 1.2rem", borderBottom: "1px solid rgba(255,255,255,0.06)", transition: "all 0.3s", borderRadius: 12, cursor: "pointer", animation: `slideLeft 0.5s ease ${i * 0.07}s both` }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: "rgba(255,184,48,0.1)", border: "1px solid rgba(255,184,48,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", flexShrink: 0 }}>
                  {dish.emoji}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: "1rem" }}>{dish.name}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{dish.category}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textAlign: "center" }}>
                    <div>⏱</div><div>{dish.time}</div>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#FFB830", textAlign: "center" }}>
                    <div>★</div><div>{dish.rating}</div>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: "#FFB830", minWidth: 60, textAlign: "right" }}>
                    ₹{dish.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button className="cta-btn" style={{ background: "transparent", border: "1px solid rgba(255,184,48,0.4)", color: "#FFB830", padding: "0.75rem 2rem", borderRadius: 50, cursor: "pointer", fontSize: "0.82rem", letterSpacing: "0.1em", fontFamily: "'Lato', sans-serif", transition: "all 0.3s", textTransform: "uppercase" }}>
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 3 — STATS */}
      <section id="stats" ref={statsRef} style={{ minHeight: "60vh", padding: "6rem 2rem", background: "linear-gradient(135deg, #1a0c00, #0f0a00, #1a0800)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", width: 600, height: 600, border: "1px solid rgba(255,184,48,0.05)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.78rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB830" }}>By the Numbers</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", margin: "0.5rem 0 0" }}>People Who <em>Trust Us</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", maxWidth: 900, width: "100%" }}>
          {stats.map((s, i) => <StatCard key={i} {...s} animate={statsVisible} />)}
        </div>
      </section>

      {/* SECTION 4 — CREATE / CTA */}
      <section id="create" style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem", background: "linear-gradient(180deg, #0f0a00 0%, #0a0700 100%)", position: "relative", overflow: "hidden" }}>
        {[0,1,2].map(i => (
          <div key={i} style={{ position: "absolute", width: 200 + i * 80, height: 200 + i * 80, borderRadius: "50%", background: `rgba(255,${100+i*30},0,0.04)`, top: `${20+i*25}%`, left: ["20%","70%","50%"][i], filter: "blur(40px)", animation: `float ${4+i}s ease-in-out infinite`, animationDelay: `${i*0.8}s`, pointerEvents: "none" }} />
        ))}

        <div style={{ textAlign: "center", position: "relative", zIndex: 1, maxWidth: 650 }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🍽️</div>
          <span style={{ fontSize: "0.78rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFB830" }}>Reserve Your Spot</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "0.75rem 0 1.5rem", lineHeight: 1.2 }}>
            Create an <em>Unforgettable</em><br />Dining Experience
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
            Design your perfect meal. Choose your table, curate your courses, and let our chefs craft a personalized journey just for you.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {[{ label: "🗓 Book a Table", href: "/about", primary: false }, { label: "✏️ Create Your Menu", href: "/create", primary: true }].map(({ label, href, primary }, i) => (
              <a key={i} href={href} style={{ background: primary ? "#FFB830" : "transparent", border: "2px solid #FFB830", color: primary ? "#0f0a00" : "#FFB830", padding: "1rem 2.5rem", borderRadius: 50, fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Lato', sans-serif", textDecoration: "none", letterSpacing: "0.05em", transition: "all 0.3s", display: "inline-block" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(255,184,48,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", gap: "0.8rem", justifyContent: "center", flexWrap: "wrap" }}>
            {["Free Cancellation", "Private Dining", "Custom Menus", "Chef's Special"].map(chip => (
              <span key={chip} style={{ background: "rgba(255,184,48,0.08)", border: "1px solid rgba(255,184,48,0.2)", color: "rgba(255,255,255,0.55)", padding: "0.35rem 0.9rem", borderRadius: 50, fontSize: "0.75rem" }}>{chip}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — FOOTER */}
      <footer id="footer" style={{ background: "#080500", borderTop: "1px solid rgba(255,184,48,0.12)", padding: "4rem 3rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "#FFB830", marginBottom: "1rem" }}>Fla<em>vour</em></div>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                A culinary destination where passion meets the plate. Serving joy since 2018.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {["FB","TW","IG","YT"].map(s => (
                  <div key={s} style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: "0.65rem", fontWeight: 700, transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#FFB830"; e.currentTarget.style.color = "#FFB830"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
                  >{s}</div>
                ))}
              </div>
            </div>

            <div>
              <h4 style={{ color: "#fff", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Quick Links</h4>
              {["About Us","Our Menu","Gallery","Events","Blog"].map(link => (
                <div key={link} style={{ marginBottom: "0.6rem" }}>
                  <a href="#" style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#FFB830"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.45)"}
                  >{link}</a>
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ color: "#fff", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Contact</h4>
              {[["📍","42 Gourmet Lane, MG Road, Siliguri"],["📞","+91 98000 12345"],["✉️","hello@flavour.in"],["🕐","Mon–Sun: 11am – 11pm"]].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.8rem", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "0.85rem" }}>{icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ color: "#fff", fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.2rem" }}>Stay Updated</h4>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.83rem", marginBottom: "1rem", lineHeight: 1.7 }}>Get weekly specials and chef picks in your inbox.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <input type="email" placeholder="your@email.com" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "0.7rem 1rem", color: "#fff", fontSize: "0.85rem", outline: "none", fontFamily: "'Lato', sans-serif", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "#FFB830"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.12)"}
                />
                <button style={{ background: "#FFB830", border: "none", borderRadius: 10, padding: "0.7rem 1rem", color: "#0f0a00", fontWeight: 700, fontSize: "0.82rem", cursor: "pointer", fontFamily: "'Lato', sans-serif", letterSpacing: "0.08em", transition: "opacity 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >SUBSCRIBE</button>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem", margin: 0 }}>
              © 2025 Flavour Restaurant. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy","Terms of Use","Refund Policy"].map(link => (
                <a key={link} href="#" style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#FFB830"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
                >{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}