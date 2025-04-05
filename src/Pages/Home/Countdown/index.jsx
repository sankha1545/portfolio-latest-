/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { motion } from "framer-motion";

function Countdown() {
  useEffect(() => {
    const countdownDate = new Date("April 26, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = ("0" + hours).slice(-2);
      document.getElementById("minutes").innerText = ("0" + minutes).slice(-2);
      document.getElementById("seconds").innerText = ("0" + seconds).slice(-2);

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="countdown">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="counttitle" variants={fadeUpVariant}>
            Countdown to IBS 2025
          </motion.div>

          <motion.div className="countsub" variants={fadeUpVariant}>
            APRIL 26 &amp; 27
            <br />
            AIRIA MALL, GURUGRAM
          </motion.div>

          <motion.div className="countcontainer" variants={fadeUpVariant}>
            <div className="countdown">
              <div className="time-section">
                <span className="number" id="days">
                  17
                </span>
                <span className="label">Days</span>
              </div>
              <div className="time-section">
                <span className="number" id="hours">
                  06
                </span>
                <span className="label">Hours</span>
              </div>
              <div className="time-section">
                <span className="number" id="minutes">
                  54
                </span>
                <span className="label">Minutes</span>
              </div>
              <div className="time-section">
                <span className="number" id="seconds">
                  18
                </span>
                <span className="label">Seconds</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Countdown;
