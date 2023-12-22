// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import * as React from "react";
// ...
import Image from "next/image";

const HeroImage = () => (

  <Image
    src="/about/MA.jpg" // The path to the image of your girlfriend
    alt="Girlfriend" // A descriptive alt text for the image
    layout="fill" // This will make the image fill the container
    objectFit="cover" // This will ensure the image covers the area without stretching
  />
);

export default HeroImage;
