import React from 'react';
import './ImageModal.css';

type Image = {
  id: number;
  src: string;
  alt: string;
};

interface ImageModalProps {
  image: Image;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="modal-image" />
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
};