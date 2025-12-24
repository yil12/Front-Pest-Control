// src/components/ContactModal.jsx
import React, { useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha"; // descomenta si lo usas
import "../style/css/modal.css";

const ContactModal = ({ show, onClose }) => {
  const recaptchaRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    zip: "",
    text: "",
    acceptTerms: false,
  });

  const [captchaValue, setCaptchaValue] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Si usas reCAPTCHA, descomenta esto
    /*
    if (!captchaValue) {
      alert("Por favor completa el reCAPTCHA.");
      return;
    }
    */

    if (!formData.acceptTerms) {
      alert("Debes aceptar los términos y condiciones.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert(result.message || "Mensaje enviado correctamente.");
      
      // Reset formulario
      setFormData({
        name: "",
        business: "",
        phone: "",
        email: "",
        zip: "",
        text: "",
        acceptTerms: false,
      });

      // Reset reCAPTCHA si lo usas
      // if (recaptchaRef.current) recaptchaRef.current.reset();

      onClose();
    } catch (error) {
      console.error("Error al enviar:", error);
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-left">
          <h3>¡Become Pest-Free Now!</h3>
          <p>Florida's #1 Pest Control Local Company</p>
          <p>Let us know how we can help, and we'll contact you within 24 business hours.</p>
          <p>For emergencies, please call (954) 304–9713</p>
        </div>

        <div className="modal-right">
          <h2>Formulario de contacto</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name*"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="business"
              placeholder="Business Name *"
              value={formData.business}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone *"
              value={formData.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="zip"
              placeholder="Zip Code *"
              value={formData.zip}
              onChange={handleInputChange}
            />
            <textarea
              name="text"
              placeholder="Let us know how we can help *"
              value={formData.text}
              onChange={handleInputChange}
              required
            />
            <div className="modal-checkbox">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                required
              />
              <label>
                Acepto los{" "}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  términos y condiciones
                </a>.
              </label>
            </div>

            {/* Descomenta si usas reCAPTCHA */}
            {/* 
            <div className="recaptcha-container">
              <ReCAPTCHA
                sitekey="TU_SITE_KEY"
                onChange={handleCaptchaChange}
                ref={recaptchaRef}
              />
            </div>
            */}

            <div className="modal-buttons">
              <button type="submit" className="send-btn">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;