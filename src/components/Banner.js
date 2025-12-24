import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaInfoCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import "../style/css/banner.css";
import ContactModal from "./FormContact";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <div className="banner-text">
            <h1 className="banner-title">PEST CONTROL YOU CAN TRUST</h1>
            <p className="banner-subtitle">
              Inspection of all interior areas for pest activity and conditions conducive for pests.
            </p>
            <div className="banner-button">
              <button onClick={() => setShowModal(true)} className="contact-btn">
                <FaInfoCircle className="icon" style={{ marginRight: "10px" }} />
                Contact Us
              </button>
            </div>
          </div>
          <div className="banner-socials">
            <Link to="/"><FaFacebook className="icon" /> Facebook</Link>
            <Link to="/"><FaInstagram className="icon" /> Instagram</Link>
            <Link to="/"><MdOutlineAlternateEmail className="icon" /> alphapropestcontrol@gmail.com</Link>
          </div>
        </div>
      </div>

      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Banner;
