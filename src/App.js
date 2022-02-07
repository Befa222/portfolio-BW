import React, { useState } from 'react';
import TsParticules from './components/TsParticles';
import SwithTheme from './components/SwithTheme';
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
    <>
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
              <h1>Projects</h1>
            </div>
            <div onClick={() => setAbout(true)} className="cube-face face-left">
              <h1 id="about-text1">About </h1>
              <h1 id="about-text2">Me</h1>
              <h3 id="about-click">[ Click ]</h3>
            </div>
            <div className="cube-face face-top">
              <h1>Top</h1>
            </div>
            <div className="cube-face face-bottom">
              <h1>Contact Me</h1>
            </div>
          </div>
        </div>
        {about && <section id="about-me-section"></section>}
        {projects && (
          <div className="projects">
            <button onClick={() => setProjects(false)}>
              <h1>Back</h1>
            </button>
          </div>
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
      <div id="landscape"></div>
    </>
  );
}

export default App;
