"use client";

import { useEffect, useState } from "react";

const projects = [
  { id: "01", tag: "Corporate banking", title: "QLola by BRI", image: "/qlola-bri.jpg", url: "https://bri.co.id/web/guest/qlola", route: "POST /cash-management", desc: "Digital banking infrastructure for one of Indonesia’s largest corporate banking platforms.", points: ["35% faster document-processing throughput", "50% less Kibana log-query time", "99.9% service uptime"], role: "Backend engineer · API & platform reliability", challenge: "A high-volume corporate platform needed faster document processing, clearer observability, and dependable service continuity.", approach: "Built and improved services on gRPC and PostgreSQL, reduced noisy log queries with structured logging, and tuned database access patterns for faster responses.", impact: "A calmer operational loop: faster document workflows, quicker incident investigation, and dependable access for corporate banking users.", tone: "lime" },
  { id: "02", tag: "Mobile banking", title: "Qita by BRI", image: "/qita-bri.jpg", url: "https://bri.co.id/en/brimo", route: "POST /payments", desc: "The next-generation BRImo experience - scalable API foundations for millions of everyday banking moments.", points: ["Built credit-card & payment services", "Migrated legacy services from BRImo to Qita", "Reliable, secure, high-performance APIs"], role: "Backend engineer · Core banking integrations", challenge: "The new mobile banking experience required a stable foundation while moving from legacy service patterns to a modern runtime.", approach: "Delivered APIs and business logic for card and payment features, then supported the migration from BRImo to Qita.", impact: "A more maintainable platform path for everyday banking journeys, backed by reliable integrations and clearer service boundaries.", tone: "blue" }
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [hello, setHello] = useState("Hello, world!");
  const [copied, setCopied] = useState(false);
  const [caseOpen, setCaseOpen] = useState(false);

  useEffect(() => {
    const messages = ["Hello, world!", "Halo, internet!", "Let’s ship something good."];
    const timer = window.setInterval(() => setHello(messages[Math.floor(Math.random() * messages.length)]), 3600);
    return () => window.clearInterval(timer);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("syihabupnyk@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <div className="grain" />
      <nav className="nav"><a className="logo" href="#top">S<span>R</span>R</a><div className="nav-links"><a href="#work">work</a><a href="#about">about</a><a href="#contact">contact</a></div><span className="availability"><i /> available for impact</span></nav>

      <section id="top" className="hero section">
        <div className="hero-top"><p className="eyebrow">BACKEND ENGINEER · JAKARTA, ID</p><button className="hello" onClick={() => setHello("Nice to meet you ✦")}>{hello}</button></div>
        <div className="hero-copy"><p className="pretitle">I make complicated systems feel</p><h1>quietly<br /><em>powerful.</em></h1><p className="intro">Backend engineer building reliable banking products at BRI - from the APIs people never see to the moments they rely on every day.</p><div className="impact-rail"><span><b>2+</b> years building</span><span><b>99.9%</b> uptime supported</span><span><b>35%</b> faster processing</span></div></div>
        <div className="hero-bottom"><a href="#work" className="scroll">SCROLL TO EXPLORE <b>↓</b></a><div className="orbital"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="planet">✦</span></div><p className="micro">currently<br />building at <strong>BRI</strong></p></div>
      </section>

      <section id="work" className="work section">
        <div className="section-head"><p className="eyebrow">SELECTED WORK / 2024—NOW</p><p className="counter">0{active + 1} / 02</p></div>
        <div className="project-tabs">{projects.map((p, index) => <button key={p.id} className={active === index ? "active" : ""} onClick={() => { setActive(index); setCaseOpen(false); }}><span>{p.id}</span>{p.title}<i>↗</i></button>)}</div>
        <article className={`project-card ${projects[active].tone}`}>
          <div className="card-visual"><img className="project-image" src={projects[active].image} alt={`${projects[active].title} interface`} /><div className="image-wash" /><span className="card-shape shape-a" /><span className="card-shape shape-b" /><span className="card-mark">{projects[active].id}</span><div className="code-chip chip-one">&lt;/&gt; API</div><div className="code-chip chip-two">DB ● ONLINE</div><div className="terminal"><span>● ● ●</span><code>{projects[active].route}<br />200 · 42ms</code></div><div className="scanline" /></div>
          <div className="card-content"><p className="tag">{projects[active].tag}</p><h2>{projects[active].title}</h2><p className="project-desc">{projects[active].desc}</p><ul>{projects[active].points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-actions"><a className="project-link" href={projects[active].url} target="_blank" rel="noreferrer">OPEN PRODUCT ↗</a><button className="case-study" onClick={() => setCaseOpen(!caseOpen)} aria-expanded={caseOpen}>{caseOpen ? "CLOSE CASE STUDY" : "READ CASE STUDY"} <b>{caseOpen ? "↑" : "→"}</b></button></div></div>
        </article>
        {caseOpen && <section className={`case-panel ${projects[active].tone}`} aria-label={`${projects[active].title} case study`}><div className="case-kicker"><span>CASE STUDY / {projects[active].id}</span><span>{projects[active].role}</span></div><div className="case-grid"><div><p className="case-label">THE CHALLENGE</p><p>{projects[active].challenge}</p></div><div><p className="case-label">THE APPROACH</p><p>{projects[active].approach}</p></div><div><p className="case-label">THE IMPACT</p><p>{projects[active].impact}</p></div></div></section>}
      </section>

      <section id="about" className="about section"><p className="eyebrow">A LITTLE MORE HUMAN</p><div className="about-grid"><h2>Good systems are <em>invisible.</em><br />Until they matter.</h2><div><p>I’m Syihabudin Rahmat Ramadhan, a backend engineer with 2+ years of experience shaping banking products used at meaningful scale.</p><p>My happy place is where robust architecture meets an easy-to-use experience: APIs that stay calm under pressure, data that moves with purpose, and tiny performance wins that add up.</p><div className="skills"><span>Go</span><span>Java</span><span>Node.js</span><span>PostgreSQL</span><span>GCP</span><span>Docker</span></div></div></div></section>

      <section className="capabilities section" aria-label="Capabilities"><div className="section-head"><p className="eyebrow">WHAT I CAN SHIP</p><p className="counter">CAPABILITIES / 05</p></div><div className="capability-grid"><article><span>01</span><h3>Backend systems</h3><p>Scalable APIs, integrations, data flows, observability, and the dependable services behind digital products.</p><code>Go · Java · Node.js · PostgreSQL</code></article><article><span>02</span><h3>Product-facing web</h3><p>Clean, responsive frontend experiences that make technical products easy to understand and pleasant to use.</p><code>Next.js · React · TypeScript</code></article><article><span>03</span><h3>Mobile product delivery</h3><p>Backend foundations and service integrations for reliable mobile banking flows, payments, and cards.</p><code>API design · Payments · MSR</code></article><article><span>04</span><h3>Cloud & platform</h3><p>Cloud infrastructure, deployment workflows, monitoring, and reliable environments that teams can move quickly with.</p><code>Google Cloud · Docker · CI/CD</code></article><article className="ai-capability"><span>05</span><h3>AI-accelerated shipping</h3><p>I use AI deliberately to prototype faster, automate repetitive work, explore options, and ship polished solutions without losing engineering judgment.</p><code>AI workflows · Fast iteration · Product thinking</code></article></div></section>

      <section className="certifications section" aria-label="Certifications"><p className="eyebrow">CREDENTIALS / VERIFIED KNOWLEDGE</p><article className="certificate-card"><div className="certificate-mark">G<span>☁</span></div><div className="certificate-copy"><p className="cert-status"><i /> ACTIVE THROUGH DEC 2026</p><h2>Google Cloud Certified<br /><em>Associate Cloud Engineer</em></h2><p>Validated cloud skills across Google Cloud infrastructure, deployment, operations, and solution implementation.</p></div><div className="certificate-meta"><span>ISSUED<br /><b>DEC 07, 2023</b></span><span>CREDENTIAL ID<br /><b>e9a02f7b7z451c84a46320c22034ad</b></span><a href="/google-cloud-associate-cloud-engineer.pdf" target="_blank" rel="noreferrer">VIEW CERTIFICATE ↗</a></div></article></section>

      <section id="contact" className="contact section"><p className="eyebrow">HAVE A NICE PROBLEM?</p><h2>Let’s build<br /><em>something lovely.</em></h2><div className="contact-row"><button className="email" onClick={copyEmail}>{copied ? "COPIED! ✦" : "SYIHABUPNYK@GMAIL.COM"}</button><div className="socials"><a href="https://www.linkedin.com/in/syihabudin-rahmat-ramadhan-1b29651b5" target="_blank" rel="noreferrer" aria-label="Open Syihabudin's LinkedIn profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.35 3.5a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7ZM3.3 9.5h4.1v11H3.3v-11Zm6.67 0h3.93V11h.06c.55-1.03 1.88-2.12 3.87-2.12 4.14 0 4.91 2.73 4.91 6.28v5.34h-4.1v-4.73c0-1.13-.02-2.58-1.57-2.58-1.58 0-1.82 1.23-1.82 2.5v4.8h-4.1v-11Z" /></svg><span>LINKEDIN</span><b>↗</b></a><a href="https://github.com/syihabudin081" target="_blank" rel="noreferrer" aria-label="Open Syihabudin's GitHub profile"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.93c.46.08.63-.2.63-.44v-1.78c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.02-1.34-1.02-1.34-.83-.57.06-.56.06-.56.92.06 1.4.94 1.4.94.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.83.94-2.47-.1-.23-.4-1.17.1-2.44 0 0 .77-.25 2.52.94A8.77 8.77 0 0 1 12 7.17c.78 0 1.56.1 2.3.31 1.76-1.19 2.52-.94 2.52-.94.5 1.27.2 2.21.1 2.44.59.64.94 1.47.94 2.47 0 3.53-2.14 4.3-4.18 4.53.33.29.62.85.62 1.72v2.56c0 .25.17.53.64.44A9.2 9.2 0 0 0 12 2.8Z" /></svg><span>GITHUB</span><b>↗</b></a></div></div></section>
      <footer><span>© 2026 SYIHABUDIN RAHMAT RAMADHAN</span><span>DESIGNED WITH A LITTLE SPARK ✦</span></footer>
    </main>
  );
}
