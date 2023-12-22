// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import React, { useState } from 'react';
import { ButtonTypes } from "./button";
import Image from "next/image";

const Footer = () => {
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    // Create a new heart element with random position
    const newHeart = {
      id: Math.random(),
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%'
    };

    // Add the new heart to the state, which will cause a re-render
    setHearts([...hearts, newHeart]);

    // Optionally remove the heart after some time
    setTimeout(() => {
      setHearts(hearts.filter(heart => heart.id !== newHeart.id));
    }, 15000); // 3 seconds before removal
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
            }}>🐷❤️</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
