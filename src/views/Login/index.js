import React from 'react'

function Login() {
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
                <form id="account">
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
                        <input
                            type="submit"
                            className="btn btn-block btn-default"
                            defaultValue="Login"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login