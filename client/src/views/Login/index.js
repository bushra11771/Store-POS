import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigation("/pos");
    // make API call to authenticate user
  };
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
      }}
    >
      <div id="load" style={{ margin: "0px" }}>
        <form id="account" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-default">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
