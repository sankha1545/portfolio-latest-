/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeLeftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Participant = () => {
  return (
    <section id="participant">
      <img
        src="/participant/jarazahri.jpg"
        className="jarazahri"
        alt="Jarazahri"
      />
      <img src="/participant/2cups.jpg" className="cups2" alt="Cups" />

      <div className="container">
        <motion.div
          className="titlepart"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          FEATURED WORKS
        </motion.div>
        <motion.img
          src="/participant/bar.svg"
          className="linepart"
          alt="Bar"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        />
        <motion.div
          className="parttext"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          Crafting innovative and impactful digital experiences—where creativity meets functionality, turning ideas into reality with design, precision, and excellence
        </motion.div>
      </div>

      <div className="parentSwiper">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            767: {
              slidesPerView: 1.2,
            },
          }}
          centeredSlides={false}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="partint">
              <motion.img
                src="/src/assets/carousel1.png"
                className="partimg"
                alt="Salvatore Calabrese"
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              />
              <motion.div
                className="dialpart"
                variants={fadeRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="dialtitle">MEDICO</div>
                <div className="dial2">
                  <img
                    src="/participant/bluebub.svg"
                    className="bluebub"
                    alt="Icon"
                  />
                  <div className="dialtext">
                  MEDICO is a user-friendly medical booking platform designed to simplify healthcare access. It allows users to browse a list of trusted doctors, schedule appointments hassle-free, and explore wellness solutions and expert consultations. With an intuitive interface and seamless booking process, MEDICO ensures a smooth healthcare experience for patients.
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partint">
              <motion.img
                src="/src/assets/carousel2.png"
                className="partimg"
                alt="Dré Masso"
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              />
              <motion.div
                className="dialpart"
                variants={fadeRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="dialtitle">2. PLANO</div>
                <div className="dial2">
                  <img
                    src="/participant/bluebub.svg"
                    className="bluebub"
                    alt="Icon"
                  />
                  <div className="dialtext">
                  PLANO is a productivity-focused to-do list web application designed to help users efficiently manage tasks and stay organized. With a clean and intuitive interface, users can add, track, and complete tasks effortlessly. PLANO enhances productivity by offering easy task categorization, search functionality, and a seamless user experience, making goal-setting and task management simpler than ever. 🚀
                    <br />
                    <br />
                    
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partint">
              <motion.img
                src="/src/assets/carousel4.png"
                className="partimg"
                alt="Jared Brown & Anistatia Miller"
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              />
              <motion.div
                className="dialpart"
                variants={fadeRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="dialtitle">
                  3. FITCLUB
                </div>
                <div className="dial2">
                  <img
                    src="/participant/bluebub.svg"
                    className="bluebub"
                    alt="Icon"
                  />
                  <div className="dialtext">
                    Drink historian authors with 30+ books and founders of
                    Mixellany Limited. Their masterwork "Spirituous Journey: A
                    History of Drink" chronicled drinks from 7000 BC to 1950s,
                    winning Gourmand World Cookbook Awards for Best Drink
                    History (2009/10).
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partint">
              <motion.img
                src="/src/assets/carousel5.png"
                className="partimg"
                alt="Rebecca Sturt"
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              />
              <motion.div
                className="dialpart"
                variants={fadeRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="dialtitle">4. Rebecca Sturt</div>
                <div className="dial2">
                  <img
                    src="/participant/bluebub.svg"
                    className="bluebub"
                    alt="Icon"
                  />
                  <div className="dialtext">
                    World's 67th Most Influential Figure in the Spirits Industry
                    (2024) according to Drinks International, Sturt is the India
                    Academy Chair for The World's 50 Best Bars. She’s also a
                    member of Tales of the Cocktail’s Education Committee (New
                    Orleans).
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="partint">
              <motion.img
                src="/participant/5.jpg"
                className="partimg"
                alt="Hidetsugu Ueno"
                variants={fadeLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              />
              <motion.div
                className="dialpart"
                variants={fadeRightVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                <div className="dialtitle">5. Hidetsugu Ueno</div>
                <div className="dial2">
                  <img
                    src="/participant/bluebub.svg"
                    className="bluebub"
                    alt="Icon"
                  />
                  <div className="dialtext">
                    A "godfather" of Japanese bartending known for
                    diamond-shaped ice carving, Ueno has served as a judge for
                    Diageo’s World Class Competition since its inception. Owner
                    of Bar High Five in Tokyo's Ginza district, he won World's
                    Best Bartender at Tales of the Cocktail (2016).
                  </div>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Uncomment if you wish to add a "VIEW ALL" button */}
      {/*
      <div className="text-center mt-5">
        <a href="#" className="btn btn-pink2">
          VIEW ALL
        </a>
      </div>
      */}
    </section>
  );
};

export default Participant;
