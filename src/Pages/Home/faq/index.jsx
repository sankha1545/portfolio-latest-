/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

function FaqItem({ index, isOpen, onToggle, question, answer }) {
  return (
    <div className="faqcontainer">
      <div
        className={`interfaq ${isOpen ? "open" : ""}`}
        onClick={() => onToggle(index)}
      >
        <img src="/faq/dot.svg" className="dot1" alt="dot" />
        <img src="/faq/dot.svg" className="dot2" alt="dot" />
        <img src="/faq/dot.svg" className="dot3" alt="dot" />
        <img src="/faq/dot.svg" className="dot4" alt="dot" />
        <span>{question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </div>
      <AnimatePresence mode="sync">
        {isOpen && <motion.div className="faqtext">{answer}</motion.div>}
      </AnimatePresence>
    </div>
  );
}

function Faq() {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "What technologies do you specialize in?",
      answer: (
        <>
         I specialize in front-end development with React, Vite, JavaScript, Tailwind CSS, and CSS animations. I focus on creating dynamic, responsive, and visually engaging web experiences.
          <br />
          <br />
          It will showcase innovative products and global trends, while serving
          as a platform for networking and knowledge-sharing among industry
          professionals, from bartenders to investors and business owners.
        </>
      ),
    },
    {
      question: "Can you work on both design and development?",
      answer: (
        <ul>
          <li>
          Yes! While my core expertise is in front-end development, I have a strong understanding of UI/UX principles and can implement pixel-perfect designs using modern tools and frameworks.
          </li>
          
        </ul>
      ),
    },
    {
      question: "Do you take freelance or contract projects?",
      answer: (
        <>
          IBS is perfect for bar and beverage professionals, hospitality
          industry leaders, distributors, suppliers, investors, and beverage
          enthusiasts.
          <br />
          <br />
          Whether you're looking to expand your business, network with top
          professionals, or stay on top of the latest trends, IBS offers
          something for everyone.
        </>
      ),
    },
    {
      question: "Can you recreate existing website designs or animations?",
      answer: (
        <>
          Your{" "}
          <a
            href="https://dubai.platinumlist.net/event-tickets/97940/India-bar-show"
            target="_blank"
            rel="noopener noreferrer"
          >
            ticket
          </a>{" "}
          is your registration.
        </>
      ),
    },
    {
      question: "How can I contact you for a project or collaboration?",
      answer: (
        <>
          If you’re interested in showcasing your products at IBS, contact us at{" "}
          <a href="mailto:exhibitors@Indiabarshow.com">
            exhibitors@Indiabarshow.com
          </a>
        </>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq">
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="faqtitle">FAQ</div>
          </div>

          <div className="col-md-5">
            {faqData.slice(0, 3).map((faq, idx) => (
              <FaqItem
                key={idx}
                index={idx}
                isOpen={activeFaq === idx}
                onToggle={handleToggle}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>

          <div className="col-md-5">
            {faqData.slice(3).map((faq, idx) => (
              <FaqItem
                key={idx + 3}
                index={idx + 3}
                isOpen={activeFaq === idx + 3}
                onToggle={handleToggle}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
