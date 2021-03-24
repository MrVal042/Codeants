import React from 'react';
import './App.css';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        {/* SHOWCASE SECTION******** */}
        <div className="showcase">
          <h1>BUSINESS VENTURES</h1>
          <p>Is a multiple purpose company that generate its revenue from investing
            in Agriculture, transportation, Consultation and General Merchandise.
          </p>
          <button id="showcasbtn">get started</button>
        </div>

        {/* INVESTMENT SECTION **********/}
        <div class="content-sections">
          <div class="imgContainer">
            <img src="./img/investment-img.jpg" alt="investment-images" />
          </div>
          <div class="txtContainer">
            <h1>INVESTMENT</h1>
            <p>
              This is where you INVEST your money with a Guarantee of
              receiving your capital with a 20% Roi + bonuses for 3 months after
              which your capital drops on the 4th months, No multiple registration
              using 1 details.
              You can top up your INVESTMENTs.<br />
              ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓
            </p>
            <h3>INTERESTING FEATURES</h3>
            <ul>
              <li>
                No Task.
              </li>
              <li>
                You get paid within 48 hours of withdrawal.
              </li>
              <li>
                Referrals are not Compulsory.
              </li>
            </ul>
            <p> You stand a chance of making more money if you choose to refer</p>
            <button>get started</button>
          </div>
        </div>

        {/* CONSULTANCY SECTION *********************/}
        <div class="content-sections">
          <div class="txtContainer">
            <h1>CONSULTANCY</h1>
            <p>
              As Consultants, we specialise on these core areas
              MOTIVATIONAL SPEAKING
              JOB ENPLOYMENT
              SKILLS ACQUISITION

              please feel free to email us @ Businesventur@gmail.com
            </p>

            <button>get started</button>
          </div>
          <div class="imgContainer">
            <img src="./img/consultancy-img.png" alt="investment-images" />
          </div>
          
        </div>
        {/*  POKET MONI SECTION **********************/}
        <div class="content-sections">
          <div class="imgContainer">
            <img src="./img/poketMoni-img.jpg" alt="investment-images" />
          </div>
          <div class="txtContainer">
            <h1>POKET MONI</h1>
            <p>
              Yes, Poket moni is not only for students, its for everyone.
              To access this founds of up to 500,000 naira, these Founds are non
              refundable to the company.
              You must contact us as soon as possible
              @
              Businessventur@gmail.com

              Starting your need and amount needed. if successfull BUSINESS VENTURES
              will contact you within 2 weeks of application.
              A non refundable Registration fee is 1000 naira only
              Multiply Regidtration is allowed.
            </p>
            <button>get started</button>
          </div>
        </div>
        {/*  EDUCATION SECTION ********************/}
        <div class="content-sections">
          <div class="txtContainer">
            <h1>EDUCATION</h1>
            <p>
              It is part of our responsibilty to give back to the Economy, and so in
              this Section of Education, we Provide Educational Assistance to RURAL
              communities(schools) lacking any form of eductional infrastructures
            </p>
            <button>get started</button>
          </div>
          <div class="imgContainerRight">
            <img src="./img/eduction-img.jpg" alt="investment-images" />
          </div>
        </div>
        {/* BUSINESS SUPPORT SECTION ****************/}
        <div class="content-sections">
          <div class="imgContainer">
            <img src="./img/businessSupport-img.jpg" alt="investment-images" />
          </div>
          <div class="txtContainer">
            <h1>BUSINESS SUPPORT</h1>
            <p>
              Are you a business person, Do you ned support, hurry now and get that
              needed FINACIAL to boost your business.
              Contact us at
              Businesventur@gmail.com
              None refundable Registration fee is 2000...
              TNC applies.
            </p>
            <button>get started</button>
          </div>
        </div>
        {/* TERMS AND CONDITION SECTION ******************/}
        <div className="termsAndCondition">
          <h1>TERMS AND CONDITION</h1>
          <p>
            Please read these terms and condition before using any of our services.
            by accessing or using the services we provide, you agree to be bound by
            these terms which is conditioned by your compliance with this terms.
            This terms and conditions applies to all visitors, users and others who
            access our services. if you disagree with any part of the terms and
            conditions, please do not access the services.
          </p>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleNavControl = this.handleNavControl.bind(this);
    this.homeClick = this.homeClick.bind(this);
    this.investmentClick = this.investmentClick.bind(this);
    this.state = {isActivePage: false, navBar:false, navList:''};
  }

  hideAllPage(){
    this.setState(state =>{
      state.newsField ='hidden';
      state.request ='hidden';
      state.group ='hidden';
      state.notication='hidden';
      state.profile ='hidden';
      state.menu ='hidden';
    })
  }
  
  
  navbarViewController(){
    this.setState(state =>{(state.navBar)?state.navList='navbarShow':state.navList='';
    }) 
  }

  handleNavControl(){
    this.setState(state => ({
      navBar: !state.navBar
    }));
    this.navbarViewController();
  }

  homeClick(){
    this.setState({isActivePage: false});
  }
  investmentClick(){
    this.setState({isActivePage: true});
  }

  render() {
    const isActivePage = this.state.isActivePage;
    let currentPage;
    if(!isActivePage){
      currentPage = <HomePage />
    }else{
      currentPage = <div className="stillWorking"><h1>Oops...<br />STILL WORKING ON IT !!!</h1></div>;
    }
  
// NAVBAR SECTION *******************************
   return(
     <>
      <div className="navbar flex">
        <div className="logo">
          <img src="./img/bv-logo.jpg" alt="logo" />
        </div>
        <nav>
          <button className="menuBtn" onClick={this.handleNavControl}>
            <svg className="menu" viewBox="0 0 24 24">
              <path d="M3.8, 6.6h16.4" />
              <path d="M3.8, 12.6h16.4" />
              <path d="M3.8, 18.5h16.4" />
            </svg>
          </button>
          <ul id={this.state.navList}>
            <li onClick = {this.homeClick}>Home</li>
            <li onClick = {this.investmentClick}>Investment</li>
            <li onClick = {this.investmentClick}>Consultancy</li>
            <li id="longTxtNav1" onClick = {this.investmentClick}>Poket Moni</li>
            <li onClick = {this.investmentClick}>Education</li>
            <li id="longTxtNav2" onClick = {this.investmentClick}>Business support</li>
          </ul>
        </nav>
      </div>
      {/* SHOWCASE SECTION *************************/}
      <div>{currentPage}</div>

      {/* FOOTER SECTION ***************************/}
      <footer>
        <div className="footer-content">
          <div>
            <div className="footer-logo">
              <img src="./img/bv-logo.jpg" alt="business-ventures logo" />
            </div>
            <div>
              <p>
                Is a multiple purpose company that generate its revenue<br /> 
                from investing in Agriculture, transportation, Consultation <br />
                and General Mechandise.
              </p>
            </div>
          </div>
          <div>
            <h3>QUICK LINK</h3>
            <a href="#">Investment</a><br />
            <a href="#">Consultancy</a><br />
            <a href="#">Poket Moni</a><br />
            <a href="#">Education</a><br />
            <a href="#">Business support</a>
          </div>
        </div>
        <p className="bottomContainer">Copyright &copy; All right reserved</p>
      </footer>
    </>
    );
  }
}

export default App;
