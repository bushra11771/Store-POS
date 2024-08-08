import React from "react";

const Modal = ({
  id,
  title,
  formId,
  formFields,
  formData,
  submitButtonId,
  submitButtonText,
  isLarge = false,
  children,
}) => {
  const modalSizeClass = isLarge ? "modal-lg" : "modal-sm";

  return (
    <div id={id} className="modal fade bs-example-modal-sm" tabIndex="-1" role="dialog" aria-hidden="true" style={{ display: "none" }}>
      <div className={`modal-dialog ${modalSizeClass}`}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
            <h4 className="modal-title">
              {title}
              <img className="loading m-t-5" style={{ marginLeft: "35%" }} height="50px" src="assets/images/loading.gif" alt="loading" />
            </h4>
          </div>
          <div className="modal-body">
            <form id={formId} {...formData}>
              {formFields}
              {children}
              <input type="submit" id={submitButtonId} className="btn btn-primary btn-block waves-effect waves-light" value={submitButtonText} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
