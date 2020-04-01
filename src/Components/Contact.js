import React from "react";
import PropTypes from 'prop-types';


const Contact = (props) => (
  <div className="Contact" key={props.name}>
    <img key="img"
      className="avatar"
      src={props.avatar} alt=""
    />
    <div key="div">
      <h4 className="name" key="h4"> {props.name} </h4>

      <div className="status" key="name">
        <div key="div2" className={props.onLine ? "status-online" : "status-offline"}></div>
        <p className="status-text" key={props.name} >{props.onLine ? "Online" : "Offline"}</p>
      </div>
    </div>
  </div>
);


Contact.propTypes = {
  name : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  onLine : PropTypes.bool
}

export default Contact;
