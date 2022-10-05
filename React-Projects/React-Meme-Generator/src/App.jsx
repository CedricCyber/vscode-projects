import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import React from "react";

function App() {
  const [memeImage, setMemeImage] = React.useState("");
  const [memeText, setMemeText] = React.useState({
    textTop: "",
    textBottom: "",
  });
  console.log(memeText.textTop);
  console.log(memeText.textBottom);

  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * memeData.length);
    setMemeImage(memeData[randomNum].url);
  }

  function getMemeText(event) {
    const { value, name } = event.target;
    setMemeText((prevText) => ({ ...prevText, [name]: value }));
  }

  const [memeData, setMemeData] = React.useState([]);
  // "https://api.imgflip.com/get_memes"

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then((res) =>
      res.json().then((data) => setMemeData(data.data.memes))
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <Body
        handleClick={getMemeImage}
        handleChange={getMemeText}
        image={memeImage}
        topText={memeText.textTop}
        bottomText={memeText.textBottom}
        topName="textTop"
        bottomName="textBottom"
      />
    </div>
  );
}

export default App;
