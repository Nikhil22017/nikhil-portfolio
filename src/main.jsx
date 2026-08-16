import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  FileSpreadsheet,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  ChevronRight,
  MessageCircle,
  Send,
  Paperclip,
  Mic,
  LogIn,
  FileText
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

const [chatOpen, setChatOpen] = useState(false);

const [chatMessages, setChatMessages] = useState([
  {
    sender: "bot",
    text: "Hey! I'm Nikhil's portfolio assistant. Ask me about his projects, experience, skills, education, or anything about his work."
  }
]);

const [chatInput, setChatInput] = useState("");
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
useEffect(() => {
  const hero = document.querySelector(".hero-section");
  const orbit = document.querySelector(".hero-orbit");

  if (!hero || !orbit) return;

  // Disable mouse parallax on touch/mobile devices
  if (window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  let animationFrame;

  const handleMouseMove = (event) => {
    const rect = hero.getBoundingClientRect();

    const mouseX =
      (event.clientX - rect.left) / rect.width;

    const mouseY =
      (event.clientY - rect.top) / rect.height;

    // Small movement range
    targetX = (mouseX - 0.5) * 24;
    targetY = (mouseY - 0.5) * 24;
  };

  const animate = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    orbit.style.setProperty(
      "--orbit-x",
      `${currentX}px`
    );

    orbit.style.setProperty(
      "--orbit-y",
      `${currentY}px`
    );

    animationFrame = requestAnimationFrame(animate);
  };

  hero.addEventListener("mousemove", handleMouseMove);

  animationFrame = requestAnimationFrame(animate);

  return () => {
    hero.removeEventListener("mousemove", handleMouseMove);

    cancelAnimationFrame(animationFrame);
  };
}, []);
  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  const closeMenu = () => setMenuOpen(false);

const handleChatSubmit = (e) => {
  e.preventDefault();

  const message = chatInput.trim();

  if (!message) return;

  setChatMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: message
    }
  ]);

  setChatInput("");

  setTimeout(() => {
    const question = message
      .toLowerCase()
      .trim()
      .replace(/[?!.,]/g, "");

    let response = "";

    // --------------------------------
    // GREETING
    // --------------------------------

    if (/^(hi|hello|hey|hiya|good morning|good afternoon|good evening)$/.test(question)) {
      response =
        "Hey! 👋 I'm Nikhil's portfolio assistant. What would you like to know about him?";
    }

    // --------------------------------
    // ABOUT NIKHIL
    // --------------------------------

    else if (
      question.includes("who is nikhil") ||
      question.includes("who's nikhil") ||
      question.includes("about nikhil") ||
      question.includes("tell me about nikhil")
    ) {
      response =
        "Nikhil Sharma is a Data Analyst and technology professional focused on Data Analytics, Power BI, Python, AI/ML and modern web development.";
    }

    // --------------------------------
    // SKILLS
    // --------------------------------

    else if (
      question.includes("skill") ||
      question.includes("skills") ||
      question.includes("technical skill") ||
      question.includes("technical skills") ||
      question.includes("technologies") ||
      question.includes("technology") ||
      question.includes("tech stack") ||
      question.includes("what can nikhil do") ||
      question.includes("what does nikhil know") ||
      question.includes("main skills") ||
      question.includes("key skills")
    ) {
      response =
        "Nikhil's main technical skills include Power BI, DAX, SQL, MySQL, Advanced Excel, Python, Pandas, NumPy, Matplotlib, Machine Learning, Scikit-learn, React, JavaScript, HTML, CSS, Git and GitHub.";
    }

    // --------------------------------
    // POWER BI
    // --------------------------------

    else if (
      question.includes("power bi") ||
      question.includes("powerbi") ||
      question.includes("dax")
    ) {
      response =
        "Nikhil works with Power BI and DAX to build interactive dashboards, KPI reports and business intelligence solutions. His portfolio includes a Rapido Ride Analytics Dashboard and a Sales Performance Dashboard.";
    }

    // --------------------------------
    // PYTHON
    // --------------------------------

    else if (
      question.includes("python") ||
      question.includes("pandas") ||
      question.includes("numpy") ||
      question.includes("matplotlib")
    ) {
      response =
        "Nikhil uses Python for data analysis, automation, visualization and machine learning. His Python toolkit includes Pandas, NumPy, Matplotlib and Scikit-learn.";
    }

    // --------------------------------
    // SQL
    // --------------------------------

    else if (
      question.includes("sql") ||
      question.includes("mysql") ||
      question.includes("database") ||
      question.includes("query")
    ) {
      response =
        "Nikhil works with SQL and MySQL for data analysis and business-oriented data problems. His work includes querying data, joins, aggregations, CTEs and analytical workflows.";
    }

    // --------------------------------
    // PROJECTS
    // --------------------------------

    else if (
      question.includes("project") ||
      question.includes("projects") ||
      question.includes("portfolio projects") ||
      question.includes("what has nikhil built") ||
      question.includes("what did nikhil build")
    ) {
      response =
        "Nikhil's featured projects include the Rapido Ride Analytics Dashboard, Sales Performance Dashboard, AI-Based Smart Traffic Monitoring & Congestion Prediction System, and his Personal Portfolio Website.";
    }

    // --------------------------------
    // RAPIDO
    // --------------------------------

    else if (
      question.includes("rapido") ||
      question.includes("ride analytics") ||
      question.includes("ride dashboard")
    ) {
      response =
        "The Rapido Ride Analytics Dashboard is a Power BI project focused on ride performance, revenue, customer behavior, cancellations, vehicle performance and city-level trends. It uses Power BI, DAX, Excel and data modeling.";
    }

    // --------------------------------
    // SALES DASHBOARD
    // --------------------------------

    else if (
      question.includes("sales dashboard") ||
      question.includes("sales project") ||
      question.includes("sales performance")
    ) {
      response =
        "The Sales Performance Dashboard focuses on revenue, profit, profit margin, orders, average order value, products, regions and customer segments using Power BI, DAX, SQL and Excel.";
    }

    // --------------------------------
    // TRAFFIC / AI PROJECT
    // --------------------------------

    else if (
      question.includes("traffic") ||
      question.includes("congestion") ||
      question.includes("computer vision")
    ) {
      response =
        "Nikhil developed an AI-Based Smart Traffic Monitoring & Congestion Prediction System using Python, OpenCV, NumPy, Machine Learning and Data Analytics. The project focuses on vehicle detection, traffic density analysis and congestion prediction.";
    }

    // --------------------------------
    // EXPERIENCE
    // --------------------------------

    else if (
      question.includes("experience") ||
      question.includes("work experience") ||
      question.includes("professional experience") ||
      question.includes("job") ||
      question.includes("company") ||
      question.includes("worked")
    ) {
      response =
        "Nikhil has professional experience as a Data Analyst at Mahalaxmi Digital Services. His work involved business data analysis, reporting, visualization, data cleaning, transformation and supporting data-driven decision making using Python, SQL and Excel.";
    }

    // --------------------------------
    // EDUCATION
    // --------------------------------

    else if (
      question.includes("education") ||
      question.includes("degree") ||
      question.includes("college") ||
      question.includes("university") ||
      question.includes("btech") ||
      question.includes("b.tech")
    ) {
      response =
        "Nikhil is pursuing a B.Tech in Computer Science & Engineering at K.R. Mangalam University, with a specialization in Artificial Intelligence & Machine Learning.";
    }

    // --------------------------------
    // AI / MACHINE LEARNING
    // --------------------------------

    else if (
      question.includes("machine learning") ||
      question.includes("machine-learning") ||
      question.includes("ai/ml") ||
      question.includes("artificial intelligence") ||
      question.includes("ai") ||
      question.includes("scikit")
    ) {
      response =
        "Nikhil works with AI/ML concepts including Machine Learning, Scikit-learn, data preprocessing, feature engineering and model evaluation. He has also worked on an AI-based traffic monitoring and congestion prediction project.";
    }

    // --------------------------------
    // CERTIFICATIONS
    // --------------------------------

    else if (
      question.includes("certification") ||
      question.includes("certifications") ||
      question.includes("certificate")
    ) {
      response =
        "Nikhil's certifications include Data Analysis with Python, Data Visualization with Python, Python 101 for Data Science, Big Data Engineer and Clean Coding With Python.";
    }

    // --------------------------------
    // CONTACT
    // --------------------------------

    else if (
      question.includes("contact") ||
      question.includes("email") ||
      question.includes("hire") ||
      question.includes("reach nikhil")
    ) {
      response =
        "You can contact Nikhil at nikhillsharma455@gmail.com. You can also connect with him through LinkedIn or GitHub using the Contact section of this portfolio.";
    }

    // --------------------------------
    // GITHUB
    // --------------------------------

    else if (
      question.includes("github") ||
      question.includes("code")
    ) {
      response =
        "Nikhil's GitHub username is Nikhil22017, where you can explore his development and project work.";
    }

    // --------------------------------
    // FALLBACK
    // --------------------------------

    else {
      response =
        "I don't have enough information to answer that accurately. You can ask me about Nikhil's skills, Power BI projects, Python, AI/ML, experience, education, certifications or contact information.";
    }

    setChatMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: response
      }
    ]);
  }, 500);
};
const askSuggestedQuestion = (question) => {
  setChatInput(question);

  setTimeout(() => {
    const fakeEvent = {
      preventDefault: () => {}
    };

    handleChatSubmit(fakeEvent);
  }, 50);
};
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
          {[
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "contact",
  "community"
].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's Connect</a>
        </nav>
      </header>

      <main>
       <section id="home" className="hero-section">

  {/* Animated background */}
  <div className="hero-orbit" aria-hidden="true">
    <div className="orbit orbit-one"></div>
    <div className="orbit orbit-two"></div>
    <div className="orbit orbit-three"></div>

    <div className="orbit-glow"></div>
  </div>

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
{/* Skills Marquee */}
<div className="skills-marquee">
  <div className="marquee-track">

    <span>DATA ANALYTICS</span>
    <i>✦</i>
    <span>POWER BI</span>
    <i>✦</i>
    <span>PYTHON</span>
    <i>✦</i>
    <span>SQL</span>
    <i>✦</i>
    <span>AI / ML</span>
    <i>✦</i>
    <span>MACHINE LEARNING</span>
    <i>✦</i>
    <span>DATA VISUALIZATION</span>
    <i>✦</i>
    <span>REACT</span>
    <i>✦</i>

    {/* Duplicate content for seamless animation */}
    <span>DATA ANALYTICS</span>
    <i>✦</i>
    <span>POWER BI</span>
    <i>✦</i>
    <span>PYTHON</span>
    <i>✦</i>
    <span>SQL</span>
    <i>✦</i>
    <span>AI / ML</span>
    <i>✦</i>
    <span>MACHINE LEARNING</span>
    <i>✦</i>
    <span>DATA VISUALIZATION</span>
    <i>✦</i>
    <span>REACT</span>
    <i>✦</i>

  </div>
</div>

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
      <a
  href="https://github.com/Nikhil22017/traffic-ai-dashboard"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>

<a
  href="https://traffic-ai-dashboard.streamlit.app/"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
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
      <a
  href="https://github.com/Nikhil22017/nikhil-portfolio"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>

<a
  href="https://nikhil-portfolio-j7tk.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
  Live Demo ↗
</a>
    </div>
  </div>
</div>
{/* Project 5 */}
<div className="project-card">
  <div className="project-number">05</div>

  <div className="project-content">
    <span className="project-category">
      EDTECH • EDUCATIONAL PLATFORM
    </span>

    <h3>
      Clear Vision for UPSC/UPPSC
    </h3>

    <p>
      A modern and responsive educational platform designed for
      UPSC and competitive exam aspirants, providing organized
      access to premium study resources and learning materials.
    </p>

    <div className="project-tags">
      <span>React.js</span>
      <span>TSX</span>
      <span>Vite</span>
      <span>Tailwind CSS</span>
      <span>JavaScript</span>
    </div>

    <div className="project-links">
      <a
  href="https://github.com/Nikhil22017/Clear-vison-upsc"
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>

<a
  href="https://clear-vison-upsc.vercel.app/"
  target="_blank"
  rel="noreferrer"
>
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
      href="https://www.linkedin.com/in/nikhil-sharma-2004d1a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919560371261?text=Hi%20Nikhil%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
  className="whatsapp-widget"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact Nikhil on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    className="whatsapp-icon"
    aria-hidden="true"
  >
    <path
      d="M19.11 17.23c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.61-.66 1.84-1.29.23-.64.23-1.18.16-1.29-.07-.11-.25-.18-.52-.32z"
    />
    <path
      d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.72 6.4L3.2 28.8l6.55-1.72a12.76 12.76 0 0 0 6.27 1.64h.01c7.06 0 12.8-5.74 12.8-12.8S23.08 3.2 16.02 3.2zm0 23.43h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.4a10.61 10.61 0 1 1 8.9 4.88z"
    />
  </svg>
</a>
{/* ================================
    AI PORTFOLIO CHAT
================================ */}

<div className="chat-widget">

  {chatOpen && (
    <div className="chat-window">

      {/* Header */}
      <div className="chat-header">

        <div className="chat-profile">

          <div className="chat-avatar">
            NS
          </div>

          <div>
            <h3>Ask about Nikhil</h3>

            <span className="chat-subtitle">
              <span className="chat-status"></span>
              Portfolio Assistant
            </span>
          </div>

        </div>

        <button
          className="chat-close"
          onClick={() => setChatOpen(false)}
          aria-label="Close chat"
        >
          <X size={21} />
        </button>

      </div>


      {/* Messages */}
      <div className="chat-messages">

        {chatMessages.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${
              message.sender === "user"
                ? "user-message"
                : "bot-message"
            }`}
          >
            {message.text}
          </div>
        ))}

      </div>


      {/* Suggested questions */}
      {chatMessages.length === 1 && (
        <div className="chat-suggestions">

          <button
  onClick={() =>
    askSuggestedQuestion("What are Nikhil's main skills?")
  }
>
  His skills
</button>

          <button
  onClick={() =>
    askSuggestedQuestion("Tell me about his projects.")
  }
>
  His projects
</button>

<button
  onClick={() =>
    askSuggestedQuestion("Tell me about his experience.")
  }
>
  His experience
</button>

        </div>
      )}


      {/* Input */}
      <form
        className="chat-input-area"
        onSubmit={handleChatSubmit}
      >

        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Ask something..."
          aria-label="Ask Nikhil's portfolio assistant"
        />

        <button
          type="submit"
          className="chat-send"
          aria-label="Send message"
        >
          <Send size={19} />
        </button>

      </form>

    </div>
  )}


  {/* Floating button */}
  <button
    className={`chat-launcher ${
      chatOpen ? "chat-launcher-hidden" : ""
    }`}
    onClick={() => setChatOpen(true)}
    aria-label="Open portfolio assistant"
  >
    <MessageCircle size={27} />

    <span className="chat-pulse"></span>
  </button>

</div>


{/* ==========================================
    COMMUNITY
========================================== */}

<section id="community" className="section community-section reveal">

  <div className="section-heading">

    <span className="eyebrow">
      07 / COMMUNITY
    </span>

    <h2>
      Nikhil's <span>Dev Community</span>
    </h2>

    <p>
      Ask questions, share ideas and connect with other people
      interested in technology, data analytics, Python and AI/ML.
    </p>

  </div>


  <div className="community-card">

    {/* Community Header */}

    <div className="community-header">

      <div className="community-status">
        <span className="community-dot"></span>

        <div>
          <strong>
            Live community chat
          </strong>

          <small>
            Connect with the community
          </small>
        </div>
      </div>


      <button
        className="community-login"
        type="button"
      >
        <LogIn size={18} />

        Continue with Google to join
      </button>

    </div>


    {/* Messages */}

    <div className="community-messages">

      {/* Message 1 */}

      <div className="community-message">

        <div className="community-avatar">
          NS
        </div>

        <div className="message-content">

          <div className="message-meta">
            <strong>
              Nikhil Sharma
            </strong>

            <span>
              Today · 10:15
            </span>
          </div>

          <p>
            Welcome to my community! 👋
          </p>

        </div>

      </div>


      {/* Message 2 */}

      <div className="community-message">

        <div className="community-avatar">
          NS
        </div>

        <div className="message-content">

          <div className="message-meta">

            <strong>
              Nikhil Sharma
            </strong>

            <span>
              Today · 10:18
            </span>

          </div>

          <p>
            Feel free to ask me anything about data analytics,
            Power BI, Python, AI/ML or my projects.
          </p>

        </div>

      </div>


      {/* Example visitor message */}

      <div className="community-message visitor-message">

        <div className="community-avatar visitor">
          Y
        </div>

        <div className="message-content">

          <div className="message-meta">

            <strong>
              You
            </strong>

            <span>
              Today · 10:20
            </span>

          </div>

          <p>
            Which tools do you use for data analytics?
          </p>

        </div>

      </div>


    </div>


    {/* Community Input */}

    <div className="community-input-area">

      <div className="community-input-wrapper">

        <button
          className="community-icon-btn"
          type="button"
          aria-label="Attach file"
        >
          <Paperclip size={20} />
        </button>


        <input
          type="text"
          placeholder="Write a message..."
          aria-label="Community message"
        />


        <button
          className="community-icon-btn"
          type="button"
          aria-label="Voice message"
        >
          <Mic size={20} />
        </button>

      </div>


      <button
        className="community-send"
        type="button"
        aria-label="Send message"
      >
        <Send size={20} />
      </button>

    </div>

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