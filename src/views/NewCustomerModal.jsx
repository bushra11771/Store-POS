import React from "react";
import Modal from "./Modal";

const NewCustomerModal = ({ isOpen, toggle }) => {
  return (
    <Modal
      id="newCustomer"
      title="New Customer"
      formId="saveCustomer"
      submitButtonId="submitCustomer"
      submitButtonText="Save"
      isOpen={isOpen}
      toggle={toggle}
      formFields={
        <>
          <div className="form-group">
            <label htmlFor="userName">Customer Name*</label>
            <input type="text" name="name" required placeholder="Enter name" className="form-control" id="userName" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Customer Phone</label>
            <input type="text" name="phone" placeholder="Enter Phone number" className="form-control" id="phoneNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Customer Email</label>
            <input type="email" name="email" placeholder="Enter email address" className="form-control" id="emailAddress" />
          </div>
          <div className="form-group">
            <label htmlFor="userAddress">Customer Address</label>
            <input type="text" name="address" placeholder="Enter address" className="form-control" id="userAddress" />
          </div>
        </>
      }
    />
  );
};

export default NewCustomerModal;
