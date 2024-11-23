import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CustomModal(props) {
  const {
    children,
    toggle = () => {},
    modalIsOpen = false,
    title = "Title",
    footer,
    header,
    tag = "h4", 
  } = props;

  return (
    <>
      <Modal   isOpen={modalIsOpen} toggle={toggle} {...props}>
        {header?header:<ModalHeader tag={tag} toggle={toggle}>{title}</ModalHeader>}
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    </>
  );
}

export default CustomModal;
