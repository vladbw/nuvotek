import React, { useEffect, useState } from 'react';
import './Gallery.css';
import { ImageModal } from './ImageModal';
import { tabContents } from './GalleryImages';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';

export type Image = {
  id: number;
  src: string;
  alt: string;
  thumbnailSrc: string;
};

export interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      left: '20px',
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

export const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      right: '20px', 
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

export const Gallery: React.FC = () => {
  const translate = useTranslation().t;

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderTabs = () => {
    return (
      <div className="tabs">
      {tabContents.map((tab, index) => (
        <button
          key={index}
          className={`box-shadow-nuvotek tab ${selectedTab === index ? 'active' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          {translate(tab.label)}
        </button>
      ))}
    </div>
    );
  }

  const renderTitle = () => {
    return (
      <h1 className='h1-nuvotek'>
        {translate("gallery_title")}
      </h1>
    );
  }

  const renderImages = (className: string) => {
    return (
      tabContents[selectedTab].images.map((image) => (
        <img
          key={image.id}
          src={windowWidth >= 770 ? image.thumbnailSrc : image.src}
          alt={image.alt}
          className={className}
          onClick={() => handleImageClick(image)}
        />
      ))
    );
  }

  const renderModal = () => {
    return selectedImage && <ImageModal tabNumber={selectedTab} image={selectedImage} onClose={closeModal} />;
  }

  const renderMobileComponent = () => {
    let sliderSettings = {
      infinite: true,
      speed: 500, 
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };

    return (
          <div className='gallery-container-mobile'>
            {renderTitle()}
            {renderTabs()}
            <Slider {...sliderSettings}>
              {renderImages('')}
            </Slider>
            {renderModal()}
          </div>
    );
  }

  const renderPCComponent = () => {
    return (
      <div className="gallery-container width-70-large-res" id='homepage-gallery'>
          {renderTitle()}
          {renderTabs()}
          <div className="images">
          {/* box-shadow-nuvotek */}
            {renderImages('image')}
          </div>
          {renderModal()}
      </div>
    );
  }

  if (windowWidth >= 770) {
    return renderPCComponent();
  } else {
    return renderMobileComponent();
  }
};