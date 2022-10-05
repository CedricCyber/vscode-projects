function Body(props) {
  return (
    <div className=" flex-col w-3/4 mx-auto">
      <div className=" flex justify-between pt-5 pb-5">
        <input
          onChange={props.handleChange}
          value={props.topText}
          name={props.topName}
          className="bg-purple-200 p-2 w-5/12 h-10 rounded-xl"
          type="text"
          placeholder="Caption-Top"
        ></input>
        <input
          onChange={props.handleChange}
          value={props.bottomText}
          name={props.bottomName}
          className="bg-purple-200 p-2 w-5/12 h-10 rounded-xl"
          type="text"
          placeholder="Caption-Bottom"
        ></input>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={props.handleClick}
          className="w-full h-16 rounded-xl bg-gradient-to-r from-purple-900 to-purple-600 items-center text-purple-100"
        >
          Get a new meme image
        </button>
      </div>
      <div className="text-pink-500 font-extrabold text-6xl relative">
        <h2 className="absolute top-10 left-1/2 -translate-x-1/2">
          {props.topText}
        </h2>
        <img className="w-full mt-5 mb-20" src={props.image}></img>
        <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2">
          {props.bottomText}
        </h2>
      </div>
    </div>
  );
}
export default Body;
