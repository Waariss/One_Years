import React, { useState } from 'react';
import { ButtonTypes } from "./button";
import Image from "next/image";

const Footer = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      id: Math.random(),
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      emoji: '🐷❤️' // Default heart emoji
    };
    setHearts([...hearts, newHeart]);
    setTimeout(() => {
      setHearts(hearts.filter(heart => heart.id !== newHeart.id));
    }, 15000); // 15 seconds before removal
  };

  const addAngryHeart = () => {
    const newHeart = {
      id: Math.random(),
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      emoji: '😠' // Angry emoji
    };
    setHearts([...hearts, newHeart]);
    setTimeout(() => {
      setHearts(hearts.filter(heart => heart.id !== newHeart.id));
    }, 15000); // 15 seconds before removal
  };

  const Button = ({ href, classes, type, name, otherProps }: { href: string, classes: string, type: string, name: string, otherProps: any }) => {
    return (
      <a href={href} className={`${classes} button-${type}`} {...otherProps}>
        {name}
      </a>
    );
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-medium text-3xl md:text-4xl text-center">
        Would you like to have some food with me?🍽
      </h1>
      <div className="flex mt-8">
        <Button
          classes="mr-3"
          type={ButtonTypes.OUTLINE}
          name="Say Yes?"
          otherProps={{
              onClick: (event: { preventDefault: () => void; }) => {
                  event.preventDefault();
                  addHeart();
              },
          }}
          href={''}
        />
        <Button
          classes="ml-3"
          type={ButtonTypes.OUTLINE}
          name="Say No? 😠"
          otherProps={{
              onClick: (event: { preventDefault: () => void; }) => {
                  event.preventDefault();
                  addAngryHeart();
              },
          }}
          href={''}
        />
      </div>
      <h2 className="text-center text-sm sm:text-base mt-8">
        Thank you again for staying with me in every situation. Love you Fifa (Moo Moo🐷)
      </h2>
    </>
  );

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
    >
      <Image
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
          {hearts.map(heart => (
            <span key={heart.id} style={{
              position: 'absolute',
              top: heart.top,
              left: heart.left,
              animation: 'float 2s ease-in-out infinite',
            }}>{heart.emoji}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
