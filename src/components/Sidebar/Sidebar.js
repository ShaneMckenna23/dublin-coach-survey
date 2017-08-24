import React from 'react'
import {Modal} from 'react-bootstrap'
  
class Sidebar extends React.Component {
    render() {
        return (
            <Modal className='Sidebar left' show={ this.props.isVisible } onHide={this.props.onHide} 
                autoFocus keyboard
        >
            <Modal.Header closeButton>
                <Modal.Title>Sidebar Menu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { this.props.children }
            </Modal.Body>
        </Modal>
        );
    }
}

export default Sidebar