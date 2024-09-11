import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 80px auto 0;
  padding: 40px 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #f1c40f;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #fff;
`;

const TextArea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  background-color: #2c2c2c;
  border: 1px solid #444;
  color: #fff;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: #f1c40f;
  color: #121212;
  border: none;
  padding: 12px 24px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f39c12;
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </Form>
    </ContactContainer>
  );
}

export default Contact;