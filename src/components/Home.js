import React from "react";
import ImageSlider from "./ImageSlider";
import Banner from "./Banner";
import About from "./About";
import Services from "./Services";
import ContactOption from "./ContactOpcion";

import "../index.css"

const Home = () => {
  return (
    <div className="home-container">

      <section id="home">
        <Banner />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="gallery">
        <ImageSlider />
      </section>

      <section id="contact">
        <ContactOption />
      </section>

    </div>
  );
};

export default Home;
