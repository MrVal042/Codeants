import React from 'react';
import PropTypes from 'prop-types';

export default class TermsAndCondition extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="TandCbackdrop">
        {/* TERMS AND CONDITION SECTION ******************/}
        <fieldset className="TandC">
          <h3>TERMS AND CONDITION</h3>
          <p>
            Please read these terms and condition before using any of our services.
            by accessing or using the services we provide, you agree to be bound by these terms which is 
            conditioned by your compliance with this terms. This terms and conditions
            applies to all visitors, users and others who access our services. if you
            disagree with any part of the terms and
            conditions, please do not access the services.
          </p>
      
          <p className="checkbox">
            <input type="checkbox" 
              onChange={this.props.onCheckboxClick}
            />Accept terms and condition</p>

          <div className="TandCbtn">
            <p>Contact us @:</p>
            <button disabled={this.props.disabledBtn} onClick = {this.props.onWhatsappClick}>
              <i className="fa fa-whatsapp fa-3x"></i>
            </button>
            <button disabled={this.props.disabledBtn} onClick = {this.props.onTelegramClick}>
              <i className="fa fa-telegram fa-3x" ></i>
            </button>
            <button disabled={this.props.disabledBtn} onClick = {this.props.onInstagramClick}>
              <i className="fa fa-instagram fa-3x"></i>
            </button>
          </div>
          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </fieldset>
      </div>
    );
  }
}

TermsAndCondition.propTypes = {
  onCheckboxClick: PropTypes.func.isRequired,
  onWhatsappClick: PropTypes.func.isRequired,
  onTelegramClick: PropTypes.func.isRequired,
  onInstagramClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  disabledBtn: PropTypes.bool,
  show: PropTypes.bool,
  children: PropTypes.node
};
