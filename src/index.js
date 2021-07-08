import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FirestoreProvider } from "@react-firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./components/App";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

ReactDOM.render(
  <FirestoreProvider firebase={firebase} {...config}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirestoreProvider>
  ,
  document.getElementById("root")
);
