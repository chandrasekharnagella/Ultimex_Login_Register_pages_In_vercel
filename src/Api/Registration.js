import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { Alert } from "@mui/material";

export const Registration = () => {
  const [fname, setFname] = useState("");
  const [uname, setUname] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referral, setReferral] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !fname ||
      !uname ||
      !phone ||
      !country ||
      !email ||
      !password ||
      !referral
    ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("FirstName", JSON.stringify(fname));
      localStorage.setItem("UserName", JSON.stringify(uname));
      localStorage.setItem("Country", JSON.stringify(country));
      localStorage.setItem("Phone", JSON.stringify(phone));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Referral", JSON.stringify(referral));

      console.log("saved in local storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="reg_container">
      {login ? (
        <form className="reg_form" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <h5> Create your company accounts </h5>

          <div className="form-group">
            <div>
              <input
                type="text"
                className="from-control"
                placeholder="Full Name*"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="from-control"
                placeholder="User Name*"
                onChange={(e) => setUname(e.target.value)}
              />
            </div>
            {/* <div>
              <select onChange={(e) => setCountry(e.target.value)}>
                <option>Select country*</option>
                <option>India</option>
              </select>
            </div> */}

            <div>
              <input
                type="text"
                className="from-control"
                placeholder="Select Country*"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div>
              <input
                type="phone"
                className="from-control"
                placeholder="Mobile Number*"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                className="from-control"
                placeholder="Email ID*"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                className="from-control"
                placeholder="Password*"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                className="from-control"
                placeholder="Referral ID"
                onChange={(e) => setReferral(e.target.value)}
              />
            </div>

            <button type="submit" className="reg_btn">
              {" "}
              Register{" "}
            </button>

            <p>
              {" "}
              Already Registered ? {""}{" "}
              <button onClick={handleClick}>Login</button>{" "}
            </p>

            {flag && (
              <Alert
                className="reg_alert"
                color="primary"
                severity="warning"
                varient="danger"
              >
                {" "}
                Please fill every field{" "}
              </Alert>
            )}
          </div>
          {items}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
};
