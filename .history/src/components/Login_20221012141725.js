import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";

import { firebase } from "../firebase";
import { auth } from "../firebase";

import providerGoogle from "firebase/auth";
import providerFacebook from "firebase/auth";


const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Inichat !</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase..GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
