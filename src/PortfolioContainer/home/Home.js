import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Triangle } from "react-loader-spinner";
import "./Home.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setTimeout(() => setSpinner(true), 1500);
  }, []);

  return !spinner ? (
    <div
      id="loader"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Triangle color="#000000" className="m-auto" height={80} width={80} />
    </div>
  ) : (
    <div style={{ display: "block" }} className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}
