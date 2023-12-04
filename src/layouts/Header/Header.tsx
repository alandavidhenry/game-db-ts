import React from 'react'

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-zinc-800 p-5 shadow-lg w-full fixed">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl">GameDB</span>
      </div>
      <div className="flex flex-grow items-center">
        <div className="text-md flex-grow">
          <a href="#a" className="inline-block mt-0 text-gray-400 hover:text-white mr-4">
            Docs
          </a>
          <a href="#a" className="inline-block mt-0 text-gray-400 hover:text-white mr-4">
            Examples
          </a>
          <a href="#a" className="inline-block mt-0 text-gray-400 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a href="#a" className="inline-block text-sm px-4 py-2 border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-0">Profile Icon</a>
        </div>
      </div>
    </nav>
  )
}

export default Header;