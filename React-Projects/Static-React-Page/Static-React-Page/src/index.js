import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PageFooter from "./PageFooter.js";
import PageHeader from "./PageHeader.js";
import PageList from "./PageList.js";
import PageNav from "./PageNav.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(navbar, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);

function Page() {
  return (
    <div>
      <div className="flex space-between align-center">
        <PageHeader />
        <PageNav />
      </div>
      <PageList />
      <PageFooter />
    </div>
  );
}
root.render(<Page />);
