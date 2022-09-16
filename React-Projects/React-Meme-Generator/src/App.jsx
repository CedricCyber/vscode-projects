import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function plusOne() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <Header />
      <Body plusOne={plusOne} count={count} />
    </div>
  );
}

export default App;
