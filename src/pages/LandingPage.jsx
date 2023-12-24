import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import useBounceIn from "../animation/ useBounceIn";
import useBottomToTopSwipe from "../animation/useBottomToTopSwipe";
import "../styles.scss";
const LandingPage = () => {
  useBottomToTopSwipe(".bounce-in");
  return (
    <>
      <section className="hero-1">
        <div className="hero-section" id="home">
          <h1 className="bounce-in">Unlock Your Fitness Potential</h1>
          <p>Discover the Ultimate Guide to Stylish and Functional Gym Wear.</p>
          <a href="#ebook">
            <button>Get Your Free Ebook</button>
          </a>
        </div>
        <Carousel fade>
          <Carousel.Item className="img">
            <img src={img1} />
          </Carousel.Item>
          <Carousel.Item className="img">
            <img src={img2} />
          </Carousel.Item>
          <Carousel.Item className="img">
            <img src={img3} />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default LandingPage;
