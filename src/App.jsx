import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import About from './components/About';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background-color: #121212;
    color: #ffffff;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;