import React from "react";
import "../style/css/services.css";

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
