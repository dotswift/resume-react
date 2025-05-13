import React, { useState, useEffect } from 'react';
import './App.css';
import ProjectShowcase from './ProjectShowcase';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Apply dark theme on mount
  useEffect(() => {
    document.body.classList.add('dark-theme');
  }, []);

  // Handle scroll events for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          current = section.getAttribute('id') || '';
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Resume data
  const resumeData = {
    name: "Derek \"Dereq\" Quinn",
    title: "SOFTWARE ENGINEER",
    contact: {
      phone: "+1.330.546.3640",
      email: "hello@derekquinn.com",
      github: "https://github.com/dotswift",
      linkedin: "https://www.linkedin.com/in/derekq/"
    },
    profile: "Software craftsman since 2007, when I taught myself Objective-C between help desk calls. 14+ years building mobile and web applications used across healthcare, media, automotive, gaming, and telehealth. I find my best coding solutions while conquering trail runs at my local National Park.",
    skills: {
      languages: ["Swift", "Objective-C", "JavaScript", "TypeScript", "HTML / CSS", "Kotlin / Java", "Python", "Ruby"],
      frameworks: ["Swift UI / UIKit", "React", "Vue", "Angular", "Next.js", "Spring", "Node.js", "Express.js"],
      tools: [
        "Git / GitHub", "AWS", "Google Cloud Platform", "Azure", 
        "Agentic AI Development", "LLM API Implementation", 
        "REST API Design & Implementation", "GraphQL", 
        "Payment Gateway Integration", "Authentication Systems", 
        "Automated Testing", "CI / CD Setup and Maintenance", 
        "SQL / PostgreSQL / NoSQL", "Analytics Integration",
        "Microservice Architecture Patterns"
      ]
    },
    experience: [
      {
        title: "Lead Software Engineer",
        company: "Pareto Holdings",
        location: "Remote",
        period: "2023 — 2025",
        achievements: [
          "Led development across web, mobile, and backend systems for products in telehealth, agentic AI, travel, social media, and advertising sectors",
          "Collaborated with investors to create and implement product strategies in multiple industries",
          "Managed technical decisions and architectural planning for multiple products simultaneously"
        ]
      },
      {
        title: "Senior Software Engineer",
        company: "Lucra Sports",
        location: "Remote",
        period: "2021 — 2023",
        achievements: [
          "Developed payment processing features including Apple Pay and ACH deposits in a heavily regulated gaming industry",
          "Implemented identity verification and anti-fraud solutions to maintain security and regulatory compliance",
          "Successfully pivoted the business model by refactoring consumer applications into an SDK, which was sold to MLB and NBA franchises and Fortune 500 partners"
        ]
      },
      {
        title: "Senior Software Engineer",
        company: "Detroit Labs",
        location: "Remote",
        period: "2016 — 2021",
        achievements: [
          "Created and maintained features for Jimmy Johns' mobile app serving millions of customers across 2,000+ US stores, earning over 500 5-star reviews",
          "Developed key features for Ford's EV platform and made significant contributions to the FordPass iOS application",
          "Contributed to backend systems for the Ford Mach-E to establish feature parity with Tesla Model Y"
        ]
      },
      {
        title: "Software Engineer",
        company: "Sparx Technology",
        location: "Brooklyn NY",
        period: "2013 — 2016",
        achievements: [
          "Developed iOS and web applications white-labeled for major media networks including ESPN, ABC, and NBC",
          "Created software for audience participation in live broadcasts of high-profile events like The Oscars, NHL Playoffs, and NBA games",
          "Designed and supported hardware and software integrations customized for each network's workflow"
        ]
      },
      {
        title: "Software Engineer",
        company: "Daniels Health",
        location: "Chicago, IL",
        period: "2011 — 2013",
        achievements: [
          "Developed iOS, Android, and Windows mobile applications for over 50 health systems in the USA, UK, and Canada",
          "Implemented specialized design requirements for healthcare industry applications with minimal margin for error",
          "Created a previously unrealized revenue stream by utilizing software solutions to find opportunities for efficiency within the business"
        ]
      }
    ],
    education: {
      degree: "Bachelor of Science",
      university: "Indiana University Bloomington",
      graduationDate: "MAY 2012"
    }
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="header-container">
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="logo-text">DQ</span>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav className={`nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <a 
                  href="#about" 
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={activeSection === 'experience' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={activeSection === 'skills' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Hi, I'm {resumeData.name.split('"')[0]} <span className="accent">"{resumeData.name.split('"')[1]}"</span> {resumeData.name.split('"')[2]}</h1>
              <h2>{resumeData.title}</h2>
              <p className="hero-description">{resumeData.profile}</p>
              <div className="hero-cta">
                <a href="#contact" className="btn btn-primary">Get In Touch</a>
                <a href="#experience" className="btn btn-secondary">View My Work</a>
              </div>
            </div>
            <div className="hero-decoration">
              <div className="code-block">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> <span className="code-variable">aboutMe</span> = {'{'}
                    <br />  <span className="code-property">passion:</span> <span className="code-string">"Building elegant solutions to complex problems"</span>,
                    <br />  <span className="code-property">experience:</span> <span className="code-number">14</span> + <span className="code-string">" years"</span>,
                    <br />  <span className="code-property">interests:</span> [<span className="code-string">"Mobile"</span>, <span className="code-string">"Web"</span>, <span className="code-string">"AI"</span>, <span className="code-string">"Ultramarathons"</span>],
                    <br />  <span className="code-property">currentlyLearning:</span> <span className="code-string">"Always something new"</span>
                    <br />{'}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>{resumeData.profile}</p>
                <p>With experience spanning multiple industries and technologies, I've delivered apps that millions of people use daily. I'm passionate about clean code, intuitive user experiences, and solving complex problems with elegant solutions.</p>
              </div>
              <div className="about-stats">
                <div className="stat">
                  <div className="stat-number">14+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat">
                  <div className="stat-number">5</div>
                  <div className="stat-label">Industries</div>
                </div>
                <div className="stat">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Lines of Code</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              {resumeData.experience.map((job, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className="timeline-date">{job.period}</div>
                    <h3 className="timeline-title">{job.title}</h3>
                    <h4 className="timeline-company">{job.company} <span className="timeline-location">{job.location}</span></h4>
                    <ul className="timeline-achievements">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-date">{resumeData.education.graduationDate}</div>
                  <h3 className="timeline-title">{resumeData.education.degree}</h3>
                  <h4 className="timeline-company">{resumeData.education.university}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  {resumeData.skills.languages.map((language, index) => (
                    <span key={index} className="skill-tag">{language}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Frameworks</h3>
                <div className="skill-tags">
                  {resumeData.skills.frameworks.map((framework, index) => (
                    <span key={index} className="skill-tag">{framework}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Expertise</h3>
                <div className="skill-tags">
                  {resumeData.skills.tools.map((tool, index) => (
                    <span key={index} className="skill-tag">{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              A selection of projects that showcase my technical expertise and problem-solving skills across different industries.
            </p>
            <ProjectShowcase />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-item-icon">📞</div>
                  <div className="contact-item-text">
                    <h3>Phone</h3>
                    <a href={`tel:${resumeData.contact.phone}`}>{resumeData.contact.phone}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">✉️</div>
                  <div className="contact-item-text">
                    <h3>Email</h3>
                    <a href={`mailto:${resumeData.contact.email}`}>{resumeData.contact.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🔗</div>
                  <div className="contact-item-text">
                    <h3>GitHub</h3>
                    <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer">github.com/dotswift</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">🔗</div>
                  <div className="contact-item-text">
                    <h3>LinkedIn</h3>
                    <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/derekq</a>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your message" rows={5}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Derek "Dereq" Quinn. All rights reserved.</p>
            <p>Made with <span className="heart">❤️</span> and a lot of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;