import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3, BrainCircuit, Code2, Database, Download, ExternalLink,
  Github, Linkedin, Mail, Menu, X, ArrowUpRight, FileSpreadsheet,
  BriefcaseBusiness, GraduationCap, Award, ChevronRight
} from "lucide-react";
import "./styles.css";

const skills = [
  // Data Analytics & Business Intelligence
  {
    name: "Power BI",
    level: "Advanced",
    icon: BarChart3,
    group: "Data Analytics & BI"
  },
  {
    name: "DAX",
    level: "Advanced",
    icon: BarChart3,
    group: "Data Analytics & BI"
  },
  {
    name: "SQL / MySQL",
    level: "Advanced",
    icon: Database,
    group: "Data Analytics & BI"
  },
  {
    name: "Advanced Excel",
    level: "Advanced",
    icon: FileSpreadsheet,
    group: "Data Analytics & BI"
  },

  // Python
  {
    name: "Python",
    level: "Advanced",
    icon: Code2,
    group: "Python & Programming"
  },
  {
    name: "Pandas & NumPy",
    level: "Advanced",
    icon: Code2,
    group: "Python & Programming"
  },
  {
    name: "Matplotlib",
    level: "Intermediate",
    icon: Code2,
    group: "Python & Programming"
  },

  // AI / ML
  {
    name: "Machine Learning",
    level: "Intermediate",
    icon: BrainCircuit,
    group: "AI / Machine Learning"
  },
  {
    name: "Scikit-learn",
    level: "Intermediate",
    icon: BrainCircuit,
    group: "AI / Machine Learning"
  },
  {
    name: "AI / ML Concepts",
    level: "Intermediate",
    icon: BrainCircuit,
    group: "AI / Machine Learning"
  },

  // Web Development
  {
    name: "HTML / CSS / JavaScript",
    level: "Intermediate",
    icon: Code2,
    group: "Web Development"
  },
  {
    name: "React",
    level: "Intermediate",
    icon: Code2,
    group: "Web Development"
  },

  // Tools
  {
    name: "Git / GitHub",
    level: "Intermediate",
    icon: Github,
    group: "Tools & Technologies"
  }
];

const projects = [
  {
    title: "Rapido Ride Analytics Dashboard",
    category: "Power BI • Data Analytics",
    description:
      "An interactive business intelligence dashboard for analyzing ride activity, revenue, customer behavior, cancellations, vehicle performance and city-level trends.",
    tags: ["Power BI", "DAX", "Excel", "Data Modeling"],
    type: "analytics",
    link: "#contact"
  },

  {
    title: "Sales Performance Dashboard",
    category: "Power BI • Business Intelligence",
    description:
      "An interactive sales dashboard focused on sales performance, profitability, profit margin, order volume, average order value, regional performance and customer segments.",
    tags: ["Power BI", "DAX", "SQL", "Excel"],
    type: "analytics",
    link: "#contact"
  },

  {
    title: "Python Data Analysis Project",
    category: "Python • Data Analytics",
    description:
      "A practical data analysis workflow covering data cleaning, exploratory analysis, KPI calculation, pattern identification and visualization to support data-driven decisions.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
    type: "python",
    link: "#contact"
  },

  {
    title: "Machine Learning Prediction App",
    category: "AI / ML • Python",
    description:
      "A machine learning application demonstrating data preprocessing, feature engineering, model training, evaluation and prediction using a structured workflow.",
    tags: ["Python", "Scikit-learn", "Machine Learning", "Streamlit"],
    type: "ai",
    link: "#contact"
  },

  {
    title: "Responsive Portfolio Website",
    category: "Web Development",
    description:
      "A modern responsive portfolio website built to showcase professional experience, technical skills, analytics projects and career-focused work.",
    tags: ["React", "JavaScript", "CSS", "Vite"],
    type: "web",
    link: "#"
  },

  {
    title: "SQL Business Analysis",
    category: "SQL • Data Analytics",
    description:
      "A practical SQL analysis workflow using joins, common table expressions, aggregations and window functions to solve business-oriented data problems.",
    tags: ["SQL", "MySQL", "CTEs", "Window Functions"],
    type: "analytics",
    link: "#contact"
  }
];

const experience = [
  {
    role: "Data Analyst",
    company: "Mahalaxmi Digital Services",
    period: "Professional Experience",
    points: [
      "Analyzed business data to identify trends, patterns and actionable insights.",
      "Prepared reports and dashboards using data analysis and visualization techniques.",
      "Worked with structured datasets using Excel, SQL and Python-based workflows.",
      "Supported data-driven decision-making through KPI tracking and reporting."
    ]
  }
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">NS</span>
          <span>Nikhil Sharma</span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Connect</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid"></div>
          <div className="hero-content">
  <div className="status-pill">
    <span></span> Open to opportunities
  </div>

  <p className="hero-kicker">
    Hello, I'm Nikhil Sharma 👋
  </p>

  <h1>
    Data Analyst
    <br />
    <span>Power BI Developer</span>
    <br />
    Python & <span>AI/ML Enthusiast</span>
  </h1>

  <p className="hero-description">
    I transform raw data into actionable insights through data analytics,
    interactive Power BI dashboards, Python automation, and machine learning.
    I also build modern, responsive web applications.
  </p>

  <div className="hero-actions">
    <a className="btn btn-primary" href="#projects">
      View My Projects <ArrowUpRight size={18} />
    </a>

    <a className="btn btn-secondary" href="#about">
      Explore My Profile <ChevronRight size={18} />
    </a>
  </div>

  <div className="hero-stats">
    <div>
      <strong>4+</strong>
      <span>Core Domains</span>
    </div>

    <div>
      <strong>8+</strong>
      <span>Technical Skills</span>
    </div>

    <div>
      <strong>6</strong>
      <span>Featured Projects</span>
    </div>
  </div>
</div>

          <div className="hero-card">
            <div className="code-window">
              <div className="window-top"><i></i><i></i><i></i><span>nikhil_profile.py</span></div>
              <pre>{`profile = {
  "name": "Nikhil Sharma",
  "role": [
    "Data Analyst",
    "Power BI Developer",
    "Python Developer",
    "AI/ML Engineer",
    "Web Developer"
  ],
  "focus": [
    "Data Analytics",
    "Business Intelligence",
    "Automation",
    "Machine Learning"
  ],
  "mindset": "Build. Analyze. Improve."
}`}</pre>
            </div>
          </div>
        </section>

          <section id="about" className="section">
  <SectionTitle
    eyebrow="01 / About Me"
    title="Turning data into insights and ideas into practical solutions."
    text="A multidisciplinary technology professional focused on analytics, business intelligence, Python, AI/ML and modern web development."
  />

  <div className="about-grid">
    <div className="about-copy">
      <p>
        I'm a Data Analyst and technology professional who enjoys working with
        data to uncover meaningful insights and support better decision-making.
        My core areas include data analytics, Power BI, SQL, Python and
        business intelligence.
      </p>

      <p>
        Alongside analytics, I explore AI/ML and web development to build
        practical digital solutions. I enjoy working on projects that involve
        data cleaning, visualization, dashboard development, automation,
        predictive analysis and responsive web applications.
      </p>

      <p>
        My approach is simple: understand the problem, work with the right
        data, build a practical solution and communicate the results clearly.
      </p>

      <div className="mini-cards">
        <div>
          <BarChart3 size={22}/>
          <span>Data Analytics & BI</span>
        </div>

        <div>
          <BrainCircuit size={22}/>
          <span>Python & AI/ML</span>
        </div>

        <div>
          <Code2 size={22}/>
          <span>Web Development</span>
        </div>
      </div>
    </div>

    <div className="about-panel">
      <span className="panel-label">WHAT I BRING</span>

      <h3>
        A combination of analytical thinking and technical execution.
      </h3>

      <ul>
        <li>Interactive Power BI dashboards and KPI reporting</li>
        <li>Data analysis using Python, SQL and Excel</li>
        <li>Machine learning and AI-based solutions</li>
        <li>Python automation and data workflows</li>
        <li>Modern responsive web applications</li>
      </ul>
    </div>
  </div>
</section>

        <section id="skills" className="section section-alt">
          <SectionTitle
            eyebrow="02 / Skills"
            title="Tools I use to build and analyze."
            text="A practical toolkit spanning analytics, programming, AI/ML and web development."
          />
          <div className="skills-dropdowns">
  {[
    "Data Analytics & BI",
    "Python & Programming",
    "AI / Machine Learning",
    "Web Development",
    "Tools & Technologies"
  ].map((group) => (
    <details className="skill-dropdown" key={group}>
      <summary>
        <span>{group}</span>
        <span className="dropdown-arrow">⌄</span>
      </summary>

      <div className="skills-grid">
        {skills
          .filter((skill) => skill.group === group)
          .map(({ name, level, icon: Icon }) => (
            <div className="skill-card" key={name}>
              <div className="skill-icon">
                <Icon size={22} />
              </div>

              <div>
                <h3>{name}</h3>
                <small>{level}</small>
              </div>
            </div>
          ))}
      </div>
    </details>
  ))}
</div>
        </section>

        <section id="experience" className="section">
          <SectionTitle
            eyebrow="03 / Experience"
            title="Professional experience."
            text="Experience focused on data analysis, reporting and business insights."
          />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div className="timeline-dot"></div>
                <div className="timeline-head">
                  <div>
                    <span className="eyebrow">{item.period}</span>
                    <h3>{item.role}</h3>
                    <p className="company">{item.company}</p>
                  </div>
                  <BriefcaseBusiness size={28}/>
                </div>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-alt">
          <SectionTitle
            eyebrow="04 / Projects"
            title="Selected work."
            text="A mix of real and sample projects. Replace the sample links with your live demos and GitHub repositories."
          />
          <div className="filters">
            {[
              ["all","All"],
              ["analytics","Analytics / BI"],
              ["python","Python"],
              ["ai","AI / ML"],
              ["web","Web"]
            ].map(([value,label]) => (
              <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>
                {label}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual visual-${(index % 4) + 1}`}>
                  <span>{project.type === "analytics" ? "BI" : project.type === "ai" ? "AI" : project.type === "python" ? "PY" : "WEB"}</span>
                  <ArrowUpRight size={22}/>
                </div>
                <div className="project-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link}>View project <ChevronRight size={16}/></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
  <SectionTitle
    eyebrow="05 / Education & Certifications"
    title="Building knowledge, one skill at a time."
    text="My academic background and continuous learning journey support my work across analytics, business intelligence, Python and AI/ML."
  />

  <div className="two-column">

    {/* Education */}
    <div className="info-card education-card">
  <div className="info-icon">
    <GraduationCap />
  </div>

  <div>
    <span className="skill-group">EDUCATION</span>

    <div className="education-item">
      <h3>B.Tech in Computer Science & Engineering</h3>

      <p>
        K.R. Mangalam University · 2022–2026
        <br />
        Specialization: Artificial Intelligence & Machine Learning
      </p>

      <div className="info-tags">
        <span>Computer Science</span>
        <span>AI / ML</span>
        <span>2022–2026</span>
      </div>
    </div>

    <div className="education-divider"></div>

    <div className="education-item">
      <h3>Data Analytics Professional</h3>

      <p>
        Ducat The IT Training School · 2025–2026
        <br />
        Specialization: Generative AI
      </p>

      <div className="info-tags">
        <span>Data Analytics</span>
        <span>Generative AI</span>
        <span>2025–2026</span>
      </div>
    </div>
  </div>
</div>
    {/* Certifications */}
    <div className="info-card">
      <div className="info-icon">
        <Award />
      </div>

      <div>
        <span className="skill-group">CERTIFICATIONS</span>

        <h3>Professional Certifications</h3>

        <div className="certification-list">

          <div className="certification-item">
            <strong>Data Analysis with Python</strong>
            <span>IBM SkillsBuild · 2024</span>
          </div>

          <div className="certification-item">
            <strong>Data Visualization with Python</strong>
            <span>IBM SkillsBuild · 2024</span>
          </div>

          <div className="certification-item">
            <strong>Python 101 for Data Science</strong>
            <span>IBM SkillsBuild · 2024</span>
          </div>

          <div className="certification-item">
            <strong>Big Data Engineer</strong>
            <span>IBM Career Education Program · 2024</span>
          </div>

          <div className="certification-item">
            <strong>Clean Coding With Python</strong>
            <span>IBM Career Education Program · 2024</span>
          </div>

        </div>
      </div>
    </div>

  </div>
</section>

        <section className="resume-banner">
          <div>
            <span className="eyebrow">READY TO CONNECT?</span>
            <h2>Let's build something meaningful with data.</h2>
            <p>Download my resume or reach out to discuss an opportunity.</p>
          </div>
          <a className="btn btn-primary" href="/resume.pdf" download>
            <Download size={18}/> Download Resume
          </a>
        </section>

        <section id="contact" className="section contact-section">
  <SectionTitle
    eyebrow="06 / Contact"
    title="Let's build something meaningful."
    text="Interested in data analytics, business intelligence, Python, AI/ML or web development? Feel free to connect with me."
  />

  <div className="contact-grid">

    <a
      className="contact-card"
      href="nikhillsharma455@gmail.com"
    >
      <Mail />
      <span>
        <small>EMAIL</small>
        Nikhillsharma455@gmail.com
      </span>
      <ArrowUpRight />
    </a>

    <a
      className="contact-card"
      href="www.linkedin.com/in/nikhil-sharma-2004d1a0"
      target="_blank"
      rel="noreferrer"
    >
      <Linkedin />
      <span>
        <small>LINKEDIN</small>
        www.linkedin.com/in/Nikhil Sharma
      </span>
      <ArrowUpRight />
    </a>

    <a
      className="contact-card"
      href="https://github.com/Nikhil22017"
      target="_blank"
      rel="noreferrer"
    >
      <Github />
      <span>
        <small>GITHUB</small>
        github.com/Nikhil22017
      </span>
      <ArrowUpRight />
    </a>

  </div>

  <div className="contact-note">
    <span>OPEN TO OPPORTUNITIES</span>
    <p>
      I'm currently interested in opportunities related to Data Analytics,
      Power BI, Python, AI/ML and Web Development.
    </p>
  </div>
</section>

      <footer>
  <div className="footer-brand">
    <span className="brand-mark">NS</span>
    <strong>Nikhil Sharma</strong>
  </div>

  <p>© {new Date().getFullYear()} Nikhil Sharma. Built with React.</p>

  <div className="footer-links">
    <a href="#home">Back to top ↑</a>
  </div>
</footer>
</main>
</div>
);
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);