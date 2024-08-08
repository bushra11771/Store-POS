import React from "react";
import Modal from "./Modal";

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
