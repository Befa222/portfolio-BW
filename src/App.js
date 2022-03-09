import React, { useState, useEffect } from 'react';
import TsParticules from './components/TsParticles';
import SwithTheme from './components/SwithTheme';
import { ThemeProvider } from './contexts/context';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import project1Image from './images/gameMain.png';
import project2Image from './images/pikaMobile1.png';
import project3Image from './images/3dport.png';
import project4Image from './images/weather.jpg';
import gitHubIcon from './images/gitHub.png';
import linkedinIcon from './images/linkedin-64.ico';
import './App.css';

function App() {
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  const [about, setAbout] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);

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

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_42wcai8',
        'template_pacrvr9',
        e.target,
        'user_2GGglIWKLZaKHdfcHpWH0'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <ThemeProvider>
      <div>
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
              <h3 className="click">[ {t('click-cube-face')} ]</h3>
            </div>
            <div onClick={() => setAbout(true)} className="cube-face face-left">
              <h1 id="about-text">About me</h1>
              <h3 className="click">[ {t('click-cube-face')} ]</h3>
            </div>
            <div className="cube-face face-top">
              <h1>Top</h1>
            </div>
            <div
              onClick={() => setContact(true)}
              className="cube-face face-bottom"
            >
              <h1 id="contact-text">Contact Me</h1>
              <h3 className="click">[ {t('click-cube-face')} ]</h3>
            </div>
          </div>
        </div>
        {about && (
          <section id="about-section">
            <div id="about-container1">
              <div id="about-container1-text">
                <p>{t('about-me-text1')}</p>
                <p>{t('about-me-text2')}</p>
              </div>
              <h1 id="about-title1">{t('about-me-title1')}</h1>
            </div>
            <div id="about-container2">
              <h1 id="about-title2">{t('about-me-title2')}</h1>
              <div id="about-container2-text">
                <h1>{t('about-me-skills')}</h1>
                <p>
                  Html, CSS, React, Javascript, Keyframes animation, Stlyled
                  components, React Context, React Router, Hooks, Axios...
                </p>
              </div>
              <button className="close-button1" onClick={() => setAbout(false)}>
                X
              </button>
            </div>
          </section>
        )}
        {projects && (
          <section id="projects-section">
            <div id="projects-container">
              <br />
              <h1 id="project-container-title">
                {t('projects-section-title')}
              </h1>
              <h1 id="project-container-title-desktop">
                {t('projects-section-title-desktop')}
              </h1>
              <br />
              <div id="projects">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project1Image} alt="game" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">{t('project1-title')}</h1>
                      <br />
                      <ul className="project-details">
                        <li>{t('project1-details1')}</li>
                        <li>{t('project1-details2')}</li>
                        <li>{t('project1-details3')}</li>
                        <li>
                          TECH: HTML, CSS, JS, Firebase, React, Context, Hooks,
                          React Router.
                        </li>
                        <li>
                          {t('projects-links')}{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://memory-game-fabien-lallement.netlify.app/"
                          >
                            {t(t('project1-title'))}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br />
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project2Image} alt="food-app" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Pick a Chew</h1>
                      <br />
                      <ul className="project-details">
                        <li>{t('project2-details1')}</li>
                        <li>{t('project2-details2')}</li>
                        <li>
                          TECH: React, Spoonacular Api, JS, Axios, Hooks, CSS,
                          React Router, NPM.
                        </li>
                        <li>
                          {t('projects-links')}{' '}
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
                <br />
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project3Image} alt="starwars" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">Star Wars portfolio</h1>
                      <br />
                      <ul className="project-details">
                        <li>{t('project3-details1')}</li>
                        <li>{t('project3-details2')}</li>
                        <li>
                          TECH: React, react router, Three JS, hooks, CSS.
                        </li>
                        <li>
                          {t('projects-links')}{' '}
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
                <br />
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={project4Image} alt="weather app" />
                    </div>
                    <div className="flip-card-back">
                      <h1 className="project-name">{t('project4-title')}</h1>
                      <br />
                      <ul className="project-details">
                        <li>{t('project4-details1')}</li>
                        <li>{t('project4-details2')}</li>
                        <li>
                          TECH: React, Open Weather Api, JS, Styled Components.
                        </li>
                        <li>
                          {t('projects-links')}{' '}
                          <a
                            className="deployed-link"
                            target="_blank"
                            rel="noreferrer"
                            href="https://loving-raman-112067.netlify.app/"
                          >
                            {t('project4-title')}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <br />
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
                <h1 id="contact-container-title-text">
                  {t('contact-me-title')}
                </h1>
              </div>
              <div id="form-container">
                <form onSubmit={sendEmail}>
                  <input
                    className="form-input-field"
                    type="text"
                    name="_name"
                    required
                    placeholder={t('contact-me-form-name')}
                  />
                  <input
                    className="form-input-field"
                    type="email"
                    name="_email"
                    required
                    placeholder={t('contact-me-form-email')}
                  />
                  <textarea
                    name="message"
                    required
                    placeholder={t('contact-me-form-message')}
                  />
                  <input
                    onClick={() => setEmailPopup(true)}
                    id="send-button"
                    type="submit"
                    value={t('contact-me-form-send-button')}
                  />
                </form>
                {emailPopup && (
                  <div id="email-popup">
                    <h1>Thank you!</h1>
                  </div>
                )}
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
              <button
                id="close-button2"
                onClick={() => {
                  setContact(false);
                  setEmailPopup(false);
                }}
              >
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
