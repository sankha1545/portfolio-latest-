/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const wordVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Banner() {
  return (
    <section id="banner">
      <div className="container-fluid d-flex align-items-center vh-100">
        <div className="centerbanner">
          <motion.div
            className="banner-title words lines splitting"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="line-0" style={{color:"#000"}}>
              <motion.span className="top-word" variants={wordVariant}>
                HELLO
              </motion.span>{" "}
              <motion.span className="top-word" variants={wordVariant}>
                I
              </motion.span>{" "}
              <motion.span className="top-word" variants={wordVariant}>
                AM
              </motion.span>{" "}
             
            </div>
           
            
          </motion.div>

          <motion.div
            className="banner-subtitle words lines splitting"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="line-0" style={{color:"#000"}}>
              <motion.span className="word" variants={wordVariant}>
                Sankha
              </motion.span>{" "}
              <motion.span className="word" variants={wordVariant}>
                Subhra
              </motion.span>{" "}
              <motion.span className="word" variants={wordVariant}>
                Das
              </motion.span>
              <br/>
              <motion.span className="word" variants={wordVariant}>
                I am an ethusiatsic and full stack web developer
              </motion.span>
            </div>
           
            
          </motion.div>

          <motion.a
            href="/src/assets/sankha_24_B (2).pdf"
            target="_blank"
            className="btn btn-pink"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            style={{borderRadius:"20px"}}
          >
            Download CV
          </motion.a>
        </div>
      </div>

      <motion.img
        src="/src/assets/profile.png"
        className="banimg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      />
    </section>
  );
}

export default Banner;
