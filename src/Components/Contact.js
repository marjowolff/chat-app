import React from "react";
import PropTypes from 'prop-types';

const onLine = true;
const Contact = (props) => (
  <div className="Contact">
    <img
      className="avatar"
      src={props.avatar}
    />
    <div>
      <h4 className="name"> {props.name} </h4>

      <div className="status">
        <div className={props.onLine ? "status-online" : "status-offline"}></div>
        <p className="status-text">{props.onLine ? "Online" : "Offline"}</p>
      </div>
    </div>
  </div>
);


Contact.propTypes = {
  name : PropTypes.string.isRequired
}

export default Contact;
