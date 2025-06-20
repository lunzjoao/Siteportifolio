import { useState, useEffect } from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin, FaArrowDown, FaJava, FaFileAlt } from 'react-icons/fa'
import { SiKotlin } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'
import './App.css'
import profilePic from './assets/eu.jpg'
import FadeInSection from './components/FadeInSection'
import CustomCursor from './components/CustomCursor'
import ThemeSwitcher from './components/ThemeSwitcher'
import LavaLamp from './components/LavaLamp'

const skills = [
  { name: 'JavaScript', icon: <FaJsSquare size={40} />, className: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <FaReact size={40} />, className: 'react', url: 'https://react.dev/' },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, className: 'node', url: 'https://nodejs.org/' },
  { name: 'Python', icon: <FaPython size={40} />, className: 'python', url: 'https://www.python.org/' },
  { name: 'Java', icon: <FaJava size={40} />, className: 'java', url: 'https://www.java.com/' },
  { name: 'Kotlin', icon: <SiKotlin size={40} />, className: 'kotlin', url: 'https://kotlinlang.org/' },
];

const projects = [
  {
    title: 'Project',
    description: 'Descrição breve do projeto. O que ele faz, tecnologias usadas, etc.',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Project',
    description: 'Descrição breve do projeto. O que ele faz, tecnologias usadas, etc.',
    liveUrl: '#',
    repoUrl: '#'
  },
  {
    title: 'Project',
    description: 'Descrição breve do projeto. O que ele faz, tecnologias usadas, etc.',
    liveUrl: '#',
    repoUrl: '#'
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-mode')

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark-mode' ? 'light-mode' : 'dark-mode'))
  }

  return (
    <>
      <CustomCursor />
      <LavaLamp />
      <a href="#hero" className="fixed-logo">./Lunz</a>
      <div className="resume-button-container">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
          <FaFileAlt size={20} />
          <span>Resume</span>
        </a>
      </div>
      <div className="theme-switcher-container">
        <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      </div>
      <main>
        <section id="hero">
          <div className="hero-content">
            <FadeInSection>
              <div className="hero-title-container">
                <TypeAnimation
                  sequence={[
                    'Hello there',
                    1500,
                    '', // Apaga o texto
                    500,
                    "I'm Lunz",
                    5000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  cursor={true}
                />
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="hero-subtitle-container">
                <div className="hero-subtitle-panel">
                  <p>I'm a Full-Stack Developer</p>
                </div>
              </div>
            </FadeInSection>
          </div>
          <a href="#about" className="scroll-down-arrow" aria-label="Scroll down">
            <FaArrowDown />
          </a>
        </section>

        <section id="about">
          <div className="container about-section-container">
            <FadeInSection>
              <div className="about-container">
                <img src={profilePic} alt="João Pedro Lunz" className="profile-pic"/>
                <div className="about-text">
                  <div className="about-text-content">
                    <h3>About Me</h3>
                    <p>
                      I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. I love turning ideas into scalable, efficient, and user-friendly web applications. My tech stack includes JavaScript, TypeScript, React, Node.js, Express, and SQL/NoSQL databases, and I'm always exploring new tools to improve my workflow.
                    </p>
                    <p>
                      Whether it's designing responsive interfaces or building robust APIs, I enjoy solving problems and continuously learning. I value clean code, good architecture, and clear communication in every project I work on.
                    </p>
                    <p>
                      Currently, I'm focused on building high-quality web applications and growing as a developer by working on real-world projects and collaborating with other talented professionals.
                    </p>
                    <p>
                      Let's build something amazing together!
                    </p>
                  </div>
                  <div className="social-links">
                    <a href="https://github.com/lunzjoao" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                    <a href="https://www.linkedin.com/in/joaopedrolunz/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
                  </div>
                </div>
              </div>
              <div className="skills-section">
                <h2>Skills</h2>
                <div className="skills">
                  {skills.map((skill, index) => (
                    <FadeInSection key={index}>
                      <a href={skill.url} target="_blank" rel="noopener noreferrer" className="skill-link">
                        <div className={`skill-item ${skill.className}`}>
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                      </a>
                    </FadeInSection>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section id="projects" className="container">
          <FadeInSection>
            <div className="text-center">
              <h2>My Projects</h2>
            </div>
          </FadeInSection>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <FadeInSection key={index}>
                <div className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-links">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={24} style={{ color: 'white' }} />
                    </a>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Lunz. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/lunzjoao" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/joaopedrolunz/" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
