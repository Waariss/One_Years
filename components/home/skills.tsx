import React, { useState, useEffect, useRef } from "react";
import Image from "next/image"; 
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Confetti from 'react-confetti';

const COUNTDOWN_STYLES = {
  // Change the colors in the gradient to something that fits your design
  SECTION: "w-full relative select-none mb-24 section-containera py-12 flex flex-col justify-center bg-gradient-to-b from-current-section-end via-anniversary-color to-next-section-start",
  COUNTDOWN_TITLE: "text-3xl md:text-4xl font-bold text-center text-white",
  COUNTDOWN_HEADING: "text-6xl md:text-8xl font-bold text-center text-white mt-4",
  COUNTDOWN_TIMER: "text-4xl md:text-5xl text-center text-white my-4",
  ANNIVERSARY_MESSAGE: "text-2xl md:text-3xl text-center text-white mt-4 font-medium italic"
};



const CountdownSection = () => {
  const [timeSince, setTimeSince] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const targetSection = useRef(null);

  const calculateTimeSince = () => {
    const startDate = new Date("2022-12-24"); // Replace with your anniversary date
    const now = new Date();
    const difference = now.getTime() - startDate.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const renderBackgroundPattern = (): React.ReactNode => (
    <>
      <div className="absolute right-0 -bottom-1/3 w-1/5 max-w-xs md:flex hidden justify-end">
        <Image
          src="/pattern-r.svg" // Adjust the src to your image path
          loading="lazy"
          height={700}
          width={320}
          alt="pattern"
        />
      </div>
      <div className="absolute left-0 -bottom-3.5 w-1/12 max-w-xs md:block hidden">
        <Image
          src="/pattern-l.svg" // Adjust the src to your image path
          loading="lazy"
          height={335}
          width={70}
          alt="pattern"
        />
      </div>
    </>
  );

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const interval = setInterval(() => {
      setTimeSince(calculateTimeSince());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={COUNTDOWN_STYLES.SECTION} id="countdown" ref={targetSection}>
      {dimensions.width && dimensions.height && (
        <Confetti width={dimensions.width} height={dimensions.height} />
      )}
      <div className="flex flex-col items-center justify-center">
        <p className={COUNTDOWN_STYLES.COUNTDOWN_TITLE}>OUR JOURNEY</p>
        <h1 className={COUNTDOWN_STYLES.COUNTDOWN_HEADING}>Happy Anniversary!</h1>
        <h2 className={COUNTDOWN_STYLES.ANNIVERSARY_MESSAGE}>Celebrating One Year Together</h2>
        <div className={COUNTDOWN_STYLES.COUNTDOWN_TIMER}>
          <span>{timeSince.days} Days </span>
          <span>{timeSince.hours} Hours </span>
          <span>{timeSince.minutes} Minutes </span>
          <span>{timeSince.seconds} Seconds </span>
        </div>
        <p className={COUNTDOWN_STYLES.ANNIVERSARY_MESSAGE}>Every moment with you is a treasure</p>
      </div>
    </section>
  );
};

export default CountdownSection;

