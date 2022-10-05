function Header() {
  return (
    <div className="p-6 flex flex-wrap-reverse justify-center sm:justify-between bg-gradient-to-r from-purple-900 to-purple-600 items-center text-purple-100 text-2xl ">
      <div className="flex items-center">
        <img className="w-20" src="/troll-face.png"></img>
        <h1 className="ml-3">Meme Generator</h1>
      </div>
      <div className="flex items-center">
        <h2></h2>
        <a href="https://tailwindcss.com/" target="_blank">
          <img
            className="w-20 drop-shadow-lg animate-pulse cursor-pointer"
            src="tailwind.png"
          ></img>
        </a>
        <a href="https://vitejs.dev/" target="_blank">
          <img
            className="w-20 drop-shadow-lg animate-bounce cursor-pointer"
            src="/vite.svg"
          ></img>
        </a>
        <a href="https://reactjs.org/" target="_blank">
          <img
            className="w-20 drop-shadow-lg animate-spin cursor-pointer"
            src="/react.svg"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
