import { useEffect, useState, useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const [showCursor, setShowCursor] = useState(false);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });
  const speed = 0.15;
  const followerSpeed = 0.3;

  useEffect(() => {
    const checkWidth = () => {
      setShowCursor(window.innerWidth >= 768);
    };

    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  useEffect(() => {
    if (!showCursor) return;

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;
      cursorRef.current.style.left = `${pos.current.x}px`;
      cursorRef.current.style.top = `${pos.current.y}px`;

      follower.current.x +=
        (mouse.current.x - follower.current.x) * followerSpeed;
      follower.current.y +=
        (mouse.current.y - follower.current.y) * followerSpeed;
      followerRef.current.style.left = `${follower.current.x - 15}px`;
      followerRef.current.style.top = `${follower.current.y - 15}px`;

      requestAnimationFrame(animate);
    };

    const updateMousePosition = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMagneticMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = centerX - mouse.current.x;
      const deltaY = centerY - mouse.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < 100) {
        mouse.current.x += deltaX * 0.1;
        mouse.current.y += deltaY * 0.1;
      }
    };

    const handleHoverEnter = () => {
      cursorRef.current.style.transform = "scale(0.5)";
      followerRef.current.style.transform = "scale(1.5)";
      followerRef.current.style.opacity = "0.5";
    };

    const handleHoverLeave = () => {
      cursorRef.current.style.transform = "scale(1)";
      followerRef.current.style.transform = "scale(1)";
      followerRef.current.style.opacity = "1";
    };

    document.addEventListener("mousemove", updateMousePosition);

    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((element) => {
      element.addEventListener("mousemove", handleMagneticMove);
      element.addEventListener("mouseenter", handleHoverEnter);
      element.addEventListener("mouseleave", handleHoverLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((element) => {
        element.removeEventListener("mousemove", handleMagneticMove);
        element.removeEventListener("mouseenter", handleHoverEnter);
        element.removeEventListener("mouseleave", handleHoverLeave);
      });
    };
  }, [showCursor]);

  if (!showCursor) return null;

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
};

export default Cursor;
