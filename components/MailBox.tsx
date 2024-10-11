import { IoIosMail } from "react-icons/io";

const MailBox = () => {
  return (
    <div className="flex justify-between items-center border-2 border-black bg-white w-full p-1 transition-shadow focus-within:shadow-lg focus-within:border-slate-500">
      <form action="/submit" className="flex w-full">
        <input
          type="text"
          id="search"
          placeholder="Enter your email here"
          className="flex-grow p-2 pl-4 text-sm focus:outline-none focus:ring-0 w-full"
        />
        <button
          type="submit"
          className="text-black hover:text-slate-500 focus:outline-none focus:ring-0 flex items-center"
        >
          <IoIosMail size={35} color="" />
        </button>
      </form>
    </div>
  );
};

export default MailBox;
