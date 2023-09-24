import React from "react";
import { Link } from "react-router-dom";

const StorySection = () => {
  return (
    <section className=" ">
      <div className="story__container grid">
        <div className="story__data">
          <h2 className="section__title story__section-title">Our Story</h2>

          <h1 className="story__title">
            Inspirational Story of <br /> this year
          </h1>

          <p className="story__description">
          Managing addiction and depression
Richard doesn’t know what came first – his depression or his drinking – and he battled with both for a long time.

Hear Richard talk about his mental health journey and the steps he took to get support and stay well.
          </p>

          <Link to='/community' className="button button--small">
            Discover
          </Link>
        </div>

        <div className="story__images">
          <img src="https://www.beyondblue.org.au/images/default-source/14.-content-hub-banner-listing/craig-killian-banner.tmb-banner.jpg?Status=Master&Culture=en&sfvrsn=cecf95ae_1" alt="" className="story__img" />
          <div className="story__square"></div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
