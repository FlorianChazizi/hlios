"use client"
import React from "react";
import { useEffect } from 'react';

import "../styles/aboutus.css"; 
import AOS from 'aos';

const AboutUs: React.FC = () => {
      useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

  return (
    <section className="about" id="aboutus">
      <div className="content">
        <h2 data-aos="fade-down">The Company</h2>
        <p data-aos="fade-down">
          The Dry Nuts Helios company is based in Greece, Larissa city, and trades Greek dry nuts, dried fruits, and snacks since 1986.
          All products are chosen carefully and packed with responsibility to ensure their high quality and freshness. 
          The purpose of our company is to please and satisfy our customers.
        </p>
        <p data-aos="fade-down">
          We trade Greek dry nuts like almonds in many varieties: roasted or raw, salted or unsalted, roasted hazelnuts, roasted pistachios with salt or without, roasted peanuts with red skin and salt, peanuts with salt, roasted chickpeas, pumpkin seeds, sunflower seeds, walnuts, and corn.
        </p>
        <p data-aos="fade-down">
          Crunchy snacks include coated peanuts with different flavors like chili, paprika, tomato basil, or cheese and bacon. We also offer toasted corn with salt or BBQ flavor.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
