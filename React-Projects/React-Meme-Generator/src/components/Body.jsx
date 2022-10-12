function Body(props) {
  return (
    <div className=" flex-col mx-auto max-w-5xl px-10">
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
          className="w-full h-16 rounded-xl border-zinc-900 bg-gradient-to-r border-solid border-2 border-black-900 from-purple-900 to-purple-600 items-center text-purple-100 meme-button"
        >
          Get a new meme image
        </button>
      </div>
      <div className="text-pink-500 font-extrabold text-2xl md:text-5xl relative">
        <h2 className="absolute top-10 left-1/2 -translate-x-1/2">
          {props.topText}
        </h2>
        <img className="w-full rounded-xl mt-5 mb-20" src={props.image}></img>
        <h2 className="absolute bottom-10 left-1/2 -translate-x-1/2">
          {props.bottomText}
        </h2>
      </div>
    </div>
  );
}
export default Body;
