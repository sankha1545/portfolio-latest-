import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import slider1 from '../../../assets/slider (1).jpg'
import slider2 from '../../../assets/slider (2).jpg'
import slider3 from '../../../assets/slider (3).jpg'
import slider4 from '../../../assets/slider (4).jpg'

const images = [
  slider1,slider2,slider3,slider4,slider1,slider2,slider3,slider4,slider1,slider2,slider3,slider4,slider1,slider2,slider3,slider4,slider1,slider2,slider3,slider4
];

const HorizontalSlider = () => {
  const sliderRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollSpeed = (currentScrollY - lastScrollY) * 2;
      setScrollY(currentScrollY);
      setTranslateX((prev) => prev - scrollSpeed);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        ref={sliderRef}
        style={{
          transform: `translateX(${translateX}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="slider-image"
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalSlider;
