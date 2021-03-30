import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from "./App";
import {Link} from 'react-scroll';

export default function Main(props){
  return(
    <div className="container">
      <App />
      {/* FOOTER SECTION ***************************/}
      <footer>
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <img src="./img/bv-logo.jpg" alt="business-ventures logo" />
            </div>
            <div>
              <p>
                Is a multiple purpose company that generate its revenue from investing in Agriculture, transportation, Consultation
                and General Mechandise.
              </p>
            </div>
          </div>
          <div>
            <h3>QUICK LINK</h3>
            <ul>
              <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
              <li><Link  to="investment" spy={true} smooth={true} >Investment</Link></li>
              <li><Link  to="consultancy" spy={true} smooth={true} >Consultancy</Link></li>
              <li className="longNav"><Link  to="poketMoni" spy={true} smooth={true}>Poket Moni</Link></li>
              <li><Link  to="education" spy={true} smooth={true}>Education</Link></li>
              <li className="longNav1"><Link  to="businessSupport" spy={true} smooth={true}>Business Support</Link></li>
            </ul>
          </div>
        </div>
        <p className="copyright">Copyright &copy; All right reserved</p>
      </footer>
    </div>
  );
}


ReactDOM.render(<Main/>, document.getElementById('root'));