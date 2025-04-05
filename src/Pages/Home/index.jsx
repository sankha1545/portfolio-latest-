import React from "react";
import Banner from "./Hero";
import Countdown from "./Countdown";
import Tickets from "./Tickets";
import News from "./news";
import Participant from "./participant";
import HorizontalSlider from "./carousel";
import HeroSection from "./about";
import Marquee from "./marqee";
import FAQ from "./faq";
import Index from "./Contact";
const Home = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <HorizontalSlider />
      
      <Participant />
      <Marquee />
      <Tickets />
      <FAQ />
      <Index />
      
    </div>
  );
};

export default Home;
