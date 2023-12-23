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
