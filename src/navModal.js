import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return ( 
      <div className="navbar">
        <div className="navbar flex">
          <div className="logo">
            <img src="./img/bv-logo.jpg" alt="logo" />
          </div>
          <nav>
            
            <div>
              <button className="menuBtn" onClick={this.props.onClose} ><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <ul className="navList">
              <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
              <li><Link  to="investment" spy={true} smooth={true} >Investment</Link></li>
              <li><Link  to="consultancy" spy={true} smooth={true} >Consultancy</Link></li>
              <li className="longNav"><Link  to="poketMoni" spy={true} smooth={true}>Poket Moni</Link></li>
              <li><Link  to="education" spy={true} smooth={true}>Education</Link></li>
              <li className="longNav1"><Link  to="businessSupport" spy={true} smooth={true}>Business Support</Link></li>
            </ul>
          </nav>
        </div>
      </div>
     );
  }
}

NavBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};
