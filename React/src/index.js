import React from "react";
import ReactDOM from "react-dom/client";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <div id="main-content">
    <img width="40px" src="./logo192.png"></img>
    <h1>Fun facts about React</h1>
    <ul>
      <li>was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);
