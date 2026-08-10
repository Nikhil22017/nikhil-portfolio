import React, { useState, useEffect } from "react";
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
  useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);

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
        <section id="home" className="hero-section">
    <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-content">

            <div className="availability">
                <span className="status-dot"></span>
                Open to opportunities
            </div>

            <p className="hero-greeting">
                Hello, I'm Nikhil Sharma 👋
            </p>

            <h1 className="hero-title">
                <span>Data Analyst</span>
                <span className="gradient-text">Power BI</span>
                <span className="gradient-text">Developer</span>
                <span>Python &</span>
                <span className="gradient-text">AI/ML</span>
            </h1>

            <p className="hero-description">
                I transform data into actionable insights and build
                intelligent solutions using analytics, Python, Power BI
                and AI/ML.
            </p>

            <div className="hero-buttons">
                <a href="#projects" className="btn primary-btn">
                    View Projects
                </a>

                <a
                    href="/Nikhil_Sharma_Resume.pdf"
                    className="btn secondary-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download CV
                </a>
            </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-visual">

            {/* Profile card */}
            <div className="profile-card">

                <div className="profile-image-wrapper">
                    <img
                        src="/profile.jpg"
                        alt="Nikhil Sharma"
                        className="profile-image"
                    />
                </div>

                <h2>Nikhil Sharma</h2>

                <p>
                    Data Analyst • AI/ML • Python Developer
                </p>

                <div className="social-links">
                    {/* Your LinkedIn/GitHub/Email buttons */}
                </div>

            </div>

            

            </div>

        </div>
</section>

          <section id="about" className="section reveal">
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


        <section id="skills" className="section reveal">

  <div className="eyebrow">
    02 / SKILLS & TECHNOLOGIES
  </div>

  <h2 className="section-title">
    Tools I use to build, analyze and solve.
  </h2>

  <p className="section-subtitle">
    A practical toolkit spanning analytics, programming, AI/ML and web development.
  </p>

  <div className="skills-list">

    <details className="skill-category">
      <summary>
        <span>01</span>
        <strong>Data Analytics & BI</strong>
        <em>+</em>
      </summary>

      <div className="skill-items">
        <span>Power BI</span>
        <span>DAX</span>
        <span>SQL</span>
        <span>MySQL</span>
        <span>Advanced Excel</span>
        <span>Data Visualization</span>
        <span>Pandas</span>
        <span>NumPy</span>
      </div>
    </details>

    <details className="skill-category">
      <summary>
        <span>02</span>
        <strong>Python & Programming</strong>
        <em>+</em>
      </summary>

      <div className="skill-items">
        <span>Python</span>
        <span>OOP</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Matplotlib</span>
        <span>Seaborn</span>
      </div>
    </details>

    <details className="skill-category">
      <summary>
        <span>03</span>
        <strong>AI / Machine Learning</strong>
        <em>+</em>
      </summary>

      <div className="skill-items">
        <span>Machine Learning</span>
        <span>Scikit-learn</span>
        <span>Data Preprocessing</span>
        <span>Feature Engineering</span>
        <span>Model Evaluation</span>
        <span>Generative AI</span>
      </div>
    </details>

    <details className="skill-category">
      <summary>
        <span>04</span>
        <strong>Web Development</strong>
        <em>+</em>
      </summary>

      <div className="skill-items">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>Responsive Design</span>
      </div>
    </details>

    <details className="skill-category">
      <summary>
        <span>05</span>
        <strong>Tools & Technologies</strong>
        <em>+</em>
      </summary>

      <div className="skill-items">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
        <span>Jupyter Notebook</span>
        <span>Power BI</span>
        <span>MySQL</span>
      </div>
    </details>

  </div>

</section>

        <section id="experience" className="section reveal">

  <div className="eyebrow">
    03 / EXPERIENCE
  </div>

  <h2 className="section-title">
    Turning data into <span>meaningful insights.</span>
  </h2>

  <p className="section-description">
    Professional experience focused on data analysis, reporting,
    visualization and building data-driven solutions.
  </p>

  <div className="experience-timeline">

    <div className="experience-item">

      <div className="experience-dot"></div>

      <div className="experience-header">

        <div>
          <span className="experience-type">
            DATA ANALYTICS
          </span>

          <h3>
            Data Analyst
          </h3>

          <p className="experience-company">
            Mahalaxmi Digital Services
          </p>
        </div>

        <span className="experience-date">
          Professional Experience
        </span>

      </div>

      <p className="experience-description">
        Worked with business data to identify trends, generate
        meaningful insights and support data-driven decision making.
        Performed data cleaning, analysis and visualization while
        working with structured datasets and business reporting.
      </p>

      <ul className="experience-points">

        <li>
          Analyzed and transformed raw datasets into meaningful
          business insights using data analysis techniques.
        </li>

        <li>
          Created reports and visualizations to communicate
          important trends, patterns and performance indicators.
        </li>

        <li>
          Used Python, SQL and Excel for data cleaning,
          transformation, analysis and reporting.
        </li>

        <li>
          Worked with stakeholders to understand data requirements
          and provide useful analytical insights.
        </li>

      </ul>

      <div className="experience-tags">
        <span>Python</span>
        <span>SQL</span>
        <span>Excel</span>
        <span>Data Analysis</span>
        <span>Data Visualization</span>
      </div>

    </div>

  </div>

</section>

        <section id="projects" className="section reveal">
  <div className="eyebrow">04 / PROJECTS</div>

  <h2 className="section-title">
    Turning ideas into <span>practical solutions.</span>
  </h2>

  <p className="section-description">
    A selection of projects where I apply data analytics, business
    intelligence, Python, and machine learning concepts to solve
    real-world problems.
  </p>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <div className="project-number">01</div>

      <div className="project-content">
        <span className="project-category">
          POWER BI • DATA ANALYTICS
        </span>

        <h3>Rapido Ride Analytics Dashboard</h3>

        <p>
          An interactive Power BI dashboard designed to analyze ride
          performance, revenue, customer behavior, cancellations,
          vehicle performance, and city-level trends.
        </p>

        <div className="project-tags">
          <span>Power BI</span>
          <span>DAX</span>
          <span>Excel</span>
          <span>Data Modeling</span>
        </div>

        <div className="project-links">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>


    {/* Project 2 */}
    <div className="project-card">
      <div className="project-number">02</div>

      <div className="project-content">
        <span className="project-category">
          POWER BI • BUSINESS INTELLIGENCE
        </span>

        <h3>Sales Performance Dashboard</h3>

        <p>
          An interactive sales analytics dashboard covering revenue,
          profit, profit margin, orders, average order value, products,
          regions, and customer segments.
        </p>

        <div className="project-tags">
          <span>Power BI</span>
          <span>DAX</span>
          <span>SQL</span>
          <span>Excel</span>
        </div>

        <div className="project-links">
          <a href="#" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            Live Demo ↗
          </a>
        </div>
      </div>
    </div>


    {/* Project 3 */}
<div className="project-card">
  <div className="project-number">03</div>

  <div className="project-content">
    <span className="project-category">
      AI • MACHINE LEARNING
    </span>

    <h3>
      AI-Based Smart Traffic Monitoring & Congestion Prediction System
    </h3>

    <p>
      Developed an AI-based traffic monitoring and congestion prediction
      system using machine learning techniques. Implemented real-time
      vehicle detection and traffic density analysis using computer vision.
    </p>

    <div className="project-tags">
      <span>Python</span>
      <span>OpenCV</span>
      <span>NumPy</span>
      <span>Machine Learning</span>
      <span>Data Analytics</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>

      <a href="#" target="_blank" rel="noreferrer">
        View Project ↗
      </a>
    </div>
  </div>
</div>
{/* Project 4 */}
<div className="project-card">
  <div className="project-number">04</div>

  <div className="project-content">
    <span className="project-category">
      WEB DEVELOPMENT
    </span>

    <h3>
      Personal Portfolio Website
    </h3>

    <p>
      Developed a responsive personal portfolio website using React.js
      and CSS to showcase professional skills, projects, education,
      and experience with a modern and responsive user interface.
    </p>

    <div className="project-tags">
      <span>React</span>
      <span>JavaScript</span>
      <span>CSS</span>
      <span>UI/UX</span>
      <span>Frontend</span>
    </div>

    <div className="project-links">
      <a href="#" target="_blank" rel="noreferrer">
        GitHub ↗
      </a>

      <a href="#" target="_blank" rel="noreferrer">
        Live Demo ↗
      </a>
    </div>
  </div>
</div>
</div>
</section>

        <section id="education" className="section reveal">

  <div className="eyebrow">
    05 / EDUCATION & CERTIFICATIONS
  </div>

  <h2 className="section-title">
    Building knowledge, one skill at a time.
  </h2>

  <p className="section-subtitle">
    My academic background and continuous learning journey support my work
    across analytics, business intelligence, Python and AI/ML.
  </p>

  <div className="education-grid">

    {/* EDUCATION */}

    <div className="education-card">

      <div className="education-icon">
        🎓
      </div>

      <div className="education-content">

        <div className="card-label">
          EDUCATION
        </div>

        <h3>
          B.Tech in Computer Science & Engineering
        </h3>

        <p className="institution">
          K.R. Mangalam University · 2022–2026
        </p>

        <p>
          Specialization: Artificial Intelligence & Machine Learning
        </p>

        <div className="education-item">
          <h4>Data Analytics Professional</h4>

          <p className="institution">
            Ducat The IT Training School · 2025–2026
          </p>

          <p>
            Specialization: Generative AI
          </p>
        </div>

      </div>

    </div>


    {/* CERTIFICATIONS */}

    <div className="education-card">

      <div className="education-icon">
        🏆
      </div>

      <div className="education-content">

        <div className="card-label">
          CERTIFICATIONS
        </div>

        <h3>
          Professional Certifications
        </h3>

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

        <section id="contact" className="section reveal">

  <div className="eyebrow">
    06 / CONTACT
  </div>

  <h2 className="section-title">
    Let's build something <span>meaningful.</span>
  </h2>

  <p className="section-description">
    I'm open to opportunities, collaborations and conversations
    around data analytics, Power BI, Python, AI/ML and web development.
  </p>

  <div className="contact-grid">

    <a
      className="contact-card"
      href="nikhillsharma455@gmail.com"
    >
      <div className="contact-icon">
        ✉
      </div>

      <div>
        <small>EMAIL</small>
        <strong>nikhillsharma455@gmail.com</strong>
      </div>

      <span className="contact-arrow">↗</span>
    </a>


    <a
      className="contact-card"
      href="www.linkedin.com/in/nikhil-sharma-2004d1a0"
      target="_blank"
      rel="noreferrer"
    >
      <div className="contact-icon">
        in
      </div>

      <div>
        <small>LINKEDIN</small>
        <strong>Nikhil Sharma</strong>
      </div>

      <span className="contact-arrow">↗</span>
    </a>


    <a
      className="contact-card"
      href="https://github.com/Nikhil22017"
      target="_blank"
      rel="noreferrer"
    >
      <div className="contact-icon">
        &lt;/&gt;
      </div>

      <div>
        <small>GITHUB</small>
        <strong>Nikhil22017</strong>
      </div>

      <span className="contact-arrow">↗</span>
    </a>

  </div>


  {/* Resume */}

  <div className="resume-banner">

    <div>
      <span className="resume-label">
        RESUME
      </span>

      <h3>
        Want to know more about my work?
      </h3>

      <p>
        Download my resume to explore my skills, experience,
        education and projects.
      </p>
    </div>

    <a
      href="/Nikhil_Sharma_Resume.pdf"
      target="_blank"
      rel="noreferrer"
      className="resume-button"
    >
      View Resume ↗
    </a>

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