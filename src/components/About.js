import React from 'react';
import Divider from "./SectionDivider";
import image from '../style/img/imagen1.jpeg';
import { FaBuilding, FaHome } from 'react-icons/fa';


import '../style/css/aboutUs.css';

const AboutUs = () => {
  return (
    <div>
      {/* Sección de títulos con iconos */}
      <div className="about-us-services">
        <h1><FaBuilding className="icon" /> Commercial</h1>
        <h1><FaHome className="icon" /> Residential</h1>
      </div>
      
      
      {/* Sección de Quiénes Somos */}
      <div>
          <Divider label="About" />
      </div>

      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className="about-us-title">About Us</h2>
            <p className="about-us-description">
              At Alpha Pro Pest Control, we specialize in providing effective and safe pest control solutions, always prioritizing the health and well-being of our clients. We pride ourselves on delivering high-quality service and are committed to the complete satisfaction of those who trust us.
            </p>
            <p className="about-us-description">
              Our team consists of highly trained experts who use the best techniques and products to guarantee a pest-free environment. Furthermore, our initial inspection and estimate are always free. We are here to give you peace of mind, protecting your home or business with the highest level of professionalism and reliability.Nuestro equipo está formado por expertos capacitados, utilizando las mejores técnicas y productos para garantizar un entorno libre de plagas. Además, nuestra primera inspección y estimación son siempre gratuitas. Estamos aquí para ofrecerte tranquilidad, protegiendo tu hogar o negocio con la más alta profesionalidad y confiabilidad.
            </p>
          </div>

          {/* Imagen */}
          <div className="about-us-image">
            <img src={image} alt="Sobre Nosotros" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;




