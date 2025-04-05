/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./style.css";
import about from '../../../assets/about.svg'

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMiddle, setIsMiddle] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [lockScroll, setLockScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const section = document.querySelector(".hero-section");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const bottomImage = document.querySelector(".image-right");
      const bottomImageTop = bottomImage.offsetTop;

      // Check if the user is in the middle of the page
      if (
        scrollPosition > sectionTop + sectionHeight * 0.3 &&
        scrollPosition < sectionTop + sectionHeight * 0.7
      ) {
        setIsMiddle(true);
      } else {
        setIsMiddle(false);
        setStartAnimation(false);
        setLockScroll(false);
      }

      // Start animation and lock scroll when the user is in the middle
      if (isMiddle && scrollPosition > scrollY) {
        setStartAnimation(true);
        setLockScroll(true);
      }

      // Unlock scroll when the bottom image reaches its position
      if (scrollPosition >= bottomImageTop - window.innerHeight / 2) {
        setLockScroll(false);
      }

      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, isMiddle]);

  useEffect(() => {
    if (lockScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lockScroll]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Left Image (Moving Up on Scroll) */}

        {/* Text Container with Animated Color Change */}
        <div
          className={`text-container ${startAnimation ? "animate-text" : ""}`}
        >
        <h1 className="hero-title" style={{color:"#fff"}}>ABOUT US</h1>
          <p style={{ color: "#fff", fontSize: "30px", marginTop: "100px" }}>
          Hi, I'm Sankha Subhra Das, a passionate front-end developer dedicated to crafting visually stunning and highly functional web experiences. With a strong background in React, Vite, and modern UI/UX design principles, I specialize in creating interactive and responsive web applications.

I have worked on projects like Guestversity, an innovative web platform, and have recreated dynamic UI sections from high-profile websites, including Wix Studio × Pantone and Gulf Bar Show 2025. My expertise lies in implementing seamless animations, optimizing user interactions, and ensuring mobile responsiveness.

I’m always eager to explore new technologies and push the boundaries of front-end development. Let’s build something amazing together!


          </p>
        </div>

        {/* Right Image (Moving Up on Scroll) */}
        <div
          className="image-right"
          style={{ transform: `translateY(-${scrollY*0.2}px)` }}
        >
          <img
            src={about}
            alt="Animated Element"
            width="100px"
            height="100px"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
