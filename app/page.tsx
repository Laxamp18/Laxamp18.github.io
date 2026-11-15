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
  Moon,
  Sun,
  Terminal,
} from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";
import { KnowledgeMap } from "../components/knowledge-map";
import {
  engineeringLog,
  foundations,
  interests,
  milestones,
  profile,
  projects,
} from "../data/portfolio";

export default function Home() {
  return (
    <main className="site-shell" data-theme="dark">
      <a className="skip-link" href="#about">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Laxam Poudel home">
          <span className="wordmark-symbol">LP<span>↗</span></span>
          <span className="wordmark-name">LAXAM POUDEL</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#map">Knowledge map</a>
          <a href="#work">Work</a>
          <a href="#log">Field notes</a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a className="header-contact" href="#contact">Get in touch <ArrowUpRight size={14} /></a>
          <details className="nav-disclosure">
            <summary className="icon-button menu-toggle" aria-label="Open navigation"><span aria-hidden="true">☰</span></summary>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <a href="#about">About</a><a href="#map">Knowledge map</a><a href="#work">Work</a><a href="#log">Field notes</a><a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-overline">COMPUTER SCIENCE STUDENT <span className="overline-index">CHITWAN, NEPAL</span></div>
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
        <aside className="focus-panel" aria-label="Current areas of interest">
          <p className="focus-heading">CURRENT AREAS OF INTEREST</p>
          <ul className="focus-list">
            <li><span>01</span> Computer systems</li>
            <li><span>02</span> Algorithms & data structures</li>
            <li><span>03</span> AI & machine learning</li>
            <li><span>04</span> Web development</li>
            <li><span>05</span> Research & experiments</li>
          </ul>
          <p className="focus-caption">A snapshot of what I'm learning now. It will change as I do.</p>
        </aside>
        <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>PORTFOLIO</span></div>
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

      <KnowledgeMap />

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
        <div className="contact-inner"><p className="section-kicker">CONTACT</p><h2>Have an idea?<br /><em>Let's explore it.</em></h2><p>I'm interested in thoughtful conversations, learning together and small experiments that lead somewhere interesting.</p><a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">Find me on GitHub <Github size={17} /><ArrowUpRight size={15} /></a><span className="contact-note">For now, GitHub is the public contact point.</span></div>
        
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span className="wordmark-symbol">LP<span>↗</span></span><span className="wordmark-name">LAXAM POUDEL</span></a><span>PERSONAL PORTFOLIO</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
