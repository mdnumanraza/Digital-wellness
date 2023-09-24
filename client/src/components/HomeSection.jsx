// import React from "react";

import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="" id="home">
      <div className="home__container container grid">
        <div className="home__img-bg">
          <img height='800px' src="https://www.beyondblue.org.au/images/default-source/1.homepage/featured-content/nicole-personalbest-720x540_v2.tmb-hero.png?Culture=en&sfvrsn=6db15da8_1" alt="" />
        </div>

        <div className="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="home__social-link"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="home__social-link"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="home__social-link"
          >
            Instagram
          </a>
        </div>

        <div className="home__data">
          <h1 className="home__title">
            Digital Wellbeing
          </h1>
          <p className="home__description">
          In todays generation it is very important to takecare your mental health
          </p>
          <span className="home__price">Digital Wellness</span>

          <div className="home__btns">
            <Link to='/community' className="button button--gray button--small">
              Discover
            </Link>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
