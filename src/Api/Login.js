import React, { useState } from "react";
import { Home } from "./Home";
import { Registration } from "./Registration";
import { Alert } from "@mui/material";

export const Login = () => {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const [register, setRegister] = useState(false);

  function handleLogin(e) {
    e.preventDefault();

    let mail = localStorage.getItem("Email").replace(/"/g, "");
    let pass = localStorage.getItem("Password").replace(/"/g, "");

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("Empty");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  function handleClicklog() {
    setRegister(true);
  }

  return (
    <div className="loginform">
      {register ? (
        <Registration />
      ) : (
        <>
          {home ? (
            <>
              <form className="log_form" onSubmit={handleLogin}>
                <h3> Login </h3>
                <h5> Enter your account login details </h5>

                <div className="log_container" id="log_container">
                  <div>
                    <input
                      type="email"
                      className="from-control"
                      placeholder="Email ID*"
                      onChange={(e) => setEmaillog(e.target.value)}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      className="from-control"
                      placeholder="Password*"
                      onChange={(e) => setPasswordlog(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="log_btn">
                    Login{" "}
                  </button>
                </div>

                {flag && (
                  <Alert severity="warning" className="alert" varient="danger">
                    Please fill correct info
                  </Alert>
                )}
              </form>
              <p className="reg_login">
                {" "}
                Don't have a account {""}{" "}
                <button onClick={handleClicklog}>Register here</button>{" "}
              </p>
            </>
          ) : (
            <Home />
          )}
        </>
      )}

      <div></div>
    </div>
  );
};
//<Home/>
