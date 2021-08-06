import React, { Component } from "react";
import ReactDOM from "react-dom";
import "../style/Modal.css";
class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <div>
        <div className="modal" onClick={this.props.onClose}></div>
        <div className="modal__container">
          <div className="modal__search">
            <input type="text" placeholder="Busque" />
            <button>Buscar</button>
          </div>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}

export default Modal;
