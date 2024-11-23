import React, { useState } from "react";
import image1 from "../../src/assets/images/loading.gif";
import { Link, Outlet, useLocation } from "react-router-dom";
import CustomModal from "../views/Modal";
import {
  FaBarcode,
  FaTh,
  FaPlus,
  FaUser,
  FaRegCreditCard,
} from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import { Button, Table } from "reactstrap";

const Main = () => {
  const location = useLocation();
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const [isOpenNewCategory, setIsOpenNewCategory] = useState(false);

  console.log("location", location);

  return (
    <div className="main_app">
      <div id="loading">
        <img
          // className="loading m-t-5"
          style={{ marginLeft: "35%" }}
          // height="50px"
          src={image1}
          alt=""
        />
      </div>
      <div className="">
        <div className="row">
          <div className="col-sm-12">
            <div className="button-list pull-left m-t-15 m-l-10">
              <div className="btn-group p_one">
                <button
                  id="productModal"
                  data-toggle="modal"
                  data-target="#Products"
                  type="button"
                  className="btn btn-default waves-effect waves-light"
                  onClick={() => {
                    setIsOpenProductModal(true);
                  }}
                >
                  <span className="btn-label">
                    <FaBarcode />
                  </span>{" "}
                  Products
                </button>
                <button
                  id="newProductModal"
                  data-toggle="modal"
                  data-target="#newProduct"
                  type="button"
                  className="btn btn-warning waves-effect waves-light"
                >
                  <FaPlus />
                </button>
              </div>
              <div className="btn-group p_two">
                <button
                  id="categoryModal"
                  data-toggle="modal"
                  data-target="#Categories"
                  type="button"
                  className="btn btn-default waves-effect waves-light"
                >
                  <span className="btn-label">
                    <FaTh />{" "}
                  </span>{" "}
                  Categories
                </button>
                <button
                  type="button"
                  className="btn btn-warning waves-effect waves-light"
                  onClick={() => {
                    console.log("categories selected");

                    setIsOpenNewCategory(true);
                  }}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
              <button
                id="viewRefOrders"
                data-toggle="modal"
                data-target="#holdOrdersModal"
                type="button"
                className="btn btn-info waves-effect waves-light"
              >
                <span className="btn-label">
                  <i className="fa fa-shopping-basket" />{" "}
                </span>{" "}
                Open Tabs
              </button>
              <button
                id="viewCustomerOrders"
                data-toggle="modal"
                data-target="#customerModal"
                type="button"
                onclick="$(this).getCustomerOrders()"
                className="btn btn-info waves-effect waves-light"
              >
                <span className="btn-label">
                  <FaUser />{" "}
                </span>{" "}
                Customer Orders
              </button>
            </div>
            {/* <img
              className="loading m-t-5"
              style={{ marginLeft: "35%" }}
              height="50px"
              src="assets/images/loading.gif"
              alt=""
            /> */}
            <div className="button-list pull-right m-t-15 m-l-10">
              <button
                type="button"
                className="btn btn-default waves-effect waves-light p_five"
                onClick={() => setIsOpenSettingsModal(true)}
              >
                <IoSettings />
              </button>
              {location.pathname === "/pos" ? (
                <Link
                  to={"/transactions"}
                  className="btn btn-default waves-effect waves-light p_three"
                >
                  <span className="btn-label">
                    <FaRegCreditCard />{" "}
                  </span>{" "}
                  Transactions
                </Link>
              ) : (
                <Link
                  to={"/pos"}
                  className="btn btn-default waves-effect waves-light"
                >
                  <span className="btn-label">
                    <FaCartShopping />
                  </span>{" "}
                  Point of Sale
                </Link>
              )}
              <div className="btn-group p_four">
                <button
                  id="usersModal"
                  data-toggle="modal"
                  data-target="#Users"
                  type="button"
                  className="btn btn-default waves-effect waves-light"
                >
                  <span className="btn-label">
                    <FaUser />
                  </span>{" "}
                  Users
                </button>
                <button
                  id="add-user"
                  data-toggle="modal"
                  type="button"
                  className="btn btn-gray waves-effect waves-light"
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
              <button
                type="button"
                className="btn btn-light waves-effect waves-light"
                id="cashier"
              >
                <span className="btn-label">
                  <FaUser />
                </span>{" "}
                {/* <span id="loggedin-user"></span> */}
              </button>
              <button
                id="log-out"
                type="button"
                className="btn btn-warning waves-effect waves-light"
              >
                <MdLogout />
              </button>
              {/* <button
                id="quit"
                type="button"
                className="btn btn-danger waves-effect waves-light"
              >
                <i className="glyphicon glyphicon-off" />
              </button> */}
            </div>
          </div>
        </div>
        <br />
        <Outlet />

        <CustomModal
          modalIsOpen={isOpenPaymentModal}
          footer={
            <button
              type="button"
              onclick="$(this).submitDueOrder(0);"
              className="btn btn-primary btn-block btn-lg waves-effect waves-light"
            >
              Hold Order
            </button>
          }
        >
          <form action="">
            <input
              type="text"
              id="refNumber"
              placeholder="Enter a reference"
              className="form-control"
            />
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
                onclick="$('#refNumber').val($('#refNumber').val().substr(0,$('#refNumber').val().length -1))"
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
                onclick="$('#refNumber').val('')"
                className="btn btn-success btn-lg btn-block"
              >
                AC
              </button>
            </div>
          </div>
        </CustomModal>
        {/* /.modal-dialog */}
        {/* /.modal */}
        {/*  Modal content for the above example */}
        <CustomModal
          title="Payment"
          modalIsOpen={isOpenPaymentModal}
          toggle={() => setIsOpenPaymentModal(!isOpenPaymentModal)}
          footer={
            <div className="row">
              <div className="col-md-6">
                <div className="btn btn-primary btn-block btn-lg waves-effect waves-light">
                  Change <span id="change_curr" />
                  <span id="change" />{" "}
                </div>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  id="confirmPayment"
                  className="btn btn-default btn-block btn-lg waves-effect waves-light"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          }
        >
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a
                  href="javascript:void(0)"
                  id="cash"
                  onclick="paymentType = 1"
                  className="list-group-item active"
                >
                  Cash
                </a>
                <a
                  href="javascript:void(0)"
                  id="card"
                  onclick="paymentType = 3"
                  className="list-group-item"
                >
                  Card
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">
                  Price <span id="price_curr" />
                  <input
                    id="payablePrice"
                    readOnly=""
                    type="number"
                    className="form-control"
                    aria-describedby="basic-addon3"
                  />
                </span>
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">
                  Payment <span id="payment_curr" />{" "}
                </span>
                <input
                  type="text"
                  placeholder={0.0}
                  className="form-control"
                  id="payment"
                  aria-describedby="basic-addon3"
                />
              </div>
              <hr />
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(1,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        1
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(2,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        2
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(3,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        3
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(4,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        4
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(5,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        5
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(6,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        6
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(7,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        7
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(8,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        8
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(9,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        9
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$('#payment').val($('#payment').val().substr(0,$('#payment').val().length -1));$(this).calculateChange();"
                        className="btn btn-success btn-lg btn-block"
                      >
                        ⌫
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(0,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        0
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).digits()"
                        className="btn btn-success btn-lg btn-block"
                      >
                        .
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    onclick="$('#payment').val('');$(this).calculateChange();"
                    className="btn btn-danger btn-block btn-lg"
                  >
                    AC
                  </button>
                </div>
              </div>
              <br />
              <div className="input-group" id="cardInfo">
                <span className="input-group-addon" id="basic-addon3">
                  Card Info{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="paymentInfo"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </div>
        </CustomModal>
        {/* /.modal-content */}
        {/* /.modal-dialog */}
        {/* /.modal */}

        <CustomModal
          title="Payment"
          modalIsOpen={isOpenPaymentModal}
          toggle={() => setIsOpenPaymentModal(!isOpenPaymentModal)}
          footer={
            <div className="row">
              <div className="col-md-6">
                <div className="btn btn-primary btn-block btn-lg waves-effect waves-light">
                  Change <span id="change_curr" />
                  <span id="change" />{" "}
                </div>
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  id="confirmPayment"
                  className="btn btn-default btn-block btn-lg waves-effect waves-light"
                >
                  Confirm Payment
                </button>
              </div>
            </div>
          }
        >
          <div className="row">
            <div className="col-md-4">
              <div className="list-group">
                <a
                  href="javascript:void(0)"
                  id="cash"
                  onclick="paymentType = 1"
                  className="list-group-item active"
                >
                  Cash
                </a>
                <a
                  href="javascript:void(0)"
                  id="card"
                  onclick="paymentType = 3"
                  className="list-group-item"
                >
                  Card
                </a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">
                  Price <span id="price_curr" />
                  <input
                    id="payablePrice"
                    readOnly=""
                    type="number"
                    className="form-control"
                    aria-describedby="basic-addon3"
                  />
                </span>
              </div>
              <br />
              <div className="input-group">
                <span className="input-group-addon" id="basic-addon3">
                  Payment <span id="payment_curr" />{" "}
                </span>
                <input
                  type="text"
                  placeholder={0.0}
                  className="form-control"
                  id="payment"
                  aria-describedby="basic-addon3"
                />
              </div>
              <hr />
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(1,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        1
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(2,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        2
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(3,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        3
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(4,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        4
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(5,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        5
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(6,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        6
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(7,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        7
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(8,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        8
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(9,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        9
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <button
                        onclick="$('#payment').val($('#payment').val().substr(0,$('#payment').val().length -1));$(this).calculateChange();"
                        className="btn btn-success btn-lg btn-block"
                      >
                        ⌫
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).go(0,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        0
                      </button>
                    </div>
                    <div className="col-md-3">
                      <button
                        onclick="$(this).digits()"
                        className="btn btn-success btn-lg btn-block"
                      >
                        .
                      </button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                <div className="col-md-3">
                  <button
                    onclick="$('#payment').val('');$(this).calculateChange();"
                    className="btn btn-danger btn-block btn-lg"
                  >
                    AC
                  </button>
                </div>
              </div>
              <br />
              <div className="input-group" id="cardInfo">
                <span className="input-group-addon" id="basic-addon3">
                  Card Info{" "}
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="paymentInfo"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
          </div>
        </CustomModal>

        <CustomModal modalIsOpen={isOpenPaymentModal}
          toggle={() => setIsOpenPaymentModal(!isOpenPaymentModal)}
          title={"Category"}
        >
        <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
          <h4 className="modal-title" id="mySmallModalLabel">
            Products
            <img
              className="loading m-t-5"
              style={{ marginLeft: "35%", height: "50px" }}
              src="assets/images/loading.gif"
              alt=""
            />
            <button className="btn btn-white pull-right" id="print_list">
              Download
            </button>
          </h4>
          <div
            className="modal-body"
            id="all_products"
            style={{ padding: "20px" }}
          >
            <Table responsive>
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="product_list"></tbody>
            </Table>
          </div>
          </form>
          {/* </div> */}
        </CustomModal>

        <CustomModal>
          <div class="modal-dialog modal-md">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 class="modal-title" id="mySmallModalLabel">
                  Categories
                  <img
                    class="loading m-t-5"
                    style="margin-left: 35%"
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div class="modal-body">
                <table class="table table-bordered" id="categoryList">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="category_list"></tbody>
                </table>
              </div>
            </div>
          </div>
        </CustomModal>

        <div
          id="newCustomer"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  New Customer
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div className="modal-body">
                <form id="saveCustomer" data-parsley-validate="">
                  <div className="form-group">
                    <label htmlFor="userName">Customer Name*</label>
                    <input
                      type="text"
                      required="required"
                      name="name"
                      parsley-trigger="change"
                      placeholder="Enter name"
                      className="form-control"
                      id="userName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Customer Phone</label>
                    <input
                      type="text"
                      name="phone"
                      parsley-trigger="change"
                      placeholder="Enter Phone number"
                      className="form-control"
                      id="phoneNumber"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Customer Email</label>
                    <input
                      type="email"
                      name="email"
                      parsley-trigger="change"
                      placeholder="Enter email address"
                      className="form-control"
                      id="emailAddress"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Customer Address</label>
                    <input
                      type="text"
                      name="address"
                      parsley-trigger="change"
                      placeholder="Enter address"
                      className="form-control"
                      id="userAddress"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="newProduct"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Product
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div className="modal-body">
                <form id="saveProduct" encType="multipart/form-data">
                  <input type="hidden" name="id" id="product_id" />
                  <input type="hidden" name="img" id="img" />
                  <input type="hidden" name="remove" id="remove_img" />
                  <div className="form-group">
                    <label htmlFor="userName">Category</label>
                    <select
                      name="category"
                      className="form-control"
                      id="category"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Product Name</label>
                    <input
                      type="text"
                      required="required"
                      name="name"
                      parsley-trigger="change"
                      placeholder="Enter a product name"
                      className="form-control"
                      id="productName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Price</label>
                    <input
                      type="text"
                      required="required"
                      name="price"
                      placeholder="Price"
                      className="form-control"
                      id="product_price"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Stock</label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Available stock"
                      className="form-control"
                      id="quantity"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <input
                        type="checkbox"
                        name="stock"
                        id="stock"
                        style={{ maxWidth: 30, float: "left" }}
                      />{" "}
                      Disable stock check{" "}
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">
                      <span id="rmv_img" className="btn btn-xs btn-warning">
                        Remove
                      </span>{" "}
                      Picture{" "}
                    </label>
                    <div id="current_img" />
                    <input type="file" name="imagename" id="imagename" />
                  </div>
                  <input
                    type="submit"
                    id="submitProduct"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* newCategory */}
        <CustomModal
          modalIsOpen={isOpenNewCategory}
          toggle={() => setIsOpenNewCategory(!isOpenNewCategory)}
          title={"Category"}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-group">
              <label htmlFor="userName">Name</label>
              <input id="category_id" type="hidden" name="id" />
              <input
                id="categoryName"
                type="text"
                required="required"
                name="name"
                placeholder="Enter a category name"
                className="form-control"
              />
            </div>
            <Button
              block
              type="submit"
              id="submitCategory"
              className="btn btn-primary block mt-2 waves-effect waves-light"
            >
              Submit
            </Button>
          </form>
        </CustomModal>
        {/* Products */}

        {/* <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Products
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                  <button className="btn btn-white pull-right" id="print_list">
                    Download
                  </button>
                </h4>
              </div> */}
        <CustomModal modalIsOpen={false}>
          <div className="w-100">
            <Table responsive>
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody />
            </Table>
          </div>
        </CustomModal>
        {/* Users */}
        <div
          id="Users"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Users
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div
                className="modal-body"
                id="all_userss"
                style={{ padding: 20, paddingRight: 40 }}
              >
                <table className="table table-bordered" id="userList">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="user_list" />
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div
          id="Categories"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-md">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Categories
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div className="modal-body">
                <table className="table table-bordered" id="categoryList">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody id="category_list" />
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* user Modal */}
        <div
          id="userModal"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Account Infomarion
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div>
              <div className="modal-body">
                <form id="saveUser" data-parsley-validate="">
                  <input type="hidden" name="id" id="user_id" />
                  <div className="form-group">
                    <label htmlFor="userName">Name*</label>
                    <input
                      type="text"
                      required="required"
                      name="fullname"
                      parsley-trigger="change"
                      placeholder="Enter name"
                      className="form-control"
                      id="fullname"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Username*</label>
                    <input
                      type="text"
                      name="username"
                      parsley-trigger="change"
                      placeholder="Login Username"
                      className="form-control"
                      id="username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Password</label>
                    <input
                      type="password"
                      name="password"
                      parsley-trigger="change"
                      placeholder="Password"
                      className="form-control"
                      id="password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userName">Repeat Password</label>
                    <input
                      type="password"
                      name="pass"
                      parsley-trigger="change"
                      placeholder="Repeat"
                      className="form-control"
                      id="pass"
                    />
                  </div>
                  <div className="perms">
                    <h4 style={{ fontSize: 22, marginTop: 20 }}>Permissions</h4>
                    <hr />
                    <div className="form-group">
                      <span>
                        <input
                          type="checkbox"
                          name="perm_products"
                          id="perm_products"
                        />{" "}
                        Manage Products and Stock{" "}
                      </span>
                    </div>
                    <div className="form-group">
                      <span>
                        <input
                          type="checkbox"
                          name="perm_categories"
                          id="perm_categories"
                        />{" "}
                        Manage Product Categories{" "}
                      </span>
                    </div>
                    <div className="form-group">
                      <span>
                        <input
                          type="checkbox"
                          name="perm_transactions"
                          id="perm_transactions"
                        />{" "}
                        View Transactions{" "}
                      </span>
                    </div>
                    <div className="form-group">
                      <span>
                        <input
                          type="checkbox"
                          name="perm_users"
                          id="perm_users"
                        />{" "}
                        Manage Users and Permissions{" "}
                      </span>
                    </div>
                    <div className="form-group">
                      <span>
                        <input
                          type="checkbox"
                          name="perm_settings"
                          id="perm_settings"
                        />{" "}
                        Manage Settings{" "}
                      </span>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* holdOrdersModal */}
        <div
          id="holdOrdersModal"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="myLargeModalLabel">
                  Open Orders
                </h4>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  id="holdOrderInput"
                  placeholder="Search order by reference"
                  className="holdOrderInput form-control"
                />
                <div className="holdOrderKeyboard" />
                <br />
                <div
                  className="row"
                  style={{
                    height: 460,
                    overflowX: "hidden",
                    overflowY: "scroll",
                  }}
                  id="randerHoldOrders"
                >
                  <p>
                    please wait <span className="dot" />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* customerModal */}
        <div
          id="customerModal"
          className="modal fade bs-example-modal-lg"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="myLargeModalLabel">
                  Customer Orders
                </h4>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  id="holdCustomerOrderInput"
                  placeholder="Search order by customer name"
                  className="holdCustomerOrderInput form-control"
                />
                <div className="customerOrderKeyboard" />
                <br />
                <div
                  className="row"
                  style={{ height: 460, overflow: "scroll" }}
                  id="randerCustomerOrders"
                >
                  <p>
                    please wait <span className="dot" />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* orderModal */}
        <div
          id="orderModal"
          className="modal fade bs-example-modal-sm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
          style={{ display: "none" }}
        >
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  className="btn btn-sm btn-default"
                  onclick="$(this).print()"
                >
                  Print
                </button>{" "}
                <br />{" "}
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <div className="modal-body" id="viewTransaction"></div>
              <div className="alert alert-danger" style={{ fontSize: 11 }}>
                Right-Click and Reload if you get stuck after cancelling a
                print.
              </div>
            </div>
          </div>
        </div>

        {/* settingsModal */}
        <CustomModal
          modalIsOpen={isOpenSettingsModal}
          title={"Settings"}
          toggle={() => setIsOpenSettingsModal(!isOpenSettingsModal)}
        >
          {/* <div className="modal-dialog modal-md">
            <div className="modal-content"> */}
          {/* <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
                <h4 className="modal-title" id="mySmallModalLabel">
                  Settings
                  <img
                    className="loading m-t-5"
                    style={{ marginLeft: "35%" }}
                    height="50px"
                    src="assets/images/loading.gif"
                    alt=""
                  />
                </h4>
              </div> */}
          {/* <div className="modal-body"> */}
          <div className="form-group">
            <label htmlFor="app">Application</label>
            <select name="app" id="app" className="form-control">
              <option>Standalone Point of Sale</option>
              <option>Network Point of Sale Terminal</option>
              <option>Network Point of Sale Server</option>
            </select>
          </div>
          <form id="net_settings_form">
            <div className="row">
              <div className="form-group">
                <label htmlFor="userName">Server IP Address*</label>
                <input
                  type="text"
                  required="required"
                  placeholder="Enter the IP address of the admin computer."
                  name="ip"
                  className="form-control"
                  id="ip"
                />
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label htmlFor="userName">Till Number*</label>
                    <input
                      type="text"
                      required="required"
                      placeholder="Enter a number"
                      name="till"
                      className="form-control"
                      id="till"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label htmlFor="userName">
                      Hardware Identification Number{" "}
                    </label>
                    <input
                      type="text"
                      required="required"
                      name="mac"
                      className="form-control"
                      id="mac"
                      readOnly="readonly"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  id="save_settings"
                  type="submit"
                  className="btn btn-default btn-block waves-effect waves-light"
                  defaultValue="Save Settings"
                />
              </div>
            </div>
          </form>
          <form id="settings_form" encType="multipart/form-data">
            <input type="hidden" name="id" id="settings_id" />
            <input type="hidden" name="img" id="logo_img" />
            <input type="hidden" name="remove" id="remove_logo" />
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="userName">Store Name</label>
                  <input
                    type="text"
                    required="required"
                    name="store"
                    className="form-control"
                    id="store"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Address Line 1</label>
                  <input
                    type="text"
                    required="required"
                    name="address_one"
                    className="form-control"
                    id="address_one"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Address Line 2</label>
                  <input
                    type="text"
                    required="required"
                    name="address_two"
                    className="form-control"
                    id="address_two"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Contact Number</label>
                  <input
                    type="text"
                    name="contact"
                    className="form-control"
                    id="contact"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Vat Number</label>
                  <input
                    type="text"
                    name="tax"
                    parsley-trigger="change"
                    className="form-control"
                    id="tax"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="userName">Currency Symbol</label>
                  <input
                    type="text"
                    required="required"
                    name="symbol"
                    className="form-control"
                    id="symbol"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Vat Percentage</label>
                  <div style={{ width: "80%", float: "left" }}>
                    <input
                      type="text"
                      required="required"
                      name="percentage"
                      className="form-control"
                      id="percentage"
                    />
                  </div>
                  <div className="pull-right p-t-10"> % </div>
                </div>
                <br />
                <br />
                <div className="form-group">
                  <label>
                    <input type="checkbox" name="charge_tax" id="charge_tax" />{" "}
                    Charge Vat
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="userName">
                    <span id="rmv_logo" className="btn btn-xs btn-warning">
                      Remove
                    </span>{" "}
                    Logo{" "}
                  </label>
                  <div id="current_logo" />
                  <input type="file" name="imagename" id="logoname" />
                </div>
                <div className="form-group">
                  <label htmlFor="userName">Receipt Footer</label>
                  <textarea
                    name="footer"
                    className="form-control"
                    id="footer"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <Button
                type="submit"
                className="btn btn-default btn-block waves-effect waves-light"
              >
                Save Settings
              </Button>
            </div>
          </form>
          {/* </div>
            </div> */}
          {/* </div> */}
        </CustomModal>
      </div>
    </div>
  );
};

export default Main;
