import React from 'react'

export default function POSView() {
    return (
        <div id="pos_view">
            <div className="row">
                <div className="col-md-4">
                    <div className="card-box" id="card-box">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-10">
                                    <select
                                        name=""
                                        id="customer"
                                        className="form-control"
                                    ></select>
                                </div>
                                <div className="col-md-2">
                                    <button
                                        data-toggle="modal"
                                        data-target="#newCustomer"
                                        className="btn btn-success"
                                    >
                                        <i className="fa fa-plus" />
                                    </button>
                                </div>
                            </div>
                            <div className="input-group m-t-5">
                                <form action="" id="searchBarCode">
                                    <input
                                        type="text"
                                        required=""
                                        id="skuCode"
                                        name="skuCode"
                                        className="form-control"
                                        placeholder="Scan barcode or type the number then hit enter"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <input type="submit" style={{ display: "none" }} />
                                </form>
                                <span className="input-group-addon" id="basic-addon2">
                                    <i className="glyphicon glyphicon-ok" />
                                </span>
                            </div>
                        </div>
                        <div>
                            <table className="table m-0" id="cartTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th width="150px">Item</th>
                                        <th width="170px">Qty</th>
                                        <th>Price</th>
                                        <th width="5px">
                                            <button
                                                onclick="$(this).cancelOrder()"
                                                className="btn btn-danger btn-xs"
                                            >
                                                <i className="fa fa-times" />
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody></tbody>
                            </table>
                        </div>
                        <hr />
                        <div className="m-t-5">
                            <div className="row">
                                <div className="col-md-3">Total Item(s)</div>
                                <div className="col-md-3">
                                    : <sapn id="total">0</sapn>
                                </div>
                                <div className="col-md-3">Price :</div>
                                <div className="col-md-3">
                                    : <span id="price">0.0</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">Discount</div>
                                <div className="col-md-3">
                                    <input
                                        className="form-control"
                                        type="number"
                                        id="inputDiscount"
                                        oninput="$(this).calculateCart();"
                                    />
                                </div>
                                <div className="col-md-3">
                                    Gross Price (inc <span id="taxInfo" />% Tax)
                                </div>
                                <div className="col-md-3">
                                    <h3 id="gross_price">0.00</h3>
                                </div>
                            </div>
                        </div>
                        <div className="button-list pull-right">
                            <button
                                onclick="$(this).submitDueOrder(3);"
                                type="button"
                                className="btn btn-info waves-effect waves-light"
                            >
                                <i className="fa fa-print" />
                            </button>
                            <button
                                onclick="$(this).cancelOrder()"
                                type="button"
                                className="btn btn-danger waves-effect waves-light"
                            >
                                <span className="btn-label">
                                    <i className="fa fa-ban" />
                                </span>
                                Cancel
                            </button>
                            <button
                                type="button"
                                id="hold"
                                className="btn btn-default waves-effect waves-light"
                            >
                                <span className="btn-label">
                                    <i className="fa fa-hand-paper-o" />
                                </span>
                                Hold
                            </button>
                            <button
                                type="button"
                                id="payButton"
                                className="btn btn-success waves-effect waves-light"
                            >
                                <span className="btn-label">
                                    <i className="fa fa-money" />
                                </span>
                                Pay
                            </button>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card-box">
                        <div className="row">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    id="search"
                                    className="form-control"
                                    placeholder="Search product by name or sku"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="" id="categories"></div>
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="parent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}