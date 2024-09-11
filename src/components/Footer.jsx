import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f1c40f;
  }
`;

const FooterNav = styled.nav`
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`;

const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f1c40f;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>&copy; 2024 ArtVista. All rights reserved.</Copyright>
        <SocialLinks>
          <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </SocialIcon>
          <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialIcon>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;