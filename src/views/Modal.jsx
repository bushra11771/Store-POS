import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CustomModal(props) {
  const{children, toggle, modalIsOpen, title, footer} = props


  return (
    <div>
      <Modal isOpen={modalIsOpen} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
         {children}
        </ModalBody>
        <ModalFooter>
          {footer}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CustomModal;