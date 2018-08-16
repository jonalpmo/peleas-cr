import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

import './styles.css';

const MenuIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${p => p.theme.size(1)};
  align-self: stretch;
  transition: right 0.3s ease-in-out;
  left: ${p => (p.isDrawerOpen ? p.theme.size(1) : `-${p.theme.size(4)}`)};
  color: black;
`;


const Navbar = styled.div`
  height: ${p => p.theme.size(4)};
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: ${p => p.theme.zIndex.header};
  top: 0;
  left: 0;
  padding-left: ${p => p.theme.size(0.5)};
  background: ${p => p.theme.palette.primary.main};
`;

const Header = ({ isDrawerOpen, toggleDrawer }) => (
  <div>
    <div className="header__container" isDrawerOpen={isDrawerOpen}>
      <div className="header__hamburger"
        isDrawerOpen={isDrawerOpen}
        href="#"
        onClick={() => toggleDrawer(!isDrawerOpen)}
      >
        <Hamburger />
      </div>
      <Link className="header__category-link" to="/">Inicio</Link>
      <Link className="header__category-link" to="/">Eventos</Link>
      <Link className="header__category-link" to="/">Noticias</Link>
      <Link className="header__category-link" to="/">Galería</Link>
      <Link className="header__category-link" to="/">Contacto</Link>
    </div>
  </div>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Header);
