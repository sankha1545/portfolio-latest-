/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import './style.css';
const fadeUpVariant = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Tickets = () => {
  return (
    <section id="tickets">
      <motion.img
        src="/tickets/hari.png"
        className="meshet"
        alt="Decorative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUpVariant}
      />
      <div className="container">
        <motion.div
          className="tickettitle"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
        >
          My Services
        </motion.div>

        <motion.img
          src="/tickets/baryellow.svg"
          className="baryellow"
          alt="Yellow Bar"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUpVariant}
        />

       
<div id="services">        
            <div className="container">
               
                <div className="services-list">
                    <div className="services-list">
                        <div> 
                            <i className="fas fa-code"></i>
                            <h2>Web Development</h2>
                            <p>
                               Web app development involves creating applications that run on web browsers and provide specific functionalities or services to users. These applications can be accessed over the internet and do not require users to download or install anything locally. 
                            </p>
                            <a href="./webdev(learnmore).html"><b><u>learn more</u></b></a>
                        </div>

                
                    <div>
                        <i className="fa-brands fa-app-store"></i>
                        <h2>Web App Development</h2>
                        <p>
                           App development refers to the process of creating software applications for mobile devices such as smartphones and tablets. These applications, commonly known as mobile apps, can be installed and run directly on the device, providing users with various functionalities and services.
                        </p>
                        <a href="./appdev(learnmore).html"><b><u>learn more</u></b></a>
                    </div>
                    <div> 
                        <i className="fa-solid fa-database"></i>
                        <h2>Database Management</h2>
                        <p>
                            Database management refers to the process of efficiently and securely managing and organizing data within a database system. It involves various tasks, from designing the database structure to ensuring data integrity, security, and performance.
                        </p>
                        <a href="./datbasemangement.html"><b><u>learn more</u></b></a>
                 </div>
              </div>
            </div>
          </div>
          </div>

       
      </div>
    </section>
  );
};

export default Tickets;
