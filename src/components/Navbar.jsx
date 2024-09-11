import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: rgba(18, 18, 18, 0.8);
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #f1c40f;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  margin-left: 1.5rem;
  transition: color 0.3s ease;

  &:hover, &.active {
    color: #f1c40f;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(18, 18, 18, 0.95);
    padding: 1rem;
  }
`;

const MobileNavLink = styled(NavLink)`
  margin: 0.5rem 0;
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ArtVista</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
          <NavLink to="/showcase" className={location.pathname === '/showcase' ? 'active' : ''}>Showcase</NavLink>
          <NavLink to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavContainer>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink to="/" onClick={closeMobileMenu}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={closeMobileMenu}>About</MobileNavLink>
        <MobileNavLink to="/showcase" onClick={closeMobileMenu}>Showcase</MobileNavLink>
        <MobileNavLink to="/contact" onClick={closeMobileMenu}>Contact</MobileNavLink>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;