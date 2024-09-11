import React from 'react';
import styled from 'styled-components';

const ShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 80px auto 0;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  text-align: center;
  color: #f1c40f;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ImageTitle = styled.span`
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
`;

const images = [
  { src: '/api/placeholder/400/400', title: 'Urban Symphony' },
  { src: '/api/placeholder/400/400', title: 'Neon Reflections' },
  { src: '/api/placeholder/400/400', title: 'Digital Dreamscape' },
  { src: '/api/placeholder/400/400', title: 'Chromatic Fusion' },
  { src: '/api/placeholder/400/400', title: 'Quantum Visions' },
  { src: '/api/placeholder/400/400', title: 'Ethereal Echoes' },
];

function Showcase() {
  return (
    <ShowcaseContainer>
      <Title>Art Showcase</Title>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={image.src} alt={image.title} />
            <ImageOverlay className="overlay">
              <ImageTitle>{image.title}</ImageTitle>
            </ImageOverlay>
          </GalleryItem>
        ))}
      </GalleryGrid>
    </ShowcaseContainer>
  );
}

export default Showcase;
