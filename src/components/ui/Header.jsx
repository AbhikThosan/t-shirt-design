import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-100 shadow-md px-6 py-4 sticky top-0 z-10">
      <Link
        to="/"
        className="text-3xl font-extrabold text-blue-600 tracking-wide flex items-center"
      >
        <span className="bg-gradient-to-r from-blue-500 to-green-400 text-transparent bg-clip-text">
          RF
        </span>
      </Link>

      <div>
        <ul className="flex items-center gap-6">
          <li className="relative">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Design
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/orders"
              className="text-gray-700 hover:text-blue-600 text-lg font-medium relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
