import React, { useEffect } from 'react';
import './UnderConstruction.css';
import Logo from "../../assets/hrmslogo.png";

function LaunchPage() {
  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = new Date('Oct 31, 2024 00:00:00').getTime();

    const interval = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / day);
      document.getElementById('hours').innerText = Math.floor(
        (distance % day) / hour
      );
      document.getElementById('minutes').innerText = Math.floor(
        (distance % hour) / minute
      );
      document.getElementById('seconds').innerText = Math.floor(
        (distance % minute) / second
      );
    }, second);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="launch-page">
      <span className="bar">
        <i className="fa fa-bars"></i>
      </span>
      
      <nav className="toggle-nav">
        <ul className="listing">
          <li>
            <a href="mailto:fmcg@hifiitpark.com">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </nav>
      <section className="coming-soon">
      <div className="heading1">
            <img src={Logo} width="500px" alt="Logo" />
          </div>
        <div className="coming-soon-inner">
          
          <h1 className="heading">Coming Soon</h1>
          <h2 className="small-heading">Under Construction</h2>
          <div className="counter-timer">
            <ul>
              <li>
                <span id="days"></span>Days
              </li>
              <li>
                <span id="hours"></span>Hours
              </li>
              <li>
                <span id="minutes"></span>Minutes
              </li>
              <li>
                <span id="seconds"></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LaunchPage;
