import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="flex justify-between items-center border-2 border-black w-full p-1 transition-shadow focus-within:shadow-lg focus-within:border-slate-500">
      <form action="/submit" className="flex w-full">
        <input
          type="text"
          id="search"
          placeholder="Search for something..."
          className="flex-grow p-2 pl-4 text-sm focus:outline-none focus:ring-0 w-full"
        />
        <button
          type="submit"
          className="p-2 text-black hover:text-slate-500 focus:outline-none focus:ring-0 flex items-center"
        >
          <IoIosSearch size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
