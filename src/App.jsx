import './App.css'

function App() {
  return (
    <div className="resume-container">
      <header className="header">
        <div className="header-content">
          <h1>John Doe</h1>
          <h2>Full Stack Developer</h2>
          <div className="contact-info">
            <a href="mailto:john.doe@example.com">john.doe@example.com</a>
            <span className="separator">|</span>
            <a href="tel:+1234567890">+1 234 567 890</a>
            <span className="separator">|</span>
            <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">GitHub</a>
            <span className="separator">|</span>
            <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="section">
          <h3 className="section-title">About</h3>
          <p className="section-content">
            Passionate full stack developer with 5+ years of experience building modern web applications.
            Specialized in React, Node.js, and cloud technologies. Strong problem-solver with a focus on
            writing clean, maintainable code and delivering high-quality user experiences.
          </p>
        </section>

        <section className="section">
          <h3 className="section-title">Experience</h3>
          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Senior Full Stack Developer</h4>
                <p className="company">Tech Company Inc.</p>
              </div>
              <span className="date">2021 - Present</span>
            </div>
            <ul className="experience-details">
              <li>Led development of React-based web applications serving 100k+ users</li>
              <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Architected microservices using Node.js and Docker</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div>
                <h4>Full Stack Developer</h4>
                <p className="company">Startup Solutions</p>
              </div>
              <span className="date">2019 - 2021</span>
            </div>
            <ul className="experience-details">
              <li>Built RESTful APIs using Node.js and Express</li>
              <li>Developed responsive front-end interfaces with React and Redux</li>
              <li>Integrated third-party services and payment gateways</li>
              <li>Optimized database queries improving performance by 40%</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skills">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools & Others</h4>
              <div className="skills">
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Agile</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Education</h3>
          <div className="education-item">
            <div className="education-header">
              <div>
                <h4>Bachelor of Science in Computer Science</h4>
                <p className="institution">University of Technology</p>
              </div>
              <span className="date">2015 - 2019</span>
            </div>
            <p className="education-details">
              Graduated with Honors | GPA: 3.8/4.0
            </p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-title">Projects</h3>
          <div className="project-item">
            <h4>E-Commerce Platform</h4>
            <p>Built a full-stack e-commerce platform with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.</p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Stripe</span>
            </div>
          </div>
          <div className="project-item">
            <h4>Task Management App</h4>
            <p>Developed a collaborative task management application with real-time updates using WebSockets. Supports team collaboration and project tracking.</p>
            <div className="project-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Socket.io</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
