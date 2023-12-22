// // Copyright Ayush Singh 2021,2022. All Rights Reserved.
// // Project: folio
// // Author contact: https://www.linkedin.com/in/alphaayush/
// // This file is licensed under the MIT License.
// // License text available at https://opensource.org/licenses/MIT

// import { gsap, Linear } from "gsap";
// import React, { MutableRefObject, useEffect, useRef, useState } from "react";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// const AboutSection = () => {
//   const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
//   const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

//   const [willChange, setwillChange] = useState(false);

//   const initAboutAnimation = (
//     quoteRef: MutableRefObject<HTMLDivElement>,
//     targetSection: MutableRefObject<HTMLDivElement>
//   ): ScrollTrigger => {
//     const timeline = gsap.timeline({
//       defaults: { ease: Linear.easeNone, duration: 0.1 },
//     });
//     timeline
//       .fromTo(
//         quoteRef.current.querySelector(".about-1"),
//         { opacity: 0.2 },
//         { opacity: 1 }
//       )
//       .to(quoteRef.current.querySelector(".about-1"), {
//         opacity: 0.2,
//         delay: 0.5,
//       })
//       .fromTo(
//         quoteRef.current.querySelector(".about-2"),
//         { opacity: 0.2 },
//         { opacity: 1 },
//         "<"
//       )
//       .to(quoteRef.current.querySelector(".about-2"), {
//         opacity: 0.2,
//         delay: 1,
//       });

//     const scrollTriggerInstance = ScrollTrigger.create({
//       trigger: targetSection.current,
//       start: "center 80%",
//       end: "center top",
//       scrub: 0,
//       animation: timeline,
//       onToggle: (self) => setwillChange(self.isActive),
//     });
//     return scrollTriggerInstance;
//   };

//   useEffect(() => {
//     const aboutScrollTriggerInstance = initAboutAnimation(
//       quoteRef,
//       targetSection
//     );

//     return aboutScrollTriggerInstance.kill;
//   }, [quoteRef, targetSection]);

//   const renderQuotes = (): React.ReactNode => (
//     <h1 ref={quoteRef} className="font-medium text-3xl sm:text-4xl md:text-6xl">
//       <span
//         className={`about-1 leading-tight ${
//           willChange ? "will-change-opacity" : ""
//         }`}
//       >
//         I am a passionate UI Engineer who bridges the gap between development
//         and design.{" "}
//       </span>
//       <span
//         className={`about-2 leading-tight ${
//           willChange ? "will-change-opacity" : ""
//         }`}
//       >
//         I take responsibility to craft a good user experience using modern
//         frontend architecture.
//       </span>
//     </h1>
//   );

//   return (
//     <section
//       className={`tall:pt-20 tall:pb-16 pt-40 pb-24 w-full relative select-none section-container`}
//       ref={targetSection}
//     >
//       {renderQuotes()}
//     </section>
//   );
// };

// export default AboutSection;
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const TeamSection = () => {
  const teamSectionRef = useRef(null);
  const [willChange, setWillChange] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: teamSectionRef.current,
      start: "top center",
      onToggle: (self) => setWillChange(self.isActive),
    });

    return () => scrollTriggerInstance.kill();
  }, []);

  const [hoveredMember, setHoveredMember] = useState(null);

  const teamMembers = [
    {
      name: "Windows",
      role: "UI/UX Designer",
      bio: "Specializes in creating engaging designs and intuitive interfaces that drive user satisfaction.",
      img: "/about/DOW_1.png",
      hoverImg: "/about/DOW.jpg",
    },
    {
      name: "Mac",
      role: "Frontend Developer",
      bio: "Expert in HTML, CSS, JavaScript, and modern frameworks to bring designs to life in the browser.",
      img: "/about/MAC_1.png",
      hoverImg: "/about/MA.jpg",
    },
    {
      name: "Linux",
      role: "Backend Developer",
      bio: "Focuses on server-side tech, databases, and ensuring all parts of the web stack communicate effectively.",
      img: "/about/LINUX_1.png",
      hoverImg: "/about/LINUX.jpg",
    },
  ];  

  const renderTeamMembers = () => (
    <div className="grid griconst [hoveredMember, setHoveredMember] = useState(null);d-cols-1 md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div 
          key={index}
          className="team-member bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          onMouseEnter={() => setHoveredMember(index)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div className="w-52 h-52 mb-4 mx-auto">
            <Image
              src={hoveredMember === index ? member.hoverImg : member.img}
              alt={member.name}
              width={208}
              height={208}
              className="rounded-full"
            />
          </div>
          <h2 className="font-bold text-xl text-gray-800">{member.name}</h2>
          <p className="text-md text-gray-600">{member.role}</p>
          <p className="text-sm text-gray-700">{member.bio}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={teamSectionRef} className="pt-20 pb-16 w-full relative select-none section-container bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">Meet the Team</h1>
        {renderTeamMembers()}
      </div>
    </section>
  );
};

export default TeamSection;
