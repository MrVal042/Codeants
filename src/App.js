import React, { Component } from 'react'
import Modal from './modal';
import NavModal from './navModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default class middleSection extends Component {
  constructor(props) {
    super(props);
    this.onWhatsappClick = this.onWhatsappClick.bind(this);
    this.onTelegramClick = this.onTelegramClick.bind(this);
    this.onInstagramClick = this.onInstagramClick.bind(this);
    this.state = {navIsOpen: false, modalIsOpen: false,  checked: false };
  }

  toggleNavBar = () => {
    this.setState({
      navIsOpen: !this.state.navIsOpen
    });
  }

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  onCheckboxClick =() =>{
    this.setState({
      checked: !this.state.checked
    });
  }

  onWhatsappClick(){
    if(this.state.checked){
      window.open("https://api.whatsapp.com/send?phone=+2347065208250&text=Hi,%20I%20would%20like%20to%20get%20more%20information..", "_blank");
    }
  }

  onTelegramClick(){
    if(this.state.checked){
    window.open("https://telegram.me/username","_blank");
    }
  }
  
  onInstagramClick(){
    if(this.state.checked){
    window.open("https://www.instagram.com/direct/inbox/","_blank");
    }
  }
  
  render() {
    return (
      <>
        <div className="navbar">
          <div className="navbar flex">
            <div className="logo">
              <img src="./img/bv-logo.jpg" alt="logo" />
            </div>
            <nav>
              <div><button className="menuBtn" onClick={this.toggleNavBar}>
                <FontAwesomeIcon icon={faBars} /></button>
              </div>
            </nav>
          </div>
        </div>
        <NavModal show={this.state.navIsOpen} onClose={this.toggleNavBar}/>
        {/* HIDDEN MOODAL******** */}
        <Modal show={this.state.modalIsOpen} checked = {this.state.checked}
          onCheckboxClick={this.onCheckboxClick} onWhatsappClick={this.onWhatsappClick}
          onTelegramClick={this.onTelegramClick} onInstagramClick={this.onInstagramClick}
          onClose={this.toggleModal}>
        </Modal>
        
        {/* SHOWCASE SECTION******** */}
        <section id="home">
          <div className="showcase">
            <h1>BUSINESS VENTURES</h1>
            <p>Is a multiple purpose company that generate its revenue from investing
              in Agriculture, transportation, Consultation and General Merchandise.
            </p>
            <button id="showcasbtn" onClick={this.toggleModal}>get started</button>
          </div>
        </section>

        {/* INVESTMENT SECTION **********/}
        <section id="investment">
          <div>
            <h4>SELECT ONE OF OUR SERVICE</h4>
          </div>
          <div className="grid-content">
            <div className="imgContainer">
              <img src="./img/investment-img.jpg" alt="investment-images" />
            </div>
            <div className="txtContainer">
              <h1>INVESTMENT</h1>
              <p>
                This is where you INVEST your money with a Guarantee of
                receiving your capital with a 20% Roi<br /> + bonuses for 3 months after
                which your capital drops on the 4th months, No multiple registration<br />
                using 1 details.
                You can top up your <br />INVESTMENTs.<span>&#9997;&#127996;</span><br />
                &#128071; &#128071; &#128071; &#128071; &#128071; &#128071;
              </p>
              <h3>INTERESTING FEATURES</h3>
              <ul>
                <li>
                  &#129309;No Task.
                </li>
                <li>
                  &#129309;You get paid within 48 hours of withdrawal.
                </li>
                <li>
                  &#129309;Referrals are not Compulsory.
                </li>
              </ul>
              <p> You stand a chance of making more money if you choose to refer</p>
              <button onClick={this.toggleModal}>get started</button>
            </div>
          </div>
        </section>

        {/* CONSULTANCY SECTION *********************/}
        <section id="consultancy">
          <div className="grid-content" >
            <div className="txtContainer">
              <h1>CONSULTANCY</h1>
              <p>
                Management CONSULTING<br />
                As Consultants, we specialise on these core areas<br />
                MOTIVATIONAL SPEAKING<br />
                JOB ENPLOYMENT<br />
                SKILLS ACQUISITION<br /><br />

                please feel free to email us @ Businesventur@gmail.com
              </p>

              <button onClick={this.toggleModal}>get started</button>
            </div>
            <div className="imgContainer">
              <img src="./img/consultancy-img.png" alt="investment-images" />
            </div>
          </div>
        </section>

        {/*  POKET MONI SECTION **********************/}
        <section id="poketMoni">
          <div className="grid-content">
            <div className="imgContainer">
              <img src="./img/poketMoni-img.jpg" alt="investment-images" />
            </div>
            <div className="txtContainer">
              <h1>POKET MONI</h1>
              <p>
                Yes, Poket moni is not only for students, its for everyone.<br />
                To access this founds of up to 500,000 naira, these<br /> Founds are non
                refundable to the company.<br />
                You must contact us as soon as possible<br />
                @<br />
                Businessventur@gmail.com<br /><br />

                Starting your need and amount needed. if <br />
                successfull BUSINESS VENTURES will contact you <br />
                within 2 weeks of application.<br />
                A non refundable Registration fee is 1000 naira<br />
                only &#129309;<br />
                Multiply Regidtration is allowed.
              </p>
              <button onClick={this.toggleModal}>get started</button>
            </div>
          </div>
        </section>
        {/*  EDUCATION SECTION ********************/}
        <section id="education">
          <div className="grid-content">
            <div className="txtContainer">
              <h1>EDUCATION</h1>
              <p>
                It is part of our responsibilty to give back to the Economy, and so in
                this Section of Education, we Provide Educational Assistance to RURAL
                communities(schools) lacking any form of<br /> eductional infrastructures
              </p>
              <button onClick={this.toggleModal}>get started</button>
            </div>
            <div className="imgContainer">
              <img src="./img/eduction-img.jpg" alt="investment-images" />
            </div>
          </div>
        </section>

        {/* BUSINESS SUPPORT SECTION ****************/}
        <section id="businessSupport">
          <div className="grid-content">
            <div className="imgContainer">
              <img src="./img/businessSupport-img.jpg" alt="investment-images" />
            </div>
            <div className="txtContainer">
              <h1>BUSINESS SUPPORT</h1>
              <p>
                Are you a business person, Do you ned support, hurry<br />
                now and get that needed FINACIAL to<br /> 
                boost your business.<br /><br />
                Contact us at<br />
                Businesventur@gmail.com<br />
                None refundable Registration fee is 2000...<br />
                TNC applies.
              </p>
              <button onClick={this.toggleModal}>get started</button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

