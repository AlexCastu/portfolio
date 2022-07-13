import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarWrapper = styled.nav`
  display: flex;
  gap: 20px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  flex-direction: column;
  gap: 25px;
  align-items: center;
  position: fixed;
  top: 70px;
  right: ${(props) => (props.open ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  transition: right 0.3s linear;
  padding-top: 150px;
  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: end;
    padding-top: 0px;
    background-image: linear-gradient(120deg, #fdfbfb00 0%, #ebedee00 100%);
  }

  a {
    padding: 0.5rem 0.8rem;
    color: #6e6e6e;
    text-decoration: none;
    border-bottom: 1px solid #ffffff00;
  }
  a:hover {
    padding: 0.5rem 0.8rem;
    color: black;
    text-decoration: none;
    border-bottom: 1px solid lightgray;
  }
`;
export default function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open}>
      <motion.a
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
        href='#seccionInfo'
      >
        Sobre mi
      </motion.a>
      <motion.a
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
        href='#seccionHabilidades'
      >
        Conocimientos
      </motion.a>
      <motion.a
        transition={{ duration: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={handleClick}
        href='#seccionProyectos'
      >
        Proyectos
      </motion.a>
    </NavbarWrapper>
  );
}
