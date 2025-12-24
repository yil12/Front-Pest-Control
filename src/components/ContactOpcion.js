import React from "react";
import { FaComments, FaPhone, FaPhoneVolume, FaBullhorn, FaFacebook, FaXTwitter, FaWhatsapp, FaLocationDot } from "react-icons/fa6"; // o de 'react-icons/fa'
import "../style/css/contactOpcion.css";
import Divider from "./SectionDivider";


const contactOptions = [
  {
    icon: <FaComments className="icon" />,
    title: "Online chat",
    linkText: "Write to us",
    href: "#"
  },
  {
    icon: <FaPhone className="icon" />,
    title: "Call us on our hotline",
    linkText: "018000 91 2345",
    href: "tel:018000912345"
  },
  {
    icon: <FaPhoneVolume className="icon" />,
    title: "Would you prefer that we call you?",
    linkText: "Whenever you want",
    href: "#"
  },
  {
    icon: <FaBullhorn className="icon" />,
    title: "Contact us through social media",
    socials: [
      { icon: <FaFacebook />, href: "#" },
      { icon: <FaXTwitter />, href: "#" },
      { icon: <FaWhatsapp />, href: "#" }
    ]
  },
  {
    icon: <FaLocationDot className="icon" />,
    title: "Points of attention",
    linkText: "Visit us",
    href: "#"
  },
];

const ContactOpcion = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">
        <Divider label="Do you still have doubts?" /></h2>
      <div className="contact-grid">
        {contactOptions.map((item, index) => (
          <div key={index} className="contact-item">
            <div className="gradient-icon">{item.icon}</div>
            <p className="contact-text">{item.title}</p>
            {item.socials ? (
              <div className="contact-socials">
                {item.socials.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
            ) : (
              <a href={item.href} className="contact-link">{item.linkText}</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactOpcion;
