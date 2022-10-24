import React, { useState } from "react";
import * as S from "./style";

const Section = ({ id, image, title, description }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  return (
    <S.Container id={`section-${id}`}>
      <S.BoxImage
        onMouseEnter={() => setIsDescriptionOpen(true)}
        onMouseLeave={() => setIsDescriptionOpen(false)}
      >
        <S.Image src={image.src} alt={image.alt} width={500} height={300} />
        <S.ImageDescription isDescriptionOpen={isDescriptionOpen}>
          {image.alt}
        </S.ImageDescription>
      </S.BoxImage>
      {isDescriptionOpen && (
        <S.BoxDescription>
          <h2>{title}</h2>
          <p>{description}</p>
        </S.BoxDescription>
      )}
    </S.Container>
  );
};

export default Section;
