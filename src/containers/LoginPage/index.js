import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/UI/Card";
import { signin, isLoggedInUser } from "../../actions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

/**
 * @author
 * @function LoginPage
 **/

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if(!auth.authenticated){
  //     dispatch(isLoggedInUser())
  //   }
  // }, []);
  const userLogin = (e) => {
    e.preventDefault();
    if (email == "") {
      alert("Email is required");
      return;
    }
    if (password == "") {
      alert("Password is required");
      return;
    }

    dispatch(signin({ email, password }));
  };

  if (auth.authenticated) {
    return <Redirect to={`/`} />;
  }

  return (
    <Layout>
      <div className="loginContainer">
        <Card>
          <form onSubmit={userLogin} className="form">
            <strong style={{ textAlign: "center", color: "#fff", padding: 10 }}>
              Login Here
            </strong>
            <div className="form">
              <input
                name="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                style={{
                  width: "80%",
                  margin: "auto",
                  height: 30,
                  marginTop: 7,
                }}
              />

              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                style={{
                  width: "80%",
                  margin: "auto",
                  height: 30,
                  marginTop: 7,
                }}
              />
            </div>

            <div style={{ margin: "auto" }}>
              <button
                style={{
                  width: 200,
                  marginTop: 30,
                  marginBottom: 20,
                  height: 30,
                }}
              >
                Login
              </button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
