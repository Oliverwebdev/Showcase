import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ${fadeIn} 1.5s ease-out;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
  animation: ${slideIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
  animation: ${slideIn} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  background-color: #f1c40f;
  color: #121212;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
  animation: ${slideIn} 1s ease-out 0.6s both;

  &:hover {
    background-color: #f39c12;
  }
`;

function Landing() {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to ArtVista</HeroTitle>
          <HeroSubtitle>Explore the boundaries of imagination through captivating visual art</HeroSubtitle>
          <CTAButton to="/showcase">Discover Our Collection</CTAButton>
        </HeroContent>
      </HeroSection>
    </Container>
  );
}

export default Landing;