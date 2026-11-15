import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Code2, Terminal, Globe2, GraduationCap, Layers3, Menu, Sparkles,
  ExternalLink, MapPin, Cpu, Braces, Database, Smartphone
} from "lucide-react";

const skills = [
  { name: "C", level: "Intermediate", width: "76%" },
  { name: "Python", level: "Fundamentals", width: "48%" },
  { name: "JavaScript", level: "Learning", width: "42%" },
  { name: "React / Next.js", level: "Learning", width: "30%" },
  { name: "HTML & CSS", level: "Working knowledge", width: "62%" },
];

const projects = [
  {
    number: "01",
    type: "WEB APPLICATION · IN PROGRESS",
    title: "Campus Library Tracker",
    description: "A student-focused library tool to keep track of borrowed books, issue dates, renewals and return deadlines.",
    tags: ["React", "Next.js", "TypeScript", "Database"],
    status: "In development",
  },
  {
    number: "02",
    type: "WEB TOOL · EXPERIMENT",
    title: "GPA Calculator",
    description: "A small web-based calculator concept for entering subject grades and estimating a weighted GPA.",
    tags: ["HTML", "CSS", "JavaScript"],
    status: "Learning project",
  },
  {
    number: "03",
    type: "PROGRAMMING · PRACTICE",
    title: "C Programming Exercises",
    description: "A collection of problem-solving exercises focused on pointers, structures, recursion, sorting and algorithms.",
    tags: ["C", "Algorithms", "Problem Solving"],
    status: "Ongoing practice",
  },
];

const journey = [
  { date: "CURRENT", title: "Computer Engineering", place: "Undergraduate studies", detail: "Building a strong foundation in computing, digital systems and software development." },
  { date: "ONGOING", title: "Web Development", place: "Self-directed learning", detail: "Learning JavaScript and developing skills with React and Next.js through practical projects." },
  { date: "FOUNDATION", title: "Programming Fundamentals", place: "C and Python", detail: "Practising core programming concepts, logical thinking and structured problem solving." },
];

function SectionHeading({ eyebrow, title, detail }: { eyebrow: string; title: string; detail: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{detail}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">LP</span><span>LAXAM<span className="muted">.DEV</span></span></a>
        <nav className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#journey">Journey</a>
        </nav>
        <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15}/></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="pulse"/> OPEN TO LEARNING & COLLABORATION</div>
          <p className="hero-kicker">HELLO, WORLD. I&apos;M</p>
          <h1>Laxam<br/><span className="gradient-text">Poudel.</span></h1>
          <h2>Computer Engineering Student <span className="slash">/</span> Aspiring Developer</h2>
          <p className="hero-description">I enjoy turning ideas into useful digital experiences. Currently strengthening my programming fundamentals and exploring modern web development.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
            <a className="button button-ghost" href="#about">More about me <ArrowDown size={16}/></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github size={18}/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={18}/></a>
            <a href="mailto:your.email@example.com" aria-label="Email"><Mail size={18}/></a>
            <span className="social-note">Find me online <ArrowUpRight size={13}/></span>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract profile avatar illustration">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="art-glow"/>
          <div className="avatar-card">
            <div className="avatar-top"><span>PROFILE_001</span><span className="live-dot"/></div>
            <div className="avatar">
              <div className="avatar-halo"/>
              <div className="avatar-head"><div className="hair"/><div className="face"><i/><i/><b/></div></div>
              <div className="avatar-neck"/>
              <div className="avatar-body"><span>LP</span></div>
            </div>
            <div className="avatar-bottom"><span>BUILDING THE FUTURE</span><span>✳ 2026</span></div>
          </div>
          <div className="float-chip chip-code"><Code2 size={16}/> <span>Code</span></div>
          <div className="float-chip chip-build"><Sparkles size={16}/> <span>Create</span></div>
          <div className="hero-index">01 <span>/ 04</span></div>
        </div>
        <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
      </section>

      <section className="about section-wrap section-block" id="about">
        <SectionHeading eyebrow="A LITTLE INTRODUCTION" title="Curious by nature." detail="Learning how things work, then building something with what I learn."/>
        <div className="about-grid">
          <div className="about-main">
            <span className="big-quote">“</span>
            <p className="about-statement">I&apos;m a <em>Computer Engineering student</em> with a growing interest in software development, problem solving and the web.</p>
            <p className="body-copy">My current focus is strengthening the fundamentals: writing better code, understanding how systems work and building practical projects. I like learning by experimenting, breaking problems into smaller pieces and improving through practice.</p>
          </div>
          <div className="info-stack">
            <div className="info-card"><span className="info-icon"><GraduationCap/></span><div><small>EDUCATION</small><strong>Computer Engineering</strong><p>Undergraduate · Institution to be added</p></div></div>
            <div className="info-card"><span className="info-icon"><Terminal/></span><div><small>MAIN INTEREST</small><strong>Software & Web Development</strong><p>Programming · Frontend · Problem solving</p></div></div>
            <div className="info-card"><span className="info-icon"><MapPin/></span><div><small>LOCATION</small><strong>Chitwan, Nepal</strong><p>Edit this if your location has changed</p></div></div>
          </div>
        </div>
      </section>

      <section className="skills section-wrap section-block" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title="Skills in progress." detail="A snapshot of the tools and technologies I am currently learning and using."/>
        <div className="skills-layout">
          <div className="skill-bars">
            {skills.map((skill) => <div className="skill-row" key={skill.name}><div className="skill-meta"><strong>{skill.name}</strong><span>{skill.level}</span></div><div className="track"><span style={{ width: skill.width }}/></div></div>)}
            <p className="skill-note">Skill indicators are approximate self-assessments, not formal test scores.</p>
          </div>
          <div className="tech-grid">
            <div className="tech-tile"><Braces/><span>JavaScript</span></div>
            <div className="tech-tile"><Code2/><span>C</span></div>
            <div className="tech-tile"><Terminal/><span>Python</span></div>
            <div className="tech-tile"><Globe2/><span>React / Next.js</span></div>
            <div className="tech-tile"><Layers3/><span>HTML & CSS</span></div>
            <div className="tech-tile"><Database/><span>SQL basics</span></div>
          </div>
        </div>
      </section>

      <section className="projects section-wrap section-block" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Ideas into projects." detail="A few projects and learning experiments. More will be added as I build."/>
        <div className="project-list">
          {projects.map((project) => <article className="project-card" key={project.number}>
            <div className="project-number">{project.number}</div>
            <div className="project-content"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            <div className="project-end"><span className="project-status"><i/> {project.status}</span><span className="project-arrow"><ArrowUpRight/></span></div>
          </article>)}
        </div>
      </section>

      <section className="journey section-wrap section-block" id="journey">
        <SectionHeading eyebrow="THE ROAD SO FAR" title="Always learning." detail="An evolving journey — update these milestones as your education and experience grow."/>
        <div className="timeline">
          {journey.map((item, index) => <div className="timeline-item" key={item.title}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.title}</h3><span>{item.place}</span><p>{item.detail}</p></div></div>)}
        </div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-orb"/>
          <span className="eyebrow">HAVE A PROJECT OR AN IDEA?</span>
          <h2>Let&apos;s build<br/><span className="gradient-text">something useful.</span></h2>
          <p>I&apos;m interested in learning, exchanging ideas and collaborating on meaningful projects.</p>
          <a className="button button-primary" href="mailto:your.email@example.com">Get in touch <ArrowUpRight size={17}/></a>
          <div className="contact-decoration"><Cpu/><span>IDEAS → CODE → IMPACT</span></div>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">LP</span><span>LAXAM<span className="muted">.DEV</span></span></a>
        <p>Designed & built with curiosity. © 2026 Laxam Poudel.</p>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}