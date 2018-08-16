import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { toggleDrawer as toggleDrawerAction } from '../../state/app';

import './styles.css';

const Masthead = ({ isDrawerOpen, toggleDrawer }) => (
  <div className="mastHead__container">
    <div className="mastHead__title-wrapper">
	     <Link to="/" className="mastHead__logo-link" >
         <img src="http://www.crfmma.com/wp-content/uploads/2017/02/crfmma-logo-h-300x68.png" className="custom-logo" alt="logo">
         </img>
       </Link>
    </div>
    <div className="mastHead__hero">
    	<div className="mastHead__hero-inner">
        <h2 className="mastHead__widget-title">Nombre del evento</h2>
      	<div className="mastHead__widget-subTitle">
          <div>Pelea estelar</div>
        </div>
        <Link className="mastHead__evento-link" href="/" >
          <div className="mastHead__evento-button">Ver evento</div>
        </Link>
      </div>
    </div>
  </div>
);

export default connect(
  state => ({ isDrawerOpen: state.app.isDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) }),
)(Masthead);
