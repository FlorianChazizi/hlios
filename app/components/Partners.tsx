import React from "react";
import Image from "next/image";
import "../styles/partners.css";
import Coop from "../assets/Coop.png";
import Mixahl from "../assets/Mixahl.png";
import Mparas from "../assets/Mparas.png";
import Alfamarket from '../assets/alfamarket.png'
import Fthinokosmos from '../assets/fthinokosmos.png'
import CRMariadni from '../assets/logo.svg'

const Partners = () => {
  const partnerImages = [
    { src: Coop, alt: "Coop Partner Logo" },
    { src: Mixahl, alt: "Mixahl Partner Logo" },
    { src: Mparas, alt: "Mparas Partner Logo" },
    { src: Alfamarket, alt: "Alfamarket partner Logo"},
    { src: Fthinokosmos, alt: "Fthinokosmos partner Logo"},
    { src: CRMariadni, alt: "CRMariadni partner Logo"}
  ];

  return (
    <div className="partners-container" id="partners">
      <h3 className="partners-header">Οι Συνεργάτες μας</h3>
      <div className="partners-carousel-wrapper">
        <div className="partners-carousel">
          {partnerImages.concat(partnerImages).map((image, index) => (
            <div key={`${image.alt}-${index}`} className="partner-item">
              <Image
                className="partner-image"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
        <div className="fade-overlay left"></div>
        <div className="fade-overlay right"></div>
      </div>
    </div>
  );
};

export default Partners;
