import React from 'react'

export default function TransactionsView() {
    return (
        <div id="transactions_view">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-box">
                        <div className="row">
                            <h3 className="col-md-2">Transactions</h3>
                            <div className="col-md-1">
                                <span>Till</span>
                                <select id="tills" className="form-control"></select>
                            </div>
                            <div className="col-md-2">
                                <span>Cashier</span>
                                <select id="users" className="form-control"></select>
                            </div>
                            <div className="col-md-1">
                                <span>Status</span>
                                <select id="status" className="form-control status">
                                    <option value={1}>Paid</option>
                                    <option value={0}>Unpaid</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <span style={{ width: "100%" }}>Date</span>
                                <div id="reportrange">
                                    <i className="fa fa-calendar" />
                                    &nbsp;
                                    <span /> <i className="fa fa-caret-down" />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-8" id="productSales">
                                        <h4>Products</h4>
                                        <hr />
                                        <table
                                            className="table tablesaw-enhanced"
                                            id="productsSold"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Sold</th>
                                                    <th>Available</th>
                                                    <th>Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody id="product_sales" />
                                        </table>
                                    </div>
                                    <div className="col-md-4" id="totals">
                                        <h4>Total</h4>
                                        <hr />
                                        <div id="total_sales" className="btn-success">
                                            <h5>SALES</h5>
                                            <div id="counter">0</div>
                                        </div>
                                        <div id="total_transactions" className="btn-warning">
                                            <h5>TRANSACTIONS</h5>
                                            <div id="counter">0</div>
                                        </div>
                                        <div id="total_items" className="btn-info">
                                            <h5>ITEMS</h5>
                                            <div id="counter">0</div>
                                        </div>
                                        <div id="total_products" className="btn-default">
                                            <h5>PRODUCTS</h5>
                                            <div id="counter">0</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <table
                                    className="table tablesaw-enhanced"
                                    id="transactionList"
                                >
                                    <thead>
                                        <tr>
                                            <th>Invoice</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Paid</th>
                                            <th>Change</th>
                                            <th>Method</th>
                                            <th>Till</th>
                                            <th>Cashier</th>
                                            <th>View</th>
                                        </tr>
                                    </thead>
                                    <tbody id="transaction_list" />
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}