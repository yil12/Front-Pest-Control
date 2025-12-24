
// src/components/Services.jsx
import React from "react";
import "../style/css/services.css";
import ServiceCard from "./ServicesCard";
import Divider from "./SectionDivider";
import VideoFrame from "./video";
import Rodents from "../style/img/baitstation.jpg";
import Roaches from "../style/img/control-de-plagas.jpg";
import Ants from "../style/img/ants.jpg";

const services = [
  {
    id: "roaches",
    title: "Roaches",
    image: Roaches,
    description: "Boost your brand with our digital marketing solutions.",
  },
  {
    id: "rodents",
    title: "Rodents",
    image: Rodents,
    description: "We provide expert rodent control services to keep your home safe.",
  },
  {
    id: "ants",
    title: "Ants",
    image: Ants,
    description: "Targeted solutions to stop colonies in their tracks.",
  },
];

const Services = () => {
  return (
    <>
      <Divider label="Our Services" />
      <h2 className="offer-text">We offer professional pest control solutions for</h2>

      <div className="services-container">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>

      <h2 className="subtitle-text">
        We specialize in eliminating a wide range of pests to keep your home or business safe.
      </h2>

      <div className="video-description-container">
        <VideoFrame videoSrc="https://www.youtube.com/embed/9JDQBuf0Zqw" isYouTube={true} />
      </div>
    </>
  );
};

export default Services;
