import React from "react";
// import PropTypes from 'prop-types';


class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state={
      onLine:props.onLine
    }
  }
  
  render () {

    const statusChange = (e) => {
      let valueTarget = this.state.onLine
      this.setState ({onLine:!valueTarget})
    }

    return (<div className="Contact" key={this.props.name}>
    <img key="img"
      className="avatar"
      src={this.props.avatar} alt=""
    />
    <div key="div">
      <h4 className="name" key="h4"> {this.props.name} </h4>

      <div className="status" key="name" onClick={statusChange}>
        <div key="div2" className={this.state.onLine ? "status-online" : "status-offline"}>
        </div>
        <p className="status-text" key={this.props.name} >{this.state.onLine ? "Online" : "Offline"}
        </p>
      </div>
    </div>
  </div>)
  }}



// Contact.propTypes = {
//   name : PropTypes.string.isRequired,
//   avatar : PropTypes.string.isRequired,
//   onLine : PropTypes.bool
// }

export default Contact;
