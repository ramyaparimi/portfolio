import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
          <a href="#home" className="mr-5 px-5 text-green-300 hover:text-white">
          Home
          </a>
          <a href="#about" className="mr-5 px-5 text-green-300 hover:text-white">
          About
          </a>
          <a href="#skills" className="mr-5 px-5 text-green-300 hover:text-white">
            Skills
          </a>
          <a href="https://medium.com/@rlp.parimi" className="mr-5 px-5 text-green-300 hover:text-white">
            Blog
          </a>
          <a
            href="#contact"
            className="mr-5 px-5 text-green-300 hover:text-white">
            Contact
          </a>
          </nav>
          </div>
        </header>
      );
    }

          
      
