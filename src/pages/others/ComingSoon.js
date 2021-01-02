import React from "react";
import { Link } from "react-router-dom";
import Icofont from "react-icofont";
import Countdown from "react-countdown";
import Loader from "../../components/Loader/Loader";
import logo from "../../assets/images/logoimg.png"

const ComingSoon = () => {
  
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <ul className="countdown">
        <li>
          <span className="hours">{days}</span>
          <p>days </p>
        </li>
        <li>
          <span className="hours">{hours}</span>
          <p>hours </p>
        </li>
        <li>
          <span className="minutes">{minutes}</span>
          <p>minutes</p>
        </li>
        <li>
          <span className="seconds">{seconds}</span>
          <p>seconds</p>
        </li>
      </ul>
    );
  };

  return (
  <Loader>
    <section
      className="title-error-bg coming-cover-bg"
      data-stellar-background-ratio="0.2"
    >
      <div className="container">
        <div className="page-title text-center">
          <img src={logo}></img>
          <h2 style= {{color:"white"}}>Lads Electric</h2>
          <br />
          <h1>COMING SOON</h1>
          <div className="countdown-container">
          <Countdown
                date={Date.now() + (950000 * 60 * 48 + 5000)}
                renderer={renderer}
              ></Countdown>
          </div>
          <p className="mt-30">
            
          </p>
        </div>
      </div>
    </section>
  </Loader>
)};

export default ComingSoon;
