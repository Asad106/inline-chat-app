import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import { Provider } from "react-redux";
import store from "./store";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWlJTXp7Q4Tye5ms_SJNpJ1FzVttUfmXw",
  authDomain: "chat-app-b659d.firebaseapp.com",
  projectId: "chat-app-b659d",
  storageBucket: "chat-app-b659d.appspot.com",
  messagingSenderId: "830833753710",
  appId: "1:830833753710:web:f1ffbf94d2030c0783f07f",
};
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
