import { useState } from "react";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black w-full h- h-23">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-23">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-[40px] w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-white text-[22px] hover:text-green-400 ">
              Home
            </a>
            <a href="#" className="text-white text-[22px] hover:text-green-400 pl-3">
              About
            </a>
            <a href="#" className="text-white text-[22px] hover:text-green-400 pl-3">
              Courses
            </a>
            <a href="#" className="text-white text-[22px] hover:text-green-400 pl-3">
              Blog
            </a>
            <a href="#" className="text-white text-[22px] hover:text-green-400 pl-3">
              Contact Us
            </a>
            <a href="#" className="text-white text-[22px] hover:text-green-400 pl-3">
              FAQ
            </a>
          </div>

          {/* Login/Register (Desktop) */}
          <div className="hidden md:flex  border-2 border-green-500 h-13 items-center justify-center w-50 px-4 py-2 rounded-md">
            <a href="#" className="text-white text-[20px] hover:text-green-500">
              Login
            </a>
            <span className="mx-2 text-white ">|</span>
            <a href="#" className="text-white text-[20px] hover:text-green-500">
              Register
            </a>
          </div>

          {/* Mobile Menu Button (Without Icons) */}
          <div className="md:hidden flex items-center">
            <button
              className="text-white text-lg border border-white px-3 py-1 rounded"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white space-y-4 py-4 px-6">
          <a href="#" className="block hover:text-green-400">
            Home
          </a>
          <a href="#" className="block hover:text-green-400">
            About
          </a>
          <a href="#" className="block hover:text-green-400">
            Courses
          </a>
          <a href="#" className="block hover:text-green-400">
            Blog
          </a>
          <a href="#" className="block hover:text-green-400">
            Contact Us
          </a>
          <a href="#" className="block hover:text-green-400">
            FAQ
          </a>
          <div className="border-t border-gray-700 pt-4">
            <a href="#" className="block hover:text-green-400">
              Login
            </a>
            <a href="#" className="block hover:text-green-400">
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
