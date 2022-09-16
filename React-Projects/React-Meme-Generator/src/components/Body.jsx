function Body(props) {
  return (
    <div className=" flex-col mx-16">
      <div className=" flex justify-between pt-10 pb-5">
        <input
          className="bg-purple-200 p-2 h-10 rounded-xl"
          type="text"
          placeholder="Caption-Top"
        ></input>
        <input
          className="bg-purple-200 p-2 h-10 rounded-xl"
          type="text"
          placeholder="Caption-Bottom"
        ></input>
      </div>
      <div className="flex justify-center ">
        <button
          onClick={props.plusOne}
          className="w-full h-16 rounded-xl bg-gradient-to-r from-purple-900 to-purple-600 items-center text-purple-100"
        >
          Get a new meme image
        </button>
      </div>
      <p>{props.count}</p>
      <img></img>
    </div>
  );
}
export default Body;
