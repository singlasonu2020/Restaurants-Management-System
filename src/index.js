import React  from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EntryAnimation from "./AdminLoginPage";


async function Start() {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<EntryAnimation />);

}
Start();

