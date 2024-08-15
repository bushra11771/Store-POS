import React from "react";
import Modal from "./Modal";

const NewCustomerModal = ({ isOpen, toggle }) => {
  return (
    <Modal
      id="newCustomer"
      title="New Customer"
      isOpen={isOpen}
      toggle={toggle}
      footer={
        <div className="row">
          <div className="col-md-6">
            <div className="btn btn-primary btn-block btn-lg waves-effect waves-light">
              Save <span id="save_curr" />
              <span id="save" />{" "}
            </div>
          </div>
          <div className="col-md-6">
            <button
              type="button"
              id="confirmCustomer"
              className="btn btn-default btn-block btn-lg waves-effect waves-light"
            >
              Confirm
            </button>
          </div>
        </div>
      }
      formFields={
        <>
          <form id="saveCustomer">
            <div className="form-group">
              <label htmlFor="userName">Customer Name*</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter name"
                className="form-control"
                id="userName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Customer Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone number"
                className="form-control"
                id="phoneNumber"
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailAddress">Customer Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                className="form-control"
                id="emailAddress"
              />
            </div>
            <div className="form-group">
              <label htmlFor="userAddress">Customer Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                className="form-control"
                id="userAddress"
              />
            </div>
          </form>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <button
                onclick="$(this).go(1,true);"
                className="btn btn-success btn-lg btn-block"
              >
                1
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(2,true);"
                className="btn btn-success btn-lg btn-block"
              >
                2
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(3,true);"
                className="btn btn-success btn-lg btn-block"
              >
                3
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <button
                onclick="$(this).go(4,true);"
                className="btn btn-success btn-lg btn-block"
              >
                4
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(5,true);"
                className="btn btn-success btn-lg btn-block"
              >
                5
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(6,true);"
                className="btn btn-success btn-lg btn-block"
              >
                6
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <button
                onclick="$(this).go(7,true);"
                className="btn btn-success btn-lg btn-block"
              >
                7
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(8,true);"
                className="btn btn-success btn-lg btn-block"
              >
                8
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(9,true);"
                className="btn btn-success btn-lg btn-block"
              >
                9
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <button
                onclick="$('#userName').val($('#userName').val().substr(0,$('#userName').val().length -1))"
                className="btn btn-success btn-lg btn-block"
              >
                ⌫
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$(this).go(0,true);"
                className="btn btn-success btn-lg btn-block"
              >
                0
              </button>
            </div>
            <div className="col-md-4">
              <button
                onclick="$('#userName').val('')"
                className="btn btn-success btn-lg btn-block"
              >
                AC
              </button>
            </div>
          </div>
        </>
      }
    />
  );
};

export default NewCustomerModal;
