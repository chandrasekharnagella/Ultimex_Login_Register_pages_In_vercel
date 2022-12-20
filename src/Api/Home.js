import React, { useEffect, useState } from "react";

export const Home = () => {
  const [f_name, setFname] = useState([]);
  const [u_name, setUname] = useState([]);
  const [country, setCountry] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [referral, setReferral] = useState([]);

  useEffect(() => {
    const f_name = JSON.parse(localStorage.getItem("FirstName"));
    const u_name = JSON.parse(localStorage.getItem("UserName"));
    const country = JSON.parse(localStorage.getItem("Country"));
    const phone = JSON.parse(localStorage.getItem("Phone"));
    const email = JSON.parse(localStorage.getItem("Email"));
    const password = JSON.parse(localStorage.getItem("Password"));
    const referral = JSON.parse(localStorage.getItem("Referral"));

    setFname(f_name);
    setUname(u_name);
    setCountry(country);
    setPhone(phone);
    setEmail(email);
    setPassword(password);
    setReferral(referral);
  }, []);

  return (
    <div>
      <table>
        <tr>
          <td>First Name:{f_name},</td>
          <td>User Name:{u_name},</td>
          <td>Country:{country},</td>
          <td>Mobile Number:{phone},</td>
          <td>Email:{email},</td>
          <td>Password:{password},</td>
          <td>Referral:{referral},</td>
        </tr>
      </table>
    </div>
  );
};
