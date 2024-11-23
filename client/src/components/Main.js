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

import { Button, FormGroup, Input, Label, Table } from "reactstrap";

const Main = () => {
  const location = useLocation();
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);

  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [isOpenSettingsModal, setIsOpenSettingsModal] = useState(false);
  const [isOpenNewCategory, setIsOpenNewCategory] = useState(false);
  const [isOpenProductList, setIsOpenProductList] = useState(false);
  const [isOpenCategoryList, setIsOpenCategoryList] = useState(false);
  const [isOpenCustomerOders, setIsOpenCustomerOders] = useState(false);
  const [isOpenOpenTabs, setIsOpenOpenTabs] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);
  const [isOpenUsersList, setIsOpenUsersList] = useState(false);

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
                <Button
                  type="button"
                  className="btn btn-default waves-effect waves-light"
                  onClick={() => setIsOpenProductList(true)}
                >
                  <span className="btn-label">
                    <FaBarcode />
                  </span>
                  Products
                </Button>
                <Button
                  onClick={() => setIsOpenProductModal(true)}
                  type="button"
                  className="btn btn-warning waves-effect waves-light"
                >
                  <FaPlus />
                </Button>
              </div>
              <div className="btn-group p_two">
                <Button
                  onClick={() => setIsOpenCategoryList(true)}
                  type="button"
                  className="btn btn-default waves-effect waves-light"
                >
                  <span className="btn-label">
                    <FaTh />{" "}
                  </span>{" "}
                  Categories
                </Button>
                <Button
                  type="button"
                  className="btn btn-warning waves-effect waves-light"
                  onClick={() => {
                    console.log("categories selected");

                    setIsOpenNewCategory(true);
                  }}
                >
                  <i className="fa fa-plus" />
                </Button>
              </div>
              <Button
                id="viewRefOrders"
                data-toggle="modal"
                data-target="#holdOrdersModal"
                type="button"
                className="btn btn-info waves-effect waves-light"
                onClick={() => setIsOpenOpenTabs(true)}
              >
                <span className="btn-label">
                  <i className="fa fa-shopping-basket" />{" "}
                </span>{" "}
                Open Tabs
              </Button>
              <Button
                id="viewCustomerOrders"
                data-toggle="modal"
                data-target="#customerModal"
                type="button"
                onClick={() => setIsOpenCustomerOders(true)}
                className="btn btn-info waves-effect waves-light"
              >
                <span className="btn-label">
                  <FaUser />{" "}
                </span>{" "}
                Customer Orders
              </Button>
            </div>
            <div className="button-list pull-right m-t-15 m-l-10">
              <Button
                type="button"
                className="btn btn-default waves-effect waves-light p_five"
                onClick={() => setIsOpenSettingsModal(true)}
              >
                <IoSettings />
              </Button>
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
                <Button
                  id="usersModal"
                  type="button"
                  onClick={() => setIsOpenUsersList(!isOpenUsersList)}
                  className="btn btn-default waves-effect waves-light"
                >
                  <span className="btn-label">
                    <FaUser />
                  </span>{" "}
                  Users
                </Button>
                <Button
                  data-toggle="modal"
                  type="button"
                  className="btn btn-gray waves-effect waves-light"
                  onClick={() => setIsOpenUser(!isOpenUser)}
                >
                  <i className="fa fa-plus" />
                </Button>
              </div>
              <Button
                type="button"
                className="btn btn-light waves-effect waves-light"
                id="cashier"
              >
                <span className="btn-label">
                  <FaUser />
                </span>{" "}
                {/* <span id="loggedin-user"></span> */}
              </Button>
              <Button
                id="log-out"
                type="button"
                className="btn btn-warning waves-effect waves-light"
              >
                <MdLogout />
              </Button>
              {/* <Button
                id="quit"
                type="button"
                className="btn btn-danger waves-effect waves-light"
              >
                <i className="glyphicon glyphicon-off" />
              </Button> */}
            </div>
          </div>
        </div>
        <br />
        <Outlet />
        <CustomModal
          modalIsOpen={isOpenPaymentModal}
          footer={
            <Button
              type="button"
              onclick="$(this).submitDueOrder(0);"
              className="btn btn-primary btn-block btn-lg waves-effect waves-light"
            >
              Hold Order
            </Button>
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
              <Button
                onclick="$(this).go(1,true);"
                className="btn btn-success btn-lg btn-block"
              >
                1
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(2,true);"
                className="btn btn-success btn-lg btn-block"
              >
                2
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(3,true);"
                className="btn btn-success btn-lg btn-block"
              >
                3
              </Button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <Button
                onclick="$(this).go(4,true);"
                className="btn btn-success btn-lg btn-block"
              >
                4
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(5,true);"
                className="btn btn-success btn-lg btn-block"
              >
                5
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(6,true);"
                className="btn btn-success btn-lg btn-block"
              >
                6
              </Button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <Button
                onclick="$(this).go(7,true);"
                className="btn btn-success btn-lg btn-block"
              >
                7
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(8,true);"
                className="btn btn-success btn-lg btn-block"
              >
                8
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(9,true);"
                className="btn btn-success btn-lg btn-block"
              >
                9
              </Button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <Button
                onclick="$('#refNumber').val($('#refNumber').val().substr(0,$('#refNumber').val().length -1))"
                className="btn btn-success btn-lg btn-block"
              >
                ⌫
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$(this).go(0,true);"
                className="btn btn-success btn-lg btn-block"
              >
                0
              </Button>
            </div>
            <div className="col-md-4">
              <Button
                onclick="$('#refNumber').val('')"
                className="btn btn-success btn-lg btn-block"
              >
                AC
              </Button>
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
                <Button
                  type="button"
                  id="confirmPayment"
                  className="btn btn-default btn-block btn-lg waves-effect waves-light"
                >
                  Confirm Payment
                </Button>
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
                      <Button
                        onclick="$(this).go(1,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        1
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(2,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        2
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(3,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        3
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(4,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        4
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(5,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        5
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(6,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        6
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(7,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        7
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(8,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        8
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(9,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        9
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$('#payment').val($('#payment').val().substr(0,$('#payment').val().length -1));$(this).calculateChange();"
                        className="btn btn-success btn-lg btn-block"
                      >
                        ⌫
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(0,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        0
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).digits()"
                        className="btn btn-success btn-lg btn-block"
                      >
                        .
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                <div className="col-md-3">
                  <Button
                    onclick="$('#payment').val('');$(this).calculateChange();"
                    className="btn btn-danger btn-block btn-lg"
                  >
                    AC
                  </Button>
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
                <Button
                  type="button"
                  id="confirmPayment"
                  className="btn btn-default btn-block btn-lg waves-effect waves-light"
                >
                  Confirm Payment
                </Button>
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
                      <Button
                        onclick="$(this).go(1,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        1
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(2,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        2
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(3,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        3
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(4,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        4
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(5,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        5
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(6,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        6
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(7,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        7
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(8,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        8
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(9,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        9
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-3">
                      <Button
                        onclick="$('#payment').val($('#payment').val().substr(0,$('#payment').val().length -1));$(this).calculateChange();"
                        className="btn btn-success btn-lg btn-block"
                      >
                        ⌫
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).go(0,false);"
                        className="btn btn-success btn-lg btn-block"
                      >
                        0
                      </Button>
                    </div>
                    <div className="col-md-3">
                      <Button
                        onclick="$(this).digits()"
                        className="btn btn-success btn-lg btn-block"
                      >
                        .
                      </Button>
                    </div>
                    <div className="col-md-3" />
                  </div>
                </div>
                <div className="col-md-3">
                  <Button
                    onclick="$('#payment').val('');$(this).calculateChange();"
                    className="btn btn-danger btn-block btn-lg"
                  >
                    AC
                  </Button>
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
        <CustomModal modalIsOpen={isOpenPaymentModal}>
          <h4 className="modal-title" id="mySmallModalLabel">
            Products
            <img
              className="loading m-t-5"
              style={{ marginLeft: "35%", height: "50px" }}
              src="assets/images/loading.gif"
              alt=""
            />
            <Button className="btn btn-white pull-right" id="print_list">
              Download
            </Button>
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
          {/* </div> */}
        </CustomModal>
        {/* Categories list */}
        <CustomModal
          title={"Categories"}
          toggle={() => setIsOpenCategoryList(!isOpenCategoryList)}
          modalIsOpen={isOpenCategoryList}
        >
          <Table responsive class="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="category_list"></tbody>
          </Table>
        </CustomModal>
        {/* newCustomer */}
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
                <Button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </Button>
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
                  <FormGroup>
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
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="userName">Customer Phone</label>
                    <input
                      type="text"
                      name="phone"
                      parsley-trigger="change"
                      placeholder="Enter Phone number"
                      className="form-control"
                      id="phoneNumber"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="userName">Customer Email</label>
                    <input
                      type="email"
                      name="email"
                      parsley-trigger="change"
                      placeholder="Enter email address"
                      className="form-control"
                      id="emailAddress"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="userName">Customer Address</label>
                    <input
                      type="text"
                      name="address"
                      parsley-trigger="change"
                      placeholder="Enter address"
                      className="form-control"
                      id="userAddress"
                    />
                  </FormGroup>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block waves-effect waves-light"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* newProduct */}
        <CustomModal
          toggle={() => setIsOpenProductModal(!isOpenProductModal)}
          title={"Add Product"}
          size="lg"
          modalIsOpen={isOpenProductModal}
        >
          <form id="saveProduct" encType="multipart/form-data">
            <input type="hidden" name="id" id="product_id" />
            <input type="hidden" name="img" id="img" />
            <input type="hidden" name="remove" id="remove_img" />
            <FormGroup>
              <Label>Category</Label>
              <Input type="select" placeholder="Enter Category">
                <option>1</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="userName">Product Name</Label>
              <Input
                type="text"
                required="required"
                name="name"
                placeholder="Enter a product name"
                id="productName"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="userName">Price</Label>
              <Input
                type="text"
                required="required"
                name="price"
                placeholder="Price"
                className="form-control"
                id="product_price"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="userName">Stock</Label>
              <Input
                type="text"
                name="quantity"
                placeholder="Available stock"
                className="form-control"
                id="quantity"
              />
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" name="stock" id="stock" />{" "}
              <Label check>Disable stock check</Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="userName">
                <span id="rmv_img" className="btn btn-xs btn-warning">
                  Remove
                </span>{" "}
                Picture{" "}
              </Label>
              <div id="current_img" />
              <Input type="file" name="imagename" id="imagename" />
            </FormGroup>
            <Button
              block
              type="submit"
              id="submitProduct"
              className="btn btn-primary btn-block waves-effect waves-light"
            >
              Submit
            </Button>
          </form>
        </CustomModal>
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
            <FormGroup>
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
            </FormGroup>
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
        <CustomModal
          header={
            <div className="modal-header justify-content-between">
              <h4 className="modal-title" id="mySmallModalLabel">
                Products
                {/* <img
                  className="loading m-t-5"
                  style={{ marginLeft: "35%" }}
                  height="50px"
                  src="assets/images/loading.gif"
                  alt=""
                /> */}
              </h4>
              <div>
                <Button className="btn btn-white me-4">Download</Button>
                <Button
                  className="btn btn-white text-xl"
                  onClick={() => setIsOpenProductList(false)}
                >
                  X
                </Button>
              </div>
            </div>
          }
          size="xl"
          modalIsOpen={isOpenProductList}
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
            <tbody />
          </Table>
        </CustomModal>
        {/* Users */}

        <CustomModal
          modalIsOpen={isOpenUsersList}
          title="Users"
          toggle={() => setIsOpenUsersList(!isOpenUsersList)}
          size="lg"
        >
          <Table responsive className="table table-bordered" id="userList">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="user_list" />
          </Table>
        </CustomModal>
        {/* Categories
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
                <Button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </Button>
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
        </div> */}
        {/* user Modal */}
        <CustomModal
          title="Account Infomarion"
          toggle={() => setIsOpenUser(!isOpenUser)}
          modalIsOpen={isOpenUser}
        >
          <form id="saveUser" data-parsley-validate="">
            <FormGroup>
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
            </FormGroup>
            <FormGroup>
              <label htmlFor="userName">Username*</label>
              <input
                type="text"
                name="username"
                parsley-trigger="change"
                placeholder="Login Username"
                className="form-control"
                id="username"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="userName">Password</label>
              <input
                type="password"
                name="password"
                parsley-trigger="change"
                placeholder="Password"
                className="form-control"
                id="password"
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="userName">Repeat Password</label>
              <input
                type="password"
                name="pass"
                parsley-trigger="change"
                placeholder="Repeat"
                className="form-control"
                id="pass"
              />
            </FormGroup>
            <div className="">
              <h4 style={{ fontSize: 22, marginTop: 20 }}>Permissions</h4>
              <hr />
              <FormGroup>
                <span>
                  <Input
                    type="checkbox"
                    name="perm_products"
                    id="perm_products"
                  />{" "}
                  Manage Products and Stock{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <span>
                  <Input
                    type="checkbox"
                    name="perm_categories"
                    id="perm_categories"
                  />{" "}
                  Manage Product Categories{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <span>
                  <Input
                    type="checkbox"
                    name="perm_transactions"
                    id="perm_transactions"
                  />{" "}
                  View Transactions{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <span>
                  <Input type="checkbox" name="perm_users" id="perm_users" />{" "}
                  Manage Users and Permissions{" "}
                </span>
              </FormGroup>
              <FormGroup>
                <span>
                  <Input
                    type="checkbox"
                    name="perm_settings"
                    id="perm_settings"
                  />{" "}
                  Manage Settings{" "}
                </span>
              </FormGroup>
            </div>
            <input
              type="submit"
              className="btn btn-primary btn-block waves-effect waves-light"
            />
          </form>
        </CustomModal>
        {/* holdOrdersModal */}
        <CustomModal
          modalIsOpen={isOpenOpenTabs}
          size="lg"
          toggle={() => setIsOpenOpenTabs(!isOpenOpenTabs)}
          title="Open Orders"
        >
          <Input
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
          ></div>
        </CustomModal>
        {/* customerModal */}
        <CustomModal
          modalIsOpen={isOpenCustomerOders}
          size="lg"
          title="Customer Orders"
          toggle={() => setIsOpenCustomerOders(!isOpenCustomerOders)}
        >
          <Input
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
          ></div>
        </CustomModal>
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
                <Button
                  className="btn btn-sm btn-default"
                  onclick="$(this).print()"
                >
                  Print
                </Button>{" "}
                <br />{" "}
                <Button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </Button>
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
          <FormGroup>
            <label htmlFor="app">Application</label>
            <Input type="select" name="app" id="app" className="form-control">
              <option>Standalone Point of Sale</option>
              <option>Network Point of Sale Terminal</option>
              <option>Network Point of Sale Server</option>
            </Input>
          </FormGroup>
          <form id="net_settings_form">
            <div className="row">
              <FormGroup>
                <Label htmlFor="userName">Server IP Address*</Label>
                <Input
                  type="text"
                  required="required"
                  placeholder="Enter the IP address of the admin computer."
                  name="ip"
                  className="form-control"
                  id="ip"
                />
              </FormGroup>
              <div className="row">
                <div className="col-md-5">
                  <FormGroup>
                    <Label htmlFor="userName">Till Number*</Label>
                    <Input
                      type="text"
                      required="required"
                      placeholder="Enter a number"
                      name="till"
                      className="form-control"
                      id="till"
                    />
                  </FormGroup>
                </div>
                <div className="col-md-7">
                  <FormGroup>
                    <Label htmlFor="userName">
                      Hardware Identification Number{" "}
                    </Label>
                    <Input
                      type="text"
                      required="required"
                      name="mac"
                      className="form-control"
                      id="mac"
                      readOnly="readonly"
                    />
                  </FormGroup>
                </div>
              </div>
              <FormGroup>
                <Button
                  block
                  type="submit"
                  className="btn btn-default btn-block waves-effect waves-light"
                >
                  Save Settings
                </Button>
              </FormGroup>
            </div>
          </form>
          <form id="settings_form" encType="multipart/form-data">
            <input type="hidden" name="id" id="settings_id" />
            <input type="hidden" name="img" id="logo_img" />
            <input type="hidden" name="remove" id="remove_logo" />
            <div className="row">
              <div className="col-md-6">
                <FormGroup>
                  <label htmlFor="userName">Store Name</label>
                  <input
                    type="text"
                    required="required"
                    name="store"
                    className="form-control"
                    id="store"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">Address Line 1</label>
                  <input
                    type="text"
                    required="required"
                    name="address_one"
                    className="form-control"
                    id="address_one"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">Address Line 2</label>
                  <input
                    type="text"
                    required="required"
                    name="address_two"
                    className="form-control"
                    id="address_two"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">Contact Number</label>
                  <input
                    type="text"
                    name="contact"
                    className="form-control"
                    id="contact"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">Vat Number</label>
                  <input
                    type="text"
                    name="tax"
                    parsley-trigger="change"
                    className="form-control"
                    id="tax"
                  />
                </FormGroup>
              </div>
              <div className="col-md-6">
                <FormGroup>
                  <label htmlFor="userName">Currency Symbol</label>
                  <input
                    type="text"
                    required="required"
                    name="symbol"
                    className="form-control"
                    id="symbol"
                  />
                </FormGroup>
                <FormGroup>
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
                </FormGroup>
                <br />
                <br />
                <FormGroup>
                  <label>
                    <input type="checkbox" name="charge_tax" id="charge_tax" />{" "}
                    Charge Vat
                  </label>
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">
                    <span id="rmv_logo" className="btn btn-xs btn-warning">
                      Remove
                    </span>{" "}
                    Logo{" "}
                  </label>
                  <div id="current_logo" />
                  <input type="file" name="imagename" id="logoname" />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="userName">Receipt Footer</label>
                  <textarea
                    name="footer"
                    className="form-control"
                    id="footer"
                    defaultValue={""}
                  />
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Button
                type="submit"
                className="btn btn-default btn-block waves-effect waves-light"
              >
                Save Settings
              </Button>
            </FormGroup>
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
