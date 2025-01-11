"use client";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Line from "./components/Line";
import Products from "./components/Products";
import Partners from "./components/Partners";
import ContactUs from "./components/ContactUs";
import Map from "./components/Map";

export default function Home() {
  return (
    <div>

      <Hero />
      <AboutUs />
      <Line />
      <Products />
      <Map />
      <Partners />
      <ContactUs />

    </div>
  );
}
