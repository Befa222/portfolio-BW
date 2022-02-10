import React, { useState } from 'react';
import TsParticules from './components/TsParticles';
import SwithTheme from './components/SwithTheme';
import { ThemeProvider } from './contexts/context';
import p1 from './images/gameMain.png';
import p2 from './images/pikaMobile1.png';
import portfolio3d from './video/portfolio3d.mp4';
import p4 from './images/weather.jpg';
import './App.css';

function App() {
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);

  function front() {
    document.querySelector('.cube').style.webkitTransform = 'rotateX(0deg)';
  }
  function down() {
    document.querySelector('.cube').style.webkitTransform = 'rotateX(90deg)';
  }
  function left() {
    document.querySelector('.cube').style.webkitTransform = 'rotateY(90deg)';
  }
  function right() {
    document.querySelector('.cube').style.webkitTransform = 'rotateY(-90deg)';
  }
  return (
    <ThemeProvider>
      <div id="mobile-portrait">
        <div id="theme-container">
          <SwithTheme />
        </div>
        <div className="scene">
          <div className="cube">
            <div className="cube-face face-front">
              <h1 className="name">Fabien</h1>
              <h1 className="name">Lallement</h1>
              <h2 id="title">Front End Developer</h2>
            </div>
            <div className="cube-face face-back">back</div>
            <div
              onClick={() => setProjects(true)}
              className="cube-face face-right"
            >
              <h1 id="projects-text1">Projects</h1>
              <h1 id="projects-text2">Projects</h1>
              <h1 id="projects-text3">Projects</h1>
              <h1 id="projects-text4">Projects</h1>
              <h1 id="projects-text5">Projects</h1>
              <h1 id="projects-text6">Projects</h1>
              <h3 className="click">[ Click ]</h3>
            </div>
            <div onClick={() => setAbout(true)} className="cube-face face-left">
              <h1 id="about-text1">About </h1>
              <h1 id="about-text2">Me</h1>
              <h3 className="click">[ Click ]</h3>
            </div>
            <div className="cube-face face-top">
              <h1>Top</h1>
            </div>
            <div
              onClick={() => setContact(true)}
              className="cube-face face-bottom"
            >
              <h1 id="contact-text">Contact Me</h1>
              <h3 className="click">[ Click ]</h3>
            </div>
          </div>
        </div>
        {about && (
          <section id="about-section">
            <div id="about-container1">
              <div id="about-container1-text">
                <p>
                  I'm a French front-end developer who spent 14 years in London.
                </p>
                <p>
                  I like anything creative and fell in love with Css and React.
                  I love building projects from sratch and avoid the use of
                  package as much as possible.
                </p>
              </div>
              <h1 id="about-title1">About</h1>
            </div>
            <div id="about-container2">
              <h1 id="about-title2">Me</h1>
              <div id="about-container2-text">
                <h1>Skills :</h1>
                <p>
                  Html, CSS, React, Javascript, Keyframes animation, React
                  Context, React Router, Hooks...
                </p>
              </div>
              <button id="close-button1" onClick={() => setAbout(false)}>
                X
              </button>
            </div>
          </section>
        )}
        {projects && (
          <section id="projects-section">
            <div id="projects-container">
              <h1>Projects: click for details</h1>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={p1} alt="game" />
                  </div>
                  <div className="flip-card-back">
                    <h1>John Doe</h1>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={p2} alt="food-app" />
                  </div>
                  <div className="flip-card-back">
                    <h1>John Doe</h1>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <video
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    >
                      <source src={portfolio3d} type="video/mp4" />
                    </video>
                  </div>
                  <div className="flip-card-back">
                    <h1>John Doe</h1>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={p4} alt="weather app" />
                  </div>
                  <div className="flip-card-back">
                    <h1>John Doe</h1>
                  </div>
                </div>
              </div>
              <button
                id="close-button-projects"
                onClick={() => setProjects(false)}
              >
                X
              </button>
            </div>
          </section>
        )}
        {contact && (
          <section id="contact-section">
            <div id="contact-container">
              <div id="contact-container-title">
                <h1 id="contact-container-title-text">Contact me</h1>
              </div>
              <div id="form-container"></div>
              <div id="links-container"></div>
              <button id="close-button2" onClick={() => setContact(false)}>
                X
              </button>
            </div>
          </section>
        )}
        <div id="controls-container">
          <div id="about-button-container">
            <button id="about-button" onClick={() => left()}>
              About me
            </button>
          </div>
          <div id="contact-main-button-container">
            <button id="main-button" onClick={() => front()}>
              Main
            </button>
            <button id="contact-button" onClick={() => down()}>
              Contact me
            </button>
          </div>
          <div id="projects-button-container">
            <button id="projects-button" onClick={() => right()}>
              Projects
            </button>
          </div>
        </div>
        <TsParticules />
      </div>
    </ThemeProvider>
  );
}

export default App;
