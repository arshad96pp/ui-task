import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import CompaniesSection from "./components/CompaniesSection";
import CommunitySection from "./components/CommunitySection";
import AdoptionSection from "./components/AdoptionSection";
import SliderSection from "./components/SliderSection";
import Add from "./components/Add";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <CompaniesSection />
      <CommunitySection />
      <AdoptionSection />
      <SliderSection />
      <Add />
      <Footer/>
    </>
  );
};

export default Home;
