/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

function News() {
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

  return (
    <section id="news">
      <img src="/news/jarakhadra.png" className="jarakhadra" alt="Jarakhadra" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <motion.div
              className="newstitle"
              variants={fadeLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              In The Blogs
            </motion.div>
            <motion.div
              className="interbubble"
              variants={fadeLeftVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              💡 Exploring the world of frontend development, UI/UX design, and modern web technologies. Stay updated with my latest insights and experiences.
              <img
                src="/news/yellowbub.png"
                className="yellowbub"
                alt="Yellow bubble"
              />
            </motion.div>
          </div>

          <div className="col-md-7">
            <motion.div
              className="internews1"
              variants={fadeRightVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <img src="/news/news1.jpg" width="100%" alt="News 1" />
              <div className="newst1">
              MASTERING REACT & VITE FOR HIGH-PERFORMANCE WEB APPS
              </div>
              <a
                href="https://indiabarshow.com/news/introducing-the-india-bar-show"
                target="_blank"
                rel="noopener noreferrer"
                className="linkread"
              >
                Read more
              </a>
              <img src="/news/circle.png" className="c1" alt="Circle 1" />
              <img src="/news/circle.png" className="c2" alt="Circle 2" />
            </motion.div>

            <div className="row">
              <div className="col-md-6">
                <motion.div
                  className="internews2"
                  variants={fadeLeftVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img src="/news/news2.jpg" width="100%" alt="News 2" />
                  <div className="newst12">
                  THE ART OF RESPONSIVE DESIGN: CREATING BEAUTIFUL & FUNCTIONAL UI
                  </div>
                  <a
                    href="https://indiabarshow.com/news/india-bar-show-announces-lineup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkread2"
                  >
                    Read more
                  </a>
                  <img src="/news/circle.png" className="c1" alt="Circle 1" />
                  <img src="/news/circle.png" className="c2" alt="Circle 2" />
                </motion.div>
              </div>

              <div className="col-md-6">
                <motion.div
                  className="internews2"
                  variants={fadeRightVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <img src="/news/news2.jpg" width="100%" alt="News 2" />
                  <div className="newst12">
                  ANIMATION IN WEB DESIGN: BRINGING INTERFACES TO LIFE
                    
                  </div>
                  <a
                    href="https://indiabarshow.com/news/india-gets-its-first-bar-show"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkread2"
                  >
                    Read more
                  </a>
                  <img src="/news/circle.png" className="c1" alt="Circle 1" />
                  <img src="/news/circle.png" className="c2" alt="Circle 2" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
