/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.scss";

const navItems = [
  // {
  //   label: "Home",
  //   url: "https://ibg.network/",
  // },
  {
    label: "About Us",
    url: "/",
    subItems: [
      {
        label: "IBG Chapter Committee",
        url: "/",
      },
    ],
  },
  {
    label: "Exhibitors",
    url: "/",
  },
  {
    label: "Speaker Sessions",
    url: "/",
  },

  {
    label: "Bar Queen Challenge",
    url: "/",
  },
  {
    label: "International Bartender Competition",
    url: "/",
  },
  {
    label: "Contact Us",
    url: "/",
  },
  {
    label: "Register for Your Pass",
    url: "/",
  },
  // {
  //   label: "Membership",
  //   url: "https://ibg.network/membership/",
  // },
  // {
  //   label: "Gallery",
  //   url: "https://ibg.network/gallery/",
  // },
  // {
  //   label: "Courses",
  //   url: "https://ibg.network/courses/",
  // },
  // {
  //   label: "Academy",
  //   url: "https://ibg.network/delhi-campus/",
  //   subItems: [
  //     {
  //       label: "Bartending Camp",
  //       url: "https://ibg.network/bartending-camp/",
  //     },
  //     {
  //       label: "IBG Brochure",
  //       url: "https://drive.google.com/file/d/1nw1T84gk7IE1uGhgDgEw-TmYZqnrzFMo/view?usp=sharing",
  //     },
  //     {
  //       label: "Trainers",
  //       url: "https://ibg.network/trainers/",
  //     },
  //     {
  //       label: "Delhi Campus",
  //       url: "https://ibg.network/delhi-campus/",
  //     },
  //     {
  //       label: "Dehradun Campus",
  //       url: "https://ibg.network/dehradun-campus/",
  //     },
  //   ],
  // },

  // {
  //   label: "Events",
  //   url: "https://ibg.network/bartending-camp/",
  //   subItems: [
  //     {
  //       label: "Dehradun Cocktail Competition",
  //       url: "https://ibg.network/dehradun-cocktail-competition/",
  //     },
  //     {
  //       label: "Macau Competition 2024",
  //       url: "https://ibg.network/macau-competition-2024/",
  //     },
  //     {
  //       label: "Delhi Cocktail Competition",
  //       url: "https://ibg.network/delhi-cocktail-competition/",
  //     },
  //     {
  //       label: "Cocktailweekindia",
  //       url: "https://cocktailweekindia.com/",
  //     },
  //   ],
  // },
  // {
  //   label: "Resources",
  //   url: "https://ibg.network/resources/",
  //   subItems: [
  //     {
  //       label: "Hospitality Assistance Program",
  //       url: "https://ibg.network/hospitality-assistance-program/",
  //     },
  //     {
  //       label: "Member Referral Program",
  //       url: "https://forms.gle/mEeWqigx2KRYQPth7",
  //     },
  //     {
  //       label: "Volunteer Interest Form",
  //       url: "https://forms.gle/ZkC9f2rjRLGma5Ve7",
  //     },
  //     {
  //       label: "IBG New Member Spotlight Form",
  //       url: "https://forms.gle/EmANGR6pECdHyTfH8",
  //     },
  //     {
  //       label: "Library",
  //       url: "https://drive.google.com/drive/folders/1ZsOkXVwNq78pmy0XPa0actKbMRoBP2eD?usp=drive_link",
  //     },
  //     {
  //       label: "Mixologist India",
  //       url: "https://drive.google.com/file/d/1aEwF0LFa4mawJAW8xHNVPj3Zi6a9Imje/view?usp=sharing",
  //     },
  //   ],
  // },
];

const itemVariants = {
  hidden: { opacity: 0, x: 0 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const mobileSubNavVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
};

const AnimatedHamburger = ({ toggleMenu, isOpen }) => {
  return (
    <motion.div
      className="hamburger-button"
      onClick={toggleMenu}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.span
        className="bar"
        variants={{
          closed: { rotate: 0, y: 0, backgroundColor: "#000" },
          open: { rotate: 45, y: 9, backgroundColor: "#fff" },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="bar"
        variants={{
          closed: { opacity: 1, backgroundColor: "#000" },
          open: { opacity: 0, backgroundColor: "#fff" },
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="bar"
        variants={{
          closed: { rotate: 0, y: 0, backgroundColor: "#000" },
          open: { rotate: -45, y: -8, backgroundColor: "#fff" },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const NavItem = ({
  item,
  index,
  hoveredIndex,
  setHoveredIndex,
  toggleMenu,
  isMobile,
}) => {
  const [openSubNav, setOpenSubNav] = useState(false);

  const handleItemClick = () => {
    if (isMobile && item.subItems) {
      setOpenSubNav((prev) => !prev);
    } else {
      toggleMenu();
    }
  };

  return (
    <motion.li
      className="nav-item"
      variants={itemVariants}
      whileHover={!isMobile ? { scale: 1.05 } : {}}
      onMouseEnter={!isMobile ? () => setHoveredIndex(index) : undefined}
      onMouseLeave={!isMobile ? () => setHoveredIndex(null) : undefined}
    >
      <div onClick={handleItemClick} className="nav-item-label">
        {item.label}
        {isMobile && item.subItems && (
          <motion.span
            className="caret"
            initial={{ rotate: 0 }}
            animate={{ rotate: openSubNav ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ^
          </motion.span>
        )}
      </div>
      {isMobile ? (
        <AnimatePresence>
          {item.subItems && openSubNav && (
            <motion.ul
              className="sub-nav mobile"
              variants={mobileSubNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {item.subItems.map((subItem, subIndex) => (
                <motion.li
                  key={subIndex}
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.01 }}
                >
                  {subItem.label}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          {hoveredIndex === index && item.subItems && (
            <motion.ul
              className="sub-nav"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {item.subItems.map((subItem, subIndex) => (
                <motion.li
                  key={subIndex}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                  onClick={toggleMenu}
                >
                  {subItem.label}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      )}
    </motion.li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 450);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="navbar__logo">
          <img src="/src/assets/logo.png" alt="IBG Logo" style={{width:"200px"}} />
        </div>
        {/* <div className="navbar__title">
          <h1>
            IBG <span>International Bartenders &amp; Guild</span>
          </h1>
        </div> */}
        <AnimatedHamburger toggleMenu={toggleMenu} isOpen={menuOpen} />
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar_overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="navbar_overlay__content">
              <motion.ul
                className="nav-list"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {navItems.map((item, index) => (
                  <NavItem
                    key={index}
                    item={item}
                    index={index}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                    toggleMenu={toggleMenu}
                    isMobile={isMobile}
                  />
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
