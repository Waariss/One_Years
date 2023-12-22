import React, { useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const CollaborationSection = () => {
  const [treasureClicked, setTreasureClicked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const numberOfFlowers = 50;
  const flowerColors = ['🌸', '🌺', '🌼', '🌻'];

  const generateFlowers = useCallback(() => {
    return Array.from({ length: numberOfFlowers }).map((_, index) => ({
      id: index,
      emoji: flowerColors[Math.floor(Math.random() * flowerColors.length)],
      style: {
        top: `${-Math.random() * 100}px`,
        left: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * (2.5 - 1) + 1}rem`,
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: 0,
      },
    }));
  }, []); // Empty dependency array means this only runs once

  const flowers = generateFlowers();

  useEffect(() => {
    if (treasureClicked) {
      flowers.forEach(flower => {
        gsap.to(`#flower-${flower.id}`, {
          y: '120vh',
          opacity: 1,
          rotation: Math.random() * 360,
          duration: Math.random() * (8 - 4) + 4,
          ease: 'none',
          repeat: -1,
          delay: Math.random() * 0.5,
        });
      });
      gsap.to({}, { duration: 2, onComplete: () => setShowPopup(true) });
    }
  }, [treasureClicked, flowers]); 

  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      overflow: 'hidden',
    }}>
      {!treasureClicked ? (
        <div style={{
          fontSize: '3rem',
          cursor: 'pointer',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          background: 'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
          transform: 'scale(1)',
          transition: 'transform 0.2s',
        }} 
        onClick={() => setTreasureClicked(true)}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🤍 Click me!
        </div>
      ) : (
        flowers.map(flower => (
          <div 
            key={flower.id} 
            id={`flower-${flower.id}`} 
            style={{ ...flower.style, position: 'absolute' }}
          >
            {flower.emoji}
          </div>
        ))
      )}

      {showPopup && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px 40px',
          backgroundColor: '#fffafa',
          borderRadius: '15px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          color: '#333',
          fontSize: '1.5rem',
          zIndex: 1000,
          border: '2px solid #f8e2cf',
        }}>
          I have something for you
        </div>
      )}
    </div>
  );
};

export default CollaborationSection;
