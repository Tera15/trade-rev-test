import React from 'react'
import { ImageContainer, ImageModal } from './image.styles';

const Image = ({ src, alt }) => {
     return(   
          <ImageContainer src={src} alt={alt}  />
          );
};

export default Image;

