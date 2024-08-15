import React from "react";



<CustomModal modalIsOpen={isOpenPaymentModal} footer={<button
  type="button"
  onclick="$(this).submitDueOrder(0);"
  className="btn btn-primary btn-block btn-lg waves-effect waves-light"
>
  Hold Order
</button>} >
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
<CustomModal title="Project" modalIsOpen={isOpenPaymentModal} toggle={() => setIsOpenPaymentModal(!isOpenPaymentModal)} footer={<div className="row">
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
</div>}>
  
</CustomModal>
{/* /.modal-content */}
{/* /.modal-dialog */}
{/* /.modal */}

<CustomModal title="Payment" modalIsOpen={isOpenPaymentModal} toggle={() => setIsOpenPaymentModal(!isOpenPaymentModal)} footer={<div className="row">
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
</div>}>
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
      {/* <div className="row">
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
      </div> */}
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












const NewProductModal = () => {
  return (
    <Modal
      id="newProduct"
      title="Product"
      formId="saveProduct"
      submitButtonId="submitProduct"
      submitButtonText="Save"
      formFields={
        <>
          <input type="hidden" name="id" id="product_id" />
          <input type="hidden" name="img" id="img" />
          <input type="hidden" name="remove" id="remove_img" />
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select name="category" className="form-control" id="category"></select>
          </div>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input type="text" name="name" required placeholder="Enter a product name" className="form-control" id="productName" />
          </div>
          <div className="form-group">
            <label htmlFor="product_price">Price</label>
            <input type="text" name="price" required placeholder="Price" className="form-control" id="product_price" />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Stock</label>
            <input type="text" name="quantity" placeholder="Available stock" className="form-control" id="quantity" />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" name="stock" id="stock" style={{ maxWidth: "30px", float: "left" }} /> Disable stock check
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="imagename">
              <span id="rmv_img" className="btn btn-xs btn-warning">Remove</span> Picture
            </label>
            <div id="current_img"></div>
            <input type="file" name="imagename" id="imagename" />
          </div>
        </>
      }
    />
  );
};

export default NewProductModal;
