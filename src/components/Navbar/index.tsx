import { useState } from "react";
import useUserStore from "../../store/useUserStore";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useUserStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">Logo</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Home
            </button>
            <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
              About
            </button>
            <button className="text-white px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </button>
            {isAuthenticated && (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full text-lg font-bold"
                >
                  {user ? getInitial(user.name) : ""}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </button>
            <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </button>
            <button className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </button>
            {isAuthenticated && (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full text-lg font-bold"
                >
                  {user ? getInitial(user.name) : ""}
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
