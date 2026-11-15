"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Github,
  Layers3,
  Menu,
  Moon,
  Network,
  Sun,
  Terminal,
  X,
} from "lucide-react";
import {
  engineeringLog,
  foundations,
  interests,
  milestones,
  profile,
  projects,
} from "../data/portfolio";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeTopic, setActiveTopic] = useState(interests[0].id);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedTopic = interests.find((topic) => topic.id === activeTopic) ?? interests[0];

  return (
    <main className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Laxam Poudel home">
          <span className="wordmark-symbol">LP<span>↗</span></span>
          <span className="wordmark-name">LAXAM POUDEL</span>
        </a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#map" onClick={() => setMenuOpen(false)}>Knowledge map</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#log" onClick={() => setMenuOpen(false)}>Field notes</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={"Switch to " + (theme === "dark" ? "light" : "dark") + " theme"}>
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-contact" href="#contact">Get in touch <ArrowUpRight size={14} /></a>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-overline"><span className="status-dot" /> A PERSONAL ENGINEERING NOTEBOOK <span className="overline-index">NO. 001 / 2026</span></div>
          <p className="hero-pretitle">HELLO, I'M</p>
          <h1>Laxam<br /><em>Poudel.</em></h1>
          <div className="hero-bottomline">
            <p>{profile.introduction}</p>
            <a href="#about" className="round-link" aria-label="Scroll to introduction"><ArrowDownRight size={22} /></a>
          </div>
          <div className="hero-meta">
            <span><span className="meta-label">BASED IN</span>{profile.location}</span>
            <span><span className="meta-label">CURRENTLY</span>CSIT undergraduate</span>
            <span><span className="meta-label">INTERESTED IN</span>Systems · AI · Software</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract network diagram representing connected areas of computing">
          <div className="visual-topline"><span>FIG. 01</span><span>THINK IN SYSTEMS</span></div>
          <div className="system-orbit orbit-a" />
          <div className="system-orbit orbit-b" />
          <div className="system-orbit orbit-c" />
          <div className="visual-core"><Cpu size={34} strokeWidth={1.1} /><span>COMPUTING</span></div>
          <span className="orbit-label label-a">LOGIC</span>
          <span className="orbit-label label-b">DATA</span>
          <span className="orbit-label label-c">SYSTEMS</span>
          <span className="visual-coordinate">27° 40' N / 84° 26' E</span>
          <div className="visual-caption">A map of questions,<br />not a list of answers.</div>
        </div>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>01 — 06</span></div>
      </section>

      <section className="intro-section section-grid" id="about">
        <div className="section-aside"><span className="section-number">01 / ABOUT</span><span className="aside-rule" /><span className="aside-note">A work in progress,<br />by design.</span></div>
        <div className="intro-content">
          <p className="section-kicker">A LITTLE CONTEXT</p>
          <h2>Curiosity is a<br /><em>useful starting point.</em></h2>
          <div className="intro-columns">
            <p className="intro-lead">{profile.story}</p>
            <div className="intro-detail">
              <p>I'm currently studying CSIT at Birendra Multiple Campus in Bharatpur, Chitwan. My interests span software, computer systems, algorithms, AI and the questions that connect them.</p>
              <p>This site is a record of the process: what I'm learning, what I'm testing, what I don't understand yet and what I build along the way.</p>
              <div className="education-line"><span className="education-icon"><Layers3 size={17} /></span><span><b>Birendra Multiple Campus</b><small>CSIT undergraduate · First year</small></span><span className="education-location">BHARATPUR, NEPAL</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section section-grid" id="map">
        <div className="section-aside"><span className="section-number">02 / KNOWLEDGE MAP</span><span className="aside-rule" /><span className="aside-note">Areas of interest,<br />connected by ideas.</span></div>
        <div className="section-main">
          <div className="section-heading-row">
            <div><p className="section-kicker">THE ENGINEERING KNOWLEDGE MAP</p><h2>Follow the <em>connections.</em></h2></div>
            <span className="map-count">05 AREAS / OPEN ENDED</span>
          </div>
          <p className="section-description">A living map of topics I'm exploring. Select a node to see the questions and concepts currently on my radar. These are learning areas, not claims of expertise.</p>
          <div className="knowledge-layout">
            <div className="map-canvas">
              <svg className="map-lines" viewBox="0 0 700 410" preserveAspectRatio="none" aria-hidden="true">
                <path d="M120 95 L345 55 L570 115 M120 95 L190 315 L500 325 L570 115 M345 55 L500 325" />
                <circle cx="345" cy="55" r="3" /><circle cx="190" cy="315" r="3" /><circle cx="500" cy="325" r="3" />
              </svg>
              {interests.map((topic, index) => (
                <button key={topic.id} className={"map-node node-" + topic.id + (activeTopic === topic.id ? " is-active" : "")} onClick={() => setActiveTopic(topic.id)} aria-pressed={activeTopic === topic.id}>
                  <span className="node-index">0{index + 1}</span><span className="node-name">{topic.short}</span><span className="node-state">{topic.status}</span>
                </button>
              ))}
              <div className="map-center"><Network size={18} /><span>COMPUTING</span></div>
              <span className="map-axis axis-x">CONCEPTS →</span><span className="map-axis axis-y">EXPLORATION ↑</span>
            </div>
            <article className="topic-detail" aria-live="polite">
              <div className="detail-top"><span>SELECTED NODE / {selectedTopic.id.toUpperCase()}</span><span className="detail-pulse" /></div>
              <p className="detail-label">AREA OF INTEREST</p>
              <h3>{selectedTopic.name}</h3>
              <span className="topic-status">{selectedTopic.status}</span>
              <p className="topic-description">{selectedTopic.description}</p>
              <div className="concept-list"><span className="detail-label">CONNECTED CONCEPTS</span>{selectedTopic.concepts.map((concept) => <span className="concept-chip" key={concept}>{concept}</span>)}</div>
              <div className="detail-foot"><span>STATUS IS EDITABLE</span><ChevronRight size={15} /></div>
            </article>
          </div>
        </div>
      </section>

      <section className="foundation-section section-grid" id="foundation">
        <div className="section-aside"><span className="section-number">03 / FOUNDATIONS</span><span className="aside-rule" /><span className="aside-note">No scores.<br />Just honest labels.</span></div>
        <div className="section-main">
          <p className="section-kicker">CURRENT LEARNING SNAPSHOT</p>
          <div className="section-heading-row"><h2>Building the <em>foundations.</em></h2><span className="map-count">UPDATED AS I LEARN</span></div>
          <p className="section-description">A plain-language view of what I'm studying. No percentage bars or inflated proficiency claims.</p>
          <div className="foundation-list">
            {foundations.map((item, index) => <div className="foundation-row" key={item.name}><span className="foundation-index">0{index + 1}</span><span className="foundation-name">{item.name}</span><span className="foundation-note">{item.note}</span><span className="foundation-status">{item.status}</span><Check className="foundation-check" size={15} /></div>)}
          </div>
        </div>
      </section>

      <section className="work-section section-grid" id="work">
        <div className="section-aside"><span className="section-number">04 / SELECTED WORK</span><span className="aside-rule" /><span className="aside-note">Experiments first.<br />Evidence always.</span></div>
        <div className="section-main">
          <p className="section-kicker">PROJECTS & EXPERIMENTS</p>
          <div className="section-heading-row"><h2>Work in <em>progress.</em></h2><span className="map-count">A GROWING INDEX</span></div>
          <p className="section-description">Projects will be documented with their actual scope, my contribution, technologies and the role AI played. AI-assisted experiments and independently developed projects will be labelled separately.</p>
          {projects.length > 0 ? (
            <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-card-top"><span>{project.category}</span><span>{project.status}</span></div><h3>{project.title}</h3><p>{project.summary}</p><p className="project-contribution">{project.contribution}</p><div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links">{project.github ? <a href={project.github} target="_blank" rel="noreferrer">Source <ArrowUpRight size={14} /></a> : null}{project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a> : null}</div></article>)}</div>
          ) : (
            <div className="empty-state"><span className="empty-icon"><Code2 size={20} /></span><div><span className="empty-label">PROJECT INDEX / READY FOR ENTRIES</span><h3>Nothing published here yet.</h3><p>I'm keeping this space open until each project has a clear description and an honest account of how it was made. The project list is maintained in <code>data/portfolio.ts</code>.</p></div><span className="empty-mark">— 00</span></div>
          )}
        </div>
      </section>

      <section className="timeline-section section-grid" id="timeline">
        <div className="section-aside"><span className="section-number">05 / TIMELINE</span><span className="aside-rule" /><span className="aside-note">The path so far,<br />still unfolding.</span></div>
        <div className="section-main">
          <p className="section-kicker">ENGINEERING TIMELINE</p><div className="section-heading-row"><h2>Small steps. <em>New questions.</em></h2><span className="map-count">CONFIRMED MILESTONES</span></div>
          <div className="milestone-list">{milestones.map((milestone, index) => <article className="milestone" key={milestone.title}><span className="milestone-index">0{index + 1}</span><span className="milestone-dot" /><div><h3>{milestone.title}</h3><p>{milestone.detail}</p></div><span className="milestone-tag">LEARNING</span></article>)}</div>
        </div>
      </section>

      <section className="log-section section-grid" id="log">
        <div className="section-aside"><span className="section-number">06 / FIELD NOTES</span><span className="aside-rule" /><span className="aside-note">Notes from the<br />learning process.</span></div>
        <div className="section-main">
          <p className="section-kicker">THE ENGINEERING LOG</p><div className="section-heading-row"><h2>Think. Test. <em>Document.</em></h2><span className="map-count">NOTEBOOK / 000</span></div>
          <p className="section-description">A hybrid of research notebook, developer journal and experimental lab. Notes can include concepts I'm learning, debugging stories, experiments, questions and research summaries.</p>
          {engineeringLog.length ? <div className="log-grid">{engineeringLog.map((entry) => <a className="log-card" href={entry.href} key={entry.title}><span>{entry.category} · {entry.date}</span><h3>{entry.title}</h3><p>{entry.summary}</p><ArrowUpRight size={17} /></a>)}</div> : <div className="log-empty"><BookOpen size={19} /><span>No public notes yet.</span><p>When a note is ready, it can be added as a Markdown entry and published from the repository.</p></div>}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-inner"><p className="section-kicker">OPEN TO GOOD QUESTIONS</p><h2>Have an idea?<br /><em>Let's explore it.</em></h2><p>I'm interested in thoughtful conversations, learning together and small experiments that lead somewhere interesting.</p><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub <Github size={17} /><ArrowUpRight size={15} /></a><span className="contact-note">For now, GitHub is the public contact point.</span></div>
        <div className="contact-side"><Terminal size={24} /><span>STATUS: LEARNING</span><span>LOCATION: CHITWAN, NP</span><span>BUILD: IN PUBLIC</span></div>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-symbol">LP<span>↗</span></span><span className="wordmark-name">LAXAM POUDEL</span></a><span>AN EVOLVING BODY OF WORK · 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
