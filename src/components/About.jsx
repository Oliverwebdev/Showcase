import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f1c40f;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

function About() {
  return (
    <AboutContainer>
      <Title>About the Artist</Title>
      <Content>
        ArtVista is the creative vision of Jane Doe, a contemporary artist known for her bold use of color and innovative techniques. With over a decade of experience, Jane's work has been featured in galleries across the globe, challenging viewers to see the world through a new lens.
      </Content>
      <Content>
        Inspired by the interplay of light and shadow in urban landscapes, Jane's art captures the essence of modern life while infusing it with a touch of the surreal. Her unique style blends traditional oil painting techniques with digital manipulation, resulting in pieces that are both familiar and fantastical.
      </Content>
    </AboutContainer>
  );
}

export default About;
