import React from 'react';
import './ImageModal.css';
import Slider from 'react-slick';
import { CustomPrevArrow, CustomNextArrow } from './Gallery';
import { tabContents } from './GalleryImages';

type Image = {
  id: number;
  src: string;
  alt: string;
};

interface ImageModalProps {
  image: Image;
  onClose: () => void;
  tabNumber: number;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, tabNumber }) => {
  const initialImageId = tabContents[tabNumber].images.map(tb => tb.id).indexOf(image.id);
  let sliderSettings = {
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    initialSlide: initialImageId
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Slider {...sliderSettings}>
          {tabContents[tabNumber].images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className={'modal-image'}
        />
      ))}
        </Slider>
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};