import React, { useState } from 'react';
import './Gallery.css';
import { ImageModal } from './ImageModal';

type Image = {
  id: number;
  src: string;
  alt: string;
};

type TabContent = {
  label: string;
  images: Image[];
};

const tabContents: TabContent[] = [
  { label: 'ARHITECTURĂ', images: [{ id: 1, src: '/team_adriana_tomeci.jpg', alt: 'Image 1' }, { id: 2, src: '/team_adriana_tomeci.jpg', alt: 'Image 2' }] },
  { label: 'DESIGN INTERIOR', images: [{ id: 3, src: '/team_adriana_tomeci.jpg', alt: 'Image 3' }, { id: 4, src: '/team_adriana_tomeci.jpg', alt: 'Image 4' }] },
  { label: 'FASHION DESIGN', images: [{ id: 5, src: '/team_adriana_tomeci.jpg', alt: 'Image 5' }, { id: 6, src: '/team_adriana_tomeci.jpg', alt: 'Image 6' }] },
  { label: 'GAME DESIGN', images: [{ id: 7, src: '/team_cristina_stanescu.jpg', alt: 'Image 7' }, { id: 8, src: '/team_cristina_stanescu.jpg', alt: 'Image 8' }, { id: 11, src: '/team_cristina_stanescu.jpg', alt: 'Image 11' }],},
  { label: 'SCENOGRAFIE', images: [{ id: 9, src: '/team_adriana_tomeci.jpg', alt: 'Image 9' }, { id: 10, src: '/team_adriana_tomeci.jpg', alt: 'Image 10' }] },
];

export const Gallery: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
       <h1 className='h1-nuvotek'>Galerie</h1>
      <div className="tabs">
        {tabContents.map((tab, index) => (
          <button
            key={index}
            className={`box-shadow-nuvotek tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="images">
        {tabContents[selectedTab].images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="image box-shadow-nuvotek"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
};