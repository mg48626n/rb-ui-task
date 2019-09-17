//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../App.css';
export default class OpenModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 


  render() {
    const {id,first_name,last_name, last_position, last_company, grade} = this.props.moreinfo;

    return (
        <div>
        <Button color="success" onClick={this.toggle}>Show More</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>{first_name} {last_name} Bio</ModalHeader>
          <ModalBody>
        <div className="row">
            <div className="form-group col-md-8 modal-decoration">
                <span>First Name:</span>
                <span className="text-dark">{first_name}</span>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-8 modal-decoration">
                <span>Last Position:</span> 
                <span className="text-dark">{last_position}</span>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-8 modal-decoration">
                <span>Last Company:</span>
                <span className="text-dark">{last_company}</span>
            </div>
        </div>
        <div className="row">
            <div className="form-group col-md-8 modal-decoration">
                <label>Grade:</label>
                <span className="text-dark">{grade}</span>
            </div>
        </div>
        
        </ModalBody>
        <ModalFooter>
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
        </form>
        </Modal>
        </div>
    );
}
}
