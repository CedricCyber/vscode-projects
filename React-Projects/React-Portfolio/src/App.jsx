import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Frontpage from "./components/Frontpage";
import Header from "./components/Header.jsx";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div>
      <Header />
      <Frontpage />
      <Technologies />
    </div>
  );
}
export default App;
