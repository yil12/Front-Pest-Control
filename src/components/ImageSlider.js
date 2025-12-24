import React from "react";
import Slider from "react-slick"; // Importamos react-slick
import "../style/css/slider.css"; // Asegúrate de que esté el archivo CSS
import imagenCar from "../style/img/imagen2.jpeg"
import Divider from "./SectionDivider";



const ImageSlider = () => {
  // Configuración del slider
  const settings = {
    dots: true,         // Muestra puntos de navegación
    infinite: true,     // Carrusel infinito
    speed: 12000,         // Velocidad de la transición
    slidesToShow: 1,    // Número de imágenes a mostrar
    slidesToScroll: 1,  // Número de imágenes que se desplazan
    autoplay: true,     // Autoplay activado
    autoplaySpeed: 2000, // Tiempo entre cada transición (2 segundos)
  };

  return (
    <>
    <Divider label="Galery" />
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
        <img src={imagenCar} alt="Logo" className="logo-img" />
          <div className="slogan-overlay">
          </div>
        </div>
        <div className="slider-item">
        <img src={imagenCar} alt="Logo" className="logo-img" />
          <div className="slogan-overlay">
          </div>
        </div>
        <div className="slider-item">
        <img src={imagenCar} alt="Logo" className="logo-img" />
          <div className="slogan-overlay">
          </div>
        </div>
      </Slider>
      
    </div> </>
  );
};

export default ImageSlider;


