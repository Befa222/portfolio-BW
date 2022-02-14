import React, { useState, Suspense, useEffect } from 'react';
import TsParticules from './components/TsParticles';
import SwithTheme from './components/SwithTheme';
import { ThemeProvider } from './contexts/context';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import p1 from './images/gameMain.png';
import p2 from './images/pikaMobile1.png';
import p3 from './images/3dport.png';
import p4 from './images/weather.jpg';
import gitHubIcon from './images/gitHub.png';
import linkedinIcon from './images/linkedin-64.ico';
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
  const { i18n, t } = useTranslation(['main']);

  useEffect(() => {
    if (localStorage.getItem('i18nextLng')?.length > 2) {
      i18next.changeLanguage('en');
    }
  }, []);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <ThemeProvider>
      <div id="mobile-portrait">
        <div id="theme-container">
          <select
            id="language-container"
            onChange={handleLanguageChange}
            value={localStorage.getItem('i18nextLng')}
          >
            <option className="language-options" value="en">
              English
            </option>
            <option className="language-options" value="fr">
              Français
            </option>
          </select>
          <SwithTheme />
        </div>
        <div className="scene">
          <div className="cube">
            <div className="cube-face face-front">
              <h1 className="name">Fabien</h1>
              <h1 className="name">Lallement</h1>
              <h2 id="title">{t('main-title')}</h2>
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
              <h3 className="click">[ Click ]</h3>
            </div>
            <div onClick={() => setAbout(true)} className="cube-face face-left">
              <h1 id="about-text">About me</h1>
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
              <h1 id="project-container-title">Projects: click for details</h1>
              <h1 id="project-container-title-desktop">
                Projects: hover for details
              </h1>
              <div id="projects">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={p1} alt="game" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Memory Game</h1>
                      <br />
                      <ul className="project-details">
                        <li>Find the matching pairs!</li>
                        <li>Sign in, log in, save your best time.</li>
                        <li>Leaderboard.</li>
                        <li>
                          TECH: HTML, CSS, JS, Firebase, React, Context, Hooks,
                          React Router.
                        </li>
                        <li>
                          LINK:{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://memory-game-fabien-lallement.netlify.app/"
                          >
                            Memory Game
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={p2} alt="food-app" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Pick a Chew</h1>
                      <br />
                      <ul className="project-details">
                        <li>
                          Food app that finds receipes with the ingredients you
                          have at home.
                        </li>
                        <li>Diffrent UI for mobile and desktop.</li>
                        <li>
                          TECH: React, Spoonacular Api, JS, Axios, Hooks, CSS,
                          React Router, NPM.
                        </li>
                        <li>
                          LINK:{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://pick-a-chew.netlify.app/"
                          >
                            Pick a Chew
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={p3} alt="starwars" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Star Wars portfolio</h1>
                      <br />
                      <ul className="project-details">
                        <li>
                          A version of my portfolio using imported 3d models.
                        </li>
                        <li>
                          It was a lot of fun and sweat, but definitely a huge
                          learning experience.
                        </li>
                        <li>
                          TECH: React, react router, Three JS, hooks, CSS.
                        </li>
                        <li>
                          LINK:{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://fabien-lallement-3d-portfolio.netlify.app/"
                          >
                            3d Portfolio
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={p4} alt="weather app" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Weather app</h1>
                      <br />
                      <ul className="project-details">
                        <li>Weather app with two different UI.</li>
                        <li>
                          App made for training purposes with Neumorphism and
                          Glassphormism.
                        </li>
                        <li>
                          TECH: React, Open Weather Api, JS, Styled Components.
                        </li>
                        <li>
                          LINK:{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://loving-raman-112067.netlify.app/"
                          >
                            Weather App
                          </a>
                        </li>
                      </ul>
                    </div>
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
              <div id="form-container">
                <form>
                  <input
                    className="form-input-field"
                    type="text"
                    name="_name"
                    required
                    placeholder="Your Name"
                  />
                  <input
                    className="form-input-field"
                    type="email"
                    name="_email"
                    required
                    placeholder="Your email"
                  />
                  <textarea
                    name="message"
                    required
                    placeholder="Your message"
                  />
                  <input id="send-button" type="submit" value="Send" />
                </form>
              </div>
              <div id="links-container">
                <a
                  href="https://github.com/Befa222"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="githubIcon" src={gitHubIcon} alt="gitHub-squid" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fabien-lallement-d2s/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="linkedinIcon" src={linkedinIcon} alt="logo" />
                </a>
              </div>
              <button id="close-button2" onClick={() => setContact(false)}>
                X
              </button>
            </div>
          </section>
        )}
        <div id="controls-container">
          <div id="about-button-container">
            <button id="about-button" onClick={() => left()}>
              {t('main-button-about')}
            </button>
          </div>
          <div id="contact-main-button-container">
            <button id="main-button" onClick={() => front()}>
              {t('main-button-main')}
            </button>
            <button id="contact-button" onClick={() => down()}>
              {t('main-button-contact')}
            </button>
          </div>
          <div id="projects-button-container">
            <button id="projects-button" onClick={() => right()}>
              {t('main-button-projects')}
            </button>
          </div>
        </div>
        <TsParticules />
      </div>
    </ThemeProvider>
  );
}

export default App;
