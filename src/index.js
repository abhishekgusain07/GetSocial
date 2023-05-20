import { store } from "./app/store";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const firebaseApp = {
   apiKey: "AIzaSyAhm8U8f1Lxsa1w-cPf_bkBzvaFBSSr6NA",
  authDomain: "socialmediaapp-fc713.firebaseapp.com",
  projectId: "socialmediaapp-fc713",
  storageBucket: "socialize-de543.appspot.com",
  messagingSenderId: "212134742264",
  appId: "1:212134742264:web:55263c267968940731d30d",
  measurementId: "G-L1B3Y241SJ"
 }; 

export const app = initializeApp(firebaseApp);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore();
export const auth = getAuth();

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App />
         </BrowserRouter>
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
