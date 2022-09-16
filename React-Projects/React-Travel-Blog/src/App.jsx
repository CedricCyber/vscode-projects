import "./App.css";
import Header from "./components/Header";
import data from "./data";
import Article from "./components/Article";

function App() {
  const location = data.map((location, index) => {
    return (
      <Article
        key={index}
        img={location.imageUrl}
        googleMapsUrl={location.googleMapsUrl}
        location={location.location}
        startDate={location.startDate}
        endDate={location.endDate}
        description={location.description}
        logo={location.logo}
        title={location.title}
      />
    );
  });

  return (
    <div className="app-container">
      <Header />
      {location}
    </div>
  );
}

export default App;
