function Article(props) {
  return (
    <div className="main-container">
      <div className="article-container">
        <img className="article-left-column" src={props.img}></img>
        <div className="article-right-column">
          <div className="article-country-container">
            <img className="location-logo inline" src={props.logo}></img>
            <p className="inline">{props.title}</p>
            <a className="inline" target={"_blank"} href={props.googleMapsUrl}>
              Google maps link
            </a>
          </div>
          <h2 className="article-location">{props.location}</h2>
          <p className="article-date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="article-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Article;
