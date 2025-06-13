import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          MovieSearch
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
