import styles from "./Cursor.module.scss";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { IDesktop, isSmallScreen } from "pages";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden w-4 h-4 select-none pointer-events-none z-10",
  FOLLOWER: "fixed hidden h-8 w-8 select-none pointer-events-none z-50",
};

const Cursor = ({ isDesktop }: IDesktop) => {
  const cursor: MutableRefObject<HTMLDivElement> = useRef(null);
  const follower: MutableRefObject<HTMLDivElement> = useRef(null);

  const onHover = () => {
    gsap.to(cursor.current, {
      scale: 0.5,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 3,
      duration: 0.3,
    });
  };

  const onUnhover = () => {
    gsap.to(cursor.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(follower.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  const moveCircle = (e: MouseEvent) => {
    const cursorWidth = cursor.current.offsetWidth / 2;
    const cursorHeight = cursor.current.offsetHeight / 2;

    gsap.to(cursor.current, {
      x: e.clientX - cursorWidth,
      y: e.clientY - cursorHeight,
      duration: 0.1,
      ease: Linear.easeNone,
    });

    // Do the same for the follower if needed
    const followerWidth = follower.current.offsetWidth / 2;
    const followerHeight = follower.current.offsetHeight / 2;

    gsap.to(follower.current, {
      x: e.clientX - followerWidth,
      y: e.clientY - followerHeight,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  };


  const initCursorAnimation = () => {
    follower.current.classList.remove("hidden");
    cursor.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);

    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });
  };

  useEffect(() => {
    if (isDesktop && !isSmallScreen()) {
      initCursorAnimation();
    }
  }, [cursor, follower, isDesktop]);

  return (
    <>
      <div
        ref={cursor}
        className={`${styles.cursor} ${CURSOR_STYLES.CURSOR}`}
        style={{
          transformOrigin: 'center',
          margin: '-10px 0 0 -10px', // Half the size of the emoji/font size
        }}
      >
        🐷
      </div>
      <div
        ref={follower}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
};

export default Cursor;
